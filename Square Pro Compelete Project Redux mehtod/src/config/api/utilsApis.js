import { API } from "../url";
import {
  PROJECT_OTHER_FEATURE_ENDPOINT,
  PROJECT_RECREATIONAL_ENDPOINT,
  PROJECT_NEARBY_LOCATION_ENDPOINT,
  PLOT_TYPE_ENDPOINT,
  PLOT_CATEGORY_ENDPOINT,
  PLOT_POSITION_ENDPOINT,
  PLOT_SECTOR_ENDPOINT,
  PLOT_STREET_ENDPOINT,
  PROJECT_MAIN_FEATURE_ENDPOINT,
  PROJECT_COMMUNITY_FEATURE_ENDPOINT,
  PROJECT_PLOT_FEATURE_ENDPOINT,
  COUNTRY_ENDPOINT,
  CITY_BY_COUNTRY_ID_ENDPOINT,
} from "../../constants/utilsConstants";

//PLOT TYPE
export const getPlotTypeApi = (pageNumber, pageLimit) =>
  API.get(`${PLOT_TYPE_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`);

export const createPlotTypeApi = (body) =>
  API.post(`${PLOT_TYPE_ENDPOINT}`, body);

export const deletePlotTypeApi = (id) =>
  API.delete(`${PLOT_TYPE_ENDPOINT}/${id}`);

export const editPlotTypeApi = (id, body) =>
  API.patch(`${PLOT_TYPE_ENDPOINT}/${id}`, body);

//PLOT CATEGORY
export const getPlotCategoryApi = (pageNumber, pageLimit) =>
  API.get(`${PLOT_CATEGORY_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`);

export const createPlotCategoryApi = (body) =>
  API.post(`${PLOT_CATEGORY_ENDPOINT}`, body);

export const deletePlotCategoryApi = (id) =>
  API.delete(`${PLOT_CATEGORY_ENDPOINT}/${id}`);

export const editPlotCategoryApi = (id, body) =>
  API.patch(`${PLOT_CATEGORY_ENDPOINT}/${id}`, body);

//PLOT POSITION
export const getPlotPositionApi = (pageNumber, pageLimit) =>
  API.get(`${PLOT_POSITION_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`);

export const createPlotPositionApi = (body) =>
  API.post(`${PLOT_POSITION_ENDPOINT}`, body);

export const deletePlotPositionApi = (id) =>
  API.delete(`${PLOT_POSITION_ENDPOINT}/${id}`);

export const editPlotPositionApi = (id, body) =>
  API.patch(`${PLOT_POSITION_ENDPOINT}/${id}`, body);

//PLOT SECTOR
export const getPlotSectorApi = (pageNumber, pageLimit) =>
  API.get(`${PLOT_SECTOR_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`);

export const createPlotSectorApi = (body) =>
  API.post(`${PLOT_SECTOR_ENDPOINT}`, body);

export const deletePlotSectorApi = (id) =>
  API.delete(`${PLOT_SECTOR_ENDPOINT}/${id}`);

export const editPlotSectorApi = (id, body) =>
  API.patch(`${PLOT_SECTOR_ENDPOINT}/${id}`, body);

//PLOT STREET
export const getPlotStreetApi = (pageNumber, pageLimit) =>
  API.get(`${PLOT_STREET_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`);

export const createPlotStreetApi = (body) =>
  API.post(`${PLOT_STREET_ENDPOINT}`, body);

export const deletePlotStreetApi = (id) =>
  API.delete(`${PLOT_STREET_ENDPOINT}/${id}`);

export const editPlotStreetApi = (id, body) =>
  API.patch(`${PLOT_STREET_ENDPOINT}/${id}`, body);

//PROJECT MAIN FEATURE
export const getProjectMainFeatureApi = (pageNumber, pageLimit) =>
  API.get(
    `${PROJECT_MAIN_FEATURE_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`
  );

export const createProjectMainFeatureApi = (body) =>
  API.post(`${PROJECT_MAIN_FEATURE_ENDPOINT}`, body);

