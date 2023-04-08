import axios from "axios";
import {
  // AddReport,
  GetDataAct,
} from "../action";
import { GET_REPORT_PATH } from "../constants";

export const get_Report = (onSuccess, onFailure) => (dispatch) => {
  dispatch(GetDataAct.Get());
  let token = localStorage.getItem("auth");
  axios
    .get(`http://192.168.18.39:3000/crm/${GET_REPORT_PATH}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(GetDataAct.GetSuccess(res.data.response));
        // swal("Congratulations!", "Submit Report successfully", "success");
        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(GetDataAct.GetFailure(res.data.message));
        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => {
      dispatch(GetDataAct.GetFailure(error));
    });
};
