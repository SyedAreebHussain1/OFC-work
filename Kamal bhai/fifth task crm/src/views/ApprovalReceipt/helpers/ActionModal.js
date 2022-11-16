import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Row,
  Input,
} from "reactstrap";
import { useState, useEffect } from "react";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import swal from "sweetalert";

const ActionModal = (props) => {
  const [state, setstate] = useState({
    Comment: "",
  });
  const CheckFields = (name) => {
    if (name === "Comment") {
      setError({
        ...error,
        CommentError: validate("required", state.Comment),
      });
    }
  };
  const onChange = (name, value) => {
    if (name === "Comment") {
      setstate({
        ...state,
        Comment: value,
      });
    }
  };

  const [error, setError] = useState({
    CommentError: "",
  });

  const Approve = () => {
    let body = {
      PaymentReceiptId: props.stateData.PaymentReceiptId,
      //ConfirmationStatus: 50,
      ConfirmationStatus: 51,
      LastConfirmationStatusComment: state.Comment,
    };
    props.ShowUpdateApprovalStatus(body, onSuccessApprove, onFailure);

    // props.ShowApprovalReceipt(onSuccess,onFailure)
  };

  const Reject = () => {
    let body = {
      PaymentReceiptId: props.stateData.PaymentReceiptId,
      ConfirmationStatus: 52,
      LastConfirmationStatusComment: state.Comment,
    };
    props.ShowUpdateApprovalStatus(body, onSuccessReject, onFailure);
  };

  const Close = () => {
    let body = {
      PaymentReceiptId: props.stateData.PaymentReceiptId,
      //  ConfirmationStatus: 51,
      ConfirmationStatus: 50,
      LastConfirmationStatusComment: state.Comment,
    };
    props.ShowUpdateApprovalStatus(body, onSuccessClose, onFailure);
  };
  const onSuccessApprove = () => {
    swal({
      title: "Successful",
      text: "Successfully Approved",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle(false);
      } else {
      }
    });
  };

  const onSuccessReject = () => {
    swal({
      title: "Successful",
      text: "Successfully Rejected",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle(false);
      } else {
      }
    });
  };
  const onSuccessClose = () => {
    swal({
      title: "Successful",
      text: "Successfully Approved",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle(false);
      } else {
      }
    });
  };

  const onSuccess = (name) => {
    if (name === "approve") {
      swal("Successfully Approved!", "", "");
    } else if (name === "reject") {
      swal("Successfully Rejected!", "", "");
    }
    // else {
    //   swal("Successfully Close!", "", "");
    // }
  };
  const onFailure = () => {
    swal({
      title: "Something is wrong",
      text: "Please contact to Admin",
      type: "success",
      icon: "warning",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle(false);
      } else {
      }
    });
  };

  return (
    <Modal
      size="lg"
      isOpen={props.modal}
      toggle={props.toggle}
      data={props.stateData}
      Update={props.Update}
      ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus}
      ShowApprovalReceipt={props.ShowApprovalReceipt}
    >
      <ModalHeader toggle={props.toggle}>
        <h3>Comment:</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          {/* <Col lg="10" md="4" sm="10">
                 <textarea />
             </Col> */}
          <Input
            type="textArea"
            placeholder="Enter Comment"
            //value={body.SaleQuotationNo}
            onBlur={(e) => CheckFields("Comment")}
            onChange={(e) => onChange("Comment", e.target.value)}
          ></Input>
          {error.CommentError !== "" && error.CommentError !== null && (
            <small style={{ marginTop: "2px" }}>
              <span style={{ color: "red" }}>
                {error.CommentError}{" "}
                <i className="fas fa-exclamation-circle"></i>
              </span>
            </small>
          )}
        </Row>
      </ModalBody>
      <ModalFooter>
        {
          props.stateData.ConfirmationStatusName == "Approved" ? (
            ""
          ) : (
            <Button
              color="danger"
              disabled={state.Comment == ""}
              // onClick={Approve}
              onClick={Close}
            >
              Approve
            </Button>
          )
          //    <Button color="danger" disabled={state.Comment==""} disabled={state.Comment==""}  >
          //    Approve
          //  </Button>
        }
        {/* <Button color="danger" disabled={state.Comment==""} >
            Approve
          </Button> */}
        <Button color="danger" disabled={state.Comment == ""} onClick={Reject}>
          Reject
        </Button>

        {props.stateData.ConfirmationStatusName == "Pending" ? (
          ""
        ) : (
          <Button
            color="info"
            disabled={state.Comment == ""}
            onClick={Approve}
            //onClick={Close}
          >
            Approve
          </Button>
        )}

        <Button color="info" onClick={props.toggle}>
          Close Modal
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ActionModal;
