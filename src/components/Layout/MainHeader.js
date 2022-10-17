import React from "react";
import classes from "./MainHeader.module.css";
import tasks_to_do from "../../images/tasks_to_do.svg";
import { useDispatch } from "react-redux";
import { responsiveActions } from "../../store/responsiveSlice";

const MainHeader = () => {
  const dispatch = useDispatch();

  const taskIconClickHandler = () => {
    dispatch(responsiveActions.toggleHamburgerMenu());
  };

  return (
    <header className={classes.mainHeader}>
      <h2 className={classes.companyLogo}>nerds.family</h2>
      <div className={classes.picturesWrapper}>
        <img src={require("../../images/user_avatar.jpg")} alt="user avatar" />
        <img
          src={tasks_to_do}
          alt="tasks to do"
          onClick={taskIconClickHandler}
        />
      </div>
    </header>
  );
};

export default MainHeader;
