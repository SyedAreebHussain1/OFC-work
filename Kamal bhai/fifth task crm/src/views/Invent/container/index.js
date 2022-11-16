import { connect } from "react-redux";
import { showProject } from "../../../store/helpers/GetProjects/middleware";
import { showProjectFile } from "../../../store/helpers/GetProjectFile/middleware";
import { showPlotSector } from "../../../store/helpers/GetSector/middleware";
import {
  showPlotType,
  showPlotSize,
} from "../../../store/helpers/PlotType/middleware";
import {
  showPlotStatus,
  showPlotInfo,
} from "../../../store/helpers/GetPlotStatus/middleware";
import Invent from "./Invent";
import Filteration from "./Filteration";
import Main from "./Main";
import { Table } from "reactstrap";
import { FiberPin } from "@material-ui/icons";
const mapStateToProps = (state) => ({
  isLoading: state.invent.isLoading,
  isError: state.invent.isError,
  Error: state.invent.error,
  Size: state.plotType.Size,
  Type: state.plotType.Type,
  Sector: state.sector.Sector,
  Project: state.invent.Project,
  SellPlot: state.inventory.SellPlot,
  Status: state.getPlotStatus.Status,
  Info: state.getPlotStatus.Info,
  File: state.getProjectFile.File,
  Delete: state.getPlotDetails.Delete,
  Add: state.getPlotDetails.Add,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showProject: (OnSuccess, OnFailure) =>
      dispatch(showProject(OnSuccess, OnFailure)),
    showPlotSector: (body, OnSuccess, OnFailure) =>
      dispatch(showPlotSector(body, OnSuccess, OnFailure)),
    showPlotType: (OnSuccess, OnFailure) =>
      dispatch(showPlotType(OnSuccess, OnFailure)),
    showPlotSize: (OnSuccess, OnFailure) =>
      dispatch(showPlotSize(OnSuccess, OnFailure)),
    showPlotStatus: (OnSuccess, OnFailure) =>
      dispatch(showPlotStatus(OnSuccess, OnFailure)),
    showPlotInfo: (
      page,
      limit,
      Project_name,
      Sector_Name,
      PlotType_Name,
      CategoryName,
      House_StatusName,
      Plot_no,
      OnSuccess,
      OnFailure
    ) =>
      dispatch(
        showPlotInfo(
          page,
          limit,
          Project_name,
          Sector_Name,
          PlotType_Name,
          CategoryName,
          House_StatusName,
          Plot_no,
          OnSuccess,
          OnFailure
        )
      ),
    showProjectFile: (body, OnSuccess, OnFailure) =>
      dispatch(showProjectFile(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Main);
