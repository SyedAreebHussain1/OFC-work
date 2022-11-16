import {
  REALSTATEAGENTDETAIL,
  REALSTATEAGENTDETAIL_FAILURE,
  REALSTATEAGENTDETAIL_SUCCESS,
  BOOKINGFORMSTATUS_SUCCESS,
  BOOKINGFORMSTATUS_FAILURE,
  BOOKINGFORMSTATUS,
  UPGRADE_FORM_STATUS,
  UPGRADE_FORM_STATUS_SUCCESS,
  UPGRADE_FORM_STATUS_FAILURE,
  UPLOAD_CURRENCY,
  UPLOAD_CURRENCY_SUCCESS,
  UPLOAD_CURRENCY_FAILURE,
} from "../constant.js";

export class StatusDetails {
  static BookingFormStatusDetail() {
    return {
      type: BOOKINGFORMSTATUS,
    };
  }
  static BookingFormStattusDetail_Success(response) {
    return {
      type: BOOKINGFORMSTATUS_SUCCESS,
      payload: response,
    };
  }
  static BookingFormStatusDetail_Failure(error) {
    return {
      type: BOOKINGFORMSTATUS_FAILURE,
      error,
    };
  }
}

export class stateAgentDetails {
  static realStateAgentDetail() {
    return {
      type: REALSTATEAGENTDETAIL,
    };
  }
  static realStateAgentDetail_Success(response) {
    return {
      type: REALSTATEAGENTDETAIL_SUCCESS,
      payload: response,
    };
  }
  static realStateAgentDetail_Failure(error) {
    return {
      type: REALSTATEAGENTDETAIL_FAILURE,
      error,
    };
  }
}

export class UpgradeFormStatus {
  static Upgrade() {
    return {
      type: UPGRADE_FORM_STATUS,
    };
  }
  static UpgradeSuccess(response) {
    return {
      type: UPGRADE_FORM_STATUS_SUCCESS,
      payload: response,
    };
  }
  static UpgradeFailure(error) {
    return {
      type: UPGRADE_FORM_STATUS_FAILURE,
      error,
    };
  }
}

export class UploadCurrency {
  static Upload() {
    return {
      type: UPLOAD_CURRENCY,
    };
  }
  static UploadSuccess(response) {
    return {
      type: UPLOAD_CURRENCY_SUCCESS,
      payload: response,
    };
  }
  static UploadFailure(error) {
    return {
      type: UPLOAD_CURRENCY_FAILURE,
      error,
    };
  }
}
