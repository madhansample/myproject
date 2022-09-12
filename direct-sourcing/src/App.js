import { useRoutes } from "react-router-dom";
import { ComponentList } from "./routes/ComponentList";

const App = () => {
  let routes = useRoutes(ComponentList);
  return routes;
};

export default App;
