import { API } from "../url";
import {
  CREATE_ADMIN_URL,
  ASSIGN_MODULE_URL,
  GET_ALL_ADMIN_URL,
  GET_MODULES_URL,
  GET_CUSTOMER_LIST_URL,
  GET_AGENT_LIST_URL,
} from "../../constants/adminUserConstants";

export const createAdmin = (user) => API.post(`${CREATE_ADMIN_URL}`, user);

export const assignModuleApi = (body) => API.post(`${ASSIGN_MODULE_URL}`, body);

export const getAllAdminApi = (pageNumber, pageLimit) =>
  API.get(`${GET_ALL_ADMIN_URL}?page=${pageNumber}&limit=${pageLimit}`);

export const getModulesApi = () =>
  API.get(`${GET_MODULES_URL}?page=1&limit=100`);

export const getCustomerListApi = (pageNumber, pageLimit) =>
  API.get(`${GET_CUSTOMER_LIST_URL}?page=${pageNumber}&limit=${pageLimit}`);

export const getAgentListApi = (pageNumber, pageLimit) =>
  API.get(`${GET_AGENT_LIST_URL}?page=${pageNumber}&limit=${pageLimit}`);
