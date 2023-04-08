import { connect } from "react-redux";
import Inventory from "./Inventory";
import Filteration from "./Filteration";
import Plot_information from "../Plot_information";
import {
  showPlotCategory,
  showPlotSector,
  showPlotDirection,
  showProject,
  showPlotStreet,
  showPlotNo,
  updateSellPlot,
  ShowPlotInformation,
} from "../middleware";
import { showPlotStatus } from "../../../../store/helpers/GetPlotStatus/middleware";
import {
  showPlotType,
  showPlotSize,
} from "../../../../store/helpers/PlotType/middleware";
const mapStateToProps = (state) => ({
  isLoading: state.inventory.isLoading,
  isError: state.inventory.isError,
  Error: state.inventory.error,
  Response: state.inventory.Response,
  // Size:state.inventory.Size,
  // Type:state.inventory.Type,
  Status: state.getPlotStatus.Status,
  Size: state.plotType.Size,
  Type: state.plotType.Type,
  Sector: state.inventory.Sector,
  Direction: state.inventory.Direction,
  Project: state.inventory.Project,
  Street: state.inventory.Street,
  PlotNo: state.inventory.PlotNo,
  SellPlot: state.inventory.SellPlot,
  PlotPositionsValues: state.inventory.PlotPositionsValues,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showProject: (OnSuccess, OnFailure) =>
      dispatch(showProject(OnSuccess, OnFailure)),
    showPlotCategory: (OnSuccess, OnFailure) =>
      dispatch(showPlotCategory(OnSuccess, OnFailure)),
    showPlotSize: (OnSuccess, OnFailure, id) =>
      dispatch(showPlotSize(OnSuccess, OnFailure, id)),
    showPlotType: (OnSuccess, OnFailure) =>
      dispatch(showPlotType(OnSuccess, OnFailure)),
    showPlotSector: (body, OnSuccess, OnFailure) =>
      dispatch(showPlotSector(body, OnSuccess, OnFailure)),
    showPlotDirection: (OnSuccess, OnFailure) =>
      dispatch(showPlotDirection(OnSuccess, OnFailure)),
    showPlotStreet: (OnSuccess, OnFailure) =>
      dispatch(showPlotStreet(OnSuccess, OnFailure)),
    showPlotNo: (
      page,
      limit,
      Project_name,
      Sector_Name,
      House_StatusName,
      Plot_no,
      CategoryName,
      PlotType_Name,
      OnSuccess,
      OnFailure
    ) =>
      dispatch(
        showPlotNo(
          page,
          limit,
          Project_name,
          Sector_Name,
          House_StatusName,
          Plot_no,
          CategoryName,
          PlotType_Name,
          OnSuccess,
          OnFailure
        )
      ),
    updateSellPlot: (body, OnSuccess, OnFailure) =>
      dispatch(updateSellPlot(body, OnSuccess, OnFailure)),

    //MUSTAFA

    ShowPlotInformation: (body, OnSuccess, OnFailure) =>
      dispatch(ShowPlotInformation(body, OnSuccess, OnFailure)),

    showPlotStatus: (OnSuccess, OnFailure) =>
      dispatch(showPlotStatus(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(
  Inventory,
  Plot_information
);
