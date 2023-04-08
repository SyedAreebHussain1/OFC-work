import axios from "axios";
import { QuotationDetail} from "../action/index";
import { QUOTATION_PATH } from "../constant";
import { BASEURL, URL } from "config/api/URL";


export const showQuotationDetail = (SaleQuotationNo, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(QuotationDetail.Quotation());
  let token = localStorage.getItem("auth");
  axios

  .get(`${BASEURL}${QUOTATION_PATH}?page=1&limit=10${SaleQuotationNo !==null &&SaleQuotationNo !==""?`&SaleQuotationNo=${SaleQuotationNo}`:""}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  })
  .then((res) => {
 
    if (res.data.status === true) {
      dispatch(QuotationDetail.Quotation_Success(res.data.response));
      dispatch(OnSuccess(res.data.response));
    } else {
      dispatch(QuotationDetail.Quotation_Failure(res.data.message));
      dispatch(OnFailure(res.data.message));
    }
  })
  .catch((error) => dispatch(QuotationDetail.Quotation_Failure(error)));






};
//   dispatch(QuotationDetail.Quotation());
//   let token = localStorage.getItem("auth");
//   axios
//     .post(`${BASEURL}${QUOTATION_PATH}`, body, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       if (res.data.status === true) {
//         dispatch(QuotationDetail.Quotation_Success(res.data.response));
//         dispatch(OnSuccess(res.data.message));
//       } else {
//         dispatch(QuotationDetail.Quotation_Failure(res.data.message));
//         dispatch(OnFailure(res.data.message));
//       }
//     })
//     .catch((error) => dispatch(QuotationDetail.Quotation_Failure(error)));
// };