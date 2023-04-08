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
const InfoHistoryModal = (props) => {
  return (
    <Modal size="sm" isOpen={props.modal} centered={true} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>History Details</h3>
      </ModalHeader>
      <ModalBody style={{ wordBreak: "break-all", marginTop: "-30px" }}>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>User Name:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.CustomerWallet?.tbl_user?.user_name}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>User CNIC:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.CustomerWallet?.tbl_user?.CNIC}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Installment No:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.InstallmentNo}
            </label>{" "}
          </Col>
        </Row>
        {/* <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Payment Stage Id:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.PaymentStageId}
            </label>{" "}
          </Col>
        </Row> */}
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Plot No:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.Plot_No}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Pament Through:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.PaymentThrough?.PaymentthroughName}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Pament Type:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.paymenttype?.PaymentTypeName}
            </label>{" "}
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter style={{ marginTop: "-20px" }}>
        <Button size="sm" color="warning" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default InfoHistoryModal;
