import {
  VERIFICATIONNO,
  VERIFICATIONNO_FAILURE,
  VERIFICATIONNO_SUCCESS,
  INSERT_VERIFICATION_DATA,
  INSERT_VERIFICATION_DATA_FAILURE,
  INSERT_VERIFICATION_DATA_SUCCESS,
} from "../constant.js";

export class VerificationNoDetail {
  static VerificationNo() {
    return {
      type: VERIFICATIONNO,
    };
  }
  static VerificationNoSuccess(response) {
    return {
      type: VERIFICATIONNO_SUCCESS,
      payload: response,
    };
  }
  static VerificationNoFailure(error) {
    return {
      type: VERIFICATIONNO_FAILURE,
      error,
    };
  }
}
export class InsertVerificationDetail {
  static Insert() {
    return {
      type: INSERT_VERIFICATION_DATA,
    };
  }
  static InsertSuccess(response) {
    return {
      type: INSERT_VERIFICATION_DATA_SUCCESS,
      payload: response,
    };
  }
  static InsertFailure(error) {
    return {
      type: INSERT_VERIFICATION_DATA_FAILURE,
      error,
    };
  }
}
