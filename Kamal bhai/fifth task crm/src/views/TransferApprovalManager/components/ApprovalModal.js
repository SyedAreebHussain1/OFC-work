import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Row,
  Input,
} from "reactstrap";
import { useState } from "react";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import swal from "sweetalert";

const ApprovalModal = (props) => {
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

  const Approval = (request) => {
    props._plotTransReqApproval(
      props.id,
      request,
      state.Comment,
      onSuccess,
      onFailure
    );
  };

  const onSuccess = (msg) => {
    swal({
      title: "Successful",
      text:
        msg == "TransferRequest is Rejected"
          ? "successfully Rejected"
          : "successfully Approve",
      type: "success",
      icon: "success",
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle();
      }
    });
  };

  const onFailure = () => {
    swal({
      title: "Something is wrong",
      text: "please contact to Admin",
      type: "success",
      icon: "warning",
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle(false);
      } else {
      }
    });
  };

  return (
    <Modal size="lg" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Comment:</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Input
            type="textArea"
            placeholder="Enter Comment"
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
        <Button
          color="danger"
          disabled={state.Comment == ""}
          onClick={() => Approval("Approved")}
        >
          Approve
        </Button>

        <Button
          color="danger"
          disabled={state.Comment == ""}
          onClick={() => Approval("Rejected")}
        >
          Reject
        </Button>

        <Button color="info" onClick={props.toggle}>
          Close Modal
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ApprovalModal;
