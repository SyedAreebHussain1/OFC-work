import {
  GET_PROJECT_REQUEST_SUCCESS,
  UPDATE_PROJECT_REQUEST_STATUS_SUCCESS,
  AGENCY_LIST_SUCCESS,
  AGENCY_AGENTS_LIST_SUCCESS,
  GET_PLOT_REQUEST_SUCCESS,
  UPDATE_PLOT_REQUEST_STATUS_SUCCESS,
} from "../../constants/adminConstants";
import * as api from "../../config/api/adminApis";

export const getProjectRequestAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getProjectRequestApi(pageNumber, pageLimit);

      dispatch({ type: GET_PROJECT_REQUEST_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateProjectRequestAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.updateProjectRequestApi(id, body);

      dispatch({
        type: UPDATE_PROJECT_REQUEST_STATUS_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
        // onFailure({ message: error.message });
      }
    }
  };

export const getAgencyListAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getAgencyListApi(pageNumber, pageLimit);

      dispatch({ type: AGENCY_LIST_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const getAgencyAgentsListAction =
  (id, pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getAgencyAgentsListApi(
        id,
        pageNumber,
        pageLimit
      );

      dispatch({ type: AGENCY_AGENTS_LIST_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const getPlotRequestAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getPlotRequestApi(pageNumber, pageLimit);

      dispatch({ type: GET_PLOT_REQUEST_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updatePlotRequestAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.updatePlotRequestApi(id, body);

      dispatch({
        type: UPDATE_PLOT_REQUEST_STATUS_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
        // onFailure({ message: error.message });
      }
    }
  };
