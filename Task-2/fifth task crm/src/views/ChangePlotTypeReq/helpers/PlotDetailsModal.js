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

const PlotDetailsModal = (props) => {
  useEffect(() => {
    if (props.stateData !== null && props.stateData !== undefined) {
      if (
        props.stateData.Taskid !== null &&
        props.stateData.Taskid !== undefined
      ) {
        let body = {
          Taskid: props.stateData.Taskid,
        };
        props.ShowPlotInfo(body, onSuccess, onFailure);
      }
    }
  }, [props.stateData]);

  const onSuccess = () => {};
  const onFailure = () => {};

  return (
    <Modal
      size="lg"
      isOpen={props.modal}
      toggle={props.toggle}
      data={props.stateData}
    >
      <ModalHeader toggle={props.toggle}>
        <h3>Plot Details</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label>Sale Order No:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>{props.PlotInfo?.[0]?.SaleOrderNo}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Sold Amount:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>{props.PlotInfo?.[0]?.SoldAmounmt}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total No of Installment:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>{props.PlotInfo?.[0]?.TotalNoInstallment}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total No of Ballon Installment:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>{props.PlotInfo?.[0]?.TotalNoBallonInstallment}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total Installment Amount:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>{props.PlotInfo?.[0]?.TotalInstallmentAmount}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total Ballon Installment Amount:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>
              {props.PlotInfo?.[0]?.TotalBallonInstallmentAmount}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total No of Paid Ballon Installment:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>
              {props.PlotInfo?.[0]?.TotalNoPaidBallonInstallment}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total No of Paid Installment:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>{props.PlotInfo?.[0]?.TotalNoPaidInstallment}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total No of UnPaid Ballon Installment:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>
              {props.PlotInfo?.[0]?.TotalNoUnPaidBalllonInstallment}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total Paid Ballon Installment Amount:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>
              {props.PlotInfo?.[0]?.TotalPaidBallonInstallmentAmount}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total Paid Installment Amount:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>
              {props.PlotInfo?.[0]?.TotalPaidInstallmentAmount}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total Return Amount:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>{props.PlotInfo?.[0]?.TotalReturnAmount}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total UnPaid Balllon Installment Amount:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>
              {props.PlotInfo?.[0]?.TotalUnPaidBalllonInstallmentAmount}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total UnPaid Installment Amount:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>
              {props.PlotInfo?.[0]?.TotalUnPaidInstallmentAmount}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Total UnReturn Amount:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>{props.PlotInfo?.[0]?.TotalUnReturnAmount}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Down Payment:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>{props.PlotInfo?.[0]?.DownPayment}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            {" "}
            <label>Possession Amount:</label>
          </Col>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label>{props.PlotInfo?.[0]?.PossessionAmount}</label>{" "}
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

export default PlotDetailsModal;
