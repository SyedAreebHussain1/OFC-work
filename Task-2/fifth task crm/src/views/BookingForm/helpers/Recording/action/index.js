

import { RECORDING,RECORDING_SUCCESS,RECORDING_FAILURE} from "../constant.js";
export class RecordingDetail {
  static Recording() {
    return {
      type: RECORDING,
    };
  }
  static Recording_Success(response) {
    return {
      type: RECORDING_SUCCESS,
      payload: response,
    };
  }
  static Recording_Failure(error) {
    return {
      type: RECORDING_FAILURE,
      error,
    };
  }
 



}
