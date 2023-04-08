import axios from "axios";
import { UserLead, NewUsers, NewOrderStatus } from "../action"; 
import { LEAD_PATH, INSERT_USER_PATH, ORDERSTATUS_PATH } from "../constant"; 
import { BASEURL } from "config/api/URL"; 
export const Checklead = (page,limit, agentid,userEmail,userPhone, OnSuccess, OnFailure) => (dispatch) => {
 
  dispatch(UserLead.Lead());
  let token = localStorage.getItem("auth");

    axios

    .get(`${BASEURL}${LEAD_PATH}?page=${page}&limit=${limit}&orderstatus=8${agentid!==null &&agentid!==""?`&agentid=${agentid}`:""}${userEmail!==null &&userEmail!==""?`&user_email=${userEmail}`:""}${userPhone!==null &&userPhone!==""?`&user_phone=${userPhone}`:""}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
   
      if (res.data.status === true) {
        dispatch(UserLead.LeadSuccess(res.data));
        dispatch(OnSuccess(res.data));
      } else {
        dispatch(UserLead.LeadFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(UserLead.LeadFailure(error)));
 
  
};

// export const Checklead = (body, OnSuccess, OnFailure) => (dispatch) => {
//   dispatch(UserLead.Lead());
//   let token = localStorage.getItem("auth");
//   axios
//     .post(`${BASEURL}${LEAD_PATH}`, body, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       if (res.data.status === true) {
//         dispatch(UserLead.LeadSuccess(res.data.response));
//         dispatch(OnSuccess(res.data.message));
//       } else {
//         dispatch(UserLead.LeadFailure(res.data.message));
//         dispatch(OnFailure(res.data.message));
//       }
//     })
//     .catch((error) => dispatch(UserLead.LeadFailure(error)));
// };

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
