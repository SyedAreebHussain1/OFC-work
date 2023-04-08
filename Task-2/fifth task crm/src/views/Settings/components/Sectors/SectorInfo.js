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
        <h3>Sector details</h3>
      </ModalHeader>
      <ModalBody style={{ wordBreak: "break-all" }}>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Project ID:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.Project_id}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Sector Name:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.Sector_Name}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Sector Description:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.data?.Description}
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
