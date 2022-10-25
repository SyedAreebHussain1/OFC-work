import {
  GET_PLOT_TYPE_SUCCESS,
  CREATE_PLOT_TYPE_SUCCESS,
  DELETE_PLOT_TYPE_SUCCESS,
  EDIT_PLOT_TYPE_SUCCESS,
  GET_PLOT_CATEGORY_SUCCESS,
  CREATE_PLOT_CATEGORY_SUCCESS,
  DELETE_PLOT_CATEGORY_SUCCESS,
  EDIT_PLOT_CATEGORY_SUCCESS,
  GET_PLOT_POSITION_SUCCESS,
  CREATE_PLOT_POSITION_SUCCESS,
  DELETE_PLOT_POSITION_SUCCESS,
  EDIT_PLOT_POSITION_SUCCESS,
  GET_PLOT_SECTOR_SUCCESS,
  CREATE_PLOT_SECTOR_SUCCESS,
  DELETE_PLOT_SECTOR_SUCCESS,
  EDIT_PLOT_SECTOR_SUCCESS,
  GET_PLOT_STREET_SUCCESS,
  CREATE_PLOT_STREET_SUCCESS,
  DELETE_PLOT_STREET_SUCCESS,
  EDIT_PLOT_STREET_SUCCESS,
  GET_PROJECT_MAIN_FEATURE_SUCCESS,
  CREATE_PROJECT_MAIN_FEATURE_SUCCESS,
  DELETE_PROJECT_MAIN_FEATURE_SUCCESS,
  EDIT_PROJECT_MAIN_FEATURE_SUCCESS,
  GET_PROJECT_COMMUNITY_FEATURE_SUCCESS,
  CREATE_PROJECT_COMMUNITY_FEATURE_SUCCESS,
  DELETE_PROJECT_COMMUNITY_FEATURE_SUCCESS,
  EDIT_PROJECT_COMMUNITY_FEATURE_SUCCESS,
  GET_PROJECT_PLOT_FEATURE_SUCCESS,
  CREATE_PROJECT_PLOT_FEATURE_SUCCESS,
  DELETE_PROJECT_PLOT_FEATURE_SUCCESS,
  EDIT_PROJECT_PLOT_FEATURE_SUCCESS,
  GET_PROJECT_OTHER_FEATURE_SUCCESS,
  CREATE_PROJECT_OTHER_FEATURE_SUCCESS,
  DELETE_PROJECT_OTHER_FEATURE_SUCCESS,
  EDIT_PROJECT_OTHER_FEATURE_SUCCESS,
  CREATE_PROJECT_RECREATIONAL_SUCCESS,
  DELETE_PROJECT_RECREATIONAL_SUCCESS,
  GET_PROJECT_RECREATIONAL_SUCCESS,
  EDIT_PROJECT_RECREATIONAL_SUCCESS,
  GET_PROJECT_NEARBY_LOCATION_SUCCESS,
  CREATE_PROJECT_NEARBY_LOCATION_SUCCESS,
  DELETE_PROJECT_NEARBY_LOCATION_SUCCESS,
  EDIT_PROJECT_NEARBY_LOCATION_SUCCESS,
  GET_COUNTRY_SUCCESS,
  GET_CITY_BY_COUNTRY_ID_SUCCESS,
} from "../../constants/utilsConstants";

import * as api from "../../config/api/utilsApis";

