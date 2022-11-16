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
import moment from "moment";
const ViewModal = (props) => {
  const [contact, setContact] = useState(null);
  const OnSuccess = () => {
    if (props.Users !== null) {
      setContact(props.Users);
    }
  };

  const OnFailure = () => {};

  // const dateFunction = (date) => {
  //   const nDate = new Date(date).toLocaleString("en-US", {
  //     timeZone: "Asia/Karachi",
  //   });
  //   return nDate;
  // };
  const dateFunction = (date) => {
    // const nDate = new Date(date).toLocaleString("en-US", {
    //   timeZone: "Asia/Karachi",
    // });
    // return nDate;
    let d = date?.split("T")[0];
    // var date = date.split("T");
    // return d[0];

    // const d = new Date(date[0]);

    return moment(d).format("DD-MM-YYYY");
  };

  return (
    <Modal size="sm" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Sale Details</h3>
      </ModalHeader>
      <ModalBody style={{ wordBreak: "break-all" }}>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Name:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.user_name}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Father Name/Husband Name:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.Father_Spouse_Name}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Email Address:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.user_email}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Phone No:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.user_phone}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>CNIC #</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.CNIC}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Project name:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.Project_name}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Position:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.Position}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Type Name:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.PlotType_Name}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Sector:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.Sector_Name}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Plot Address:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.Plot_no}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Extra Charges:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.ExtraChargesPercentage}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Status Name:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.status_name}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Category:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {props.Data.CategoryName}
            </label>{" "}
          </Col>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Date:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label
              style={{ fontSize: "13px", color: "black", fontWeight: "bold" }}
            >
              {dateFunction(props.Data.Datetime)}
            </label>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button size="sm" color="info" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ViewModal;
