import classes from "./BCContent.module.css";
import { useParams } from "react-router-dom";
import DUMMY_TASKS from "../../store/tasks-store";
import { useSelector } from "react-redux";

const MONTH_NAMES = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BCContent = () => {
  const currentMessageIndex = useSelector(
    (state) => state.messages.currentMessageIndex
  );
  const params = useParams();
  const { taskId } = params;
  const messages = DUMMY_TASKS[taskId].businessContexts;
  const selectedMessage = messages[currentMessageIndex];

  const messageDate = new Date(selectedMessage.createdAt);
  const time = `${messageDate.getHours()}:${messageDate.getMinutes()}`;

  const currentDate = new Date();
  const daysAgo = currentDate.getDate() - messageDate.getDate();

  let day;
  if (daysAgo === 0) day = "today";
  else if (daysAgo === 1) day = "yesterday";
  else day = `${daysAgo} days ago`;

  const dateToBeDisplayed = `${day}, ${messageDate.getDate()} ${
    MONTH_NAMES[messageDate.getMonth()]
  }`;

  return (
    <section className={classes.messageDetailsWrapper}>
      <h1 className={classes.messageSubject}>{selectedMessage.title}</h1>
      <main className={classes.messageDetailsMain}>
        <div className={classes.messageSenderWrapper}>
          <img
            src={require("../../images/message_sender_avatar.jpeg")}
            alt="user avatar"
          />
        </div>
        <section className={classes.messageContent}>
          <div>
            <ul className={classes.messageDetailsList}>
              <li>
                <h1 className={classes.messageSender}>
                  {selectedMessage.author}
                </h1>
              </li>
              <li>
                <span className={classes.listDot}>•</span>
                {dateToBeDisplayed}
              </li>
              <li>
                <span className={classes.listDot}>•</span>
                {time}
              </li>
            </ul>
          </div>
          <div className={classes.messageContentWrapper}>
            <p>{selectedMessage.content}</p>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BCContent;
