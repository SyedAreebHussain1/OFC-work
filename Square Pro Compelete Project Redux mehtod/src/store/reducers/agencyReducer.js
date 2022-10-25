import {
  CREATE_AGENCY_SUCCESS,
  PHOTO_UPLOAD_SUCCESS,
} from "../../constants/agencyConstants";

const INITIAL_STATE = {
  createAgencyRes: null,
  photoUrl: null,
};

const agencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_AGENCY_SUCCESS:
      return { ...state, createAgencyRes: action.payload };
    case PHOTO_UPLOAD_SUCCESS:
      return { ...state, photoUrl: action.payload };
    default:
      return state;
  }
};

export default agencyReducer;