export const deleteProjectMainFeatureApi = (id) =>
  API.delete(`${PROJECT_MAIN_FEATURE_ENDPOINT}/${id}`);

export const editProjectMainFeatureApi = (id, body) =>
  API.patch(`${PROJECT_MAIN_FEATURE_ENDPOINT}/${id}`, body);

//PROJECT COMMUNITY FEATURE
export const getProjectCommunityFeatureApi = (pageNumber, pageLimit) =>
  API.get(
    `${PROJECT_COMMUNITY_FEATURE_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`
  );

export const createProjectCommunityFeatureApi = (body) =>
  API.post(`${PROJECT_COMMUNITY_FEATURE_ENDPOINT}`, body);

export const deleteProjectCommunityFeatureApi = (id) =>
  API.delete(`${PROJECT_COMMUNITY_FEATURE_ENDPOINT}/${id}`);

export const editProjectCommunityFeatureApi = (id, body) =>
  API.patch(`${PROJECT_COMMUNITY_FEATURE_ENDPOINT}/${id}`, body);

//PROJECT PLOT FEATURE
export const getProjectPlotFeatureApi = (pageNumber, pageLimit) =>
  API.get(
    `${PROJECT_PLOT_FEATURE_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`
  );

export const createProjectPlotFeatureApi = (body) =>
  API.post(`${PROJECT_PLOT_FEATURE_ENDPOINT}`, body);

export const deleteProjectPlotFeatureApi = (id) =>
  API.delete(`${PROJECT_PLOT_FEATURE_ENDPOINT}/${id}`);

export const editProjectPlotFeatureApi = (id, body) =>
  API.patch(`${PROJECT_PLOT_FEATURE_ENDPOINT}/${id}`, body);

//PROJECT OTHER FEATURE
export const getProjectOtherFeatureApi = (pageNumber, pageLimit) =>
  API.get(
    `${PROJECT_OTHER_FEATURE_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`
  );

export const createProjectOtherFeatureApi = (body) =>
  API.post(`${PROJECT_OTHER_FEATURE_ENDPOINT}`, body);

export const deleteProjectOtherFeatureApi = (id) =>
  API.delete(`${PROJECT_OTHER_FEATURE_ENDPOINT}/${id}`);

export const editProjectOtherFeatureApi = (id, body) =>
  API.patch(`${PROJECT_OTHER_FEATURE_ENDPOINT}/${id}`, body);

//PROJECT RECREATIONAL
export const getProjectRecreationalApi = (pageNumber, pageLimit) =>
  API.get(
    `${PROJECT_RECREATIONAL_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`
  );

export const createProjectRecreationalApi = (body) =>
  API.post(`${PROJECT_RECREATIONAL_ENDPOINT}`, body);

export const deleteProjectRecreationalApi = (id) =>
  API.delete(`${PROJECT_RECREATIONAL_ENDPOINT}/${id}`);

export const editProjectRecreationalApi = (id, body) =>
  API.patch(`${PROJECT_RECREATIONAL_ENDPOINT}/${id}`, body);

//PROJECT NEAR BY LOCATION
export const getProjectNearByLocationApi = (pageNumber, pageLimit) =>
  API.get(
    `${PROJECT_NEARBY_LOCATION_ENDPOINT}?page=${pageNumber}&limit=${pageLimit}`
  );

export const createProjectNearByLocationApi = (body) =>
  API.post(`${PROJECT_NEARBY_LOCATION_ENDPOINT}`, body);

export const deleteProjectNearByLocationApi = (id) =>
  API.delete(`${PROJECT_NEARBY_LOCATION_ENDPOINT}/${id}`);

export const editProjectNearByLocationApi = (id, body) =>
  API.patch(`${PROJECT_NEARBY_LOCATION_ENDPOINT}/${id}`, body);

//COUNTRY
export const getCountryApi = () => API.get(`${COUNTRY_ENDPOINT}`);

//CITY BY COUNTRY ID
export const getCityByCountryIdApi = (id) =>
  API.get(`${CITY_BY_COUNTRY_ID_ENDPOINT}/${id}?page=${1}&limit=${100000}`);
