import axios from "axios";
import { NewOrderStatus } from "../action"; //done
import { ORDER_STATUS_PATH } from "../constant"; //done
import { BASEURL } from "config/api/URL"; //done

export const CheckOrderStatus = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(NewOrderStatus.Orders());
  let token = localStorage.getItem("auth");

  axios
    .get(`${BASEURL}${ORDER_STATUS_PATH}`, {
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
