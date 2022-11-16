import { connect } from "react-redux";
import {GetAllSaleOrder , GetAllSaleOrderStatus} from "../middleware"
import { AllSaleOrder } from "./AllSaleOrder";
const mapStateToProps = (state) => ({
    isLoading: state.viewsaleorder.isLoading,
    isError: state.viewsaleorder.isError,
    Error: state.viewsaleorder.error,
    GetSale: state.viewsaleorder.GetSale,
    GetSaleStatus: state.viewsaleorder.GetSaleStatus,
  });
  const mapDispatchToPrpos = (dispatch) => {
    return {
        GetAllSaleOrder: (page, limit,SaleOrderNo,user_phone, OnSuccess, OnFailure) =>
        dispatch(GetAllSaleOrder(page,limit, SaleOrderNo,user_phone,OnSuccess, OnFailure)),
        GetAllSaleOrderStatus: (OnSuccess, OnFailure) =>
        dispatch(GetAllSaleOrderStatus(OnSuccess, OnFailure)),
    };
  };
export default connect(mapStateToProps, mapDispatchToPrpos)(AllSaleOrder);