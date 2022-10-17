import classes from "./ListOfTasks.module.css";
import SingleTask from "./SingleTask";
import DUMMY_TASKS from "../../store/tasks-store";
import { useDispatch, useSelector } from "react-redux";

const ListOfTasks = () => {
  const isTabOpened = useSelector((state) => state.responsive.isOpened);

  const tasksListClasses = isTabOpened
    ? `${classes.tasksAside} ${classes.activeTaskTab}`
    : `${classes.tasksAside}`;

  return (
    <aside className={tasksListClasses}>
      <div className={classes.taskListHeader}>
        <h3>YOUR TASKS</h3>
      </div>
      <div className={classes.taskList}>
        <ul>
          {DUMMY_TASKS.map((task, i) => (
            <SingleTask
              key={task.task_id}
              id={i}
              taskTitle={task.title}
              status={task.status}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ListOfTasks;
