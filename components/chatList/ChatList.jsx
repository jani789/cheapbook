import React, { useEffect } from "react";
import styles from "../../styles/chatList.module.css";
import ChatListItems from "./ChatListItems";
import { getChatUsers } from "../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";
import { getUsersChats } from "../../store/actions/chatsAction";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

export default function ChatList({ recievername, roomId }) {
  const reduxUser = useSelector((state) => state.userReducer.getUser);
  const chatsUser = useSelector((state) => state.chatsReducer);
  const recieverName = useSelector(
    (state) => state.chatsReducer.currentRecieverName
  );
  const recieverEmail = useSelector(
    (state) => state.chatsReducer.currentRecieverEmail
  );
  const recieverId = useSelector(
    (state) => state.chatsReducer.currentRecieverId
  );
  const router = useRouter();
  const senderId = reduxUser?.attributes?.sub;
  const sendername = reduxUser?.attributes?.name;
  const senderEmail = reduxUser?.attributes?.email;
  const dispatch = useDispatch();
  let usersChats = [];
  async function fetchUsers() {
    try {
      const isChatUser = await API.graphql(
        graphqlOperation(getChatUsers, {
          username: senderId,
        })
      );

      const users = isChatUser?.data.getChatUsers?.sort(function (a, b) {
        return b?.updatedAt?.localeCompare(a?.updatedAt);
      });

      const usersRoomId = users.map((roomId) => roomId.id);
      let sortedUsers = [];
      let flag = false;
      if (
        recieverName &&
        !users?.find(
          (item) =>
            item?.chatRoom
              ?.split("_")
              ?.filter((names) => names === recieverName)?.length
        )
      ) {
        flag = uuidv4();
        usersChats = [
          {
            chatRoom: `${recieverName}_${sendername}_${recieverId}_${senderId}`,
            chatRoomUserEmails: `${recieverEmail}_ ${senderEmail}`,
            id: flag,
            updatedAt: new Date().toISOString(),
          },
          ...isChatUser?.data?.getChatUsers,
        ];
      } else if (recieverName && !roomId) {
        sortedUsers = users?.filter(
          (item) => item?.chatRoom?.split("_")?.includes(recieverName) !== -1
        );
        usersChats = isChatUser.data.getChatUsers;
      } else if (roomId) {
        sortedUsers = users?.filter((item) => item?.id === roomId);
        usersChats = isChatUser.data.getChatUsers;
      } else {
        sortedUsers = users;
        usersChats = isChatUser.data.getChatUsers;
      }
      const firstUserName =
        recieverName ||
        sortedUsers[0]?.chatRoom
          ?.split("_")
          ?.find((item) => item !== sendername);
      const firstUserId =
        recieverId ||
        sortedUsers[0]?.chatRoom
          ?.split("_")
          ?.filter((item) => item !== senderId);
      const sortedRoomId = sortedUsers?.filter((item) =>
        item?.chatRoom.includes(firstUserId)
      );

      const firstUserEmail =
        recieverEmail ||
        sortedUsers[0]?.chatRoomUserEmails
          ?.split("_")
          ?.find((item) => item !== senderEmail);
      if (
        firstUserName &&
        sortedUsers[0]?.id &&
        firstUserId[2] &&
        firstUserEmail
      ) {
        dispatch(
          getUsersChats({
            currentRecieverName: firstUserName,
            currentRecieverEmail: firstUserEmail[0],
          })
        );
        fetchUsersMsgs(
          sortedRoomId[0]?.id ? sortedRoomId[0]?.id : sortedUsers[0]?.id,
          firstUserName,
          sortedRoomId[0]?.id ? firstUserId : firstUserId[2],
          firstUserEmail
        );
      } else
        dispatch(
          getUsersChats({
            isLoading: false,
          })
        );
      dispatch(
        getUsersChats({
          chatsUser: usersChats,
          roomIds: [usersRoomId],
        })
      );
      if (flag) {
        dispatch(
          getUsersChats({
            currentRoomId: flag,
          })
        );
        router.replace(`/chat/${flag}`);
      }
    } catch (e) {
      console.log("user list errror", e);
      return;
    }
  }

  async function fetchUsersMsgs(id, name, recieverId, recieveremail) {
    dispatch(
      getUsersChats({
        currentRecieverName: name.toString(),
        currentRecieverId: recieverId,
        currentRecieverEmail: recieveremail,
        isLoading: true,
        currentRoomId: id,
      })
    );
    router.replace(`/chat/${id}`);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className={`${styles.main__chatlist}`}>
      <div className={styles.chatlist__heading}>
        <h2>Chats</h2>
      </div>
      <div className={styles.chatlist__items}>
        {chatsUser.chatsUser &&
          chatsUser.chatsUser
            .sort(function (a, b) {
              return b?.updatedAt?.localeCompare(a?.updatedAt);
            })
            .map((item, index) => {
              return (
                <ChatListItems
                  name={item.chatRoom}
                  chatemail={item.chatRoomUserEmails}
                  id={item.id}
                  key={index}
                  updateAt={item.updatedAt}
                  recieverName={recievername}
                  cRecieverEmail={recieverEmail}
                  onClick={fetchUsersMsgs}
                />
              );
            })}
      </div>
    </div>
  );
}
