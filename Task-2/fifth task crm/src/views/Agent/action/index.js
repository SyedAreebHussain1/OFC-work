import {
  AGENT,
  AGENT_SUCCESS,
  AGENT_FAILURE,
  SAVE_AGENT,
  SAVE_AGENT_SUCCESS,
  SAVE_AGENT_FAILURE,
  SAVE_TEAM,
  SAVE_TEAM_SUCCESS,
  SAVE_TEAM_FAILURE,
  UPDATEEMPLOYEE,UPDATEEMPLOYEE_FAILURE,UPDATEEMPLOYEE_SUCCESS,
  DELETEEMPLOYEE,DELETEEMPLOYEE_SUCCESS,DELETEEMPLOYEE_FAILURE
}
  from "../constant.js";

  export class DeleteEmployeeDetail {
    static DeleteEmployee() {
      return {
        type: DELETEEMPLOYEE,
      };
    }
    static DeleteEmployeeSuccess(response) {
      return {
        type: DELETEEMPLOYEE_SUCCESS,
        payload: response,
      };
    }
    static DeleteEmployeeFailure(error) {
      return {
        type: DELETEEMPLOYEE_FAILURE,
        error,
      };
    }
  }
  export class UpdateEmployeeDetail {
    static UpdateEmployee() {
      return {
        type: UPDATEEMPLOYEE,
      };
    }
    static UpdateEmployeeSuccess(response) {
      return {
        type: UPDATEEMPLOYEE_SUCCESS,
        payload: response,
      };
    }
    static UpdateEmployeeFailure(error) {
      return {
        type: UPDATEEMPLOYEE_FAILURE,
        error,
      };
    }
  }

export class UserAgent {
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
//Save Agent Data Class
export class UserAgentData {
  static SaveAgentData() {
    return {
      type: SAVE_AGENT,
    };
  }
  static SaveAgentSuccess(response) {
    return {
      type: SAVE_AGENT_SUCCESS,
      payload: response,
    };
  }
  static SaveAgentFailure(error) {
    return {
      type: SAVE_AGENT_FAILURE,
      error,
    };
  }
}

//Save TEAM Data Class
export class TeamData {
  static SaveTeamData() {
    return {
      type: SAVE_TEAM,
    };
  }
  static SaveTeamSuccess(response) {
    return {
      type: SAVE_TEAM_SUCCESS,
      payload: response,
    };
  }
  static SaveTeamFailure(error) {
    return {
      type: SAVE_TEAM_FAILURE,
      error,
    };
  }
}

