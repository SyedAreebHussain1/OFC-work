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

const InfoModal = (props) => {
  return (
    <Modal
      size="lg"
      isOpen={props.modal}
      toggle={props.toggle}
      data={props.stateData}
    >
      <ModalHeader toggle={props.toggle}>
        <h3>Customer Details</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>User Name:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.user_name}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>Father/Spouse Name:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.Father_Spouse_Name}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>Email:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.user_email}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Phone:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.user_phone}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>CNIC:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.CNIC}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Project Name:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.Project_name}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Plot No:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.Plot_no}</label>{" "}
          </Col>
        </Row>{" "}
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Plot Type:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.PlotType_Name}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Sector:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.Sector_Name}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Category Name:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.CategoryName}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>SaleOrder No:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.SaleOrderNo}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Remarks By Request Initiator:</label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>{props.stateData.remarksByRequestInitiator}</label>{" "}
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

export default InfoModal;
