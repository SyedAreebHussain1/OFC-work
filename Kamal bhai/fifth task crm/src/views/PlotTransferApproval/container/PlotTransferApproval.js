import React from 'react'
import FormOfPlotTransferApproval from './FormOfPlotTransferApproval'
import Header from 'components/Headers/Header1';

import {CardHeader,Row,Col,Container,Card} from "reactstrap";

const PlotTransferApproval = () => {
    return (
    <>
     <Header/>
     <Container className="mt--7" fluid>
      <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <h3 className="mb-0">Transfer Form</h3>
                             </Col>
                            <Col lg="6" md="6" sm="6" xs="12"></Col>
                            <Col lg="2" md="2" sm="6" xs="12"> </Col>
                        </Row>
                    </CardHeader>
            <FormOfPlotTransferApproval/>
      </Card>
     </Container>
            
    </>
    )
}

export default PlotTransferApproval
