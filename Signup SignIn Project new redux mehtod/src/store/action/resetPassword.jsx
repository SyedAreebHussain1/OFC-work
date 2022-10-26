import { RESETPASSWORD } from "../../constants/authConstants";
import { RESETPASSWORD_URL } from "../../constants/authConstants";


export const resetPasswordAction = (data,token) => {
    return (dispatch) => 
    fetch(`https://backend.squarepro.net/${RESETPASSWORD_URL}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      //   .then((json)=>console.log('json',json))
      .then((json) => dispatch({ type: RESETPASSWORD, payload: json }));
  }