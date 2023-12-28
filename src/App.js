import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLayout from "./Component/PageLayout";
import CreateAdPage from "./Component/CreateAdPage";
import CreateTextAdForm from "./Component/CreateTextAdForm";
import CreateMediaAdForm from "./Component/CreateMediaAdForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PageLayout />}></Route>
          <Route exact path="/createAdPage" element={<CreateAdPage />}></Route>
          <Route
            exact
            path="/createTextAdForm"
            element={<CreateTextAdForm />}
          ></Route>
          <Route
            exact
            path="/createMediaAdForm"
            element={<CreateMediaAdForm />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
