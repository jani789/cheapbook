import moment from "moment";
import styles from "../../styles/chatContent.module.css"
export default function ChatItem(props) {
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`${styles.chat__item} ${props.user === "other" ? styles.other : ""}`}
    >
      <div className={styles.chat__item__content}>
        <div className={styles.chat__msg}>{props.msg}</div>
        <div className={styles.chat__meta}>
          <p>{moment(props.time).fromNow()}</p>
        </div>
      </div>
    </div>
  );
}
