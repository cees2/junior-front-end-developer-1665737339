import classes from "./BCWrapper.module.css";
import BCHeader from "./BCHeader";
import BCInbox from "./BCInbox/BCInbox";
import BCContent from "./BCContent";

const BCWrapper = () => {
  return (
    <section className={classes.BCWrapper}>
      <BCHeader />
      <main className={classes.BCMain}>
        <BCInbox />
        <BCContent />
      </main>
    </section>
  );
};

export default BCWrapper;
