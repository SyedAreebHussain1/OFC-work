import {
  CREATE_PROJECT_SUCCESS,
  GET_PROJECT_SUCCESS,
  PROJECT_ADD_FEATURE_SUCCESS,
  PROJECT_ADD_PLOT_SUCCESS,
} from "../../constants/projectConstants";
import * as api from "../../config/api/projectApis";

export const createProjectAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createProjectApi(body);

      dispatch({ type: CREATE_PROJECT_SUCCESS, payload: data.data });
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

export const projectAddFeatureAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.projectAddFeatureApi(body);

      dispatch({ type: PROJECT_ADD_FEATURE_SUCCESS, payload: data.data });
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

export const getProjectsAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getProjectsApi(pageNumber, pageLimit);

      dispatch({ type: GET_PROJECT_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const projectAddPlotAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.projectAddPlotApi(body);

      dispatch({ type: PROJECT_ADD_PLOT_SUCCESS, payload: data.data });
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
