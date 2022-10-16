import Layout from "./components/Layout/Layout";
import "./index.css";
import ListOfTasks from "./components/Tasks/ListOfTasks";
import BCWrapper from "./components/Business Context/BCWrapper";

function App() {
  return (
    <Layout>
      <ListOfTasks />
      <BCWrapper />
    </Layout>
  );
}

export default App;
