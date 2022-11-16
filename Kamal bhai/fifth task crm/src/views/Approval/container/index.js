import { connect } from "react-redux";
import {ApprovalAction} from "../middleware"
import { showProject} from "../../../store/helpers/GetProjects/middleware";
import {showPlotSector} from '../../../store/helpers/GetSector/middleware';
import {showPlotType,showPlotSize} from '../../../store/helpers/PlotType/middleware';
import {showPlotStatus,showPlotInfo} from '../../../store/helpers/GetPlotStatus/middleware';
import {showProjectFile} from '../../../store/helpers/GetProjectFile/middleware';
import {showPlotNo} from '../../../store/helpers/GetPlotNo/middleware';
import Main from './Main'

const mapStateToProps = (state) => ({
    ApprovalCheck : state.approval.ApprovalCheck,
    Size:state.plotType.Size,
    Type:state.plotType.Type,
    Sector:state.sector.Sector,
    Project:state.invent.Project,
    SellPlot:state.inventory.SellPlot,
    Status:state.getPlotStatus.Status,
    PlotNo:state.getPlotNo.PlotNo,
    File:state.getProjectFile.File,
  });
  const mapDispatchToPrpos = (dispatch) => {
    return {
    ApprovalAction: (body, OnSuccess, OnFailure) =>
    dispatch(ApprovalAction(body, OnSuccess, OnFailure)),
    showProject: ( OnSuccess, OnFailure) =>
    dispatch(showProject(OnSuccess, OnFailure)),
    showPlotSector: ( body,OnSuccess, OnFailure) =>
    dispatch(showPlotSector(body,OnSuccess, OnFailure)),
    showPlotType: ( OnSuccess, OnFailure) =>
    dispatch(showPlotType(OnSuccess, OnFailure)),
    showPlotSize: ( OnSuccess, OnFailure) =>
    dispatch(showPlotSize(OnSuccess, OnFailure)),
    showPlotStatus: ( OnSuccess, OnFailure) =>
    dispatch(showPlotStatus(OnSuccess, OnFailure)),
    showPlotInfo: ( body,OnSuccess, OnFailure) =>
    dispatch(showPlotInfo(body,OnSuccess, OnFailure)),
    showProjectFile: ( body,OnSuccess, OnFailure) =>
    dispatch(showProjectFile(body,OnSuccess, OnFailure)),
    showPlotNo: (body, OnSuccess, OnFailure) =>
    dispatch(showPlotNo(body,OnSuccess, OnFailure)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToPrpos)(Main);
  