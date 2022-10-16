import classes from "./ListOfTasks.module.css";
import SingleTask from "./SingleTask";

const ListOfTasks = () => {
  return (
    <aside className={classes.tasksAside}>
      <div className={classes.taskListHeader}>
        <h3>YOUR TASKS</h3>
      </div>
      <div className={classes.taskList}>
        <ul>
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
        </ul>
      </div>
    </aside>
  );
};

export default ListOfTasks;
