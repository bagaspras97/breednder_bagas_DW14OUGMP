import React, { Component } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Premium.css";
import ModalPayment from "./modalPayment";

class Premium extends Component {
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
        {/* <Link to="./dashboard"> */}
        <Button
          className="button-add-pet"
          variant="warning"
          onClick={() => this.handleModal(show)}
        >
          Add Pet
        </Button>
        {/* <Link /> */}

        <Modal show={show} onHide={() => this.handleModal(show)}>
          <div className="modal-premium">
            <Modal.Body className="modal-body-premium">
              {/* <div className="close-premium">
                  <Image
                    className="img-close-premium"
                    src={require("./img/close.png")}
                  />
                </div> */}
              <Modal.Header closeButton className="modal-header">
                <div className="title-premium">Premium</div>
              </Modal.Header>
              <div className="premium-body">
                <div className="premium-content">
                  Upgrade Breedner mu dan nikmati
                </div>
                <div className="premium-content-1">
                  fitur-fitur <strong> Pro </strong>
                </div>
                <div className="premium-content-2">Breedner : 08123456789</div>
                <Form.Group className="form-premium">
                  <Form.Control
                    type="Email"
                    placeholder="No Rekening Kamu"
                    className="form-rekening-premium"
                  ></Form.Control>
                </Form.Group>
                <div className="form-image-premium">
                  <div className="form-image-premium-1">
                    <Image
                      className="image"
                      src={require("./img/image-input.png")}
                    />
                  </div>
                </div>
                {/* <Button className="form-button-premium" variant="light">
                  Send
                </Button> */}
                <ModalPayment />
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </>
    );
  }
}

export default Premium;
