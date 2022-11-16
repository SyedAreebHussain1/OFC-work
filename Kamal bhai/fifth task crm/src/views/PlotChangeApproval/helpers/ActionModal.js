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
      reqStatusId: 59,
      Taskid: props.stateData.Taskid,
      newPlotId: props.stateData.newPlotId,
      remarksaprovel: state.Comment,
      reqId: props.stateData.requestId,
      oldPlotId: props.stateData.oldPlotId,
    };

    props.ShowUpdateApprovalStatus(body, onSuccessApprove, onFailure);
    if (props.Update !== null && props.Update !== undefined) {
      swal({
        title: "Successful",
        text: "successfully Approve",
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
    } else {
    }

    // props.ShowApprovalReceipt(onSuccess,onFailure)
  };

  const Reject = () => {
    let body = {
      // PaymentReceiptId: props.stateData.PaymentReceiptId,
      // ConfirmationStatus: 60,
      // LastConfirmationStatusComment: state.Comment
      reqStatusId: 60,
      Taskid: props.stateData.Taskid,
      newPlotId: props.stateData.oldPlotId,
      remarksaprovel: state.Comment,
      reqId: props.stateData.requestId,
    };

    props.ShowUpdateApprovalStatus(body, onSuccessReject, onFailure);
  };

  const onSuccessApprove = () => {};

  const onSuccessReject = () => {
    swal({
      title: "Successful",
      text: "successfully Rejected",
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
  const onFailure = () => {
    swal({
      title: "Something is wrong",
      text: "please contact to Admin",
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
      ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus}
      Update={props.Update}
      ShowApprovalReceipt={props.ShowApprovalReceipt}
    >
      <ModalHeader toggle={props.toggle}>
        <h4 style={{ inlineSize: "700px", overflowWrap: "break-word" }}>
          Remarks: {props.stateData.remarksByRequestInitiator}
        </h4>

        <h3>Comment:</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          {/* <h4>Remarks: </h4> */}

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
          ///props.stateData.ConfirmationStatusName == "Approved" ?
          //"" :
          <Button
            color="danger"
            disabled={state.Comment == ""}
            onClick={Approve}
          >
            Approve
          </Button>
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

        <Button color="info" onClick={props.toggle}>
          Close Modal
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ActionModal;
