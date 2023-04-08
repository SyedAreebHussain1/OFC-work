

import { AGENT, AGENT_SUCCESS, AGENT_FAILURE,FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,

  ALL_LEAD_USER,
  ALL_LEAD_USER_SUCCESS,
  ALL_LEAD_USERS_FAILURE,
INSERTNOMINEE,INSERTNOMINEE_SUCCESS,INSERTNOMINEE_FAILURE,
ALLPOSITION,ALLPOSITION_FAILURE,ALLPOSITION_SUCCESS,
PLOTPOSITION,PLOTPOSITION_SUCCESS,PLOTPOSITION_FAILURE,
FORM,FORM_FAILURE,FORM_SUCCESS,INTEGRATECRM,INTEGRATECRM_SUCCESS,INTEGRATECRM_FAILURE
} from "../constant.js";

export class IntegrateCRMDetail {
  static IntegrateCRM() {
    return {
      type: INTEGRATECRM,
    };
  }
  static IntegrateCRM_Success(response) {
    return {
      type: INTEGRATECRM_SUCCESS,
      payload: response,
    };
  }
  static IntegrateCRM_Failure(error) {
    return {
      type: INTEGRATECRM_FAILURE,
      error,
    };
  }
 
}





export class FormDetail {
  static Form() {
    return {
      type: FORM,
    };
  }
  static Form_Success(response) {
    return {
      type: FORM_SUCCESS,
      payload: response,
    };
  }
  static Form_Failure(error) {
    return {
      type: FORM_FAILURE,
      error,
    };
  }
 
}




export class PlotPositionDetail {
  static PlotPosition() {
    return {
      type: PLOTPOSITION,
    };
  }
  static PlotPosition_Success(response) {
    return {
      type: PLOTPOSITION_SUCCESS,
      payload: response,
    };
  }
  static PlotPosition_Failure(error) {
    return {
      type: PLOTPOSITION_FAILURE,
      error,
    };
  }
 
}


export class ShowAllPositionDetail {
  static AllPosition() {
    return {
      type: ALLPOSITION,
    };
  }
  static AllPosition_Success(response) {
    return {
      type: ALLPOSITION_SUCCESS,
      payload: response,
    };
  }
  static AllPosition_Failure(error) {
    return {
      type: ALLPOSITION_FAILURE,
      error,
    };
  }
 
}


  export class InsertNomineeDetail {
    static InsertNominee() {
      return {
        type: INSERTNOMINEE,
      };
    }
    static InsertNominee_Success(response) {
      return {
        type: INSERTNOMINEE_SUCCESS,
        payload: response,
      };
    }
    static InsertNominee_Failure(error) {
      return {
        type: INSERTNOMINEE_FAILURE,
        error,
      };
    }
   
  }
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
export class FetchData {
  static FData() {
    return {
      type: FETCH_DATA,
    };
  }
  static DataSuccess(response) {
    return {
      type: FETCH_DATA_SUCCESS,
      payload: response,
    };
  }
  static DataFailure(error) {
    return {
      type: FETCH_DATA_FAILURE,
      error,
    };
  }
}

export class leaduserData {
  static leadData() {
    return {
      type: ALL_LEAD_USER,
    };
  }
  static leadDataSuccess(response) {
    return {
      type: ALL_LEAD_USER_SUCCESS,
      payload: response,
    };
  }
  static leadDataFailure(error) {
    return {
      type: ALL_LEAD_USERS_FAILURE,
      error,
    };
  }
}