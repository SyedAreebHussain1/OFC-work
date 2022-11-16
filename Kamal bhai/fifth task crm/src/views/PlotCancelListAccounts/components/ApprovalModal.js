import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Row,
  Col,
  Input,
} from "reactstrap";
import { useState } from "react";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import swal from "sweetalert";

const ApprovalModal = (props) => {
  const [state, setState] = useState({
    comment: "",
    date: "",
  });

  const [error, setError] = useState({
    CommentError: "",
    AmountError: "",
    DateError: "",
  });

  const Approval = (request) => {
    let body = {
      requestStatus: request,
      remarks: state?.Comment,
      amount: props?.detail?.amountToRefund,
      date: state?.date,
    };
    props._plotCancleReqApproval(props?.detail?.id, body, onSuccess);
  };
  const onSuccess = (msg) => {
    swal({
      title: "Successful",
      text: "Request updated",
      type: "success",
      icon: "success",
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle();
      } else {
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
        <h3>Approval Modal</h3>
      </ModalHeader>
      <ModalBody>
        {/* <p style={{ marginLeft: "2.2%", marginTop: "-3%" }}>
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>
            Please Note:
          </span>{" "}
          Installment amount should be equal to Refund Amount
        </p>
        <Row style={{ marginLeft: "0.5%" }}>
          <Col lg="3" md="3" sm="3">
            <label className="form-control-label" for="input-username">
              Refund Amount:
            </label>
          </Col>
          <Col lg="9" md="9" sm="9">
            <h4> {props?.detail?.amountToRefund}</h4>
          </Col>
        </Row> */}
        <Row
          style={{ marginLeft: "0.5%", marginRight: "0.5%", marginTop: "2%" }}
        >
          <Col lg="6" md="6" sm="6">
            <label className="form-control-label" for="input-username">
              Refund Amount <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={props?.detail?.amountToRefund}
              placeholder="Enter installment amount"
              // onChange={(e) => onChange(e.target.value, "amount")}
              // onBlur={() => CheckFields("amount")}
              disabled
              type="text"
              id="input-username"
              className="form-control"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label className="form-control-label" for="input-username">
              First installment date <span style={{ color: "red" }}>*</span>
            </label>
            <input
              // min={new Date().toISOString().split("T")[0]}
              type="date"
              id="input-username"
              className="form-control"
              placeholder="enter date"
              value={state.date}
              onChange={(e) => {
                setState({
                  ...state,
                  date: e.target.value,
                });
              }}
              // onBlur={() => CheckFields("date")}
            ></input>
          </Col>
        </Row>
        <Row
          style={{ marginLeft: "2.3%", marginRight: "2.3%", marginTop: "2%" }}
        >
          {/* <h2>Comment</h2> */}
          <label className="form-control-label" for="input-username">
            Comment <span style={{ color: "red" }}>*</span>
          </label>
          <Input
            type="textArea"
            placeholder="Enter Comment"
            // onBlur={(e) => CheckFields("comment")}
            onChange={(e) => {
              setState({
                ...state,
                comment: e.target.value,
              });
            }}
          ></Input>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          disabled={state.comment == "" || state.date == ""}
          onClick={() => {
            Approval("Approved");
          }}
        >
          Approve
        </Button>

        <Button
          color="danger"
          disabled={state.Comment == ""}
          onClick={() => {
            Approval("Rejected");
          }}
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
