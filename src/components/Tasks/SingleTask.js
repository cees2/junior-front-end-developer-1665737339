import classes from "./SingleTask.module.css";
import Arrow from "../../images/Arrow.svg";
import Checkmark from "../../images/Checkmark.svg";
import Locker from "../../images/Locker.svg";
import { ICONS_DESCRIPTION } from "../../store/tasks-store";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { tasksActions } from "../../store/tasksSlice";
import { messageActions } from "../../store/messageSlice";
import DUMMY_TASKS from "../../store/tasks-store";
import { useState } from "react";

const ICONS = {
  done: Checkmark,
  active: Arrow,
  blocked: Locker,
};

const SingleTask = (props) => {
  const { status, id, taskTitle } = props;
  const [statusCode, setStatusCode] = useState(
    status === "done" ? 0 : status === "active" ? 1 : 2
  );
  const currentTaskIndex = useSelector((state) => state.tasks.activeTaskIndex);
  const dispatch = useDispatch();

  let listItemClasses = `${classes.taskItem}`;

  if (currentTaskIndex === id) listItemClasses += ` ${classes.activeTask}`;

  const changeTaskHandler = () => {
    dispatch(tasksActions.setIndex(id));
    dispatch(messageActions.resetIndex());
    if (statusCode === 2) {
      setStatusCode(1);
      DUMMY_TASKS[id].status = ICONS_DESCRIPTION[1].status;
    }
  };

  return (
    <Link to={`/tasks/${id}`}>
      <li className={listItemClasses} onClick={changeTaskHandler}>
        <img
          src={ICONS[DUMMY_TASKS[id].status]}
          alt={ICONS_DESCRIPTION[statusCode].alt}
        />
        {taskTitle}
      </li>
    </Link>
  );
};

export default SingleTask;
