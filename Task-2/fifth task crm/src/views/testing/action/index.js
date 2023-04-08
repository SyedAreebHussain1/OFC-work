import { 
    LEAD_DATA,
    LEAD_DATA_SUCCESS,
    LEAD_DATA_FAILURE
} from '../constant'

export class LeadTestingData {
    static testingLead() {
      return {
        type: LEAD_DATA,
      };
    }
    static testinflead_Success(response) {
      return {
        type: LEAD_DATA_SUCCESS,
        payload: response,
      };
    }
    static testingLead_Failure(error) {
      return {
        type: LEAD_DATA_FAILURE,
        error,
      };
    }
}