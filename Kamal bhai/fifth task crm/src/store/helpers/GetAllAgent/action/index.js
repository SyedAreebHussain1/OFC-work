import {
  GET_ALL_AGENT,
  GET_ALL_AGENT_SUCCESS,
  GET_ALL_AGENT_FAILURE,
} from "../constants.js";
export class FetchAgent {
  static Fetch() {
    return {
      type: GET_ALL_AGENT,
    };
  }
  static FetchSuccess(response) {
    return {
      type: GET_ALL_AGENT_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: GET_ALL_AGENT_FAILURE,
      error,
    };
  }
}
