import React, { Component } from "react";
import "./App.css";
import ModalLogin from "./modalLogin";
import ModalRegister from "./modalRegister";
import Dashboard from "./dashboard";
import Profile from "./Profile";
import Premium from "./Premium";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">breednder</h1>
        <div className="content">
          <h2>Swipe Right</h2>
          <h2>Make Your Pet's Happy</h2>
        </div>
        <ModalLogin />
        <ModalRegister />
        <h1 className="footer">FIND YOUR PET'S MATCH</h1>
      </div>
      // <Dashboard />
      // <EditProfile />
      // <Premium />
    );
  }
}
export default LandingPage;
