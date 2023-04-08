import axios from "axios";
import { UploadFile } from "../action/index";
import { UPLOAD_FILE_PATH } from "../constant";
import { BASEURL } from "config/api/URL";

export const uploadFileMiddleware =
  (id, body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(UploadFile.Start());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${UPLOAD_FILE_PATH}/${id}`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(UploadFile.Upload_Success(res.data.response));
          // swal("Successful","Successfully Initiated","success")
          dispatch(OnSuccess(res.data.response));
        } else {
          dispatch(UploadFile.Upload_Failure(res.data.message));

          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(UploadFile.Upload_Failure(error)));
  };
