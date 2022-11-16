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
const PlotInfo = (props) => {
  return (
    <Modal size="md" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>VarificationNo : {props.detail?.VarificationNo}</h3>
      </ModalHeader>
      <ModalBody>
        <h2
          style={{
            // alignSelf: "center",
            // textAlign: "center",
            marginTop: "-5%",
          }}
        >
          Plot details
        </h2>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Sale Order ID:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail?.SaleOrderId}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label style={{ fontSize: "12px", color: "red" }}>
              Sale Order No:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail?.SaleOrderNo}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Sale Quotation ID:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail?.SaleQuotationId}
            </label>{" "}
          </Col>
        </Row>
        <h2
          style={{
            // alignSelf: "center", textAlign: "center",
            marginTop: "2%",
          }}
        >
          Amount Details
        </h2>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Sold Amounmt:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail?.SoldAmounmt}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label style={{ fontSize: "12px", color: "red" }}>
              Total Amount:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail?.totalAmount}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Total Unpaid Amount:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail?.totalUnpaidAmount}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Total Paid Amount:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail?.totalPaidAmount}
            </label>{" "}
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button size="sm" color="danger" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default PlotInfo;
