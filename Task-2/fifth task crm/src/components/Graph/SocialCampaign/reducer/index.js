import { SocialCampaign, SocialCampaign_SUCCESS, SocialCampaign_FAILURE } from "../constant";

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    AllCampaign: null,
};
export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return states;
        case SocialCampaign:
       
            return {
                ...states,
                isLoading: true,
                isError: false,
                isLoggedIn: false,
                AllCampaign: null,
                error: {},
            };
        case SocialCampaign_SUCCESS:
          
            return {
                ...states,
                isLoading: false,
                isLoggedIn: true,
                AllCampaign: action.payload,
            };
        case SocialCampaign_FAILURE:
         
            return {
                ...states,
                isLoading: false,
                isError: true,
                error: action.error,
            };
    }
};
