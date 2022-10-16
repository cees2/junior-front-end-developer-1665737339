import classes from "./ListOfTasks.module.css";
import SingleTask from "./SingleTask";
import DUMMY_TASKS from "../../store/tasks-store";

const ListOfTasks = () => {
  return (
    <aside className={classes.tasksAside}>
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
