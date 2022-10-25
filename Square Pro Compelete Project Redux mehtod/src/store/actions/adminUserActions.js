import {
  CREATE_ADMIN_SUCCESS,
  ASSIGN_MODULE_SUCCESS,
  GET_ALL_ADMIN_SUCCESS,
  GET_MODULES_SUCCESS,
  GET_CUSTOMER_LIST_SUCCESS,
  GET_AGENT_LIST_SUCCESS,
} from "../../constants/adminUserConstants";
import * as api from "../../config/api/adminUserApis";

export const createAdminUser =
  (user, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createAdmin(user);

      dispatch({ type: CREATE_ADMIN_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure({ message: message });
      } else if (error?.message) {
        if (error.message.includes("Network")) {
          onFailure(error.message);
        }
      }
    }
  };

export const assignModuleAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.assignModuleApi(body);

      dispatch({ type: ASSIGN_MODULE_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
        if (error.message.includes("Network")) {
          onFailure(error.message);
        }
      }
    }
  };

export const getAllAdminAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getAllAdminApi(pageNumber, pageLimit);

      dispatch({ type: GET_ALL_ADMIN_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const getModulesAction = () => async (dispatch) => {
  try {
    let { data } = await api.getModulesApi();

    dispatch({ type: GET_MODULES_SUCCESS, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCustomerListAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getCustomerListApi(pageNumber, pageLimit);

      dispatch({ type: GET_CUSTOMER_LIST_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const getAgentListAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getAgentListApi(pageNumber, pageLimit);

      dispatch({ type: GET_AGENT_LIST_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
