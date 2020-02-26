import React from "react";
import Timer from "./pages/Timer";
import TimeData from "./pages/TimeData";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Timer} />
          <Route exact path="/data" component={TimeData} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
