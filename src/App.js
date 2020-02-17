import React, { Component } from "react";
import "./App.css";
import ModalLogin from "./modalLogin";
import ModalRegister from "./modalRegister";
import Dashboard from "./dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import EditProfile from "./EditProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/profile">
              <EditProfile />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
