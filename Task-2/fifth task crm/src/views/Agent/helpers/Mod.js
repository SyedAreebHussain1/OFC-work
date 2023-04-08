import axios from "axios";
import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  CardBody,
  Card,
  Table,
  CardHeader,
  Col,
  Row,
} from "reactstrap";
import { useState, useEffect } from "react";
import { RECORDING_BASE_URL } from "config/api/URL";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const Mod = (props) => {
  const [showResponseData, setResponseData] = useState(null);

  const [contact, setContact] = useState(null);
  const OnSuccess = () => {
    if (props.Users !== null) {
      setContact(props.Users);
    }
  };
  const nDate = new Date(props.detail.Datetime).toLocaleString("en-US", {
    timeZone: "Asia/Karachi",
  });
  const OnFailure = () => {
    window.alert("fail");
  };

  return (
    <Modal
      size="md-4
    "
      isOpen={props.modal}
      toggle={props.toggle}
    >
      <ModalHeader toggle={props.toggle}>
        <h3>Details</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col>
            {" "}
            <label>Name:</label>
          </Col>
          <Col>
            {" "}
            <label>{props.detail.name}</label>{" "}
          </Col>
        </Row>
        {/* <Row>

          <Col> <label>Phone No:</label></Col>
          <Col> <label>{props.detail.phoneNo}</label>  </Col>

        </Row> */}
        {/* <Row>

          <Col><label>Dashboard Id:</label> </Col>
          <Col> <label>{props.detail.Dashboarduserid}</label> </Col>

        </Row> */}
        <Row>
          <Col>
            <label>Email:</label>{" "}
          </Col>
          <Col>
            {" "}
            <label>{props.detail.email}</label>{" "}
          </Col>
        </Row>
        {/* <Row>

          <Col><label>Team Name:</label> </Col>
          <Col> <label>{props.detail.TeamName}</label> </Col>

        </Row><Row>

          <Col><label>User Role:</label> </Col>
          <Col> <label>{props.detail.user_role_name}</label> </Col>

        </Row> */}

        <Row>
          <Col>
            <label>Date and Time:</label>{" "}
          </Col>
          <Col>
            {" "}
            <label>{nDate}</label>{" "}
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

export default Mod;
