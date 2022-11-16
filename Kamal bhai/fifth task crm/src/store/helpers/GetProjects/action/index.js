import {
  PROJECT,PROJECT_SUCCESS,PROJECT_FAILURE,
  
  
  } from "../constant.js";
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
  
  
  
  
  

 



  






 