import { API } from "../url";
import {
  CREATE_AGENCY_URL,
  PHOTO_UPLOAD_URL,
} from "../../constants/agencyConstants";

export const createAgencyApi = (body) => API.post(`${CREATE_AGENCY_URL}`, body);

export const photoUploadApi = (body) =>
  API.post(`${PHOTO_UPLOAD_URL}`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
