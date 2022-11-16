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
const Recording = (props) => {
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
    <Modal size="sm" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Information Details</h3>
      </ModalHeader>
      <ModalBody style={{ wordBreak: "break-all" }}>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Name:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail.user_name}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label style={{ fontSize: "12px", color: "red" }}>
              Father Name/ Husband Name:
            </label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail.FatherName}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Email:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail.user_email}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Phone No:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail.user_phone}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>CNIC:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail.CNIC}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Agent:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail.Agent}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Date and Time:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {dateFunction(props.detail.Datetime).toLocaleString("en-US", {
                timeZone: "Asia/Karachi",
              })}
            </label>{" "}
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
        <Button size="sm" color="danger" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Recording;
