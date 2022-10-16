import classes from "./BCHeader.module.css";
import Compass from "./../../images/Compass.svg";

const BCHeader = () => {
  return (
    <header className={classes.BCHeaderWrapper}>
      <ul className={classes.headerContentList}>
        <li>
          <div className={classes.compassWrapper}>
            <img src={Compass} alt="compass" />
          </div>
          BUSINESS CONTEXT
        </li>
      </ul>
    </header>
  );
};

export default BCHeader;
