import classes from "./BCWrapper.module.css";
import BCHeader from "./BCHeader";
import BCInbox from "./BCInbox/BCInbox";
import BCContent from "./BCContent";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BCWrapper = () => {
  const params = useParams();
  const messageIndex = useSelector(
    (state) => state.messages.currentMessageIndex
  );
  return (
    <section className={classes.BCWrapper}>
      <BCHeader />
      <main className={classes.BCMain}>
        <BCInbox taskId={params.taskId} />
        {messageIndex !== -1 && <BCContent />}
      </main>
    </section>
  );
};

export default BCWrapper;