//PLOT TYPE
export const getPlotTypeAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getPlotTypeApi(pageNumber, pageLimit);

      dispatch({ type: GET_PLOT_TYPE_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

export const createPlotTypeAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createPlotTypeApi(body);

      dispatch({ type: CREATE_PLOT_TYPE_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
      }
    }
  };

export const deletePlotTypeAction =
  (id, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.deletePlotTypeApi(id);

      dispatch({ type: DELETE_PLOT_TYPE_SUCCESS, payload: data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

export const editPlotTypeAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.editPlotTypeApi(id, body);

      dispatch({ type: EDIT_PLOT_TYPE_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

//PLOT CATEGORY
export const getPlotCategoryAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getPlotCategoryApi(pageNumber, pageLimit);

      dispatch({ type: GET_PLOT_CATEGORY_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

export const createPlotCategoryAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createPlotCategoryApi(body);

      dispatch({ type: CREATE_PLOT_CATEGORY_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
      }
    }
  };

export const deletePlotCategoryAction =
  (id, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.deletePlotCategoryApi(id);

      dispatch({ type: DELETE_PLOT_CATEGORY_SUCCESS, payload: data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

export const editPlotCategoryAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.editPlotCategoryApi(id, body);

      dispatch({ type: EDIT_PLOT_CATEGORY_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

//PLOT POSITION
export const getPlotPositionAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getPlotPositionApi(pageNumber, pageLimit);

      dispatch({ type: GET_PLOT_POSITION_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

export const createPlotPositionAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createPlotPositionApi(body);

      dispatch({ type: CREATE_PLOT_POSITION_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
      }
    }
  };

export const deletePlotPositionAction =
  (id, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.deletePlotPositionApi(id);

      dispatch({ type: DELETE_PLOT_POSITION_SUCCESS, payload: data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

export const editPlotPositionAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.editPlotPositionApi(id, body);

      dispatch({ type: EDIT_PLOT_POSITION_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

//PLOT SECTOR
export const getPlotSectorAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getPlotSectorApi(pageNumber, pageLimit);

      dispatch({ type: GET_PLOT_SECTOR_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

export const createPlotSectorAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createPlotSectorApi(body);

      dispatch({ type: CREATE_PLOT_SECTOR_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
      }
    }
  };

export const deletePlotSectorAction =
  (id, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.deletePlotSectorApi(id);

      dispatch({ type: DELETE_PLOT_SECTOR_SUCCESS, payload: data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

export const editPlotSectorAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.editPlotSectorApi(id, body);

      dispatch({ type: EDIT_PLOT_SECTOR_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

//PLOT STREET
export const getPlotStreetAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getPlotStreetApi(pageNumber, pageLimit);

      dispatch({ type: GET_PLOT_STREET_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

export const createPlotStreetAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createPlotStreetApi(body);

      dispatch({ type: CREATE_PLOT_STREET_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
      }
    }
  };

export const deletePlotStreetAction =
  (id, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.deletePlotStreetApi(id);

      dispatch({ type: DELETE_PLOT_STREET_SUCCESS, payload: data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

export const editPlotStreetAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.editPlotStreetApi(id, body);

      dispatch({ type: EDIT_PLOT_STREET_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

//PROJECT MAIN FEATURE
export const getProjectMainFeatureAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getProjectMainFeatureApi(pageNumber, pageLimit);

      dispatch({ type: GET_PROJECT_MAIN_FEATURE_SUCCESS, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

export const createProjectMainFeatureAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createProjectMainFeatureApi(body);

      dispatch({
        type: CREATE_PROJECT_MAIN_FEATURE_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
      }
    }
  };

export const deleteProjectMainFeatureAction =
  (id, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.deleteProjectMainFeatureApi(id);

      dispatch({ type: DELETE_PROJECT_MAIN_FEATURE_SUCCESS, payload: data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

export const editProjectMainFeatureAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.editProjectMainFeatureApi(id, body);

      dispatch({ type: EDIT_PROJECT_MAIN_FEATURE_SUCCESS, payload: data.data });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

//PROJECT COMMUNITY FEATURE
export const getProjectCommunityFeatureAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getProjectCommunityFeatureApi(
        pageNumber,
        pageLimit
      );

      dispatch({
        type: GET_PROJECT_COMMUNITY_FEATURE_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const createProjectCommunityFeatureAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createProjectCommunityFeatureApi(body);

      dispatch({
        type: CREATE_PROJECT_COMMUNITY_FEATURE_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
      }
    }
  };

export const deleteProjectCommunityFeatureAction =
  (id, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.deleteProjectCommunityFeatureApi(id);

      dispatch({
        type: DELETE_PROJECT_COMMUNITY_FEATURE_SUCCESS,
        payload: data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

export const editProjectCommunityFeatureAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.editProjectCommunityFeatureApi(id, body);

      dispatch({
        type: EDIT_PROJECT_COMMUNITY_FEATURE_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

//PROJECT PLOT FEATURE
export const getProjectPlotFeatureAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getProjectPlotFeatureApi(pageNumber, pageLimit);

      dispatch({
        type: GET_PROJECT_PLOT_FEATURE_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const createProjectPlotFeatureAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createProjectPlotFeatureApi(body);

      dispatch({
        type: CREATE_PROJECT_PLOT_FEATURE_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
      }
    }
  };

export const deleteProjectPlotFeatureAction =
  (id, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.deleteProjectPlotFeatureApi(id);

      dispatch({
        type: DELETE_PROJECT_PLOT_FEATURE_SUCCESS,
        payload: data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

export const editProjectPlotFeatureAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.editProjectPlotFeatureApi(id, body);

      dispatch({
        type: EDIT_PROJECT_PLOT_FEATURE_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

//PROJECT OTHER FEATURE
export const getProjectOtherFeatureAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getProjectOtherFeatureApi(pageNumber, pageLimit);

      dispatch({
        type: GET_PROJECT_OTHER_FEATURE_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const createProjectOtherFeatureAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createProjectOtherFeatureApi(body);

      dispatch({
        type: CREATE_PROJECT_OTHER_FEATURE_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
      }
    }
  };

export const deleteProjectOtherFeatureAction =
  (id, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.deleteProjectOtherFeatureApi(id);

      dispatch({
        type: DELETE_PROJECT_OTHER_FEATURE_SUCCESS,
        payload: data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

export const editProjectOtherFeatureAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.editProjectOtherFeatureApi(id, body);

      dispatch({
        type: EDIT_PROJECT_OTHER_FEATURE_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

//PROJECT RECREATIONAL
export const getProjectRecreationalAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getProjectRecreationalApi(pageNumber, pageLimit);

      dispatch({
        type: GET_PROJECT_RECREATIONAL_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const createProjectRecreationalAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createProjectRecreationalApi(body);

      dispatch({
        type: CREATE_PROJECT_RECREATIONAL_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
      }
    }
  };

export const deleteProjectRecreationalAction =
  (id, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.deleteProjectRecreationalApi(id);

      dispatch({
        type: DELETE_PROJECT_RECREATIONAL_SUCCESS,
        payload: data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

export const editProjectRecreationalAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.editProjectRecreationalApi(id, body);

      dispatch({
        type: EDIT_PROJECT_RECREATIONAL_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

//PROJECT NEARBY LOCATION
export const getProjectNearByLocationAction =
  (pageNumber, pageLimit) => async (dispatch) => {
    try {
      let { data } = await api.getProjectNearByLocationApi(
        pageNumber,
        pageLimit
      );

      dispatch({
        type: GET_PROJECT_NEARBY_LOCATION_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const createProjectNearByLocationAction =
  (body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.createProjectNearByLocationApi(body);

      dispatch({
        type: CREATE_PROJECT_NEARBY_LOCATION_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message, data.data));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      } else if (error?.message) {
      }
    }
  };

export const deleteProjectNearByLocationAction =
  (id, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.deleteProjectNearByLocationApi(id);

      dispatch({
        type: DELETE_PROJECT_NEARBY_LOCATION_SUCCESS,
        payload: data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

export const editProjectNearByLocationAction =
  (id, body, onSuccess, onFailure) => async (dispatch) => {
    try {
      let { data } = await api.editProjectNearByLocationApi(id, body);

      dispatch({
        type: EDIT_PROJECT_NEARBY_LOCATION_SUCCESS,
        payload: data.data,
      });
      dispatch(onSuccess(data.message));
    } catch (error) {
      if (error?.response?.data?.message) {
        let message = error.response.data.message;
        onFailure(message);
      }
    }
  };

//COUNTRY
export const getCountryAction = () => async (dispatch) => {
  try {
    let { data } = await api.getCountryApi();

    dispatch({
      type: GET_COUNTRY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//CITY BY COUNTRY ID
export const getCityByCountryIdAction = (id) => async (dispatch) => {
  try {
    let { data } = await api.getCityByCountryIdApi(id);

    dispatch({
      type: GET_CITY_BY_COUNTRY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
  }
};
