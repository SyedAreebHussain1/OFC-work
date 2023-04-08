import axios from "axios";
import {
  SalesOrderForm,
  PaymentTypeData,
  PaymentThroughData,
  CurrencyType,
  PaymentScheduleDetail,
  ShortPaymentScheduleDetail,
  PaymentStagesDetail,
  CustomPlanDetail,
  PrintSaleOrderPlanDetail,
  PrintCustomPlanDetail,
  PrintFullSaleOrderPlanDetail,
} from "../action/index";

import {
  SALE_ORDER_PATH,
  PAYMENT_TYPE_PATH,
  PAYMENT_THROUGH_PATH,
  CURRENCY_TYPE_PATH,
  PAYMENT_SCHEDULE_PATH,
  SHORT_PAYMENT_SCHEDULE_PATH,
  PAYMENT_STAGES_PATH,
  CUSTOM_PLAN_GENERATE_PATH,
  PRINT_SALEORDER_PLAN_PATH,
  PRINT_CUSTOM_PLAN_PATH,
  PRINT_FULL_SALEORDER_PLAN_PATH,
} from "../constant";
import { BASEURL, LOCALBASEURL, URL } from "config/api/URL";

export const getFullSaleOrderPlan =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PrintSaleOrderPlanDetail.PrintSaleOrderPlan());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${PRINT_FULL_SALEORDER_PLAN_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            PrintFullSaleOrderPlanDetail.PrintFullSaleOrderPlan(
              res.data.response
            )
          );
          dispatch(OnSuccess(res.data.response));
        } else {
          dispatch(
            PrintFullSaleOrderPlanDetail.PrintFullSaleOrderPlanSuccess(
              res.data.message
            )
          );
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => {
        dispatch(
          PrintFullSaleOrderPlanDetail.PrintFullSaleOrderPlanFailure(error)
        );
      });
  };

export const getCustomSaleOrderPlan =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PrintCustomPlanDetail.PrintCustomPlan());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${PRINT_CUSTOM_PLAN_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            PrintCustomPlanDetail.PrintCustomPlanSuccess(res.data.response)
          );
          dispatch(OnSuccess(res.data.response));
        } else {
          dispatch(
            PrintCustomPlanDetail.PrintCustomPlanFailure(res.data.message)
          );
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => {
        dispatch(PrintCustomPlanDetail.PrintCustomPlanFailure(error));
      });
  };

export const getSaleOrderPlan = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PrintSaleOrderPlanDetail.PrintSaleOrderPlan());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${PRINT_SALEORDER_PLAN_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(
          PrintSaleOrderPlanDetail.PrintSaleOrderPlanSuccess(res.data.response)
        );
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(
          PrintSaleOrderPlanDetail.PrintSaleOrderPlanSuccess(res.data.message)
        );
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => {
      dispatch(PrintSaleOrderPlanDetail.PrintSaleOrderPlanFailure(error));
    });
};

export const CustomPlanGenerateMiddleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(CustomPlanDetail.CustomPlanGenerate());
    let token = localStorage.getItem("auth");
    axios
      .post(`${URL}${CUSTOM_PLAN_GENERATE_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            CustomPlanDetail.CustomPlanGenerateSuccess(res.data.response)
          );
          dispatch(OnSuccess(res.data));
        } else {
          dispatch(
            CustomPlanDetail.CustomPlanGenerateFailure(res.data.message)
          );
          dispatch(OnFailure(res.data));
        }
      })
      .catch((error) =>
        dispatch(CustomPlanDetail.CustomPlanGenerateFailure(error))
      );
  };

export const SaleOrderMiddleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(SalesOrderForm.Sales());
    let token = localStorage.getItem("auth");
    axios
      .post(`${URL}${SALE_ORDER_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(SalesOrderForm.SalesSuccess(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(SalesOrderForm.SalesFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(SalesOrderForm.SalesFailure(error)));
  };
export const ShowPaymentType = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PaymentTypeData.Payment());
  let token = localStorage.getItem("auth");

  axios
    .get(`${BASEURL}${PAYMENT_TYPE_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PaymentTypeData.PaymentSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PaymentTypeData.PaymentFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PaymentTypeData.PaymentFailure(error)));
};
export const ShowPaymentThrough = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PaymentThroughData.PaymentThrough());
  let token = localStorage.getItem("auth");

  axios
    .get(`${BASEURL}${PAYMENT_THROUGH_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PaymentThroughData.PaymentThroughSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PaymentThroughData.PaymentThroughFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) =>
      dispatch(PaymentThroughData.PaymentThroughFailure(error))
    );
};
export const ShowCurrencyType = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(CurrencyType.Currency());
  let token = localStorage.getItem("auth");

  axios
    .get(`${BASEURL}${CURRENCY_TYPE_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(CurrencyType.CurrencySuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(CurrencyType.CurrencyFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(CurrencyType.CurrencyFailure(error)));
};
export const ShowPaymentSchedule =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PaymentScheduleDetail.PaymentSchedule());
    let token = localStorage.getItem("auth");

    axios
      .post(`${BASEURL}${PAYMENT_SCHEDULE_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            PaymentScheduleDetail.PaymentScheduleSuccess(res.data.response)
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(
            PaymentScheduleDetail.PaymentScheduleFailure(res.data.message)
          );
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(PaymentScheduleDetail.PaymentScheduleFailure(error))
      );
  };
export const ShowShortPaymentSchedule =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(ShortPaymentScheduleDetail.ShortPaymentSchedule());
    let token = localStorage.getItem("auth");

    axios
      .post(`${BASEURL}${SHORT_PAYMENT_SCHEDULE_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            ShortPaymentScheduleDetail.ShortPaymentScheduleSuccess(
              res.data.response
            )
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(
            ShortPaymentScheduleDetail.ShortPaymentScheduleFailure(
              res.data.message
            )
          );
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(ShortPaymentScheduleDetail.ShortPaymentScheduleFailure(error))
      );
  };

// export const InsertPaymentStages =(body, OnSuccess, OnFailure) => (dispatch) => {

//   dispatch(PaymentStagesDetail.PaymentStages());
//   let token = localStorage.getItem("auth");

//   axios
//     .post(`${URL}${PAYMENT_STAGES_PATH}`, body, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `bearer ${token}`,

//       },
//     })
//     .then((res) => {
//       if (res.data.status === true) {
//         dispatch(
//           PaymentStagesDetail.PaymentStagesSuccess(
//             res.data.response
//           )
//         );
//         dispatch(OnSuccess(res.data.message));
//       } else {
//         dispatch(
//           PaymentStagesDetail.PaymentScheduleFailure(
//             res.data.message
//           )
//         );
//         dispatch(OnFailure(res.data.message));
//       }
//     })
//     .catch((error) =>
//       dispatch(PaymentStagesDetail.PaymentScheduleFailure(error))
//     );
// };
export const InsertPaymentStages =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PaymentStagesDetail.PaymentStages());
    let token = localStorage.getItem("auth");
    axios
      .post(`${URL}${PAYMENT_STAGES_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(PaymentStagesDetail.PaymentStagesSuccess(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PaymentStagesDetail.PaymentStagesFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => PaymentStagesDetail.PaymentStagesFailure(error));
  };
