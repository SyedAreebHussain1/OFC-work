import {
  // QUOTATION,
  // QUOTATION_SUCCESS,
  // QUOTATION_FAILURE,
  PAYMENT,
  PAYMENT_SUCCESS,
  PAYMENT_FAILURE,
  PAYMENT_SHORT,
  PAYMENT_SHORT_SUCCESS,
  PAYMENT_SHORT_FAILURE,
  LEADUSER,
  LEADUSER_FAILURE,
  LEADUSER_SUCCESS,
  UPDATELEADUSER,
  UPDATELEADUSER_SUCCESS,
  UPDATELEADUSER_FAILURE,
  INSERT_SALE_QUOTATION,
  INSERT_SALE_QUOTATION_SUCCESS,
  INSERT_SALE_QUOTATION_FAILURE,
  PACKAGE,
  PACKAGE_FAILURE,
  PACKAGE_SUCCESS,
  GET_PLOT_AMOUNT,
  GET_PLOT_AMOUNT_SUCCESS,
  GET_PLOT_AMOUNT_FAILURE,
} from "../constant.js";
export class plotPriceDetail {
  static get_plot_amount() {
    return {
      type: GET_PLOT_AMOUNT,
    };
  }
  static get_plot_amount_Success(response) {
    return {
      type: GET_PLOT_AMOUNT_SUCCESS,
      payload: response,
    };
  }
  static get_plot_amount_Failure(error) {
    return {
      type: GET_PLOT_AMOUNT_FAILURE,
      error,
    };
  }
}

export class packageDetail {
  static package() {
    return {
      type: PACKAGE,
    };
  }
  static package_Success(response) {
    return {
      type: PACKAGE_SUCCESS,
      payload: response,
    };
  }
  static package_Failure(error) {
    return {
      type: PACKAGE_FAILURE,
      error,
    };
  }
}

export class UpdateLeadUserDetail {
  static UpdateLeadUser() {
    return {
      type: UPDATELEADUSER,
    };
  }
  static UpdateLeadUser_Success(response) {
    return {
      type: UPDATELEADUSER_SUCCESS,
      payload: response,
    };
  }
  static UpdateLeadUser_Failure(error) {
    return {
      type: UPDATELEADUSER_FAILURE,
      error,
    };
  }
}
// export class QuotationDetail {
//   static Quotation() {
//     return {
//       type: QUOTATION,
//     };
//   }
//   static Quotation_Success(response) {
//     return {
//       type: QUOTATION_SUCCESS,
//       payload: response,
//     };
//   }
//   static Quotation_Failure(error) {
//     return {
//       type: QUOTATION_FAILURE,
//       error,
//     };
//   }
// }
export class LeadUserDetail {
  static LeadUser() {
    return {
      type: LEADUSER,
    };
  }
  static LeadUser_Success(response) {
    return {
      type: LEADUSER_SUCCESS,
      payload: response,
    };
  }
  static LeadUser_Failure(error) {
    return {
      type: LEADUSER_FAILURE,
      error,
    };
  }
}
export class PaymentSchedule {
  static PaymentDetailData() {
    return {
      type: PAYMENT,
    };
  }
  static PaymentDetailSuccess(response) {
    return {
      type: PAYMENT_SUCCESS,
      payload: response,
    };
  }
  static PaymentDetailFailure(error) {
    return {
      type: PAYMENT_FAILURE,
      error,
    };
  }
}

export class GetPaymentShort {
  static PaymentShortData() {
    return {
      type: PAYMENT_SHORT,
    };
  }
  static PaymentShortSuccess(response) {
    return {
      type: PAYMENT_SHORT_SUCCESS,
      payload: response,
    };
  }
  static PaymentShortFailure(error) {
    return {
      type: PAYMENT_SHORT_FAILURE,
      error,
    };
  }
}

export class InsertPayment {
  static PaymentData() {
    return {
      type: INSERT_SALE_QUOTATION,
    };
  }
  static PaymentDataSuccess(response) {
    return {
      type: INSERT_SALE_QUOTATION_SUCCESS,
      payload: response,
    };
  }
  static PaymentDataFailure(error) {
    return {
      type: INSERT_SALE_QUOTATION_FAILURE,
      error,
    };
  }
}
