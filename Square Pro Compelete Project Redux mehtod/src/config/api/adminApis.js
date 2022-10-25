import { API } from "../url";
import {
  PROJECT_REQUEST_ENDPOINT,
  UPDATE_PROJECT_REQUEST_ENDPOINT,
  AGENCY_LIST_ENDPOINT,
  AGENCY_AGENTS_LIST_ENDPOINT,
  PLOT_REQUEST_ENDPOINT,
  UPDATE_PLOT_REQUEST_ENDPOINT,
} from "../../constants/adminConstants";

export const getProjectRequestApi = (pageNumber, pageLimit) =>
  API.get(`${PROJECT_REQUEST_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`);

export const updateProjectRequestApi = (id, body) =>
  API.patch(`${UPDATE_PROJECT_REQUEST_ENDPOINT}/${id}`, body);

export const getAgencyListApi = (pageNumber, pageLimit) =>
  API.get(`${AGENCY_LIST_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`);

export const getAgencyAgentsListApi = (id, pageNumber, pageLimit) =>
  API.get(
    `${AGENCY_AGENTS_LIST_ENDPOINT}/${id}?page=${pageNumber}&limit=${pageLimit}`
  );

export const getPlotRequestApi = (pageNumber, pageLimit) =>
  API.get(`${PLOT_REQUEST_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`);

export const updatePlotRequestApi = (id, body) =>
  API.patch(`${UPDATE_PLOT_REQUEST_ENDPOINT}/${id}`, body);
