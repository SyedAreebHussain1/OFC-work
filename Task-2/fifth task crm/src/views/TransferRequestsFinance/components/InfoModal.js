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
    <Modal size="sm" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Transfer Details</h3>
      </ModalHeader>
      <ModalBody>
        <h2
          style={{
            alignSelf: "center",
            textAlign: "center",
            marginTop: "-10%",
          }}
        >
          Transfer from
        </h2>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Name:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              zaman
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label style={{ fontSize: "12px", color: "red" }}>Email:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              zaman@gmail.com
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Cnic:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              4353034242422342
            </label>{" "}
          </Col>
        </Row>
        <h2
          style={{ alignSelf: "center", textAlign: "center", marginTop: "2%" }}
        >
          Transfer to
        </h2>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Name:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              zaman
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label style={{ fontSize: "12px", color: "red" }}>Email:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              zaman@gmail.com
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Cnic:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              4353034242422342
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

export default InfoModal;
