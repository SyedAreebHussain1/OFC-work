import { RESETPASSWORD } from "../../constants/authConstants";

const INITIAL_STATE = {
    resetpassword: null,
};
const authResetPassword = (state = INITIAL_STATE, action) => {
    console.log("authResetPassword action=>", action);
    switch (action.type) {
        case RESETPASSWORD:
            return {
                ...state,
                resetpassword: action.payload,
            };
    }
    return state;
};
export default authResetPassword;