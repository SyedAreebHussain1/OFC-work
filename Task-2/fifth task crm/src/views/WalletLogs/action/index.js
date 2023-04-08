import {
  GETALLREQUEST,
  GETALLREQUEST_SUCCESS,
  GETALLREQUEST_FAILURE,
  GETALLREQUEST_PATH,
  UPDATEREQUEST,
  UPDATEREQUEST_SUCCESS,
  UPDATEREQUEST_FAILURE,
  UPDATE_PATH,
} from "../constant.js";

export class GetAllRequests {
  static Get() {
    return {
      type: GETALLREQUEST,
    };
  }
  static GetAllRequests_Success(response) {
    return {
      type: GETALLREQUEST_SUCCESS,
      payload: response,
    };
  }
  static GetAllRequests_Failure(error) {
    return {
      type: GETALLREQUEST_FAILURE,
      error,
    };
  }
}

export class UpdateRequest {
  static Update() {
    return {
      type: UPDATEREQUEST,
    };
  }
  static UpdateRequest_Success(response) {
    return {
      type: UPDATEREQUEST_SUCCESS,
      payload: response,
    };
  }
  static UpdateRequest_Failure(error) {
    return {
      type: UPDATEREQUEST_FAILURE,
      error,
    };
  }
}
