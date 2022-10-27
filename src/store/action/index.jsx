import { SIGNUP } from "../../constants/authConstants";
import { SIGNUP_URL } from "../../constants/authConstants";

export const signUpAction = (data) => {
  //   console.log("hello world");
  // console.log('dataActionSignUp', data)
  return (dispatch) =>
    fetch(`https://backend.squarepro.net/${SIGNUP_URL}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      //   .then((json)=>console.log('json',json))
      .then((json) => dispatch({ type: SIGNUP, payload: json }));
};
