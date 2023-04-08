import { connect } from "react-redux";
import { ViewQuotation } from "./ViewQuotationDetail";
import { GetAllQuotation, GetAllQuotationStatus } from "../middleware";
import { showProject } from "../../../../store/helpers/GetProjects/middleware";
import { showPlotSector } from "../../../../store/helpers/GetSector/middleware";
import {
  showPlotType,
  showPlotSize,
} from "../../../../store/helpers/PlotType/middleware";
import {
  showPlotStatus,
  showPlotInfo,
} from "../../../../store/helpers/GetPlotStatus/middleware";
import { showProjectFile } from "../../../../store/helpers/GetProjectFile/middleware";
import { showPlotNo } from "../../../../store/helpers/GetPlotNo/middleware";

const mapStateToProps = (state) => ({
  isLoading: state.viewquotation.isLoading,
  isError: state.viewquotation.isError,
  GetsQuotation: state.viewquotation.GetsQuotation,
  Error: state.viewquotation.error,
  Size: state.plotType.Size,
  Type: state.plotType.Type,
  Sector: state.sector.Sector,
  Project: state.invent.Project,
  SellPlot: state.inventory.SellPlot,
  Status: state.getPlotStatus.Status,
  Info: state.getPlotStatus.Info,
  File: state.getProjectFile.File,
  PlotNo: state.getPlotNo.PlotNo,
  GetsQuotationStatus: state.viewquotation.GetsQuotationStatus,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    GetAllQuotation: (
      page,
      limit,
      SaleQuotationNo,
      QuotationStatusName,
      user_phone,
      OnSuccess,
      OnFailure
    ) =>
      dispatch(
        GetAllQuotation(
          page,
          limit,
          SaleQuotationNo,
          QuotationStatusName,
          user_phone,
          OnSuccess,
          OnFailure
        )
      ),
    GetAllQuotationStatus: (OnSuccess, OnFailure) =>
      dispatch(GetAllQuotationStatus(OnSuccess, OnFailure)),
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
    showPlotInfo: (body, OnSuccess, OnFailure) =>
      dispatch(showPlotInfo(body, OnSuccess, OnFailure)),
    showProjectFile: (body, OnSuccess, OnFailure) =>
      dispatch(showProjectFile(body, OnSuccess, OnFailure)),
    showPlotNo: (body, OnSuccess, OnFailure) =>
      dispatch(showPlotNo(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(ViewQuotation);
