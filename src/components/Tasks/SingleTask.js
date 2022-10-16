import classes from "./SingleTask.module.css";
import Arrow from "../../images/Arrow.svg";
import Checkmark from "../../images/Checkmark.svg";
import Locker from "../../images/Locker.svg";
import { ICONS_DESCRIPTION } from "../../store/tasks-store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ICONS = {
  done: Checkmark,
  active: Arrow,
  blocked: Locker,
};

const SingleTask = (props) => {
  const { status, id, taskTitle } = props;
  const currentTaskIndex = useSelector((state) => state.tasks.activeTaskIndex);

  let itemClasses = `${classes.taskItem}`;

  if (currentTaskIndex === id) itemClasses += ` ${classes.activeTask}`;

  const statusCode = status === "done" ? 0 : status === "active" ? 1 : 2;

  const url = `/tasks/${id}`;

  return (
    <Link to={url}>
      <li className={itemClasses}>
        <img src={ICONS[status]} alt={ICONS_DESCRIPTION[statusCode].alt} />
        {taskTitle}
      </li>
    </Link>
  );
};

export default SingleTask;
