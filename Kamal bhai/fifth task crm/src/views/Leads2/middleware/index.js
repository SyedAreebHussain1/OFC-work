import axios from "axios";
import { UserLead, NewUsers, NewOrderStatus } from "../action"; //done
import { LEAD_PATH, INSERT_USER_PATH, ORDERSTATUS_PATH } from "../constant"; //done
import { BASEURL } from "config/api/URL"; //done

// SHOW ALL LEAD USMAN

export const Checklead = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(UserLead.Lead());
  let token = localStorage.getItem("auth");

  axios
    .post(`${BASEURL}${LEAD_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 

      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(UserLead.LeadSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(UserLead.LeadFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(UserLead.LeadFailure(error)));
};

// INSERT NEW USER API MUSTAFA

export const CheckUserInsert = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(NewUsers.NewUser());
  let token = localStorage.getItem("auth");
  
  axios
    .put(`${BASEURL}${INSERT_USER_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 

      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(NewUsers.NewUserSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(NewUsers.NewUserFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(NewUsers.NewUserFailure(error)));
};

// ORDER STATUS API MUSTAFA

export const CheckOrderStatus = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(NewOrderStatus.Orders());
  let token = localStorage.getItem("auth");

  axios
    .get(`${BASEURL}${ORDERSTATUS_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 

      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(NewOrderStatus.OrdersSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(NewOrderStatus.OrdersFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(NewOrderStatus.OrdersFailure(error)));
};
