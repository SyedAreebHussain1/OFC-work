import { API } from "../url";
import {
  CREATE_PROJECT_URL,
  GET_PROJECT_URL,
  PROJECT_ADD_FEATURE_URL,
  PROJECT_ADD_PLOT_URL,
} from "../../constants/projectConstants";

export const createProjectApi = (body) =>
  API.post(`${CREATE_PROJECT_URL}`, body);

export const projectAddFeatureApi = (body) =>
  API.post(`${PROJECT_ADD_FEATURE_URL}`, body);

export const getProjectsApi = (pageNumber, pageLimit) =>
  API.get(`${GET_PROJECT_URL}/${0}?page=${pageNumber}&limit=${pageLimit}`);

export const projectAddPlotApi = (body) =>
  API.post(`${PROJECT_ADD_PLOT_URL}`, body);
