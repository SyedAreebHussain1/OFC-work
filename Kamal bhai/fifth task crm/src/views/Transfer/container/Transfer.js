import React from "react";
import FormOfFileInfo from "views/FileInfo/container/FormOfFileInfo";
import FormOfTransfer from "./FormOfTransfer";
import Header from "components/Headers/Header1";

import {
  CardBody,
  Button,
  CardHeader,
  Row,
  Col,
  Input,
  Container,
  Card,
} from "reactstrap";

const Transfer = (props) => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Card className="shadow">
          <CardHeader className="border-0">
            <Row>
              <Col lg="4" md="4" sm="6" xs="12">
                <h3 className="mb-0">Transfer Form</h3>
              </Col>
              <Col lg="6" md="6" sm="6" xs="12"></Col>
              <Col lg="2" md="2" sm="6" xs="12">
                {" "}
              </Col>
            </Row>
          </CardHeader>
          <FormOfTransfer
            _getPaymentDetailsMiddleware={props._getPaymentDetailsMiddleware}
            ShowUserInfo={props.ShowUserInfo}
            Users={props.Users}
            PaymentDetails={props.PaymentDetails}
            ShowPlotTransfer={props.ShowPlotTransfer}
            TransferReq={props.TransferReq}
          />
        </Card>
      </Container>
    </>
  );
};

export default Transfer;
