import { connect } from "react-redux";
import BookingForm from "./BookingForm";
import { showAgent ,GetUser, GetData,LeadId,ShowNominee,ShowAllPositions, 
  ShowPlotPositions,ShowAllForms,InsertIntegrateCRM} from "../middleware";
import { InsertVerificationFile } from "views/CertificateOfConfirmation/middleware";
import Personal from "./Personal";
import {
  showPlotCategory,
  showPlotSector,
  showProject,
  showPlotStreet,
} from "views/Inventory/middleware";
import {
  showPlotType,
  showPlotSize,
} from "../../../store/helpers/PlotType/middleware";

const mapStateToProps = (state) => ({
  Size:state.plotType.Size,
  Type:state.plotType.Type,
  Sector: state.inventory.Sector,
 
  Project: state.inventory.Project,
  Street: state.inventory.Street,
  Forms:state.bookingForm.Forms,
  Integrate:state.bookingForm.Integrate,

  //appRequest
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

});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showProject: (OnSuccess, OnFailure) =>
    dispatch(showProject(OnSuccess, OnFailure)),
  showPlotCategory: (OnSuccess, OnFailure) =>
    dispatch(showPlotCategory(OnSuccess, OnFailure)),
  showPlotSize: (OnSuccess, OnFailure) =>
    dispatch(showPlotSize(OnSuccess, OnFailure)),
  showPlotType: (OnSuccess, OnFailure) =>
    dispatch(showPlotType(OnSuccess, OnFailure)),
  showPlotSector: (body, OnSuccess, OnFailure) =>
    dispatch(showPlotSector(body, OnSuccess, OnFailure)),
    showPlotStreet: (OnSuccess, OnFailure) =>
      dispatch(showPlotStreet(OnSuccess, OnFailure)),

ShowAllForms: (body,OnSuccess, OnFailure) =>
dispatch(ShowAllForms(body,OnSuccess, OnFailure)),

InsertIntegrateCRM:(body,OnSuccess, OnFailure) =>
dispatch(InsertIntegrateCRM(body,OnSuccess, OnFailure)),
    //appRequest
    // showAgent: (body, OnSuccess, OnFailure) =>
    //   dispatch(showAgent(body,OnSuccess, OnFailure)),
    //   GetUser: (body,OnSuccess, OnFailure) =>
    //    dispatch(GetUser(body,OnSuccess, OnFailure)),
    //    GetData: (body,OnSuccess, OnFailure) =>
    //    dispatch(GetData(body,OnSuccess, OnFailure)),
    //    ShowNominee: (body,OnSuccess, OnFailure) =>
    //    dispatch(ShowNominee(body,OnSuccess, OnFailure)),

      //  LeadId: (body,OnSuccess, OnFailure) =>
      //  dispatch(LeadId(body,OnSuccess, OnFailure)),
       ShowAllPositions: (OnSuccess, OnFailure) =>
       dispatch(ShowAllPositions(OnSuccess, OnFailure)),
      //  ShowPlotPositions:(body,OnSuccess, OnFailure) =>
      //  dispatch(ShowPlotPositions(body,OnSuccess, OnFailure)),
      //  InsertVerificationFile: (body, OnSuccess, OnFailure) =>
      //  dispatch(InsertVerificationFile(body, OnSuccess, OnFailure)),

  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Personal);
