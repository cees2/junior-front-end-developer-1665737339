import classes from "./BCContent.module.css";

const BCContent = () => {
  return (
    <section className={classes.messageDetailsWrapper}>
      <h1 className={classes.messageSubject}>
        Application has been accepted 🎉 🙌
      </h1>
      <main className={classes.messageDetailsMain}>
        <div className={classes.messageSenderWrapper}>
          <img
            src={require("../../images/message_sender_avatar.jpeg")}
            alt="user avatar"
          />
        </div>
        <section className={classes.messageContent}>
          <div>
            <ul className={classes.messageDetailsList}>
              <li>
                <h1 className={classes.messageSender}>Kristen Aniston</h1>
              </li>
              <li>
                <span className={classes.listDot}>•</span>Today, 17th December
              </li>
              <li>
                <span className={classes.listDot}>•</span>
                11:20
              </li>
            </ul>
          </div>
          <div className={classes.messageContentWrapper}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac ligula malesuada, ultricies lectus vel, posuere elit. Quisque
              auctor lectus a ornare mattis. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Quisque faucibus sollicitudin erat, nec
              elementum ante tincidunt quis. Proin molestie diam sed lacus
              sodales congue. Fusce aliquam lacinia eros, sit amet cursus dui
              finibus vitae. Aenean semper, metus quis fringilla vehicula, orci
              est mattis arcu, non cursus justo ligula et ex. Etiam vitae nulla
              congue tortor cursus sagittis. Vivamus maximus, risus quis
              imperdiet sollicitudin, elit magna rhoncus erat, a laoreet sem
              turpis sed enim.
            </p>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BCContent;
