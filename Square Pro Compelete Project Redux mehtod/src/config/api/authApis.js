import { API } from "../url";
import { SIGNIN_URL } from "../../constants/authConstants";

export const signInApi = (user) => API.post(`${SIGNIN_URL}`, user);
