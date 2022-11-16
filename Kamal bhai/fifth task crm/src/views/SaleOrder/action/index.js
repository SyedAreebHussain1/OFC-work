import {
  SALE_ORDER,
  SALE_ORDER_SUCCESS,
  SALE_ORDER_FAILURE,
  PAYMENT_TYPE,
  PAYMENT_TYPE_SUCCESS,
  PAYMENT_TYPE_FAILURE,
  PAYMENT_THROUGH,
  PAYMENT_THROUGH_SUCCESS,
  PAYMENT_THROUGH_FAILURE,
  CURRENCY_TYPE,
  CURRENCY_TYPE_SUCCESS,
  CURRENCY_TYPE_FAILURE,
  PAYMENT_SCHEDULE,
  PAYMENT_SCHEDULE_FAILURE,
  PAYMENT_SCHEDULE_SUCCESS,
  SHORT_PAYMENT_SCHEDULE,
  SHORT_PAYMENT_SCHEDULE_FAILURE,
  SHORT_PAYMENT_SCHEDULE_SUCCESS,
  PAYMENT_STAGES_SUCCESS,
  PAYMENT_STAGES,
  PAYMENT_STAGES_FAILURE,
  CUSTOM_PLAN_GENERATE,
  CUSTOM_PLAN_GENERATE_SUCCESS,
  CUSTOM_PLAN_GENERATE_FAILURE,
  PRINT_SALEORDER_PLAN,
  PRINT_SALEORDER_PLAN_FAILURE,
  PRINT_SALEORDER_PLAN_SUCCESS,
  PRINT_FULL_SALEORDER_PLAN,
  PRINT_FULL_SALEORDER_PLAN_FAILURE,
  PRINT_FULL_SALEORDER_PLAN_SUCCESS,
  PRINT_CUSTOM_PLAN,
  PRINT_CUSTOM_PLAN_FAILURE,
  PRINT_CUSTOM_PLAN_SUCCESS,
} from "../constant.js"; // done
export class PrintFullSaleOrderPlanDetail {
  static PrintFullSaleOrderPlan() {
    return {
      type: PRINT_FULL_SALEORDER_PLAN,
    };
  }
  static PrintFullSaleOrderPlanSuccess(response) {
    return {
      type: PRINT_FULL_SALEORDER_PLAN_SUCCESS,
      payload: response,
    };
  }
  static PrintFullSaleOrderPlanFailure(error) {
    return {
      type: PRINT_FULL_SALEORDER_PLAN_FAILURE,
      error,
    };
  }
}

export class PrintCustomPlanDetail {
  static PrintCustomPlan() {
    return {
      type: PRINT_CUSTOM_PLAN,
    };
  }
  static PrintCustomPlanSuccess(response) {
    return {
      type: PRINT_CUSTOM_PLAN_SUCCESS,
      payload: response,
    };
  }
  static PrintCustomPlanFailure(error) {
    return {
      type: PRINT_CUSTOM_PLAN_FAILURE,
      error,
    };
  }
}
export class PrintSaleOrderPlanDetail {
  static PrintSaleOrderPlan() {
    return {
      type: PRINT_SALEORDER_PLAN,
    };
  }
  static PrintSaleOrderPlanSuccess(response) {
    return {
      type: PRINT_SALEORDER_PLAN_SUCCESS,
      payload: response,
    };
  }
  static PrintSaleOrderPlanFailure(error) {
    return {
      type: PRINT_SALEORDER_PLAN_FAILURE,
      error,
    };
  }
}

export class CustomPlanDetail {
  static CustomPlanGenerate() {
    return {
      type: CUSTOM_PLAN_GENERATE,
    };
  }
  static CustomPlanGenerateSuccess(response) {
    return {
      type: CUSTOM_PLAN_GENERATE_SUCCESS,
      payload: response,
    };
  }
  static CustomPlanGenerateFailure(error) {
    return {
      type: CUSTOM_PLAN_GENERATE_FAILURE,
      error,
    };
  }
}

export class SalesOrderForm {
  static Sales() {
    return {
      type: SALE_ORDER,
    };
  }
  static SalesSuccess(response) {
    return {
      type: SALE_ORDER_SUCCESS,
      payload: response,
    };
  }
  static SalesFailure(error) {
    return {
      type: SALE_ORDER_FAILURE,
      error,
    };
  }
}

export class PaymentTypeData {
  static Payment() {
    return {
      type: PAYMENT_TYPE,
    };
  }
  static PaymentSuccess(response) {
    return {
      type: PAYMENT_TYPE_SUCCESS,
      payload: response,
    };
  }
  static PaymentFailure(error) {
    return {
      type: PAYMENT_TYPE_FAILURE,
      error,
    };
  }
}

export class PaymentThroughData {
  static PaymentThrough() {
    return {
      type: PAYMENT_THROUGH,
    };
  }
  static PaymentThroughSuccess(response) {
    return {
      type: PAYMENT_THROUGH_SUCCESS,
      payload: response,
    };
  }
  static PaymentThroughFailure(error) {
    return {
      type: PAYMENT_THROUGH_FAILURE,
      error,
    };
  }
}

export class CurrencyType {
  static Currency() {
    return {
      type: CURRENCY_TYPE,
    };
  }
  static CurrencySuccess(response) {
    return {
      type: CURRENCY_TYPE_SUCCESS,
      payload: response,
    };
  }
  static CurrencyFailure(error) {
    return {
      type: CURRENCY_TYPE_FAILURE,
      error,
    };
  }
}

export class PaymentScheduleDetail {
  static PaymentSchedule() {
    return {
      type: PAYMENT_SCHEDULE,
    };
  }
  static PaymentScheduleSuccess(response) {
    return {
      type: PAYMENT_SCHEDULE_SUCCESS,
      payload: response,
    };
  }
  static PaymentScheduleFailure(error) {
    return {
      type: PAYMENT_SCHEDULE_FAILURE,
      error,
    };
  }
}

export class ShortPaymentScheduleDetail {
  static ShortPaymentSchedule() {
    return {
      type: SHORT_PAYMENT_SCHEDULE,
    };
  }
  static ShortPaymentScheduleSuccess(response) {
    return {
      type: SHORT_PAYMENT_SCHEDULE_SUCCESS,
      payload: response,
    };
  }
  static ShortPaymentScheduleFailure(error) {
    return {
      type: SHORT_PAYMENT_SCHEDULE_FAILURE,
      error,
    };
  }
}
export class PaymentStagesDetail {
  static PaymentStages() {
    return {
      type: PAYMENT_STAGES,
    };
  }
  static PaymentStagesSuccess(response) {
    return {
      type: PAYMENT_STAGES_SUCCESS,
      payload: response,
    };
  }
  static PaymentStagesFailure(error) {
    return {
      type: PAYMENT_STAGES_FAILURE,
      error,
    };
  }
}
