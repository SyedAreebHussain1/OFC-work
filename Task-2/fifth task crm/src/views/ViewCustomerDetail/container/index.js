import { connect } from "react-redux";
import ViewCustomer from "./ViewCustomerDetail";
import { showAgent,showPlotSector,showProject, 
  showLead, deleteLead, showClientDetail, CallRecording,
  showInsertNewFileDetail,showPlotNo,
      newPlotMiddleware,
      ShowPlotInformation,ChangePlotMiddleware, } from "../middleware";

import {   
  showReturnPlot,InsertReturnPlot } from "../middleware";
const mapStateToProps = (state) => ({
  isLoading: state.viewCustomerDetail.isLoading,
  isError: state.viewCustomerDetail.isError,
  Data: state.viewCustomerDetail.Users,
  Error: state.viewCustomerDetail.error,
  Response : state.viewCustomerDetail.Response,
  Delete:state.viewCustomerDetail.Delete,
  Client:state.viewCustomerDetail.Client,


  Call_Records:state.viewCustomerDetail.Call_Records,
  File:state.viewCustomerDetail.File,

  Project:state.viewCustomerDetail.Project,
  Sector:state.viewCustomerDetail.Sector,
  PlotNo:state.viewCustomerDetail.PlotNo,
  PlotPositionsValues: state.viewCustomerDetail.PlotPositionsValues, 
  ChangePlotStatus: state.viewCustomerDetail.ChangePlotStatus,
  NewPosition: state.viewCustomerDetail.NewPosition,


  PlotReturn:state.viewCustomerDetail.PlotReturn,
  ReturnRequest:state.viewCustomerDetail.ReturnRequest,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showProject: ( OnSuccess, OnFailure) =>
    dispatch(showProject(OnSuccess, OnFailure)),
    showPlotSector: ( body,OnSuccess, OnFailure) =>
    dispatch(showPlotSector(body,OnSuccess, OnFailure)),

    showInsertNewFileDetail: (body, OnSuccess, OnFailure) =>
    dispatch(showInsertNewFileDetail(body, OnSuccess, OnFailure)),
      showClientDetail: (page, limit,UserPhoneNumber,UserEmail, OnSuccess, OnFailure) =>
      dispatch(showClientDetail(page, limit,UserPhoneNumber,UserEmail,  OnSuccess, OnFailure)),
      showAgent: ( OnSuccess, OnFailure) =>
      dispatch(showAgent(OnSuccess, OnFailure)),
      showLead: (body,OnSuccess, OnFailure) =>
      dispatch(showLead( body, OnSuccess, OnFailure)),
      deleteLead: (body,OnSuccess, OnFailure) =>
      dispatch(deleteLead( body, OnSuccess, OnFailure)),

      showPlotNo: (Project_name, Sector_Name, OnSuccess, OnFailure) =>
      dispatch(showPlotNo(Project_name, Sector_Name, OnSuccess, OnFailure)),
   

      // showPlotNo: (body, OnSuccess, OnFailure) =>
      // dispatch(showPlotNo(body,OnSuccess, OnFailure)),

      CallRecording: (body,OnSuccess, OnFailure) =>
      dispatch(CallRecording( body, OnSuccess, OnFailure)),

      ShowPlotInformation: (body,OnSuccess, OnFailure) =>
      dispatch(ShowPlotInformation( body, OnSuccess, OnFailure)),

      ChangePlotMiddleware: (body,OnSuccess, OnFailure) =>
      dispatch(ChangePlotMiddleware( body, OnSuccess, OnFailure)),

      newPlotMiddleware: (body,OnSuccess, OnFailure) =>
      dispatch(newPlotMiddleware( body, OnSuccess, OnFailure)),


      
      showReturnPlot: (body,OnSuccess, OnFailure) =>
      dispatch(showReturnPlot( body, OnSuccess, OnFailure)),
      InsertReturnPlot: (body,OnSuccess, OnFailure) =>
      dispatch(InsertReturnPlot( body, OnSuccess, OnFailure)),
 
  
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(ViewCustomer);
