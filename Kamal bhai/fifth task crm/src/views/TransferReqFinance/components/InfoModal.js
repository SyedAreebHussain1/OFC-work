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
              {props.detail?.Transferfrom?.user_name}
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
              {props.detail?.Transferfrom?.user_email}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Cnic:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail?.Transferfrom?.CNIC}
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
              {props.detail?.Transferto?.user_name}
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
              {props.detail?.Transferto?.user_email}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Cnic:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "darkblue" }}>
              {props.detail?.Transferto?.CNIC}
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
