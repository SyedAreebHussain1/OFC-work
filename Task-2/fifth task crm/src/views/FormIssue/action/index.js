import {
  REALSTATEAGENT, REALSTATEAGENT_FAILURE, REALSTATEAGENT_SUCCESS, NOTES_STATUS, NOTES_STATUS_SUCCESS, NOTES_STATUS_FAILURE
} from "../constant.js";



export class AgentDetail {
  static realStateAgent() {
    return {
      type: REALSTATEAGENT,
    };
  }
  static realStateAgent_Success(response) {
    return {
      type: REALSTATEAGENT_SUCCESS,
      payload: response,
    };
  }
  static realStateAgent_Failure(error) {
    return {
      type: REALSTATEAGENT_FAILURE,
      error,
    };
  }
}

export class NotesStatus {
  static getNotesStatus() {
    return {
      type: NOTES_STATUS,
    };
  }
  static getNotesStatus_Success(response) {
    return {
      type: NOTES_STATUS_SUCCESS,
      payload: response,
    };
  }
  static getNotesStatus_Failure(error) {
    return {
      type: NOTES_STATUS_FAILURE,
      error,
    };
  }
}