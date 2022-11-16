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

const ViewQuotationModal = (props) => {
  const [contact, setContact] = useState(null);
  const OnSuccess = () => {
    if (props.Users !== null) {
      setContact(props.Users);
    }
  };

  const OnFailure = () => {
    window.alert("fail");
  };

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
        <h3>Details</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Name:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "black" }}>
              {props.QuotationSingleArray.user_name}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label style={{ fontSize: "12px", color: "red" }}>Email:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "black" }}>
              {props.QuotationSingleArray.user_email}
            </label>{" "}
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Contact:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "black" }}>
              {props.QuotationSingleArray.user_phone}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Quotation No:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "black" }}>
              {props.QuotationSingleArray.SQ_No}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Valid From:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "black" }}>
              {dateFunction(props.QuotationSingleArray.Validfrom)}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Valid To:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "black" }}>
              {dateFunction(props.QuotationSingleArray.Validto)}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Method Type:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "black" }}>
              {props.QuotationSingleArray.AmountType}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Amount:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label style={{ fontSize: "13px", color: "black" }}>
              {props.QuotationSingleArray.Amount?.toLocaleString("en-US")}
            </label>{" "}
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ViewQuotationModal;
