import { connect } from "react-redux";
import PaymentStages from "./PaymentStages";
import {
  GetSaleMiddleware,
  GetPayment,
  GetFullPaymentSchedule,
  GetScheduleMiddleware,
  GetSaleOrderByIdMiddleware,
} from "../middleware";
import { GetAllSaleOrder } from "views/AllSaleOrder/middleware";

const mapStateToProps = (state) => ({
  isLoading: state.getsale.isLoading,
  isError: state.getsale.isError,
  Get_SalesOrder: state.getsale.Get_SalesOrder,
  Error: state.getsale.error,
  Get_PaymentStages: state.getsale.Get_PaymentStages,
  GetSale: state.viewsaleorder.GetSale,
  GetPaymentPlan: state.getsale.GetPaymentPlan,
  schedule: state.getsale.schedule,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    GetAllSaleOrder: (body, OnSuccess, OnFailure) =>
      dispatch(GetAllSaleOrder(body, OnSuccess, OnFailure)),

    GetSaleMiddleware: (body, OnSuccess, OnFailure) =>
      dispatch(GetSaleMiddleware(body, OnSuccess, OnFailure)),
    GetPayment: (page, limit, SaleOrderId, OnSuccess, OnFailure) =>
      dispatch(GetPayment(page, limit, SaleOrderId, OnSuccess, OnFailure)),
    GetFullPaymentSchedule: (body, OnSuccess, OnFailure) =>
      dispatch(GetFullPaymentSchedule(body, OnSuccess, OnFailure)),
    GetScheduleMiddleware: (body, OnSuccess, OnFailure) =>
      dispatch(GetScheduleMiddleware(body, OnSuccess, OnFailure)),
    GetSaleOrderByIdMiddleware: (id, OnSuccess, OnFailure) =>
      dispatch(GetSaleOrderByIdMiddleware(id, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(PaymentStages);
