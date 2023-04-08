import axios from "axios";

import { PROFILE } from "../../constants/profileConstants";
import { PROFILE_URL } from "../../constants/profileConstants";

export const profileAction = () => {
  let token = localStorage.getItem("token");
  return (dispatch) =>
    axios
      .get(`https://backend.squarepro.net/${PROFILE_URL}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: PROFILE, payload: res });
        // onSuccess(res.response);
      })
      .catch((err) => {
        // onFailure(err.response);
      });
};

// axios
//       .get(`${BASEURL}${FETCH_ALL_ASSIGN_MODULES_PATH}`, {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `bearer ${token}`,
//   },
// })
