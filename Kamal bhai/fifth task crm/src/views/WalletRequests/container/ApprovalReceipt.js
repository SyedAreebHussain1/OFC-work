import React from "react";
import Headers from "components/Headers/Header1";
import Filteration from "./Filteration";
import { Container, Card, Row } from "reactstrap";
import TableOfApprovalReceipt from "./TableOfApprovalReceipt";

const ApprovalReceipt = (props) => {
  return (
    <>
      <Headers />

      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <TableOfApprovalReceipt
                ShowApprovalReceipt={props.GetAllRequests_Middleware}
                Response={props.Response}
                Responseupdate={props.Responseupdate}
                Update={props.UpdateRequest_Middleware}
                ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus}
                UpdatePayment={props.UpdatePayment}
                ShowUpdatePayment={props.ShowUpdatePayment}
              ></TableOfApprovalReceipt>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ApprovalReceipt;
