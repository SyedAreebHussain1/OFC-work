const INITIAL_STATE = {
  signup: null,
  login: null,
  profile: null,
  verify: null
};
export default (state = INITIAL_STATE, action) => {
  console.log("action=>", action);
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        signup: action.payload
      };
    case "LOGIN":
      return {
        ...state,
        login: action.payload
      }
    case "PROFILE":
      return {
        ...state,
        profile: action.payload
      }
    case "VERIFY":
      return {
        ...state,
        verify: action.payload
      }
  }
  return state;
}