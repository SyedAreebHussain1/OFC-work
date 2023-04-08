import axios from "axios";
import { RecordingDetail } from "../action/index";
import { RECORDING_PATH } from "../constant";
import { BASEURL } from "config/api/URL";






export const showRecording = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(RecordingDetail.Recording());

  axios
    .post(`${BASEURL}${RECORDING_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(RecordingDetail.Recording_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(RecordingDetail.Recording_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(RecordingDetail.Recording_Failure(error)));
};
