
import React from 'react'
import Header from 'components/Headers/Header1';
import { CardBody, Button, CardHeader, Row, Col, Input, Container, Card } from "reactstrap";
import FormOfFormIssue from "./FormOfFormIssue";

const FormIssue = (props) => {
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
                                        <h3 className="mb-0">Agent Detail</h3>
                                    </Col>
                                    <Col lg="6" md="6" sm="6" xs="12"></Col>
                                    <Col lg="2" md="2" sm="6" xs="12"> </Col>
                                </Row>
                            </CardHeader>
                            <FormOfFormIssue InsertRealStateAgent={props.InsertRealStateAgent} Agent={props.Agent} getNotesStats={props.getNotesStats} status={props.status} />

                        </Card>
                    </div>
                </Row>

            </Container>
        </>
    )
}

export default FormIssue
