import { FPCODEVERIFY } from "../../constants/authConstants";
import { FPCODEVERIFY_URL } from "../../constants/authConstants";


export const fpCodeAction = (data) => {
    return (dispatch) => 
    fetch(`https://backend.squarepro.net/${FPCODEVERIFY_URL}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      //   .then((json)=>console.log('json',json))
      .then((json) => dispatch({ type: FPCODEVERIFY, payload: json }));
  }