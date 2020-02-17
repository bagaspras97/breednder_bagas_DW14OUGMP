import React, { Component } from "react";
import "./App.css";
import { ButtonToolbar, Button, Form, Modal } from "react-bootstrap";
import ModalLogin from "./modalLogin";
import ModalRegister from "./modalRegister";

class App extends Component {
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
    );
  }
}
export default App;
