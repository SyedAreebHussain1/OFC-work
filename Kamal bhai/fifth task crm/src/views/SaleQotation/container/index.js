import { connect } from "react-redux";
import {
  showPlans,
  getPaymentPlan,
  ShowLeadUser,
  showPackages,
  showPlotPrice,
} from "../middleware";
import SaleQotation from "./SaleQotation";

const mapStateToProps = (state) => ({
  isLoading: state.saleQotation.isLoading,
  isError: state.saleQotation.isError,
  Error: state.saleQotation.error,
  Response: state.saleQotation.Response,
  QuotationNumber: state.saleQotation.QuotationNumber,
  Project: state.saleQotation.Project,
  Values: state.saleQotation.Values,
  User: state.saleQotation.User,
  Packages: state.saleQotation.Packages,
  PlotPrice: state.saleQotation.PlotPrice,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    // showQuotation: ( body,OnSuccess, OnFailure) =>
    // dispatch(showQuotation(body,OnSuccess, OnFailure)),
    showPlans: (packageId, Project_id, Category_id, OnSuccess, OnFailure) =>
      dispatch(
        showPlans(packageId, Project_id, Category_id, OnSuccess, OnFailure)
      ),
    getPaymentPlan: (body, OnSuccess, OnFailure) =>
      dispatch(getPaymentPlan(body, OnSuccess, OnFailure)),
    ShowLeadUser: (body, OnSuccess, OnFailure) =>
      dispatch(ShowLeadUser(body, OnSuccess, OnFailure)),
    showPackages: (body, OnSuccess, OnFailure) =>
      dispatch(showPackages(body, OnSuccess, OnFailure)),
    showPlotPrice: (body, OnSuccess, OnFailure) =>
      dispatch(showPlotPrice(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(SaleQotation);
