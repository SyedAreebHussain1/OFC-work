import { connect } from "react-redux";
import {leadMiddleware} from "../middleware"
import Testinglead from "./testinglead";


const mapStateToProps = (state) => ({
  
    LeadkaData:state.testing.LeadkaData

  });

  const mapDispatchToPrpos = (dispatch) => {
    return {
        leadMiddleware: (body, OnSuccess, OnFailure)=>
        dispatch(leadMiddleware(body,OnSuccess, OnFailure)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToPrpos)(Testinglead);