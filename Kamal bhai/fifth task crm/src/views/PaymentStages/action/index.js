import {
  GET_SALE_ORDER,
  GET_SALE_ORDER_SUCCESS,
  GET_SALE_ORDER_FAILURE,
  GET_PAYMENT_STAGES,
  GET_PAYMENT_STAGES_SUCCESS,
  GET_PAYMENT_STAGES_FAILURE,
  GET_FULL_PAYMENT_STAGES,
  GET_FULL_PAYMENT_STAGES_FAILURE,
  GET_FULL_PAYMENT_STAGES_SUCCESS,
  GET_PAYMENT_SCHEDULE,
  GET_PAYMENT_SCHEDULE_FAILURE,
  GET_PAYMENT_SCHEDULE_SUCCESS,
  GET_SALE_ORDER_BY_ID,
  GET_SALE_ORDER_BY_ID_SUCCESS,
  GET_SALE_ORDER_BY_ID_FAILURE,
  GET_RECIEPT_BY_ID,
  GET_RECIEPT_BY_ID_SUCCESS,
  GET_RECIEPT_BY_ID_FAILURE,
} from "../constant.js";

export class GetRecieptDetailsByIdAction {
  static Fetch() {
    return {
      type: GET_RECIEPT_BY_ID,
    };
  }
  static FetchSuccess(response) {
    return {
      type: GET_RECIEPT_BY_ID_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: GET_RECIEPT_BY_ID_FAILURE,
      error,
    };
  }
}

export class GetSaleOrderByIdAction {
  static Fetch() {
    return {
      type: GET_SALE_ORDER_BY_ID,
    };
  }
  static FetchSuccess(response) {
    return {
      type: GET_SALE_ORDER_BY_ID_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: GET_SALE_ORDER_BY_ID_FAILURE,
      error,
    };
  }
}

export class GetPaymentSchedule {
  static GetSchedulePayment() {
    return {
      type: GET_PAYMENT_SCHEDULE,
    };
  }
  static GetPaymentScheduleSuccess(response) {
    return {
      type: GET_PAYMENT_SCHEDULE_SUCCESS,
      payload: response,
    };
  }
  static GetPaymentScheduleFailure(error) {
    return {
      type: GET_PAYMENT_SCHEDULE_FAILURE,
      error,
    };
  }
}

export class GetFullPaymentStages {
  static GetFullPayment() {
    return {
      type: GET_FULL_PAYMENT_STAGES,
    };
  }
  static GetFullPaymentSuccess(response) {
    return {
      type: GET_FULL_PAYMENT_STAGES_SUCCESS,
      payload: response,
    };
  }
  static GetFullPaymentFailure(error) {
    return {
      type: GET_FULL_PAYMENT_STAGES_FAILURE,
      error,
    };
  }
}

export class GetSalesOrder {
  static GetSales() {
    return {
      type: GET_SALE_ORDER,
    };
  }
  static GetSalesSuccess(response) {
    return {
      type: GET_SALE_ORDER_SUCCESS,
      payload: response,
    };
  }
  static GetSalesFailure(error) {
    return {
      type: GET_SALE_ORDER_FAILURE,
      error,
    };
  }
}

export class GetPaymentStages {
  static GetPayment() {
    return {
      type: GET_PAYMENT_STAGES,
    };
  }
  static GetPaymentSuccess(response) {
    return {
      type: GET_PAYMENT_STAGES_SUCCESS,
      payload: response,
    };
  }
  static GetPaymentFailure(error) {
    return {
      type: GET_PAYMENT_STAGES_FAILURE,
      error,
    };
  }
}
