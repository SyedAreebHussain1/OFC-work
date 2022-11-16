import React from 'react'
//import Headers from "components/Headers/Header1";
import Header from 'components/Headers/Header1';
import FormOfTransferReceipt from './FormOfTransferReceipt';
import {CardBody, Button,CardHeader,Row,Col,Input,Container,Card} from "reactstrap";



export const TransferReceipt = (props) => {

  return (
    <>
      <Header/>
      <Container className="mt--7" fluid>
      <Row>
            <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <h3 className="mb-0">Transfer Payment Receipt</h3>
                             </Col>
                            <Col lg="6" md="6" sm="6" xs="12"></Col>
                            <Col lg="2" md="2" sm="6" xs="12"> </Col>
                        </Row>
                    </CardHeader>
                   <FormOfTransferReceipt TransferInfo={props.TransferInfo} GetTransferInfoMiddleware={props.GetTransferInfoMiddleware}
                    showAmountMiddleware={props.showAmountMiddleware}  
                   showPaymentThroughMiddleware={props.showPaymentThroughMiddleware} 
                   showPaymentTypeMiddleware={props.showPaymentTypeMiddleware} 
                   PaymentAmount ={props.PaymentAmount} PaymentThrough={props.PaymentThrough}
                   PaymentType={props.PaymentType} Insert_Payment_Recipt={props.Insert_Payment_Recipt}
                   Insert_Payment_Recipt_Middleware={props.Insert_Payment_Recipt_Middleware}
                   />
                </Card>
            </div>
        </Row> 
       
      </Container>
    </>
  );
};


