import axios from "axios";
import {
  GetSalesOrder,
  GetPaymentStages,
  GetFullPaymentStages,
  GetPaymentSchedule,
  GetSaleOrderByIdAction,
  GetRecieptDetailsByIdAction,
} from "../action/index";
import {
  GET_SALE_ORDER_PATH,
  GET_PAYMENT_STAGES_PATH,
  GET_FULL_PAYMENT_STAGES_PATH,
  GET_PAYMENT_SCHEDULE_PATH,
  GET_SALE_ORDER_BY_ID_PATH,
  GET_RECIEPT_BY_ID_PATH,
} from "../constant";
import { BASEURL } from "config/api/URL";

export const GetRecieptDetailsByIdMiddleware =
  (id, onSuccess, onFailure) => (dispatch) => {
    dispatch(GetRecieptDetailsByIdAction.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(`${BASEURL}${GET_RECIEPT_BY_ID_PATH}/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            GetRecieptDetailsByIdAction.FetchSuccess({
              response: res.data.response,
            })
          );
          dispatch(onSuccess(res.data.response));
        } else {
          dispatch(GetRecieptDetailsByIdAction.FetchFailure(res.data.message));
          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetSaleOrderByIdAction.FetchFailure(error)));
  };

export const GetSaleOrderByIdMiddleware =
  (id, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetSaleOrderByIdAction.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(`${BASEURL}${GET_SALE_ORDER_BY_ID_PATH}?SaleOrderId=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            GetSaleOrderByIdAction.FetchSuccess({
              response: res.data.response,
              totalInstallments: res.data.totalInstallments,
            })
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetSaleOrderByIdAction.FetchFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetSaleOrderByIdAction.FetchFailure(error)));
  };

export const GetScheduleMiddleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetPaymentSchedule.GetPaymentScheduleSuccess());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${GET_PAYMENT_SCHEDULE_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })

      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            GetPaymentSchedule.GetPaymentScheduleSuccess(res.data.response)
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(
            GetPaymentSchedule.GetPaymentScheduleFailure(res.data.message)
          );
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(GetPaymentSchedule.GetPaymentScheduleFailure(error))
      );
  };

export const GetSaleMiddleware = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(GetSalesOrder.GetSales());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${GET_SALE_ORDER_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })

    .then((res) => {
      if (res.data.status === true) {
        dispatch(GetSalesOrder.GetSalesSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(GetSalesOrder.GetSalesFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(GetSalesOrder.GetSalesFailure(error)));
};

export const GetFullPaymentSchedule =
  (SaleOrderNo, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetFullPaymentStages.GetFullPayment());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_FULL_PAYMENT_STAGES_PATH}?SaleOrderId=${SaleOrderNo}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )

      .then((res) => {
        if (res.data.status === true) {
          dispatch(GetFullPaymentStages.GetFullPaymentSuccess(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(
            GetFullPaymentStages.GetFullPaymentFailure(res.data.message)
          );
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(GetFullPaymentStages.GetFullPaymentFailure(error))
      );
  };

export const GetPayment =
  (page, limit, SaleOrderNo, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetPaymentStages.GetPayment());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_PAYMENT_STAGES_PATH}?page=${page}&limit=${limit}&SaleOrderNo=${SaleOrderNo}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )

      .then((res) => {
        if (res.data.status === true) {
          dispatch(GetPaymentStages.GetPaymentSuccess(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetPaymentStages.GetPaymentFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetPaymentStages.GetPaymentFailure(error)));
  };
