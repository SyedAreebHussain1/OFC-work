import axios from "axios";
import { SocialCampaign } from "../action";     //done
import { CAMPAIGN_PATH } from "../constant"; //done
import { BASEURL } from "../../../../config/api/URL"; //done

export const CheckCampaign = (OnSuccess, OnFailure) => (dispatch) => {
    dispatch(SocialCampaign.Campaign());
  let token = localStorage.getItem("auth");

    axios
        .get(`${BASEURL}${CAMPAIGN_PATH}`, {
            headers: {
                "Content-Type": "application/json",
                    Authorization: `bearer ${token}`, 

            },
        })
        .then((res) => {
            if (res.data.status === true) {
                dispatch(SocialCampaign.CampaignSuccess(res.data.response));
                dispatch(OnSuccess(res.data.message));
            } else {
                dispatch(SocialCampaign.CampaignFailure(res.data.message));
                dispatch(OnFailure(res.data.message));
            }
        })
        .catch((error) => dispatch(SocialCampaign.CampaignFailure(error)));
};

