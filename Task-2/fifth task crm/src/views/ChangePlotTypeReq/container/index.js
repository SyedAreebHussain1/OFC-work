import { connect } from "react-redux";

import ChangePlotTypeReq from "./ChangePlotTypeReq";
import { ShowAllPlotReturn, ShowPlotInfo,UpdatePlotReturnStatus } from "../middleware";


const mapStateToProps = (state) => ({

    PlotReturn:state.changePlotTypeReq.PlotReturn,
    PlotInfo:state.changePlotTypeReq.PlotInfo,
    UpdateStatus:state.changePlotTypeReq.UpdateStatus,
 

});
const mapDispatchToPrpos = (dispatch) => {
  return {
    ShowAllPlotReturn: (page, limit,OnSuccess, OnFailure) =>
    dispatch(ShowAllPlotReturn(page,limit,OnSuccess, OnFailure)),
    ShowPlotInfo: (body,OnSuccess, OnFailure) =>
    dispatch(ShowPlotInfo(body, OnSuccess, OnFailure)),
    UpdatePlotReturnStatus:(body,OnSuccess, OnFailure) =>
    dispatch(UpdatePlotReturnStatus(body, OnSuccess, OnFailure)),
    
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(ChangePlotTypeReq);
