import {
    CAMPAIGN,
    CAMPAIGN_SUCCESS,
    CAMPAIGN_FAILURE,
} from "../constant";
const INITIAL_STATE = {
    Data: null,
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
};
export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return states;
        case CAMPAIGN:
            return {
                ...states,
                isLoading: true,
                isError: false,
                isLoggedIn: false,
                Data: null,
                error: {},
            };
        case CAMPAIGN_SUCCESS:
            return {
                ...states,
                isLoading: false,
                isLoggedIn: true,
                Data: action.payload,
            };
        case CAMPAIGN_FAILURE:
            return {
                ...states,
                isLoading: false,
                isError: true,
                error: action.error,
            };


    }
};
