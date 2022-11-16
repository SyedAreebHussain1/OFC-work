import { connect } from "react-redux";
import { SaleOrder } from "./SaleOrder";
import {
  SaleOrderMiddleware,
  ShowPaymentType,
  ShowPaymentThrough,
  ShowCurrencyType,
  ShowPaymentSchedule,
  ShowShortPaymentSchedule,
  InsertPaymentStages,
  CustomPlanGenerateMiddleware,
  getFullSaleOrderPlan,
} from "../middleware";
import { showPlans, showPlotPrice } from "views/SaleQotation/middleware";

const mapStateToProps = (state) => ({
  isLoading: state.salesorder.isLoading,
  isError: state.salesorder.isError,
  SalesOrder: state.salesorder.SalesOrder,
  Error: state.salesorder.error,
  PaymentType: state.salesorder.PaymentType,
  PaymentThrough: state.salesorder.PaymentThrough,
  CurrencyType: state.salesorder.CurrencyType,
  Response: state.saleQotation.Response,
  PaymentSchedule: state.salesorder.PaymentSchedule,
  ShortPaymentSchedule: state.salesorder.ShortPaymentSchedule,
  Stages: state.salesorder.Stages,
  PlotPrice: state.saleQotation.PlotPrice,
  PrintFullPlan: state.salesorder.PrintFullPlan,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    getFullSaleOrderPlan: (body, OnSuccess, OnFailure) =>
      dispatch(getFullSaleOrderPlan(body, OnSuccess, OnFailure)),
    SaleOrderMiddleware: (body, OnSuccess, OnFailure) =>
      dispatch(SaleOrderMiddleware(body, OnSuccess, OnFailure)),
    InsertPaymentStages: (body, OnSuccess, OnFailure) =>
      dispatch(InsertPaymentStages(body, OnSuccess, OnFailure)),
    ShowPaymentType: (OnSuccess, OnFailure) =>
      dispatch(ShowPaymentType(OnSuccess, OnFailure)),
    ShowPaymentThrough: (OnSuccess, OnFailure) =>
      dispatch(ShowPaymentThrough(OnSuccess, OnFailure)),
    ShowCurrencyType: (OnSuccess, OnFailure) =>
      dispatch(ShowCurrencyType(OnSuccess, OnFailure)),
    // saveQuotation: (body,OnSuccess, OnFailure) =>
    // dispatch(saveQuotation(body,OnSuccess, OnFailure)),
    showPlans: (packageId, Project_id, Category_id, OnSuccess, OnFailure) =>
      dispatch(
        showPlans(packageId, Project_id, Category_id, OnSuccess, OnFailure)
      ),
    ShowPaymentSchedule: (body, OnSuccess, OnFailure) =>
      dispatch(ShowPaymentSchedule(body, OnSuccess, OnFailure)),
    ShowShortPaymentSchedule: (body, OnSuccess, OnFailure) =>
      dispatch(ShowShortPaymentSchedule(body, OnSuccess, OnFailure)),

    showPlotPrice: (body, OnSuccess, OnFailure) =>
      dispatch(showPlotPrice(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(SaleOrder);
