import React from "react";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.mainHeader}>
      <h2 className={classes.companyLogo}>nerds.family</h2>
      <img src={require("../../images/user_avatar.jpg")} alt="user avatar" />
    </header>
  );
};

export default MainHeader;
