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
// import { BASEURL, RECORDING_BASE_URL } from "config/api/URL";
// import { RECORDING_PATH } from "../constant";
import { RECORDING_BASE_URL } from "config/api/URL";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const Recording = (props) => {
  const [showResponseData, setResponseData] = useState(null);

  const FetchData = (val) => {
    let body = {
      Agentid: null,
      Calldatetime: null,
      Clientphoneno: val,
      Calltype: null,
    };

    if (val !== "") {
      // props.showRecording(body, OnSuccess, OnFailure);

      props.showRecording(body, OnSuccess, OnFailure);
    }
  };

  const [contact, setContact] = useState(null);
  const OnSuccess = () => {
    if (props.Users !== null) {
      setContact(props.Users);
    }
  };

  const OnFailure = () => {
    window.alert("fail");
  };

  const dateFunction = (date) => {
    const nDate = new Date(date).toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
    });
    return nDate;
  };

  return (
    <Modal size="lg" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Details</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Name:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.user_name}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Father/Spouse Name:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.Father_Spouse_Name}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>CNIC:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.CNIC}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Email:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.user_email}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Phone:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.user_phone}</label>{" "}
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Date of birth:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>
              {dateFunction(props.client.Dateofbirth).toLocaleString("en-US", {
                timeZone: "Asia/Karachi",
              })}
            </label>{" "}
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Passport No:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label>{props.client.PassportNo}</label>{" "}
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Nationality:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.Nationality}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Residential Address:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.Address_Residence}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Office Address:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.Address_office}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Residentail Contact:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.Tel_Residence}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Office Contact:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.Tel_office}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Profession:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.Profession}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Organization:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.client.Organization}</label>{" "}
          </Col>
        </Row>

        {/* <div className="col">
          <Table className="align-items-center" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Recording</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {props.Data !== null &&
                props.Data !== undefined &&
                props.Data.map((dataOption, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <AudioPlayer
                          autoPlayAfterSrcChange={false}
                          autoPlay={false}
                          src={`${RECORDING_BASE_URL}${dataOption.VoiceLink}`}
                          onPlay={(e) => console.log("onPlay")}
                          // other props here
                          layout="stacked-reverse"
                        />
                      </td>
                      <td>{dataOption.Status}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div> */}
      </ModalBody>
      <ModalFooter>
        <Button color="info" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Recording;
