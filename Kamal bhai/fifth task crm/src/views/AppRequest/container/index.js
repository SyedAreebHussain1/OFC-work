import { connect } from "react-redux";
import AppRequest from "./AppRequest";
import { showAgent ,GetUser, GetData,LeadId,ShowNominee,ShowAllPositions, ShowPlotPositions} from "../middleware";
import { InsertVerificationFile } from "views/CertificateOfConfirmation/middleware";
import Personal from "./Personal";
const mapStateToProps = (state) => ({
  isLoading: state.appRequest.isLoading,
  isError: state.appRequest.isError,
  Data: state.appRequest.Users,
  Error: state.appRequest.error,
  Response : state.appRequest.Response,

  Value:state.appRequest.Data,
  Delete:state.viewCustomerDetail.Delete,
  LeadUserId:state.appRequest.LeadUserId,
  Nominee:state.appRequest.Nominee,
  AllPositions:state.appRequest.AllPositions,
  Position:state.appRequest.Position,
  Verification: state.certificateOfConfirmation.Verification,
  saleOrderById: state.getsale.saleOrderById,

});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showAgent: (body, OnSuccess, OnFailure) =>
      dispatch(showAgent(body,OnSuccess, OnFailure)),
      GetUser: (body,OnSuccess, OnFailure) =>
       dispatch(GetUser(body,OnSuccess, OnFailure)),
       GetData: (body,OnSuccess, OnFailure) =>
       dispatch(GetData(body,OnSuccess, OnFailure)),
       ShowNominee: (body,OnSuccess, OnFailure) =>
       dispatch(ShowNominee(body,OnSuccess, OnFailure)),

       LeadId: (body,OnSuccess, OnFailure) =>
       dispatch(LeadId(body,OnSuccess, OnFailure)),
       ShowAllPositions: (OnSuccess, OnFailure) =>
       dispatch(ShowAllPositions(OnSuccess, OnFailure)),
       ShowPlotPositions:(body,OnSuccess, OnFailure) =>
       dispatch(ShowPlotPositions(body,OnSuccess, OnFailure)),
       InsertVerificationFile: (body, OnSuccess, OnFailure) =>
       dispatch(InsertVerificationFile(body, OnSuccess, OnFailure)),

  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Personal);
