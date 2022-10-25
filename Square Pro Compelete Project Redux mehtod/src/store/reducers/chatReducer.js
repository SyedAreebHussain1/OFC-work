import {
  GET_SUPPORT_CONVERSATION_SUCCESS,
  GET_SUPPORT_CONVERSATION_BY_ID_SUCCESS,
  SUPPORT_CHAT_SEND_BY_ADMIN_SUCCESS,
} from "../../constants/chatConstants";

const INITIAL_STATE = {
  allSupportConversation: null,
  supportConversationById: null,
  sendSupportChatByAdminRes: null,
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SUPPORT_CONVERSATION_SUCCESS:
      return { ...state, allSupportConversation: action.payload };
    case GET_SUPPORT_CONVERSATION_BY_ID_SUCCESS:
      return { ...state, supportConversationById: action.payload };
    case SUPPORT_CHAT_SEND_BY_ADMIN_SUCCESS:
      return { ...state, sendSupportChatByAdminRes: action.payload };
    default:
      return state;
  }
};

export default chatReducer;
