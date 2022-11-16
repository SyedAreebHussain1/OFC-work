

import { AGENT, AGENT_SUCCESS, AGENT_FAILURE } from "../constants.js";
export class AgentDetail {
  static Agent() {
    return {
      type: AGENT,
    };
  }
  static Agent_Success(response) {
    return {
      type: AGENT_SUCCESS,
      payload: response,
    };
  }
  static Agent_Failure(error) {
    return {
      type: AGENT_FAILURE,
      error,
    };
  }
 
}
