import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";
import JobList from "./component/job/joblist/Index";
import Index from "./component/job/viewjob/Index";
import ApplyJob from "./component/job/viewjob/ApplyJob";
import ViewJob from './component/job/viewjob/Index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ViewJob />} ></Route>
        <Route path="/" element={<JobList />}></Route>
        <Route path="/careers" element={<Index />}></Route>
        <Route path="/apply" element={<ApplyJob />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
