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
  Label,
} from "reactstrap";
import { useState, useEffect } from "react";

import validate from "components/Utilities Component/ValidationWrapper";
import { CompareArrowsOutlined } from "@material-ui/icons";

const AddPaymentModal = (props) => {
  const [state, setState] = useState({
    totalNetAmount: props.amount,
    disscountPercentage: "",
    percentage: "",
    amount: "",
    discountAmount: "",
    discountedAmount: "",
    downPaymentAmount: "",
    netAmount: "",
    noOfInstallment: "",
    installmentAmount: "",
    noOfBalloonInst: "",
    noOfBalloonInst: "",
  });
  const CheckFields = (name) => {
    if (name === "disscountPercentage") {
      if (state.disscountPercentage > 2) {
        setError({
          ...error,
          disscountPercentageError: "Max 2",
        });
      } else {
        let p = state.disscountPercentage / 100;

        let y = p * props.amount;
        let z = props.amount - y;
        let discountedAmount = y;
        setState({ ...state, discountAmount: z, discountedAmount: y });

        setError({ ...error, disscountPercentageError: "" });
      }
    } else if (name === "percentage") {
      if (state.percentage < 20) {
        setError({ ...error, percentageError: "Min 20" });
      } else {
        if (state.discountAmount == "") {
          let p = state.percentage / 100;

          let y = p * props.amount;
          let z = props.amount - y;

          setState({ ...state, downPaymentAmount: y });
        } else {
          let p = parseInt(state.percentage) / 100;

          let y = p * parseInt(state.discountAmount);
          let z = parseInt(state.discountAmount) - y;
          let possessionPercentage = 20 / 100;
          let possessionAmount =
            possessionPercentage * parseInt(state.discountAmount);

          let netAmount = state.discountAmount - possessionAmount - y;

          setState({
            ...state,
            downPaymentAmount: y,
            amount: z,
            possessionPercentage: possessionPercentage * 100,
            possessionAmount: possessionAmount,
            netAmount: netAmount,
          });

          // setState({ ...state, amount: y,})
        }
        setError({ ...error, percentageError: "" });
      }
    } else if (name === "downPaymentAmount") {
      let newprice = state.downPaymentAmount;
      let oldprice = state.discountAmount;
      let p = [(oldprice - newprice) / oldprice] * 100;
      let z = 100 - p;
      setState({ ...state, percentage: z });
    } else if (name === "noOfInstallment") {
      if (state.noOfInstallment > 36) {
        setError({
          ...error,
          noOfInstallmentError: "Max 36",
        });
      } else {
        setError({ ...error, noOfInstallmentError: "" });
        let amountIns = state.netAmount / state.noOfInstallment;
        setState({ ...state, installmentAmount: amountIns });
      }
    } else if (name === "installmentAmount") {
      let noOfInstallment = state.netAmount / state.installmentAmount;
      if (noOfInstallment > 36) {
        setError({ ...error, noOfInstallmentError: "Max 36" });
        setState({ ...state, noOfInstallment: noOfInstallment });
      } else {
        setError({ ...error, noOfInstallmentError: "" });
        setState({ ...state, noOfInstallment: noOfInstallment });
      }
    }
  };
  useEffect(() => {
    // state.disscountPercentage=0;
    setState({
      ...state,
      disscountPercentage: 0,
      discountAmount: props.amount,
    });
    // if(state.disscountPercentage==0)
    // {
    //   setState({ ...state, disscountAmount: state.totalNetAmount })
    // }
  }, [props.amount]);
  useEffect(() => {
    if (state.percentage == "") {
      let p = state.percentage / 100;

      let y = p * state.discountAmount;
      let z = state.discountAmount - y;
      let possessionPercentage = 20 / 100;
      let possessionAmount = possessionPercentage * state.discountAmount;

      let netAmount = state.discountAmount - possessionAmount - 0;

      setState({
        ...state,
        downPaymentAmount: z,
        amount: z,
        possessionPercentage: possessionPercentage * 100,
        possessionAmount: possessionAmount,
        netAmount: netAmount,
      });
    } else {
      let p = state.percentage / 100;

      let y = p * state.discountAmount;

      let z = state.discountAmount - y;
      let possessionPercentage = 20 / 100;
      let possessionAmount = possessionPercentage * state.discountAmount;

      let netAmount = state.discountAmount - possessionAmount - y;

      setState({
        ...state,
        downPaymentAmount: y,
        amount: z,
        possessionPercentage: possessionPercentage * 100,
        possessionAmount: possessionAmount,
        netAmount: netAmount,
      });
    }
  }, [state.discountAmount]);
  useEffect(() => {
    if (state.noOfInstallment == "") {
      setState({ ...state, installmentAmount: state.netAmount });
    } else {
      let amountIns = state.netAmount / state.noOfInstallment;
      setState({ ...state, installmentAmount: amountIns });
    }
  }, [state.netAmount]);

  const [error, setError] = useState({
    disscountPercentageError: "",
    percentageError: "",
    noOfInstallmentError: "",
  });
  //end validation
  const onChange = (val, name) => {
    if (name === "disscountPercentage") {
      setState({ ...state, disscountPercentage: val });
    } else if (name === "percentage") {
      setState({ ...state, percentage: val });
    } else if (name === "downPaymentAmount") {
      setState({ ...state, downPaymentAmount: val });
    } else if (name === "noOfInstallment") {
      setState({ ...state, noOfInstallment: val });
    } else if (name === "installmentAmount") {
      setState({ ...state, installmentAmount: val });
    }
  };

  return (
    <Modal size="lg" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Payment</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label">Total Net Amount</label>
            <Input
              type="text"
              placeholder=""
              value={props.amount}
              disabled
            ></Input>

            {/* {Error.CnicError !== "" && Error.CnicError !== null && (
                      <small>
                        <span style={{ color: "red" }}>{Error.CnicError}</span>
                      </small>
                    )} */}
          </Col>

          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label">Discount Percentage</label>
            <Input
              type="number"
              max="2"
              value={state.disscountPercentage}
              onChange={(e) => onChange(e.target.value, "disscountPercentage")}
              onBlur={() => CheckFields("disscountPercentage")}
            ></Input>
            {error.disscountPercentageError !== "" &&
              error.disscountPercentageError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {error.disscountPercentageError}
                  </span>
                </small>
              )}
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label">After Discount Amount</label>
            <Input
              type="text"
              placeholder=""
              value={state.discountAmount}

              //onBlur={() => CheckFields("discountAmount")}
              // onChange={(e) => OnChange(e.target.value, "CNIC")}
            ></Input>
            {/* {Error.Error !== "" && Error.Error !== null && (
                      <small>
                        <span style={{ color: "red" }}>{Error.Error}</span>
                      </small>
                    )}
                       */}
          </Col>
        </Row>
        <hr />
        <h3>Downpayment</h3>
        <Row>
          <Col lg="4" md="4" sm="8" xs="12">
            <label className="form-control-label">Percentage</label>
            <Input
              type="text"
              placeholder="%"
              value={state.percentage}
              onBlur={() => CheckFields("percentage")}
              onChange={(e) => onChange(e.target.value, "percentage")}
            ></Input>
            {error.percentageError !== "" && error.percentageError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.percentageError}</span>
              </small>
            )}
          </Col>
          <Col lg="4" md="4" sm="8" xs="12">
            <label className="form-control-label">Down payment Amount</label>
            <Input
              type="text"
              placeholder=""
              value={state.downPaymentAmount}
              onBlur={() => CheckFields("downPaymentAmount")}
              onChange={(e) => onChange(e.target.value, "downPaymentAmount")}
            ></Input>
            {/* {Error.Error !== "" && Error.Error !== null && (
                      <small>
                        <span style={{ color: "red" }}>{Error.Error}</span>
                      </small>
                    )}
                       */}
          </Col>
        </Row>
        <hr />
        <h3>Installments</h3>
        <Row>
          <Col>
            <Label>{state.netAmount}</Label>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6">
            <label className="form-control-label">No of Months</label>
            <Input
              type="text"
              value={state.noOfInstallment}
              onBlur={() => CheckFields("noOfInstallment")}
              onChange={(e) => onChange(e.target.value, "noOfInstallment")}
            ></Input>
            {error.noOfInstallmentError !== "" &&
              error.noOfInstallmentError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {error.noOfInstallmentError}
                  </span>
                </small>
              )}
          </Col>
          <Col lg="6" md="6" sm="6"></Col>
        </Row>

        <Row>
          <Col lg="4" md="4" sm="8" xs="12">
            <label className="form-control-label">No of Installment</label>
            <Input
              type="text"
              value={state.noOfInstallment}
              onBlur={() => CheckFields("noOfInstallment")}
              onChange={(e) => onChange(e.target.value, "noOfInstallment")}
            ></Input>
            {error.noOfInstallmentError !== "" &&
              error.noOfInstallmentError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {error.noOfInstallmentError}
                  </span>
                </small>
              )}
          </Col>
          <Col lg="4" md="4" sm="8" xs="12">
            <label className="form-control-label">Installment Amount</label>
            <Input
              type="text"
              value={state.installmentAmount}
              onBlur={() => CheckFields("installmentAmount")}
              onChange={(e) => onChange(e.target.value, "installmentAmount")}
            ></Input>
          </Col>
        </Row>
        <hr />
        <h3>On Possession</h3>
        <Row>
          <Col lg="4" md="4" sm="8" xs="12">
            <label className="form-control-label">Percentage</label>
            <Input
              type="text"
              placeholder="%"
              disabled
              value={state.possessionPercentage}

              // onBlur={() => CheckFields("possessionPercentage")}
              // onChange={(e) => onChange(e.target.value, "possessionPercentage")}
            ></Input>
          </Col>
          <Col lg="4" md="4" sm="8" xs="12">
            <label className="form-control-label">Possession Amount</label>
            <Input
              type="text"
              // placeholder="%"
              disabled
              value={state.possessionAmount}

              // onBlur={() => CheckFields("possessionPercentage")}
              // onChange={(e) => onChange(e.target.value, "possessionPercentage")}
            ></Input>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="info" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddPaymentModal;
