import { useRoutes } from "react-router-dom";
import { ComponentList } from "./routes/ComponentList";
import Index from "./component/job/viewjob/Index";

const App = () => {
  let routes = useRoutes(ComponentList);
  return routes;
};

export default App;
