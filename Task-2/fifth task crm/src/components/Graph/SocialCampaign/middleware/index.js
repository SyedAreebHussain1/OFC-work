import axios from "axios";
import { AllSocialCampaign } from "../action";
import { SocialCampaign_PATH } from "../constant";
// import { BASEURL } from "config/api/URL";
import { BASEURL } from "../../../../config/api/URL";

export const showSocialCampaignGraph = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(AllSocialCampaign.AllSocialCampaignGraph());

  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${SocialCampaign_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(
          AllSocialCampaign.AllSocialCampaignGraph_Success(res.data.response)
        );
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(
          AllSocialCampaign.AllSocialCampaignGraph_Failure(res.data.message)
        );
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) =>
      dispatch(AllSocialCampaign.AllSocialCampaignGraph_Failure(error))
    );
};
