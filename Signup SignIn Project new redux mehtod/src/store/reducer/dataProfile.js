import { PROFILE } from "../../constants/profileConstants";

const INITIAL_STATE = {
    profile: null,
};
const dataProfile = (state = INITIAL_STATE, action) => {
    console.log("profile_action=>", action);
    switch (action.type) {
        case PROFILE:
            return {
                ...state,
                profile: action.payload,
            };
    }
    return state;
};
export default dataProfile;