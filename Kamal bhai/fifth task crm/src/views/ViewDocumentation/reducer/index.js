// import {
//   FETCH_ALL_SUPPORT,
//   FETCH_ALL_SUPPORT_SUCCESS,
//   FETCH_ALL_SUPPORT_FAILURE,
//   FETCH_STATUS,
//   FETCH_STATUS_SUCCESS,
//   FETCH_STATUS_FAILURE,
//   UPDATE_SUPPORT_STATUS,
//   UPDATE_SUPPORT_STATUS_SUCCESS,
//   UPDATE_SUPPORT_STATUS_FAILURE,
//   FETCH_FILES,
//   FETCH_FILES_SUCCESS,
//   FETCH_FILES_FAILURE,
// } from "../constants.js";

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
//   switch (action.type) {
//     default:
//       return states;
//     case FETCH_ALL_SUPPORT:
//       return {
//         ...states,
//         isLoading: true,
//         isError: false,
//         isLoggedIn: false,
//         AllSupports: null,
//         error: {},
//       };
//     case FETCH_ALL_SUPPORT_SUCCESS:
//       return {
//         ...states,
//         isLoading: false,
//         isLoggedIn: true,
//         AllSupports: action.payload,
//       };
//     case FETCH_ALL_SUPPORT_FAILURE:
//       return {
//         ...states,
//         isLoading: false,
//         isError: true,
//         error: action.error,
//       };

//     case FETCH_STATUS:
//       return {
//         ...states,
//         isLoading: true,
//         isError: false,
//         isLoggedIn: false,
//         Status: null,
//         error: {},
//       };
//     case FETCH_STATUS_SUCCESS:
//       return {
//         ...states,
//         isLoading: false,
//         isLoggedIn: true,
//         Status: action.payload,
//       };
//     case FETCH_STATUS_FAILURE:
//       return {
//         ...states,
//         isLoading: false,
//         isError: true,
//         error: action.error,
//       };

//     case UPDATE_SUPPORT_STATUS:
//       return {
//         ...states,
//         isLoading: true,
//         isError: false,
//         isLoggedIn: false,
//         Response: null,
//         error: {},
//       };
//     case UPDATE_SUPPORT_STATUS_SUCCESS:
//       return {
//         ...states,
//         isLoading: false,
//         isLoggedIn: true,
//         Response: action.payload,
//       };
//     case UPDATE_SUPPORT_STATUS_FAILURE:
//       return {
//         ...states,
//         isLoading: false,
//         isError: true,
//         error: action.error,
//       };

//     case FETCH_FILES:
//       return {
//         ...states,
//         isLoading: true,
//         isError: false,
//         isLoggedIn: false,
//         SupportFiles: null,
//         error: {},
//       };
//     case FETCH_FILES_SUCCESS:
//       return {
//         ...states,
//         isLoading: false,
//         isLoggedIn: true,
//         SupportFiles: action.payload,
//       };
//     case FETCH_FILES_FAILURE:
//       return {
//         ...states,
//         isLoading: false,
//         isError: true,
//         error: action.error,
//       };
//   }
// };
