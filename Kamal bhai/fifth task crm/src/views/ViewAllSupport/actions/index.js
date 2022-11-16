import {
  FETCH_ALL_SUPPORT,
  FETCH_ALL_SUPPORT_SUCCESS,
  FETCH_ALL_SUPPORT_FAILURE,
  FETCH_STATUS,
  FETCH_STATUS_SUCCESS,
  FETCH_STATUS_FAILURE,
  UPDATE_SUPPORT_STATUS,
  UPDATE_SUPPORT_STATUS_SUCCESS,
  UPDATE_SUPPORT_STATUS_FAILURE,
  FETCH_FILES,
  FETCH_FILES_SUCCESS,
  FETCH_FILES_FAILURE,
} from "../constants.js";

export class FetchAllSupport {
  static Fetch() {
    return {
      type: FETCH_ALL_SUPPORT,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_ALL_SUPPORT_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_ALL_SUPPORT_FAILURE,
      error,
    };
  }
}

export class FetchStatus {
  static Fetch() {
    return {
      type: FETCH_STATUS,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_STATUS_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_STATUS_FAILURE,
      error,
    };
  }
}

export class UpdateSupportStatus {
  static Update() {
    return {
      type: UPDATE_SUPPORT_STATUS,
    };
  }
  static UpdateSuccess(response) {
    return {
      type: UPDATE_SUPPORT_STATUS_SUCCESS,
      payload: response,
    };
  }
  static UpdateFailure(error) {
    return {
      type: UPDATE_SUPPORT_STATUS_FAILURE,
      error,
    };
  }
}

export class FetchFiles {
  static Fetch() {
    return {
      type: FETCH_FILES,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_FILES_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_FILES_FAILURE,
      error,
    };
  }
}