const INITIAL_STATE = {
  users: null,
  signUp: null
};
export default (state = INITIAL_STATE, action) => {
  // console.log("action=>", action);
  switch (action.type) {
    case "SETSIGNUP":
      return {
        ...state,
        signUp: action.payload
      };
    case "SETDATA":
      return {
        ...state,
        users: action.payload
      }
  }
  return state;
};