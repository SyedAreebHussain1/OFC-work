import {
  CREATE_AGENCY_SUCCESS,
  PHOTO_UPLOAD_SUCCESS,
} from "../../constants/agencyConstants";
import * as api from "../../config/api/agencyApis";

export const createAgencyAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createAgencyApi(body);

      dispatch({ type: CREATE_AGENCY_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure({ message: message });
      } else if (error?.message) {
        // onFailure({ message: error.message });
      }
    }
  };

export const photoUploadAction = (body) => async (dispatch) => {
  try {
    let { data } = await api.photoUploadApi(body);
    dispatch({ type: PHOTO_UPLOAD_SUCCESS, payload: data.data });
    // dispatch(onSuccess(data.message, data.data));
  } catch (error) {
    if (error?.response?.data?.message) {
      let message = error.response.data.message;
      // onFailure({ message: message });
    }
  }
};
