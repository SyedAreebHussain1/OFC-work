import { SIGNIN } from "../../constants/authConstants"
import { SIGNIN_URL } from "../../constants/authConstants"

export const signInAction = (data) => {
    return (dispatch) =>
        fetch(`https://backend.squarepro.net/${SIGNIN_URL}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            //   .then((json)=>console.log('json',json))
            .then((json) => {
                localStorage.setItem("token", json.data.token);
                dispatch({ type: SIGNIN, payload: json });
            });
}