import classes from "./ListOfTasks.module.css";
import SingleTask from "./SingleTask";
import DUMMY_TASKS from "../../store/tasks-store";

const ListOfTasks = () => {
  console.log("tutaj:", DUMMY_TASKS[0].statusCode);

  return (
    <aside className={classes.tasksAside}>
      <div className={classes.taskListHeader}>
        <h3>YOUR TASKS</h3>
      </div>
      <div className={classes.taskList}>
        <ul>
          {DUMMY_TASKS.map((task) => (
            <SingleTask
              key={task.task_id}
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
