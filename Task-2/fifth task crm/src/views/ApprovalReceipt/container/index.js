import { connect } from "react-redux";
// import ApprovalReceipt from "./ApprovalReceipt";
import { ShowApprovalReceipt,ShowUpdateApprovalStatus } from "../middleware";
import { ShowUpdatePayment } from '../middleware';
import Headers from "components/Headers/Header1";
import Filteration from "./Filteration";
import { Container, Card, Row, } from "reactstrap";
import TableOfApprovalReceipt from "./TableOfApprovalReceipt";
import { useEffect } from "react";

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

const mapStateToProps = (state) => ({
  
Response : state.approvalReceipt.Response,
Update:state.approvalReceipt.Update,
ReceiptUpdate:state.approvalReceipt.ReceiptUpdate,
getMsg:state.approvalReceipt?.apprveMsg
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    ShowApprovalReceipt: (OnSuccess, OnFailure) =>
    dispatch(ShowApprovalReceipt(OnSuccess, OnFailure)),
    ShowUpdateApprovalStatus: (body,OnSuccess, OnFailure) =>
    dispatch(ShowUpdateApprovalStatus(body,OnSuccess, OnFailure)),
    ShowUpdatePayment: (body,OnSuccess, OnFailure) =>
    dispatch(ShowUpdatePayment(body,OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(ApprovalReceipt);
