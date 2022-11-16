import {
  GET_TEAM,
  GET_TEAM_SUCCESS,
  GET_TEAM_FAILURE,
} from "../constants.js";
export class FetchTeam {
  static Fetch() {
    return {
      type: GET_TEAM,
    };
  }
  static FetchSuccess(response) {
    return {
      type: GET_TEAM_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: GET_TEAM_FAILURE,
      error,
    };
  }
}
