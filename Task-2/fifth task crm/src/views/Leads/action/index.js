import { 
  LEAD, 
  LEAD_SUCCESS, 
  LEAD_FAILURE,

  NEWUSER, 
  NEWUSER_SUCCESS, 
  NEWUSER_FAILURE,

  ORDERSTATUS,        
  ORDERSTATUS_SUCCESS,
  ORDERSTATUS_FAILURE

} from "../constant.js";
export class UserLead {
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

// insert user 

export class NewUsers {
  static NewUser() {
    return {
      type: NEWUSER,
    };
  }
  static NewUserSuccess(response) {
    return {
      type: NEWUSER_SUCCESS,
      payload: response,
    };
  }
  static NewUserFailure(error) {
    return {
      type: NEWUSER_FAILURE,
      error,
    };
  }
}


// order status Mustafa

export class NewOrderStatus {
  static Orders() {
    return {
      type: ORDERSTATUS,
    };
  }
  static OrdersSuccess(response) {
    return {
      type: ORDERSTATUS_SUCCESS,
      payload: response,
    };
  }
  static OrdersFailure(error) {
    return {
      type: ORDERSTATUS_FAILURE,
      error,
    };
  }
}

