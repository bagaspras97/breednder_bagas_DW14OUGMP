import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./modalRegister.css";

class ModalRegister extends Component {
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
          className="btn-register"
          variant="outline-warning"
          onClick={() => this.handleModal(show)}
        >
          Register
        </Button>

        <Modal
          className="modal-register"
          show={show}
          onHide={() => this.handleModal(show)}
        >
          <div>
            <Modal.Header className="modal-header-register" closeButton>
              <Modal.Title className="title-register" closeButton>
                Form Register
              </Modal.Title>
            </Modal.Header>
          </div>

          <Form.Group className="form-breeder">
            <Form.Control
              type="text"
              placeholder="Breeder"
              className="form-control-breeder"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="form-email">
            <Form.Control type="email" placeholder="Email"></Form.Control>
          </Form.Group>
          <Form.Group className="form-password1">
            <Form.Control
              type="password"
              placeholder="Password"
              className="form-control-password1"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="form-phone-breeder">
            <Form.Control
              type="text"
              placeholder="Phone Breeder"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="form-address-breeder">
            <Form.Control
              type="text"
              placeholder="Address Breeder"
              className="form-control-address-breeder"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="form-name-pet">
            <Form.Control type="text" placeholder="Name Pet"></Form.Control>
          </Form.Group>
          <Form.Group className="form-gender-pet">
            <Form.Control
              type="text"
              placeholder="Gender Pet"
              className="form-control-gender-pet"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="form-species-pet">
            <Form.Control as="select" placeholder="Species Pet">
              <option>Species Pet</option>
              <option>1</option>
              <option>2</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="form-age-pet">
            <Form.Control
              type="number"
              placeholder="Age Pet"
              className="form-control-age-pet"
            ></Form.Control>
          </Form.Group>
          <div className="div-register">
            <button type="submit" className="register">
              Register
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

export default ModalRegister;
