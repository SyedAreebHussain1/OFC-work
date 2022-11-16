import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  ADD_NEW_CONTACTS,
  ADD_NEW_CONTACTS_SUCCESS,
  ADD_NEW_CONTACTS_FAILURE,
  ASSIGN_LEADS,
  ASSIGN_LEADS_SUCCESS,
  ASSIGN_LEADS_FAILURE,
  DOWNLOAD_FILE,
  DOWNLOAD_FILE_FAILURE,
  DOWNLOAD_FILE_SUCCESS,
} from "../constants.js";
export class DownloadTemplate {
  static Download() {
    return {
      type: DOWNLOAD_FILE,
    };
  }
  static DownloadSuccess(response) {
    return {
      type: DOWNLOAD_FILE_SUCCESS,
      payload: response,
    };
  }
  static DownloadFailure(error) {
    return {
      type: DOWNLOAD_FILE_FAILURE,
      error,
    };
  }
}
export class FetchUser {
  static Fetch() {
    return {
      type: FETCH_CONTACTS,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_CONTACTS_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_CONTACTS_FAILURE,
      error,
    };
  }
}

export class AddUser {
  static Add() {
    return {
      type: ADD_NEW_CONTACTS,
    };
  }
  static AddSuccess(response) {
    return {
      type: ADD_NEW_CONTACTS_SUCCESS,
      payload: response,
    };
  }
  static AddFailure(error) {
    return {
      type: ADD_NEW_CONTACTS_FAILURE,
      error,
    };
  }
}

export class AssignAgent {
  static Assign() {
    return {
      type: ASSIGN_LEADS,
    };
  }
  static AssignSuccess(response) {
    return {
      type: ASSIGN_LEADS_SUCCESS,
      payload: response,
    };
  }
  static AssignFailure(error) {
    return {
      type: ASSIGN_LEADS_FAILURE,
      error,
    };
  }
}
