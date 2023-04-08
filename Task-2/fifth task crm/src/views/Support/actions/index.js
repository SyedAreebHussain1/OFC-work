import {
  FETCH_SUPPORT_TYPE,
  FETCH_SUPPORT_TYPE_SUCCESS,
  FETCH_SUPPORT_TYPE_FAILURE,
  ADD_NEW_SUPPORT,
  ADD_NEW_SUPPORT_SUCCESS,
  ADD_NEW_SUPPORT_FAILURE,
  FETCH_SUPPORT_BY_TOKEN,
  FETCH_SUPPORT_BY_TOKEN_SUCCESS,
  FETCH_SUPPORT_BY_TOKEN_FAILURE,
  FETCH_SUPPORT_IMAGES,
  FETCH_SUPPORT_IMAGES_SUCCESS,
  FETCH_SUPPORT_IMAGES_FAILURE,
} from "../constants.js";
export class FetchSupportType {
  static Fetch() {
    return {
      type: FETCH_SUPPORT_TYPE,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_SUPPORT_TYPE_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_SUPPORT_TYPE_FAILURE,
      error,
    };
  }
}

export class AddReport {
  static Add() {
    return {
      type: ADD_NEW_SUPPORT,
    };
  }
  static AddReportSuccess(response) {
    return {
      type: ADD_NEW_SUPPORT_SUCCESS,
      payload: response,
    };
  }
  static AddReportFailure(error) {
    return {
      type: ADD_NEW_SUPPORT_FAILURE,
      error,
    };
  }
}

export class FetchSupportByToken {
  static Fetch() {
    return {
      type: FETCH_SUPPORT_BY_TOKEN,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_SUPPORT_BY_TOKEN_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_SUPPORT_BY_TOKEN_FAILURE,
      error,
    };
  }
}

export class FetchSupportImages {
  static Fetch() {
    return {
      type: FETCH_SUPPORT_IMAGES,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_SUPPORT_IMAGES_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_SUPPORT_IMAGES_FAILURE,
      error,
    };
  }
}