import axios from "axios";
import { GET_ALL_SALEORDER_PATH, SALEORDER_DETAILS_PATH } from "../constant"
import { ViewAllSaleOrder, ViewSaleOrderDetail } from "../action"
import { BASEURL,URL } from "config/api/URL"

export const GetAllSaleOrder = (page,limit,SaleOrderNo,user_phone,OnSuccess, OnFailure) => (dispatch) => {
    dispatch(ViewAllSaleOrder.ViewSaleOrder());

    let token = localStorage.getItem("auth");
    axios
        .get(`${BASEURL}${GET_ALL_SALEORDER_PATH}?page=${page}&limit=${limit}${SaleOrderNo!=="" && SaleOrderNo!==null?`&SaleOrderNo=${SaleOrderNo}`:""}${user_phone!==""&& user_phone!==null?`&user_phone=${user_phone}`:""}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`,
            },
        })
        .then((res) => {
    

            if (res.data.status === true) {
                dispatch(ViewAllSaleOrder.ViewSaleOrderSuccess(res.data));
                dispatch(OnSuccess(res.data.message));
            } else {
                dispatch(ViewAllSaleOrder.ViewSaleOrderFailure(res.data.message));
                dispatch(OnFailure(res.data.message));
            }
        })
        .catch((error) => dispatch(ViewAllSaleOrder.ViewSaleOrderFailure(error)));
};

export const GetAllSaleOrderStatus = (OnSuccess, OnFailure) => (dispatch) => {
   
    dispatch(ViewSaleOrderDetail.ViewSaleOrderDetail());
    let token = localStorage.getItem("auth");
    axios
        .get(`${BASEURL}${SALEORDER_DETAILS_PATH}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`,
            },
        })
        .then((res) => {
            if (res.data.status === true) {
                dispatch(ViewSaleOrderDetail.ViewSaleOrderDetailSuccess(res.data.response));
                dispatch(OnSuccess(res.data.message));
            } else {
                dispatch(ViewSaleOrderDetail.ViewSaleOrderDetailFailure(res.data.message));
                dispatch(OnFailure(res.data.message));
            }
        })
        .catch((error) => dispatch(ViewSaleOrderDetail.ViewSaleOrderDetailFailure(error)));
};