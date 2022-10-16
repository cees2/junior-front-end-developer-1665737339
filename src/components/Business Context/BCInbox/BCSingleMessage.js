import classes from "./BCSingleMessage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { tasksActions } from "../../../store/messageSlice";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const BCSingleMessage = (props) => {
  const { isNew, author, title, content, createdAt } = props.data;
  const dispatch = useDispatch();
  const activeTaskIndex = useSelector(
    (state) => state.messages.currentMessageIndex
  );

  const date = new Date(createdAt);
  const correctDateFormat = `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`;

  let wrapperClasses = isNew
    ? `${classes.singleMessageWrapper} ${classes.newMessage}`
    : `${classes.singleMessageWrapper}`;

  if (props.messageIndex === activeTaskIndex)
    wrapperClasses += ` ${classes.activeMessage}`;

  const activeMessageHandler = () => {
    dispatch(tasksActions.resetIndex());
    dispatch(tasksActions.setIndex(props.messageIndex));
  };

  return (
    <div className={wrapperClasses} onClick={activeMessageHandler}>
      <header className={classes.singleMessageHeader}>
        {isNew && <span className={classes.newBadge}>NEW</span>}
        <ul className={classes.singleMessageList}>
          <li>
            {author} <span className={classes.inboxDot}>•</span>
          </li>
          <li>{correctDateFormat}</li>
        </ul>
      </header>
      <main className={classes.singleMessageMain}>
        <h4 className={classes.singleMessageTitle}>{title}</h4>
        <p className={classes.singleMessageContent}>{content}</p>
      </main>
    </div>
  );
};

export default BCSingleMessage;
