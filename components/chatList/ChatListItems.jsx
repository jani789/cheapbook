import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/chatList.module.css";
export default function ChatListItems({ name, id, onClick, chatemail }) {
  const reduxUser = useSelector((state) => state.userReducer.getUser);
  const recieverName = useSelector(
    (state) => state.chatsReducer.currentRecieverName
  );
  let splitEmail = chatemail?.split("_");
  const recieveremail = splitEmail?.filter(
    (email) => email !== reduxUser.attributes.email
  )[0];
  let splitName = name.split("_");
  const reciever = splitName.filter(
    (name) => name !== reduxUser.attributes.name
  )[0];
  const recieverId = splitName.filter(
    (id) => id !== reduxUser.attributes.sub
  )[2];
  return (
    <div
      onClick={() => onClick(id, reciever, recieverId, recieveremail)}
      className={`${styles.chatlist__item} ${
        recieverName === reciever ? styles.selected_item : ""
      }`}
    >
      <div className={styles.userMeta}>
        <p className={styles.reciever}>{reciever}</p>
      </div>
    </div>
  );
}
