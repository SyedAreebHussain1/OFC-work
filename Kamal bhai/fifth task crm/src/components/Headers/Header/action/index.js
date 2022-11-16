import {
    CAMPAIGN,
    CAMPAIGN_SUCCESS,
    CAMPAIGN_FAILURE,
}
    from "../constant";

export class SocialCampaign {
    static Campaign() {
        return {
            type: CAMPAIGN,
        };
    }
    static CampaignSuccess(response) {
        return {
            type: CAMPAIGN_SUCCESS,
            payload: response,
        };
    }
    static CampaignFailure(error) {
        return {
            type: CAMPAIGN_FAILURE,
            error,
        };
    }
}

