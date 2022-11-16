import {
  ORDER_STATUS,
  ORDER_STATUS_SUCCESS,
  ORDER_STATUS_FAILURE,
} from "../constant.js";

export class NewOrderStatus {
  static Orders() {
    return {
      type: ORDER_STATUS,
    };
  }
  static OrdersSuccess(response) {
    return {
      type: ORDER_STATUS_SUCCESS,
      payload: response,
    };
  }
  static OrdersFailure(error) {
    return {
      type: ORDER_STATUS_FAILURE,
      error,
    };
  }
}
