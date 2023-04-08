import {
  GET_NEW_REPORT,
  GET_NEW_REPORT_SUCESS,
  GET_NEW_REPORT_FALURE,
} from "../constants";
const INITIAL_STATE = {
  signin: localStorage.getItem("token"),
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Reports: null,
};
export default (states = INITIAL_STATE, action) => {
  console.log("action=>", action);
  switch (action.type) {
    default:
      return states;
    case GET_NEW_REPORT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Reports: null,
        error: {},
      };
    case GET_NEW_REPORT_SUCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Reports: action.payload,
      };
    case GET_NEW_REPORT_FALURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    // return states;
  }
};

// const INITIAL_STATE = {
//   Reports: null,
//   isLoading: false,
//   isError: false,
//   error: {},
//   isLoggedIn: false,
//   Response: null,
//   AssignResponse: null,
// };

// export default (states = INITIAL_STATE, action) => {
//   console.log('user=>',action)
//   switch (action.type) {
//     default:
//       return states;
//     case FETCH_SUPPORT_TYPE:
//       return {
//         ...states,
//         isLoading: true,
//         isError: false,
//         isLoggedIn: false,
//         SupportType: null,
//         error: {},
//       };
//     case FETCH_SUPPORT_TYPE_SUCCESS:
//       return {
//         ...states,
//         isLoading: false,
//         isLoggedIn: true,
//         SupportType: action.payload,
//       };
//     case FETCH_SUPPORT_TYPE_FAILURE:
//       return {
//         ...states,
//         isLoading: false,
//         isError: true,
//         error: action.error,
//       };

//     case ADD_NEW_SUPPORT:
//       return {
//         ...states,
//         isLoading: true,
//         isError: false,
//         isLoggedIn: false,
//         Response: null,
//         error: {},
//       };
//     case ADD_NEW_SUPPORT_SUCCESS:
//       return {
//         ...states,
//         isLoading: false,
//         isLoggedIn: true,
//         Response: action.payload,
//       };
//     case ADD_NEW_SUPPORT_FAILURE:
//       return {
//         ...states,
//         isLoading: false,
//         isError: true,
//         error: action.error,
//       };

//     case FETCH_SUPPORT_BY_TOKEN:
//       return {
//         ...states,
//         isLoading: true,
//         isError: false,
//         isLoggedIn: false,
//         SupportByToken: null,
//         error: {},
//       };
//     case FETCH_SUPPORT_BY_TOKEN_SUCCESS:
//       return {
//         ...states,
//         isLoading: false,
//         isLoggedIn: true,
//         SupportByToken: action.payload,
//       };
//     case FETCH_SUPPORT_BY_TOKEN_FAILURE:
//       return {
//         ...states,
//         isLoading: false,
//         isError: true,
//         error: action.error,
//       };

//       case FETCH_SUPPORT_IMAGES:
//       return {
//         ...states,
//         isLoading: true,
//         isError: false,
//         isLoggedIn: false,
//         SupportImages: null,
//         error: {},
//       };
//     case FETCH_SUPPORT_IMAGES_SUCCESS:
//       return {
//         ...states,
//         isLoading: false,
//         isLoggedIn: true,
//         SupportImages: action.payload,
//       };
//     case FETCH_SUPPORT_IMAGES_FAILURE:
//       return {
//         ...states,
//         isLoading: false,
//         isError: true,
//         error: action.error,
//       };
//   }
// };
