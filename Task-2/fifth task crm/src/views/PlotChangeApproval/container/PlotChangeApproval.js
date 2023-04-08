import React from "react";
import Headers from "components/Headers/Header1";

import { Container, Card, Row, } from "reactstrap";

import TableOfPlotChangeApproval from "./TableOfPlotChangeApproval";
import Filteration from 'views/PlotChangeApproval/container/Filteration';

const PlotChangeApproval = (props) => {
    return (
       
            <>
                <Headers />
    
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <Filteration ShowAllChangeRequest={props.ShowAllChangeRequest} 
                                ChangeRequest={props.ChangeRequest} ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus} Update={props.Update}
                                AllStatus={props.AllStatus} ShowAllStatus={props.ShowAllStatus}/>
                               
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        
    
    )
}

export default PlotChangeApproval
