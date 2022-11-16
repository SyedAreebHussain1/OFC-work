import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Row,
} from "reactstrap";
import { useState, useEffect } from "react";

const InfoModal = (props) => {
  return (
    <Modal
      size="lg"
      isOpen={props.modal}
      toggle={props.toggle}
      data={props.stateData}
    >
      <ModalHeader toggle={props.toggle}>
        <h3>Details</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Payment Receipt No:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.PaymentReceiptNo}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>ConfirmationStatusName:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.ConfirmationStatusName}</label>{" "}
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Payment Through Description:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.PaymentThroughDescription}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Through:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.through}</label>{" "}
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="info" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default InfoModal;
