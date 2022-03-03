import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/chatContent.module.css";
import { v4 as uuidv4 } from "uuid";
import ChatItem from "./ChatItem";
import { API, graphqlOperation, Analytics } from "aws-amplify";
import { updateChat } from "../../src/graphql/mutations";
import { getMessages } from "../../src/graphql/queries";
import { onUpdateMsg } from "../../src/graphql/subscriptions";
import { useSelector, useDispatch } from "react-redux";
import { getUsersChats } from "../../store/actions/chatsAction";
import Loader from "../loader/loader";
import Alert from "../alert/alert";
import axios from "axios";
export default function ChatContent({ recievername, roomId }) {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSend, setIsSend] = useState(false);
  const [err, setErr] = useState("");
  const userChats = useSelector((state) => state.chatsReducer);
  const reduxUser = useSelector((state) => state.userReducer.getUser);
  const senderId = reduxUser?.attributes?.sub;
  const sendername = reduxUser?.attributes?.name;
  const chatRoom = userChats?.currentRoomId;
  const contentRef = useRef();
  async function fetchMessages() {
    if (chatRoom) {
      try {
        const isChatUserMsgs = await API.graphql(
          graphqlOperation(getMessages, {
            id: roomId ? roomId : roomId === undefined ? chatRoom : chatRoom,
          })
        );
        dispatch(
          getUsersChats({
            isLoading: false,
          })
        );
        setMessages(isChatUserMsgs.data.getMessages);
      } catch (e) {
        return;
      }
    } else
      dispatch(
        getUsersChats({
          isLoading: false,
        })
      );
  }
  useEffect(() => {
    if (userChats?.isLoading) {
      setMessages([]);
      fetchMessages();
    }
  }, [userChats?.isLoading]);

  useEffect(() => {
    contentRef?.current?.scrollTo({
      top: contentRef?.current?.scrollHeight,
      left: 0,
    });
  }, [messages]);
  async function sendEmail() {
    try {
      const res = await axios({
        method: "POST",
        url: " https://k9lsxp7jke.execute-api.us-east-1.amazonaws.com/dev/sendEmail",
        data: {
          senderName: reduxUser.attributes.name,
          message: msg,
          receiverEmail: userChats.currentRecieverEmail,
        },
      });
      console.log("response", res);
    } catch (e) {
      console.log("err", e);
    }
  }
  let concatName = userChats.currentRecieverName
    ? userChats.currentRecieverName?.concat("-", sendername)
    : recievername?.concat("-", sendername);
  let splitName = concatName?.split("-");
  let sortName = splitName?.sort();
  let joinName = sortName?.join("_");
  let joinId = userChats?.currentRecieverId?.concat("_", senderId);
  let chatRoomID = joinName?.concat("_", joinId);
  let chatUsersEmail = reduxUser?.attributes?.email.concat(
    "_",
    userChats.currentRecieverEmail
  );
  async function addMsg(e) {
    e.preventDefault();
    setIsSend(true);
    try {
      const data = await API.graphql(
        graphqlOperation(updateChat, {
          input: {
            id: userChats.currentRoomId ? userChats.currentRoomId : " ",
            chatRoom: chatRoomID,
            chatRoomUserEmails: chatUsersEmail,
            messages: {
              id: uuidv4(),
              message: msg,
              sendBy: sendername,
              date: Date.now(),
            },
          },
        })
      );
      if (data.data.updateChat.messages) sendEmail();
      if (!data.data.updateChat.chatRoom) setErr("message not send");
      setIsSend(false);
      setMsg("");
    } catch (err) {
      console.log("err chat", err);
      setIsSend(false);
      setErr("message not send");
      return;
    }
  }
  let createMsgSubscription;

  function setupSubscription() {
    createMsgSubscription = API.graphql(
      graphqlOperation(onUpdateMsg)
    ).subscribe({
      next: ({ provider, value }) => {
        const data = value.data.onUpdateMsg;
        if (data?.id === userChats?.currentRoomId) {
          setMessages([data]);
        }
      },
      error: (err) => {
        return;
      },
    });
  }
  useEffect(() => {
    setupSubscription();
    return () => {
      createMsgSubscription.unsubscribe();
    };
  }, [userChats?.currentRoomId]);

  return (
    <div>
      <div className={styles.main__chatcontent}>
        <div className={styles.content__header}>
          <div className={styles.blocks}>
            <div className={styles.current_chatting_user}>
              <p>
                {recievername ? recievername : userChats.currentRecieverName}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.content__body} ref={contentRef}>
          {userChats?.isLoading ? (
            <div className={styles.loaderImg}>
              <Loader color='#e35309' width='30' height='30' />
            </div>
          ) : (
            <div className={styles.chat__items}>
              {messages?.map((itm, index) =>
                itm?.messages?.map((value, index) => {
                  return (
                    <ChatItem
                      key={index}
                      user={sendername === value.sendBy ? "me" : "other"}
                      msg={value.message}
                      time={value.date}
                    />
                  );
                })
              )}
            </div>
          )}
        </div>
        <div className={styles.content__footer}>
          <form onSubmit={addMsg}>
            <div className={styles.sendNewMessage}>
              <input
                type='text'
                placeholder='Type a message here'
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
                required
              />
              <button
                className={styles.btnSendMsg}
                id='sendMsgBtn'
                disabled={isSend ? true : false}
              >
                {isSend ? (
                  <Loader width='20' height='20' color='#fff' />
                ) : (
                  "Send"
                )}
              </button>
            </div>
            {err ? <Alert errMessage={err} /> : null}
          </form>
        </div>
      </div>
    </div>
  );
}
