import {
  InsertVerificationFile,
  InsertVerificationDetailMiddleware,
} from "../middleware";
import CertificateOfConfirmation from "./CertificateOfConfirmation";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  Verification: state.certificateOfConfirmation.Verification,
  VerificationData: state.certificateOfConfirmation.VerificationData,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    InsertVerificationFile: (body, OnSuccess, OnFailure) =>
      dispatch(InsertVerificationFile(body, OnSuccess, OnFailure)),
    InsertVerificationDetailMiddleware: (body, onSuccess, OnFailure) =>
      dispatch(InsertVerificationDetailMiddleware(body, onSuccess, OnFailure)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToPrpos
)(CertificateOfConfirmation);
