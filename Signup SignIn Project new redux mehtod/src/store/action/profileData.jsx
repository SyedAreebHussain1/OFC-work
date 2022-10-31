import { PROFILE } from "../../constants/profileConstants";
import { PROFILE_URL } from "../../constants/profileConstants";

export const profileDataAction = (data) => {
    //   console.log("hello world");
    // console.log('dataActionSignUp', data)
    let token = localStorage.getItem("token");
    return (dispatch) =>
        fetch(`https://backend.squarepro.net/${PROFILE_URL}`, {
            method: "GET",
            // body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `bearer ${token}`,
            },
        })
            .then((response) => response.json())
            //   .then((json)=>console.log('json',json))
            .then((json) => dispatch({ type: PROFILE, payload: json }));
};