import classes from "./BCWrapper.module.css";
import BCHeader from "./BCHeader";
import BCInbox from "./BCInbox/BCInbox";
import BCContent from "./BCContent";
import { useParams } from "react-router-dom";

const BCWrapper = () => {
  const params = useParams();

  return (
    <section className={classes.BCWrapper}>
      <BCHeader />
      <main className={classes.BCMain}>
        <BCInbox taskId={params.taskId} />
        <BCContent />
      </main>
    </section>
  );
};

export default BCWrapper;
