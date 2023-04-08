import {
    CALLINGGRAPH, CALLINGGRAPH_SUCCESS, CALLINGGRAPH_FAILURE,
} from "../constant";

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    Calls: null,
};
export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return states;
        case CALLINGGRAPH:
            return {
                ...states,
                isLoading: true,
                isError: false,
                isLoggedIn: false,
                Calls: null,
                error: {},
            };
        case CALLINGGRAPH_SUCCESS:
            return {
                ...states,
                isLoading: false,
                isLoggedIn: true,
                Calls: action.payload,
            };
        case CALLINGGRAPH_FAILURE:
            return {
                ...states,
                isLoading: false,
                isError: true,
                error: action.error,
            };
    }
};
