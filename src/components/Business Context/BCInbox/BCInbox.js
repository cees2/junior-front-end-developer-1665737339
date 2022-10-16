import classes from "./BCInbox.module.css";
import BCSingleMessage from "./BCSingleMessage";
import DUMMY_TASKS from "../../../store/tasks-store";

const BCInbox = () => {
  return (
    <aside className={classes.inboxWrapper}>
      {DUMMY_TASKS[0].businessContexts.map((context, i) => (
        <BCSingleMessage key={i} messageIndex={i} data={context} />
      ))}
    </aside>
  );
};

export default BCInbox;
