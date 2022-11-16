import { PROJECTS,PROJECTS_FAILURE,PROJECTS_SUCCESS } from "../constant";

export class ProjectsDetail {
    static Projects() {
      return {
        type: PROJECTS,
      };
    }
    static Projects_Success(response) {
      return {
        type: PROJECTS_SUCCESS,
        payload: response,
      };
    }
    static Projects_Failure(error) {
      return {
        type: PROJECTS_FAILURE,
        error,
      };
    }
  }


