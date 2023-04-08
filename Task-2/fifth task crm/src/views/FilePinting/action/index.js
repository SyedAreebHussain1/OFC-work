import {
  GET_FILE_DOWNLOAD_CUSTOMER,
  GET_FILE_DOWNLOAD_CUSTOMER_SUCCESS,
  GET_FILE_DOWNLOAD_CUSTOMER_FAILURE,
  FILE_DOCUMENTS,
  FILE_DOCUMENTS_SUCCESS,
  FILE_DOCUMENTS_FAILURE,
} from "../constant.js";

export class FileDownloadCustomers {
  static Fetch() {
    return {
      type: GET_FILE_DOWNLOAD_CUSTOMER,
    };
  }
  static FetchSuccess(response) {
    return {
      type: GET_FILE_DOWNLOAD_CUSTOMER_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: GET_FILE_DOWNLOAD_CUSTOMER_FAILURE,
      error,
    };
  }
}

export class GetFileDocuments {
  static Fetch() {
    return {
      type: FILE_DOCUMENTS,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FILE_DOCUMENTS_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FILE_DOCUMENTS_FAILURE,
      error,
    };
  }
}
