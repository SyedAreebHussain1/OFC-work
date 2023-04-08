import axios from "axios";
import { GetCompanyWallet } from "../action/index";
import { GET_COMPANY_WALLET_PATH } from "../constant";
import { BASEURL, URL } from "config/api/URL";

export const getCompanyTransationMiddleware =
  (noOfRows, pageNumber, FromDate, ToDate, OnSuccess, OnFailure) =>
  (dispatch) => {
    dispatch(GetCompanyWallet.Fetch());

    let token = localStorage.getItem("auth");
    axios
      .get(
        `${URL}${GET_COMPANY_WALLET_PATH}?CompanyWallet_id=${1}&limit=${noOfRows}&page=${pageNumber}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(GetCompanyWallet.Fetch_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetCompanyWallet.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetCompanyWallet.Fetch_Failure(error)));
  };
