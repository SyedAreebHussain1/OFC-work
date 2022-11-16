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
            <label>User Name:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.user_name}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>Email:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.user_email}</label>{" "}
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Phone:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.user_phone}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Old Plot:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.oldPlot}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>New Plot:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.newPlot}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Remarks:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ inlineSize: "500px", overflowWrap: "break-word" }}>
              {props.stateData.remarksByRequestInitiator}
            </label>{" "}
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
