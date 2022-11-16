import {
  GET_ALL_SOURCES,
  GET_ALL_SOURCES_SUCCESS,
  GET_ALL_SOURCES_FAILURE,
} from "../constants.js";
export class FetchSources {
  static Fetch() {
    return {
      type: GET_ALL_SOURCES,
    };
  }
  static FetchSuccess(response) {
    return {
      type: GET_ALL_SOURCES_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: GET_ALL_SOURCES_FAILURE,
      error,
    };
  }
}
