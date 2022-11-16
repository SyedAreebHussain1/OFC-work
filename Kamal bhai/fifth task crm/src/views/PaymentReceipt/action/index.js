import {
  AMOUNT,
  AMOUNT_SUCCESS,
  AMOUNT_FAILURE,
  PAYMENTTHROUGH,
  PAYMENTTHROUGH_SUCCESS,
  PAYMENTTHROUGH_FAILURE,
  PAYMENTTYPE,
  PAYMENTTYPE_SUCCESS,
  PAYMENTTYPE_FAILURE,
  PAYMENT_RECIPT,
  PAYMENT_RECIPT_SUCCESS,
  PAYMENT_RECIPT_FAILURE,
  UPDATE_PAYMENT_STAGE,
  UPDATE_PAYMENT_STAGE_SUCCESS,
  UPDATE_PAYMENT_STAGE_FAILURE,
  WALLET,
  WALLET_FAILURE,
  WALLET_SUCCESS,
  WALLET_REQUEST,
  WALLET_REQUEST_SUCCESS,
  WALLET_REQUEST_FAILURE,
  WALLET_REQUEST_PATH,
  FILE,
  FILE_SUCCESS,
  FILE_FAILURE,
  FILE_PATH,
  BANK,
  BANK_FAILURE,
  BANK_SUCCESS,
} from "../constant"; // done

export class BankDetail {
  static Bank() {
    return {
      type: BANK,
    };
  }
  static Bank_Success(response) {
    return {
      type: BANK_SUCCESS,
      payload: response,
    };
  }
  static Bank_Failure(error) {
    return {
      type: BANK_FAILURE,
      error,
    };
  }
}
export class WalletDetail {
  static Wallet() {
    return {
      type: WALLET,
    };
  }
  static Wallet_Success(response) {
    return {
      type: WALLET_SUCCESS,
      payload: response,
    };
  }
  static Wallet_Failure(error) {
    return {
      type: WALLET_FAILURE,
      error,
    };
  }
}
export class FileSend {
  static File() {
    return {
      type: FILE,
    };
  }
  static File_Success(response) {
    return {
      type: FILE_SUCCESS,
      payload: response,
    };
  }
  static File_Failure(error) {
    return {
      type: FILE_FAILURE,
      error,
    };
  }
}
export class WalletRequest {
  static Request() {
    return {
      type: WALLET_REQUEST,
    };
  }
  static Walle_Request_Success(response) {
    return {
      type: WALLET_REQUEST_SUCCESS,
      payload: response,
    };
  }
  static Wallet_Request_Failure(error) {
    return {
      type: WALLET_REQUEST_FAILURE,
      error,
    };
  }
}
export class AmountDetail {
  static Amount() {
    return {
      type: AMOUNT,
    };
  }
  static Amount_Success(response) {
    return {
      type: AMOUNT_SUCCESS,
      payload: response,
    };
  }
  static Amount_Failure(error) {
    return {
      type: AMOUNT_FAILURE,
      error,
    };
  }
}
export class PaymentThroughDetail {
  static PaymentThrough() {
    return {
      type: PAYMENTTHROUGH,
    };
  }
  static PaymentThrough_Success(response) {
    return {
      type: PAYMENTTHROUGH_SUCCESS,
      payload: response,
    };
  }
  static PaymentThrough_Failure(error) {
    return {
      type: PAYMENTTHROUGH_FAILURE,
      error,
    };
  }
}

export class PaymentTypeDetail {
  static PaymentType() {
    return {
      type: PAYMENTTYPE,
    };
  }
  static PaymentType_Success(response) {
    return {
      type: PAYMENTTYPE_SUCCESS,
      payload: response,
    };
  }
  static PaymentType_Failure(error) {
    return {
      type: PAYMENTTYPE_FAILURE,
      error,
    };
  }
}

export class PaymentRecipt {
  static PaymentInsert() {
    return {
      type: PAYMENT_RECIPT,
    };
  }
  static PaymentInsert_Success(response) {
    return {
      type: PAYMENT_RECIPT_SUCCESS,
      payload: response,
    };
  }
  static PaymentInsert_Failure(error) {
    return {
      type: PAYMENT_RECIPT_FAILURE,
      error,
    };
  }
}

export class UpdatePaymentStages {
  static UpdatePayment() {
    return {
      type: UPDATE_PAYMENT_STAGE,
    };
  }
  static UpdatePayment_Success(response) {
    return {
      type: UPDATE_PAYMENT_STAGE_SUCCESS,
      payload: response,
    };
  }
  static UpdatePayment_Failure(error) {
    return {
      type: UPDATE_PAYMENT_STAGE_FAILURE,
      error,
    };
  }
}
