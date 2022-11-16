import axios from "axios";
import { AllSuccessfullLead } from "../action";
import { SuccessfullLead_PATH } from "../constant";
// import { BASEURL } from "config/api/URL";
import { BASEURL } from "../../../../config/api/URL";

export const showAllLeadGraph = (body, OnSuccess, OnFailure) => (dispatch) => {

  dispatch(AllSuccessfullLead.SuccessfullLeadGraph());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${SuccessfullLead_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {

      if (res.data.status === true) {
        dispatch(
          AllSuccessfullLead.SuccessfullLeadGraph_Success(res.data.response)
        );
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(
          AllSuccessfullLead.SuccessfullLeadGraph_Failure(res.data.message)
        );
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) =>
      dispatch(AllSuccessfullLead.SuccessfullLeadGraph_Failure(error))
    );
};
