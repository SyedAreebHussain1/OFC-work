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
  const [comment, setComment] = useState("");

  // const onChange = (name, value) => {
  //   if (name === "Comment") {
  //     setstate({
  //       ...state,
  //       Comment: value,
  //     });
  //   }
  // };

  const [error, setError] = useState({
    CommentError: "",
  });

  const HandleSubmit = (status) => {
    let body = {
      Wallet_RequestId: props.stateData?.Wallet_RequestId,
      Remarks: comment,
      Status: status,
    };
    props.Update(body, onSuccessApprove, onFailure);
  };

  const onSuccessApprove = (sucess) => {
    swal({
      title: "Successful",
      text: "successfully Approve",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        setComment("");
        props.getData();
        props.toggle(false);
      } else {
        setComment("");
        props.getData();
        props.toggle(false);
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
        setComment("");
        props.toggle(false);
      } else {
        setComment("");
        props.toggle(false);
      }
    });
  };

  return (
    <Modal
      size="lg"
      centered={true}
      isOpen={props.modal}
      toggle={props.toggle}
      data={props.stateData}
      Update={props.Update}
      ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus}
      ShowApprovalReceipt={props.ShowApprovalReceipt}
    >
      <ModalHeader
        style={{ backgroundColor: "#054D87", color: "white" }}
        toggle={props.toggle}
      >
        <h3 style={{ color: "white" }}>Request Modal</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="2" md="2" sm="2">
            <label>Remarks:</label>
          </Col>
          <Col mr="5" lg="10" md="10" sm="10">
            {" "}
            <label>{props.stateData?.Remarks}</label>{" "}
          </Col>
        </Row>
        <Row style={{ marginLeft: "0px", marginRight: "1%" }}>
          <label>Comment:</label> <span style={{ color: "red" }}>*</span>
          <Input
            type="textArea"
            rows={8}
            style={{ resize: "none" }}
            placeholder="Enter your Comment"
            //value={body.SaleQuotationNo}
            // onBlur={(e) => CheckFields("Comment")}
            onChange={(e) => setComment(e.target.value)}
          ></Input>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          disabled={props.stateData.Status == "Accepted"}
          // onClick={HandleSubmit(props.stateData.Status)}
          onClick={() => {
            if (comment?.trim().length > 0) {
              HandleSubmit("Accepted");
            } else {
              swal("Sorry!", "All * fields are required.", "error");
            }
            // proceed();
          }}
        >
          Approve
        </Button>
        <Button
          color="danger"
          disabled={
            props.stateData.Status == "Rejected" ||
            props.stateData.Status == "Accepted"
          }
          // onClick={HandleSubmit(props.stateData.Status)}
          onClick={() => {
            if (comment?.trim().length > 0) {
              HandleSubmit("Rejected");
            } else {
              swal("Sorry!", "All * fields are required.", "error");
            }
            // proceed();
          }}
        >
          Reject
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ActionModal;
