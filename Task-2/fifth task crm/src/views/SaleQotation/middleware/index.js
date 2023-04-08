import axios from "axios";
import {
  QuotationDetail,
  PaymentSchedule,
  GetPaymentShort,
  LeadUserDetail,
  UpdateLeadUserDetail,
  InsertPayment,
  packageDetail,
  plotPriceDetail,
} from "../action/index";
import {
  // QUOTATION_PATH,
  PAYMENT_PATH,
  PAYMENT_SHORT_PATH,
  LEADUSER_PATH,
  UPDATELEADUSER_PATH,
  INSERT_SALE_QUOTATION_PATH,
  PACKAGE_PATH,
  GET_PLOT_AMOUNT_PATH,
} from "../constant";
import { BASEURL } from "config/api/URL";
import swal from "sweetalert";

export const showPlotPrice = (Plotid, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(plotPriceDetail.get_plot_amount());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${GET_PLOT_AMOUNT_PATH}?Plotid=${Plotid}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(plotPriceDetail.get_plot_amount_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(plotPriceDetail.get_plot_amount_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(plotPriceDetail.get_plot_amount_Failure(error)));
};

export const showPackages =
  (PlotType_id, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(packageDetail.package());
    let token = localStorage.getItem("auth");
    axios
      .get(`${BASEURL}${PACKAGE_PATH}?PlotType_id=${PlotType_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(packageDetail.package_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(packageDetail.package_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(packageDetail.package_Failure(error)));
  };

// export const showQuotation = (body, OnSuccess, OnFailure) => (dispatch) => {
//   dispatch(QuotationDetail.Quotation());
//   let token = localStorage.getItem("auth");
//   axios
//     .post(`${BASEURL}${QUOTATION_PATH}`, body, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       if (res.data.status === true) {
//         dispatch(QuotationDetail.Quotation_Success(res.data.response));
//         dispatch(OnSuccess(res.data.message));
//       } else {
//         dispatch(QuotationDetail.Quotation_Failure(res.data.message));
//         dispatch(OnFailure(res.data.message));
//       }
//     })
//     .catch((error) => dispatch(QuotationDetail.Quotation_Failure(error)));
// };

export const showPlans =
  (packageId, Project_id, Category_id, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PaymentSchedule.PaymentDetailData());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${PAYMENT_PATH}?packageId=${packageId}&Project_id=${Project_id}&Category_id=${Category_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(PaymentSchedule.PaymentDetailSuccess(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PaymentSchedule.PaymentDetailFailure(res.data.message));

          dispatch(OnFailure(res.data.message));
        }
      })

      .catch((error) => {
        dispatch(PaymentSchedule.PaymentDetailFailure(error));
      });
  };

export const getPaymentPlan = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(GetPaymentShort.PaymentShortData());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${PAYMENT_SHORT_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(GetPaymentShort.PaymentShortSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(GetPaymentShort.PaymentShortFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => {
      dispatch(GetPaymentShort.PaymentShortFailure(error));
    });
};

export const ShowLeadUser = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(LeadUserDetail.LeadUser());
  let token = localStorage.getItem("auth");
  axios
    // .post(`https://a608-202-47-46-98.in.ngrok.io/CRM/showallleaduser`, body, {
    .post(`${BASEURL}${LEADUSER_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(LeadUserDetail.LeadUser_Success(res.data.response));
        dispatch(OnSuccess(res.data.response));
      } else {
        dispatch(LeadUserDetail.LeadUser_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => {
      dispatch(LeadUserDetail.LeadUser_Failure(error));
    });
};
export const ShowUpdateLeadUser =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(UpdateLeadUserDetail.UpdateLeadUser());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${UPDATELEADUSER_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.httpstatus === 200) {
          dispatch(
            UpdateLeadUserDetail.UpdateLeadUser_Success(res?.data?.response)
          );
          dispatch(OnSuccess(res?.data?.message));
        }
      })
      .catch((error) => {
        if (error?.response) {
          OnFailure(error?.response?.data?.message);
        }
      });
  };

export const InsertPaymentSale_Middleware =
  (body, OnSuccess, OnFailure, push) => (dispatch) => {

    dispatch(InsertPayment.PaymentData());
    let token = localStorage.getItem("auth");

    axios

      .post(`${BASEURL}${INSERT_SALE_QUOTATION_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(InsertPayment.PaymentDataSuccess(res.data.response));
          swal("Congratulations!", "Quotation saved successfully", "success");
          // push();
          dispatch(OnSuccess(res.data.response));
        } else {
          dispatch(InsertPayment.PaymentDataFailure(res.data.message));
          // swal("Sorry!", res.data.message, "error");
          // dispatch(OnFailure(res.data.message));
        }
      })
      .catch(function (error) {
        if (error.response) {
          OnFailure(error.response.data.message);
        }
      });
  };
