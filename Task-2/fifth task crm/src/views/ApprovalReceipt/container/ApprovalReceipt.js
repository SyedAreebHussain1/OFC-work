
import React, { useEffect } from "react";
import Headers from "components/Headers/Header1";
import Filteration from "./Filteration";
import { Container, Card, Row, } from "reactstrap";
import TableOfApprovalReceipt from "./TableOfApprovalReceipt";

const ApprovalReceipt = (props) => {
        
    
    return (
        <>
            <Headers />

            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <TableOfApprovalReceipt ShowApprovalReceipt={props.ShowApprovalReceipt} 
                            Response={props.Response} Update={props.Update} ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus} 
                            ReceiptUpdate={props.ReceiptUpdate} ShowUpdatePayment={props.ShowUpdatePayment}
                            
                            
                            >

                            </TableOfApprovalReceipt>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default ApprovalReceipt



