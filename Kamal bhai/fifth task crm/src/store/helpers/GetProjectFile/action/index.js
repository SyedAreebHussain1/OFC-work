import {
  
 
  PROJECTFILE,PROJECTFILE_FAILURE,PROJECTFILE_SUCCESS,
   
  } from "../constant.js";
  
  

  export class ProjectFileDetail {
    static ProjectFile() {
      return {
        type: PROJECTFILE,
      };
    }
    static ProjectFile_Success(response) {
      return {
        type: PROJECTFILE_SUCCESS,
        payload: response,
      };
    }
    static ProjectFile_Failure(error) {
      return {
        type: PROJECTFILE_FAILURE,
        error,
      };
    }
    
   
  }
  