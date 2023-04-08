import {
  ADD_NEW_ROLE,
  ADD_NEW_ROLE_SUCCESS,
  ADD_NEW_ROLE_FAILURE,
  FETCH_ROLES,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
  FETCH_ALL_APP_MODULES,
  FETCH_ALL_APP_MODULES_SUCCESS,
  FETCH_ALL_APP_MODULES_FAILURE,
  FETCH_ALL_ASSIGN_MODULES,
  FETCH_ALL_ASSIGN_MODULES_SUCCESS,
  FETCH_ALL_ASSIGN_MODULES_FAILURE,
  UPDATE_CREATE_ASSIGN_MODULE,
  UPDATE_CREATE_ASSIGN_MODULE_SUCCESS,
  UPDATE_CREATE_ASSIGN_MODULE_FAILURE,
} from "../constants.js";

export class AddRole {
  static Add() {
    return {
      type: ADD_NEW_ROLE,
    };
  }
  static AddRoleSuccess(response) {
    return {
      type: ADD_NEW_ROLE_SUCCESS,
      payload: response,
    };
  }
  static AddRoleFailure(error) {
    return {
      type: ADD_NEW_ROLE_FAILURE,
      error,
    };
  }
}
export class UpdateCreateAssignModules {
  static Create() {
    return {
      type: UPDATE_CREATE_ASSIGN_MODULE,
    };
  }
  static CreateSuccess(response) {
    return {
      type: UPDATE_CREATE_ASSIGN_MODULE_SUCCESS,
      payload: response,
    };
  }
  static CreateFailure(error) {
    return {
      type: UPDATE_CREATE_ASSIGN_MODULE_FAILURE,
      error,
    };
  }
}
export class FetchRoles {
  static Fetch() {
    return {
      type: FETCH_ROLES,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_ROLES_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_ROLES_FAILURE,
      error,
    };
  }
}

export class FetchAppModules {
  static Fetch() {
    return {
      type: FETCH_ALL_APP_MODULES,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_ALL_APP_MODULES_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_ALL_APP_MODULES_FAILURE,
      error,
    };
  }
}
export class FetchAssignModules {
  static Fetch() {
    return {
      type: FETCH_ALL_ASSIGN_MODULES,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_ALL_ASSIGN_MODULES_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_ALL_ASSIGN_MODULES_FAILURE,
      error,
    };
  }
}
