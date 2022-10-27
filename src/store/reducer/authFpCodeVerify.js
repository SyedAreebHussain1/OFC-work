import { FPCODEVERIFY } from "../../constants/authConstants";

const INITIAL_STATE = {
    fpcode: null,
};
const authFpCodeVerify = (state = INITIAL_STATE, action) => {
    console.log("authFpCodeAction action=>", action);
    switch (action.type) {
        case FPCODEVERIFY:
            return {
                ...state,
                fpcode: action.payload,
            };
    }
    return state;
};
export default authFpCodeVerify;