import classes from "./BCSingleMessage.module.css";

const BCSingleMessage = (props) => {
  return (
    <div className={classes.singleMessageWrapper}>
      <header className={classes.singleMessageHeader}>
        {props.isNew && <span className={classes.newBadge}>NEW</span>}
        <ul className={classes.singleMessageList}>
          <li>
            Olga Nelson <span className={classes.inboxDot}>•</span>
          </li>
          <li>Dec 17</li>
        </ul>
      </header>
      <main className={classes.singleMessageMain}>
        <h4 className={classes.singleMessageTitle}>
          New sprint, tasks and intro information
        </h4>
        <p className={classes.singleMessageContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
          ligula malesuada, ultricies lectus vel, posuere elit. Quisque auctor
          lectus a ornare mattis. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Quisque faucibus sollicitudin erat, nec elementum
          ante tincidunt quis. Proin molestie diam sed lacus sodales congue.
          Fusce aliquam lacinia eros, sit amet cursus dui finibus vitae. Aenean
          semper, metus quis fringilla vehicula, orci est mattis arcu, non
          cursus justo ligula et ex. Etiam vitae nulla congue tortor cursus
          sagittis. Vivamus maximus, risus quis imperdiet sollicitudin, elit
          magna rhoncus erat, a laoreet sem turpis sed enim.
        </p>
      </main>
    </div>
  );
};

export default BCSingleMessage;
