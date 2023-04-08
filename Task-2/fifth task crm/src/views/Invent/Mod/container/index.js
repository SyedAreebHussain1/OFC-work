import { connect } from "react-redux";
import Mod from "./Mod";
import { showQuotationDetail } from "../middleware";
import {showUpdateStatus,showSaleOrder} from '../../../../store/helpers/GetSaleOrder/middleware';
import {showPlotInfo} from '../../../../store/helpers/GetPlotStatus/middleware';
const mapStateToProps = (state) => ({
Quotations:state.modal.Quotations,
Updatestatus:state.getSaleOrder.Updatestatus,
Order:state.getSaleOrder.Order,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showQuotationDetail: (body, OnSuccess, OnFailure) =>
    dispatch(showQuotationDetail(body, OnSuccess, OnFailure)),
    showUpdateStatus: (body, OnSuccess, OnFailure) =>
    dispatch(showUpdateStatus(body, OnSuccess, OnFailure)),
    showSaleOrder: (body, OnSuccess, OnFailure) =>
    dispatch(showSaleOrder(body, OnSuccess, OnFailure)),
    showPlotInfo: (body, OnSuccess, OnFailure) =>
    dispatch(showPlotInfo(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Mod);
