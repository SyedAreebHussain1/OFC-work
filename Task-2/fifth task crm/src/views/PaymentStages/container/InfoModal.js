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
    <Modal
      size="lg"
      isOpen={props.modal}
      toggle={props.toggle}
      data={props.stateData}
    >
      <ModalHeader toggle={props.toggle}>
        <h2>Receipt Details</h2>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Name:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label>{props.stateData?.tbl_dashboard?.name}</label>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Email:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label>{props.stateData?.tbl_dashboard?.email}</label>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Plot No:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label>{props?.Plot_no}</label>
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Payment Receipt No:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label>{props.stateData?.PaymentReceiptNo}</label>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Description:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label>{props.stateData?.Remarks}</label>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Amount:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label>
              {props.stateData?.Amount?.toString().replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
              )}
            </label>
          </Col>
        </Row>
        {/* <Row>
          <Col lg="4" md="4" sm="6">
            
            <label>Installment No:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            
            <label>{props.stateData.InstallmentNo}</label>
          </Col>
        </Row> */}
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Confirmation Status:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label>
              {props.stateData?.tbl_status_ConfirmationStatus?.status_name}
            </label>
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Payment Through Description:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label>{props.stateData?.paymentthrough?.Description}</label>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label>Payment Through:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label>{props.stateData?.paymentthrough?.PaymentthroughName}</label>
          </Col>
        </Row>
        {/* <Row>
          <Col lg="4" md="4" sm="6">
            <label> Drawn Through:</label>
          </Col>
          <Col lg="6" md="6" sm="6">
            
            <label>{props.stateData.through}</label>
          </Col>
        </Row> */}
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
