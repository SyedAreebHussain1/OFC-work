import axios from "axios";
import { UserForget } from "../action";
import { FORGET_PATH } from "../constant";
import { BASEURL } from "config/api/URL";
import swal from 'sweetalert';

export const CheckForget = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(UserForget.Forget());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${FORGET_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {

      if (res.data.response['status'] == true) {
        dispatch(UserForget.ForgetSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } 
      else {
        dispatch(UserForget.ForgetFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    // .catch((error) => dispatch(UserForget.ForgetFailure(error)));
    .catch((error) => {
     
      if(error.data === null )  {
          swal("error");
         
      }
    } )
};
