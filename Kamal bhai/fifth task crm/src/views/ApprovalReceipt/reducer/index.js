import {
  APPROVALRECEIPT, APPROVALRECEIPT_SUCCESS, APPROVALRECEIPT_FAILURE,
  UPDATEAPPROVALSTATUS_SUCCESS, UPDATEAPPROVALSTATUS, UPDATEAPPROVALSTATUS_FAILURE,
  UPDATEPAYMENT, UPDATEPAYMENT_FAILURE, UPDATEPAYMENT_SUCCESS,
  UPDATEPAYMENTSTAGESTATUS, UPDATEPAYMENTSTAGESTATUS_SUCCESS, UPDATEPAYMENTSTAGESTATUS_FAILURE,

} from "../constant";
const INITIAL_STATE = {

  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Response: null,
  Update: null,
  ReceiptUpdate:null,
  UpdatePaymentStageRes : null,
  apprveMsg: "",
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;





      case UPDATEPAYMENTSTAGESTATUS:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          UpdatePaymentStageRes: null,
          error: {},
        };
      case UPDATEPAYMENTSTAGESTATUS_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          UpdatePaymentStageRes: action.payload,
        };
      case UPDATEPAYMENTSTAGESTATUS_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };



    case APPROVALRECEIPT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case APPROVALRECEIPT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case APPROVALRECEIPT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case UPDATEAPPROVALSTATUS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Update: null,
        error: {},
      };
    case UPDATEAPPROVALSTATUS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Update: action.payload,
      };
    case UPDATEAPPROVALSTATUS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case UPDATEPAYMENT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        ReceiptUpdate: null,
        apprveMsg: "",
        error: {},
      };
    case UPDATEPAYMENT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        ReceiptUpdate: action.payload,
        apprveMsg: "manual hit data",
        
      };
    case UPDATEPAYMENT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };


  };
}