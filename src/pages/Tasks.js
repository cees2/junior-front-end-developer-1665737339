import React from "react";
import ListOfTasks from "../components/Tasks/ListOfTasks";
import BCWrapper from "../components/Business Context/BCWrapper";
import { Route } from "react-router-dom";

const Tasks = () => {
  return (
    <>
      <ListOfTasks />
      <Route path="/tasks/:taskId">
        <BCWrapper />
      </Route>
    </>
  );
};

export default Tasks;
