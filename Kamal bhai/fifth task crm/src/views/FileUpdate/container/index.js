import {connect} from "react-redux";
import FileUpdate from "./FileUpdate";
import {Customer_Data_Middleware} from "../middleware"; 


const mapStateToProps = (state) => ({
    CustomerUpdatedData:state.fileupdate.CustomerUpdatedData,
  });

  const mapDispatchToPrpos = (dispatch) => {
    return {
        Customer_Data_Middleware: (body, OnSuccess, OnFailure) =>
        dispatch(Customer_Data_Middleware(body,OnSuccess, OnFailure)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToPrpos)(FileUpdate);
  