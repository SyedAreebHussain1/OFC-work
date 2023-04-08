import React from "react";
import Headers from "components/Headers/Header1";
import Filteration from "./Filteration";
import {Container,Card,Row,} from "reactstrap";

const Payments = (props) => {
    return (
        <>
      <Headers />
  
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
            <Filteration PaymentResponse={props.PaymentResponse} showPaymentDetail={props.showPaymentDetail} 
            Status={props.Status} showPaymentStatus={props.showPaymentStatus} showProject={props.showProject} Project={props.Project}
            showPaymentCount={props.showPaymentCount} Count={props.Count}
            ></Filteration>
             
            </Card>
          </div>
        </Row>
      </Container>
    </>
    )
}

export default Payments
