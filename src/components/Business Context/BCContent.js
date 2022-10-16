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
            <p></p>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BCContent;
