import React from "react";
//import Headers from "components/Headers/Header1";
import Header from "components/Headers/Header1";
import FormOfPaymentReceipt from "./FormOfPaymentReceipt";
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

export const PaymentReceipt = (props) => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col lg="4" md="4" sm="6" xs="12">
                    <h3 className="mb-0">Payment Receipt</h3>
                  </Col>
                  <Col lg="6" md="6" sm="6" xs="12"></Col>
                  <Col lg="2" md="2" sm="6" xs="12">
                    {" "}
                  </Col>
                </Row>
              </CardHeader>
              <FormOfPaymentReceipt
                showAmountMiddleware={props.showAmountMiddleware}
                showPaymentThroughMiddleware={
                  props.showPaymentThroughMiddleware
                }
                showPaymentTypeMiddleware={props.showPaymentTypeMiddleware}
                PaymentAmount={props.PaymentAmount}
                PaymentThrough={props.PaymentThrough}
                PaymentType={props.PaymentType}
                Insert_Payment_Recipt={props.Insert_Payment_Recipt}
                Insert_Payment_Recipt_Middleware={
                  props.Insert_Payment_Recipt_Middleware
                }
                wallet_request_Middleware={props.wallet_request_Middleware}
                wallet_Middleware={props.wallet_Middleware}
                file_Middleware={props.file_Middleware}
                bankMiddleware={props.bankMiddleware}
                banks={props.banks}
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
