

import { PLOTCATEGORY,
  PLOTCATEGORY_FAILURE,
  PLOTCATEGORY_SUCCESS,
  PLOTSIZE,
  PLOTSIZE_SUCCESS,
  PLOTSIZE_FAILURE,
  PLOTTYPE,
  PLOTTYPE_SUCCESS,PLOTTYPE_FAILURE,
  PLOTSECTOR,PLOTSECTOR_SUCCESS,PLOTSECTOR_FAILURE,
  PLOTDIRECTION,PLOTDIRECTION_SUCCESS,PLOTDIRECTION_FAILURE,
  PROJECT,PROJECT_SUCCESS,PROJECT_FAILURE,
  PLOTSTREET,PLOTSTREET_SUCCESS,PLOTSTREET_FAILURE,
  PLOTNO,PLOTNO_SUCCESS,PLOTNO_FAILURE,
  SELLPLOT,SELLPLOT_FAILURE,SELLPLOT_SUCCESS,

  //MUSTAFA
  PLOT_POSITION,
  PLOT_POSITION_SUCCESS,
  PLOT_POSITION_FAILURE
} from "../constant.js";
export class PlotCategoryDetail {
  static PlotCategory() {
    return {
      type: PLOTCATEGORY,
    };
  }
  static PlotCategory_Success(response) {
    return {
      type: PLOTCATEGORY_SUCCESS,
      payload: response,
    };
  }
  static PlotCategory_Failure(error) {
    return {
      type: PLOTCATEGORY_FAILURE,
      error,
    };
  }
 
}
export class PlotSizeDetail {
    static PlotSize() {
      return {
        type: PLOTSIZE,
      };
    }
    static PlotSize_Success(response) {
      return {
        type: PLOTSIZE_SUCCESS,
        payload: response,
      };
    }
    static PlotSize_Failure(error) {
      return {
        type: PLOTSIZE_FAILURE,
        error,
      };
    }
    
   
  }
  export class PlotTypeDetail {
    static PlotType() {
      return {
        type: PLOTTYPE,
      };
    }
    static PlotType_Success(response) {
      return {
        type: PLOTTYPE_SUCCESS,
        payload: response,
      };
    }
    static PlotType_Failure(error) {
      return {
        type: PLOTTYPE_FAILURE,
        error,
      };
    }
  }
  export class PlotSectorDetail {
    static PlotSector() {
      return {
        type: PLOTSECTOR,
      };
    }
    static PlotSector_Success(response) {
      return {
        type: PLOTSECTOR_SUCCESS,
        payload: response,
      };
    }
    static PlotSector_Failure(error) {
      return {
        type: PLOTSECTOR_FAILURE,
        error,
      };
    }
  }
  export class PlotDirectionDetail {
    static PlotDirection() {
      return {
        type: PLOTDIRECTION,
      };
    }
    static PlotDirection_Success(response) {
      return {
        type: PLOTDIRECTION_SUCCESS,
        payload: response,
      };
    }
    static PlotDirection_Failure(error) {
      return {
        type: PLOTDIRECTION_FAILURE,
        error,
      };
    }
  }
  export class ProjectDetail {
    static Project() {
      return {
        type: PROJECT,
      };
    }
    static Project_Success(response) {
      return {
        type: PROJECT_SUCCESS,
        payload: response,
      };
    }
    static Project_Failure(error) {
      return {
        type: PROJECT_FAILURE,
        error,
      };
    }
  }

  export class PlotStreetDetail {
    static PlotStreet() {
      return {
        type: PLOTSTREET,
      };
    }
    static PlotStreet_Success(response) {
      return {
        type: PLOTSTREET_SUCCESS,
        payload: response,
      };
    }
    static PlotStreet_Failure(error) {
      return {
        type: PLOTSTREET_FAILURE,
        error,
      };
    }
  }
  export class PlotNoDetail {
    static PlotNo() {
      return {
        type: PLOTNO,
      };
    }
    static PlotNo_Success(response) {
      return {
        type: PLOTNO_SUCCESS,
        payload: response,
      };
    }
    static PlotNo_Failure(error) {
      return {
        type: PLOTNO_FAILURE,
        error,
      };
    }
  }

  export class SellPlotDetail {
    static SellPlot() {
      return {
        type: SELLPLOT,
      };
    }
    static SellPlot_Success(response) {
      return {
        type: SELLPLOT_SUCCESS,
        payload: response,
      };
    }
    static SellPlot_Failure(error) {
      return {
        type: SELLPLOT_FAILURE,
        error,
      };
    }
  }


  export class PlotPositionInformation {
    static PlotPosition() {
      return {
        type: PLOT_POSITION,
      };
    }
    static PlotPosition_Success(response) {
      return {
        type: PLOT_POSITION_SUCCESS,
        payload: response,
      };
    }
    static PlotPosition_Failure(error) {
      return {
        type: PLOT_POSITION_FAILURE,
        error,
      };
    }
  }