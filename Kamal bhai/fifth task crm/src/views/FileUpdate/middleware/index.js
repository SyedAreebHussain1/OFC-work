import axios from "axios";
import {Customer_File_Update} from "../action/index";
import {CUSTOMER_DATA_PATH} from "../constant";
import {BASEURL} from "config/api/URL";


export const Customer_Data_Middleware = (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(Customer_File_Update.Customer());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${CUSTOMER_DATA_PATH}`,body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`, 
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(Customer_File_Update.Customer_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(Customer_File_Update.Customer_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(Customer_File_Update.Customer_Failure(error)));
  };
  