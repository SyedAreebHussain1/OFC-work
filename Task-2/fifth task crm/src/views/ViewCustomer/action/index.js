import {
    LEAD,
    LEAD_SUCCESS,
    LEAD_FAILURE,
    AGENT,
    AGENT_SUCCESS,
    AGENT_FAILURE,
  } from "../constant.js";   // done 
  export class LeadUser {
    static Lead() {
      return {
        type: LEAD,
      };
    }
    static LeadSuccess(response) {
      return {
        type: LEAD_SUCCESS,
        payload: response,
      };
    }
    static LeadFailure(error) {
      return {
        type: LEAD_FAILURE,
        error,
      };
    }
  }
  
  export class AgentUser {
    static Agent() {
      return {
        type: AGENT,
      };
    }
    static AgentSuccess(response) {
      return {
        type: AGENT_SUCCESS,
        payload: response,
      };
    }
    static AgentFailure(error) {
      return {
        type: AGENT_FAILURE,
        error,
      };
    }
  }
  