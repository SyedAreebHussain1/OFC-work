import { API } from "../url";
import {
  SUPPORT_CONVERSATION_ENDPOINT,
  SUPPORT_CHAT_SEND_BY_ADMIN_ENDPOINT,
} from "../../constants/chatConstants";

export const getSuppportConversationApi = (pageNumber, pageLimit) =>
  API.get(`${SUPPORT_CONVERSATION_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`);

export const getSuppportConversationByIdApi = (id) =>
  API.get(`${SUPPORT_CONVERSATION_ENDPOINT}/${id}`);

export const sendSuppportChatByAdminApi = (body) =>
  API.post(`${SUPPORT_CHAT_SEND_BY_ADMIN_ENDPOINT}`, body);
