import  {SIGNUP_ACCOUNTVERIFY} from "../../constants/authConstants"
import { SIGNUP_ACCOUNTVERIFY_URL} from "../../constants/authConstants"

export const signUpAccountVerifyAction = (data) => {
    return (dispatch) => 
    fetch(`https://backend.squarepro.net/${SIGNUP_ACCOUNTVERIFY_URL}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      //   .then((json)=>console.log('json',json))
      .then((json) => dispatch({ type: SIGNUP_ACCOUNTVERIFY, payload: json }));
  }