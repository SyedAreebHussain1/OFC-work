import {
    CALLINGGRAPH, CALLINGGRAPH_SUCCESS, CALLINGGRAPH_FAILURE,
} from "../constant";

export class AllCallsDetails {
    static CallGraph() {
        return {
            type: CALLINGGRAPH,
        };
    }
    static CallGraph_Success(response) {
        return {
            type: CALLINGGRAPH_SUCCESS,
            payload: response,
        };
    }
    static CallGraph_Failure(error) {
        return {
            type: CALLINGGRAPH_FAILURE,
            error,
        };
    }
}
