import { SuccessfullLead, SuccessfullLead_SUCCESS, SuccessfullLead_FAILURE } from "../constant";

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    SuccessfullGraph: null,
};
export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return states;

        case SuccessfullLead:
         
            return {
                ...states,
                isLoading: true,
                isError: false,
                isLoggedIn: false,
                SuccessfullGraph: null,
                error: {},
            };
        case SuccessfullLead_SUCCESS:
           
            return {
                ...states,
                isLoading: false,
                isLoggedIn: true,
                SuccessfullGraph: action.payload,
            };
        case SuccessfullLead_FAILURE:
         
            return {
                ...states,
                isLoading: false,
                isError: true,
                error: action.error,
            };
    }
};
