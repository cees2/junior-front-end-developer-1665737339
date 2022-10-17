import Layout from "./components/Layout/Layout";
import "./index.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/tasks/0" />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="*">
          <p>Page not found.</p>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
