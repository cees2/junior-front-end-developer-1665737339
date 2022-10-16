import classes from "./SingleTask.module.css";
import Arrow from "../../images/Arrow.svg";
import Checkmark from "../../images/Checkmark.svg";
import Locker from "../../images/Locker.svg";
import { ICONS_DESCRIPTION } from "../../store/tasks-store";

const ICONS = {
  done: Checkmark,
  active: Arrow,
  blocked: Locker,
};

const SingleTask = (props) => {
  const { status } = props;
  const statusCode = status === "done" ? 0 : status === "active" ? 1 : 2;
  return (
    <li className={classes.taskItem}>
      <img src={ICONS[status]} alt={ICONS_DESCRIPTION[statusCode].alt} />
      {props.taskTitle}
    </li>
  );
};

export default SingleTask;
