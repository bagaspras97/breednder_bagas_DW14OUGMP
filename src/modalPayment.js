import React, { Component } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import Premium from "./Premium";

class ModalPayment extends Component {
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
          className="form-button-premium"
          variant="light"
          onClick={() => this.handleModal(show)}
        >
          Send
        </Button>
        <Modal show={show} onHide={() => this.handleModal(show)}>
          >
          <Modal.Header closeButton>
            <p style={{ textAlign: "center" }}>
              Terimakasih Silahkan Tunggu Konfirmasi Pembayaran
            </p>
          </Modal.Header>
        </Modal>
        {/* <Alert
          variant="danger"
          onHide={() => this.handleModal(show)}
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert> */}
      </>
    );
  }
}

export default ModalPayment;
