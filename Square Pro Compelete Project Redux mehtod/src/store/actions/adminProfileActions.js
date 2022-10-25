import {
  GET_ADMIN_PROFILE_SUCCESS,
  GET_ASSIGN_MODULE_SUCCESS,
} from "../../constants/adminProfileConstants";
import * as api from "../../config/api/adminProfileApis";

export const adminProfile = (token) => async (dispatch) => {
  try {
    let { data } = await api.getAdminProfile(token);
    let profile = JSON.stringify(data.data);

    localStorage.setItem("adminProfile", profile);

    dispatch({ type: GET_ADMIN_PROFILE_SUCCESS, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const assignModule = (token) => async (dispatch) => {
  try {
    let { data } = await api.getAssignModule(token);
    let modules = JSON.stringify(data.data);

    localStorage.setItem("assignModule", modules);

    dispatch({ type: GET_ASSIGN_MODULE_SUCCESS, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
