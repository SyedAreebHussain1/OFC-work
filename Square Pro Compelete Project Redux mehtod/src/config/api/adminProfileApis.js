import { API } from "../url";
import {
  GET_ADMIN_PROFILE_URL,
  UPDATE_ADMIN_PROFILE_URL,
  GET_ASSIGN_MODULE_URL,
} from "../../constants/adminProfileConstants";

export const getAdminProfile = (token) =>
  API.get(`${GET_ADMIN_PROFILE_URL}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const updateAdminProfile = (token) =>
  API.patch(`${UPDATE_ADMIN_PROFILE_URL}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const getAssignModule = (token) =>
  API.get(`${GET_ASSIGN_MODULE_URL}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
