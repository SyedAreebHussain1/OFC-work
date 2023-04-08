import {
  GET_PAYMENT_SCHEDULE,
  GET_PAYMENT_SCHEDULE_SUCCESS,
  GET_PAYMENT_SCHEDULE_FAILURE,
  ADD_PAYMENT_SCHEDULE,
  ADD_PAYMENT_SCHEDULE_SUCCESS,
  ADD_PAYMENT_SCHEDULE_FAILURE,
  UPDATE_SCHEDULE,
  UPDATE_SCHEDULE_SUCCESS,
  UPDATE_SCHEDULE_FAILURE,
  GET_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE,
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  UPDATE_PROJECT,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  GET_SECTORS,
  GET_SECTORS_SUCCESS,
  GET_SECTORS_FAILURE,
  GET_SECTORS_PATH,
  ADD_SECTORS,
  ADD_SECTORS_SUCCESS,
  ADD_SECTORS_FAILURE,
  ADD_SECTORS_PATH,
  UPDATE_SECTORS,
  UPDATE_SECTORS_SUCCESS,
  UPDATE_SECTORS_FAILURE,
  UPDATE_SECTORS_PATH,
  GET_STREETS,
  GET_STREETS_SUCCESS,
  GET_STREETS_FAILURE,
  GET_STREETS_PATH,
  ADD_STREETS,
  ADD_STREETS_SUCCESS,
  ADD_STREETS_FAILURE,
  ADD_STREETS_PATH,
  UPDATE_STREETS,
  UPDATE_STREETS_SUCCESS,
  UPDATE_STREETS_FAILURE,
  UPDATE_STREETS_PATH,
} from "../constant";

// Payment Schedule
export class GetPaymentSchedule {
  static Fetch() {
    return {
      type: GET_PAYMENT_SCHEDULE,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PAYMENT_SCHEDULE_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PAYMENT_SCHEDULE_FAILURE,
      error,
    };
  }
}
export class AddSchedule {
  static Add() {
    return {
      type: ADD_PAYMENT_SCHEDULE,
    };
  }
  static Add_Success(response) {
    return {
      type: ADD_PAYMENT_SCHEDULE_SUCCESS,
      payload: response,
    };
  }
  static Add_Failure(error) {
    return {
      type: ADD_PAYMENT_SCHEDULE_FAILURE,
      error,
    };
  }
}

export class UpdateSchedule {
  static Update() {
    return {
      type: UPDATE_SCHEDULE,
    };
  }
  static Update_Success(response) {
    return {
      type: UPDATE_SCHEDULE_SUCCESS,
      payload: response,
    };
  }
  static Update_Failure(error) {
    return {
      type: UPDATE_SCHEDULE_FAILURE,
      error,
    };
  }
}

// Projects
export class GetProjects {
  static Fetch() {
    return {
      type: GET_PROJECT,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PROJECT_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PROJECT_FAILURE,
      error,
    };
  }
}
export class AddProject {
  static Add() {
    return {
      type: ADD_PROJECT,
    };
  }
  static Add_Success(response) {
    return {
      type: ADD_PROJECT_SUCCESS,
      payload: response,
    };
  }
  static Add_Failure(error) {
    return {
      type: ADD_PROJECT_FAILURE,
      error,
    };
  }
}

export class UpdateProject {
  static Update() {
    return {
      type: UPDATE_PROJECT,
    };
  }
  static Update_Success(response) {
    return {
      type: UPDATE_PROJECT_SUCCESS,
      payload: response,
    };
  }
  static Update_Failure(error) {
    return {
      type: UPDATE_PROJECT_FAILURE,
      error,
    };
  }
}

// Sectors
export class GetSectors {
  static Fetch() {
    return {
      type: GET_SECTORS,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_SECTORS_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_SECTORS_FAILURE,
      error,
    };
  }
}
export class AddSector {
  static Add() {
    return {
      type: ADD_SECTORS,
    };
  }
  static Add_Success(response) {
    return {
      type: ADD_SECTORS_SUCCESS,
      payload: response,
    };
  }
  static Add_Failure(error) {
    return {
      type: ADD_SECTORS_FAILURE,
      error,
    };
  }
}

export class UpdateSector {
  static Update() {
    return {
      type: UPDATE_SECTORS,
    };
  }
  static Update_Success(response) {
    return {
      type: UPDATE_SECTORS_SUCCESS,
      payload: response,
    };
  }
  static Update_Failure(error) {
    return {
      type: UPDATE_SECTORS_FAILURE,
      error,
    };
  }
}

// Streets

export class GetStreets {
  static Fetch() {
    return {
      type: GET_STREETS,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_STREETS_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_STREETS_FAILURE,
      error,
    };
  }
}
export class AddStreet {
  static Add() {
    return {
      type: ADD_STREETS,
    };
  }
  static Add_Success(response) {
    return {
      type: ADD_STREETS_SUCCESS,
      payload: response,
    };
  }
  static Add_Failure(error) {
    return {
      type: ADD_STREETS_FAILURE,
      error,
    };
  }
}

export class UpdateStreet {
  static Update() {
    return {
      type: UPDATE_STREETS,
    };
  }
  static Update_Success(response) {
    return {
      type: UPDATE_STREETS_SUCCESS,
      payload: response,
    };
  }
  static Update_Failure(error) {
    return {
      type: UPDATE_STREETS_FAILURE,
      error,
    };
  }
}
