import { SocialCampaign,SocialCampaign_SUCCESS,SocialCampaign_FAILURE } from "../constant";

export class AllSocialCampaign {
    static AllSocialCampaignGraph() {
      return {
        type: SocialCampaign,
      };
    }
    static AllSocialCampaignGraph_Success(response) {
      return {
        type: SocialCampaign_SUCCESS,
        payload: response,
      };
    }
    static AllSocialCampaignGraph_Failure(error) {
      return {
        type: SocialCampaign_FAILURE,
        error,
      };
    }
  }
