import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Row,
  Table,
} from "reactstrap";
import { useState, useEffect } from "react";
import { Input } from "reactstrap";
import validate from "components/Utilities Component/ValidationWrapper";
import swal from "sweetalert";

const RequestModal = (props) => {
  const [totalPercentage, setTotalPercentage] = useState("");
  const [policyPercentage, setPolicyPercentage] = useState("25.00");
  const [deductedAmount, setDeductedAmount] = useState("");
  const [refundAmount, setRefundAmount] = useState("");
  const onSuccess = () => {};
  const onFailure = () => {};
  useEffect(() => {
    // console.log("DATA AT REQUEST MODAL ELSE", props.stateForRequestModal);
    let body = {
      SaleOrderId: props.stateForRequestModal.SaleOrderId,
    };
    props.showReturnPlot(body, onSuccess, onFailure);
    // if (
    //   props.stateForRequestModal.SaleOrderId !== undefined &&
    //   props.stateForRequestModal.SaleOrderId == ""
    // ) {
    //   let body = {
    //     SaleOrderId: props.stateForRequestModal.SaleOrderId,
    //   };
    //   props.showReturnPlot(body, onSuccess, onFailure);
    // } else {
    //   console.log("DATA AT REQUEST MODAL ELSE", props.stateForRequestModal);
    // }
  }, [props.stateForRequestModal]);

  const [state, setstate] = useState({
    Comment: "",
    DiscountPercentage: "",
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
    if (name === "DiscountPercentage") {
      setstate({
        ...state,
        DiscountPercentage: value,
      });
    }
  };

  const [error, setError] = useState({
    CommentError: "",
  });

  const Request = () => {
    // let body = {
    //   SaleOrderId: props.PlotReturn[0].SaleOrderId,
    //   remarksByRequestInitiator: state.Comment,

    //   ReturnAmount:
    //     props.PlotReturn[0].TotalReturnAmount -
    //     (props.PlotReturn[0].TotalReturnAmount * state.DiscountPercentage) /
    //       100,
    //   //  deductionPercentage:state.DiscountPercentage
    //   deductionPercentage: null,
    // };

    let body = {
      remarksByRequestInitiator: state.Comment,
      deductionPercentage: parseInt(deductedAmount),
      amountToRefund: parseInt(refundAmount),
      SaleOrderId: parseInt(props.stateForRequestModal.SaleOrderId),
    };
    props.InsertReturnPlot(body, onSuccessRequest, onFailureRequest);

    // if(props.ReturnRequest!==null && props.ReturnRequest!==undefined)
    // {
    //   swal({
    //     title: "Successful",
    //     text: "successfully Insert",
    //     type: "success",
    //     icon:"success"
    //     // buttons: true,
    //     // dangerMode: true,
    //   })
    //   // props.toggle();
    //   .then(function (isConfirm) {
    //     if (isConfirm) {

    //       props.toggle(false)
    //     } else {

    //     }
    //   });
    // }
  };
  const onSuccessRequest = () => {
    swal({
      title: "Successful",
      text: "Request initiate",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    })
      // props.toggle();
      .then(function (isConfirm) {
        if (isConfirm) {
          props.toggle(false);
        } else {
          props.toggle(false);
        }
      });
  };
  const onFailureRequest = (msg) => {
    // swal({
    //   title: "error",
    //   text: msg,
    //   type: "error",
    //   icon: "error",
    // })
    //   // props.toggle();
    //   .then(function (isConfirm) {
    //     if (isConfirm) {
    //       props.toggle(false);
    //     } else {
    //       props.toggle(false);
    //     }
    //   });
  };
  // useEffect(() => {

  // }, [props.ReturnRequest])
  useEffect(() => {
    calculatePercentage();
  }, [props.PlotReturn]);
  const calculatePercentage = () => {
    if (props.PlotReturn !== undefined && props.PlotReturn !== null) {
      let perc = (
        (parseInt(props?.PlotReturn?.totalPaidAmount) /
          parseInt(props?.PlotReturn?.NetAmount)) *
        100
      ).toFixed(2);
      setTotalPercentage(perc);
      let deductionAmount = (
        (parseInt(policyPercentage) / 100) *
        parseInt(props?.PlotReturn?.NetAmount)
      ).toFixed(2);
      // console.log("DEDUCTION AMOUNT", deductionAmount);
      let amountRefund = (
        parseInt(props?.PlotReturn?.totalPaidAmount) - deductionAmount
      ).toFixed(2);
      // console.log("REFUND AMOUNT", amountRefund);
      setDeductedAmount(deductionAmount);
      setRefundAmount(amountRefund);
    }
  };
  // console.log("RETURN PLOT DETAILS", props?.PlotReturn);
  const onChangePercentage = (v) => {
    if (!Number.isNaN(v)) {
      setPolicyPercentage(v);
      let deductionAmount = (
        (parseInt(v) / 100) *
        parseInt(props?.PlotReturn?.NetAmount)
      ).toFixed(2);
      let amountRefund = (
        parseInt(props?.PlotReturn?.totalPaidAmount) - deductionAmount
      ).toFixed(2);
      setDeductedAmount(deductionAmount);
      setRefundAmount(amountRefund);
    }
  };

  return (
    <Modal
      size="lg"
      isOpen={props.modal}
      toggle={props.toggle}
      stateForRequestModal={props.stateForRequestModal}
      showReturnPlot={props.showReturnPlot}
      PlotReturn={props.PlotReturn}
      InsertReturnPlot={props.InsertReturnPlot}
      ReturnRequest={props.ReturnRequest}
    >
      <ModalHeader
        style={{ backgroundColor: "#054D87", color: "white" }}
        toggle={props.toggle}
      >
        <h3 style={{ color: "white" }}>Return plot modal</h3>
      </ModalHeader>
      <ModalBody>
        <Row style={{ marginTop: "-2%" }}>
          <Col lg="12" md="12" sm="12">
            <label className="form-control-label" for="input-username">
              Plot information
            </label>
            <Table
              style={{
                border: "1px solid lightgrey",
                // marginLeft: "7%",
                // marginRight: "7%",
                width: "100%",
                textAlign: "center",

                // marginTop: "-5px",
              }}
              // className="align-items-center"
              responsive
              // striped
              bordered
              // size="sm"
            >
              <thead
                style={{
                  backgroundColor: "#054D87",

                  color: "white",

                  fontSize: "12px",
                }}
              >
                <tr>
                  <th scope="col">Plot No</th>

                  <th scope="col">SaleOrder No</th>

                  <th scope="col">Net Amount</th>
                </tr>
              </thead>

              <tbody style={{ fontSize: "12px" }}>
                <tr>
                  <td>{props?.stateForRequestModal?.plotNo}</td>

                  <td>
                    {props?.PlotReturn !== null &&
                    props?.PlotReturn !== undefined
                      ? props?.PlotReturn?.SaleOrderNo
                      : ""}
                  </td>

                  <td>
                    {props?.PlotReturn !== null &&
                    props?.PlotReturn !== undefined
                      ? props?.PlotReturn?.NetAmount
                      : ""}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg="12" md="12" sm="12">
            <label className="form-control-label" for="input-username">
              Amount details
            </label>
            <Table
              style={{
                border: "1px solid lightgrey",
                // marginLeft: "7%",
                // marginRight: "7%",
                width: "100%",
                textAlign: "center",

                // marginTop: "-5px",
              }}
              // className="align-items-center"
              responsive
              // striped
              bordered
              // size="sm"
            >
              <thead
                style={{
                  backgroundColor: "#054D87",

                  color: "white",

                  fontSize: "12px",
                }}
              >
                <tr>
                  <th scope="col">Paid Amount</th>
                  <th scope="col">Deduction Amount</th>

                  <th scope="col">Refund Amount</th>
                </tr>
              </thead>

              <tbody style={{ fontSize: "12px" }}>
                <tr>
                  <td>
                    {props?.PlotReturn !== null &&
                    props?.PlotReturn !== undefined
                      ? props?.PlotReturn?.totalPaidAmount
                      : ""}
                  </td>
                  <td>{deductedAmount}</td>

                  <td>{refundAmount}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label className="form-control-label" for="input-paid">
              Total paid amount percentage %
            </label>
            <input
              type="text"
              disabled
              id="input-paid"
              className="form-control"
              placeholder=""
              value={totalPercentage}
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6">
            <label className="form-control-label" for="input-paid">
              Policy percentage %
            </label>
            <input
              type="text"
              id="input-paid"
              className="form-control"
              placeholder=""
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => {
                if (e.target.value < 0 || e.target.value === "")
                  e.target.value = 0;
                if (e.target.value > 25) e.target.value = (25).toFixed(2);

                onChangePercentage(e.target.value);
              }}
              onBlur={(e) =>
                setPolicyPercentage(Number(policyPercentage).toFixed(2))
              }
              value={policyPercentage}
            ></input>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <h3>Comment:</h3>
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
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color="info"
          onClick={Request}
          disabled={
            state.Comment === "" ||
            totalPercentage >= policyPercentage ||
            Math.sign(refundAmount) === -1
              ? true
              : false
          }
        >
          Request Initiate
        </Button>
        <Button color="info" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RequestModal;
