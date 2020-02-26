import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./modalLogin.css";
import "./App.css";
import { Link } from "react-router-dom";

class ModalLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleModal = visible => {
    this.setState({ show: !visible });
  };

  render() {
    const { show } = this.state;

    return (
      <>
        <Button
          className="btn-login"
          variant="outline-warning"
          onClick={() => this.handleModal(show)}
        >
          Login
        </Button>

        <Modal
          className="modal-login"
          show={show}
          onHide={() => this.handleModal(show)}
        >
          <div>
            <Modal.Header className="modal-header-login" closeButton>
              <Modal.Title className="title-login">Form Login</Modal.Title>
            </Modal.Header>
          </div>
          <Form.Group className="form-email">
            <Form.Control
              type="Email"
              placeholder="Email"
              className="form-control-email"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="form-password">
            <Form.Control type="password" placeholder="Password"></Form.Control>
          </Form.Group>
          <div className="div-submit">
            <Link to="/dashboard">
              <button type="submit" className="submit">
                Submit
              </button>
            </Link>
          </div>
        </Modal>
      </>
    );
  }
}

export default ModalLogin;
