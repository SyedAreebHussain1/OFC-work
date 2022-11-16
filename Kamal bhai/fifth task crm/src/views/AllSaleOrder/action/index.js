import {
    GET_ALL_SALEORDER,
    GET_ALL_SALEORDER_SUCCESS,
    GET_ALL_SALEORDER_FAILURE,

    SALEORDER_DETAILS,
    SALEORDER_DETAILS_SUCCESS,
    SALEORDER_DETAILS_FAILURE
} from "../constant.js"

export class ViewAllSaleOrder {
    static ViewSaleOrder() {
        return {
            type: GET_ALL_SALEORDER,
        };
    }
    static ViewSaleOrderSuccess(response) {
        return {
            type: GET_ALL_SALEORDER_SUCCESS,
            payload: response,
        };
    }
    static ViewSaleOrderFailure(error) {
        return {
            type: GET_ALL_SALEORDER_FAILURE,
            error,
        };
    }
}

export class ViewSaleOrderDetail {
    static ViewSaleOrderDetail() {
        return {
            type: SALEORDER_DETAILS,
        };
    }
    static ViewSaleOrderDetailSuccess(response) {
        return {
            type: SALEORDER_DETAILS_SUCCESS,
            payload: response,
        };
    }
    static ViewSaleOrderDetailFailure(error) {
        return {
            type: SALEORDER_DETAILS_FAILURE,
            error,
        };
    }
}