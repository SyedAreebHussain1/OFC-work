import {
  CREATE_BOOKING_RECEIPT,
  CREATE_BOOKING_RECEIPT_SUCCESS,
  CREATE_BOOKING_RECEIPT_FAILURE,
  GET_BOOKING_RECEIPT,
  GET_BOOKING_RECEIPT_SUCCESS,
  GET_BOOKING_RECEIPT_FAILURE,
} from "../constants";

export class CreateBookingReceipt {
  static Create() {
    return {
      type: CREATE_BOOKING_RECEIPT,
    };
  }
  static CreateSuccess(response) {
    return {
      type: CREATE_BOOKING_RECEIPT_SUCCESS,
      payload: response,
    };
  }
  static CreateFailure(error) {
    return {
      type: CREATE_BOOKING_RECEIPT_FAILURE,
      error,
    };
  }
}

export class FetchBookingReceipt {
  static Fetch() {
    return {
      type: GET_BOOKING_RECEIPT,
    };
  }
  static FetchSuccess(response) {
    return {
      type: GET_BOOKING_RECEIPT_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: GET_BOOKING_RECEIPT_FAILURE,
      error,
    };
  }
}
