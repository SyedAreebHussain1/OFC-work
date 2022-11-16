import { connect } from "react-redux";
import { GetFileDownloadCustomers, FileDocuments } from "../middleware";
import { AllFilePrint } from "./AllFilePrint";

const mapStateToProps = (state) => ({
  isLoading: state.filePrinting.isLoading,
  isError: state.filePrinting.isError,
  Error: state.filePrinting.error,
  fileCustomer: state.filePrinting.fileCustomer,
  fileDocuments: state.filePrinting.fileDocuments,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    GetFileDownloadCustomers: (page, limit, OnSuccess, OnFailure) =>
      dispatch(GetFileDownloadCustomers(page, limit, OnSuccess, OnFailure)),
    FileDocuments: (id, OnSuccess, OnFailure) =>
      dispatch(FileDocuments(id, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(AllFilePrint);
