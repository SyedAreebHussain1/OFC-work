import { connect } from "react-redux";
import Recording from "./Recording";
import { showRecording } from "../middleware";
const mapStateToProps = (state) => ({
  isLoading: state.recordingDetail.isLoading,
  isError: state.recordingDetail.isError,
  Data: state.recordingDetail.Data,
  Error: state.recordingDetail.error,



});
const mapDispatchToPrpos = (dispatch) => {
  return {
   
    showRecording:(body,OnSuccess, OnFailure) =>
      dispatch(showRecording(body, OnSuccess, OnFailure)),
      

  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Recording);
