const INITIAL_STATE = {
  users: localStorage.getItem("token"),
  signUp: null,
  profile:null
  
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
      case "SETPROFILE":
        return{
          ...state,
          profile: action.payload
        }
  }
  return state;
};