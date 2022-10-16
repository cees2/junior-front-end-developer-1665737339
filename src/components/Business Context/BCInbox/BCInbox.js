import classes from "./BCInbox.module.css";
import BCSingleMessage from "./BCSingleMessage";

const BCInbox = () => {
  return (
    <aside className={classes.inboxWrapper}>
      <BCSingleMessage isNew={true} />
      <BCSingleMessage isNew={true} />
      <BCSingleMessage isNew={true} />
      <BCSingleMessage isNew={true} />
      <BCSingleMessage isNew={true} />
      <BCSingleMessage isNew={true} />
    </aside>
  );
};

export default BCInbox;
