import {
  GET_SUPPORT_CONVERSATION_SUCCESS,
  GET_SUPPORT_CONVERSATION_BY_ID_SUCCESS,
  SUPPORT_CHAT_SEND_BY_ADMIN_SUCCESS,
} from "../../constants/chatConstants";
import * as api from "../../config/api/chatApis";

export const getSupportConversationAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getSuppportConversationApi(
        pageNumber,
        pageLimit
      );

      dispatch({ type: GET_SUPPORT_CONVERSATION_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const getSupportConversationByIdAction = (id) => async (dispatch) => {
  try {
    let { data } = await api.getSuppportConversationByIdApi(id);

    dispatch({
      type: GET_SUPPORT_CONVERSATION_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const sendSupportChatByAdminAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.sendSuppportChatByAdminApi(body);

      dispatch({
        type: SUPPORT_CHAT_SEND_BY_ADMIN_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure({ message: message });
      } else if (error?.message) {
        // onFailure({ message: error.message });
      }
    }
  };
