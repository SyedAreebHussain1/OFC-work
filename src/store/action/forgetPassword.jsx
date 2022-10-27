import { FORGOTPASSWORD } from "../../constants/authConstants";
import { FORGOTPASSWORD_URL } from "../../constants/authConstants";

export const forgetPasswordAction = (data) => {
    return (dispatch) => 
    fetch(`https://backend.squarepro.net/${FORGOTPASSWORD_URL}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      //   .then((json)=>console.log('json',json))
      .then((json) => dispatch({ type: FORGOTPASSWORD, payload: json }));
  }