import {
  UPLOAD_FILE,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAILURE,
} from "../constant";

export class UploadFile {
  static Start() {
    return {
      type: UPLOAD_FILE,
    };
  }
  static Upload_Success(response) {
    return {
      type: UPLOAD_FILE_SUCCESS,
      payload: response,
    };
  }
  static Upload_Failure(error) {
    return {
      type: UPLOAD_FILE_FAILURE,
      error,
    };
  }
}
