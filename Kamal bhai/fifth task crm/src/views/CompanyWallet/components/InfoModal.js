import axios from "axios";
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
import "react-h5-audio-player/lib/styles.css";
const InfoModal = (props) => {
  return (
    <Modal size="sm" isOpen={props.modal} centered={true} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Wallet Details</h3>
      </ModalHeader>
      <ModalBody style={{ wordBreak: "break-all", marginTop: "-30px" }}>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Payment Bank ID:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.Payment_BankId}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Compnay Wallet ID:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.CompanyWallet_id}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Remarks:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.Remarks}
            </label>{" "}
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter style={{ marginTop: "-20px" }}>
        <Button size="sm" color="danger" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default InfoModal;
