import React from "react";
import MainHeader from "./MainHeader";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.appWrapper}>
      <MainHeader />
      <main className={classes.appMain}>{props.children}</main>
    </div>
  );
};

export default Layout;
