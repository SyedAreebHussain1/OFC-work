import React, { useState, useEffect } from "react";
import Headers from "components/Headers/Header1";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useLocation, useHistory } from "react-router";
import PaymentPlan from "./PaymentPlan";

export const PlanBuilder = (props) => {
  let history = useHistory();
  const location = useLocation();
  let TokenMoney = location.state?.TokenMoney;
  const [isPercentageHundred, setIsPercentageHundred] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const Toggler = () => {
    setIsOpen(!isOpen);
  };
  const [state, setState] = useState({
    totalNetAmount: "",
    disscountPercentage: "",
    percentage: "30",
    amount: "",
    discountAmount: "",
    discountedAmount: "",
    downPaymentAmount: "",
    netAmount: "",
    noOfInstallment: "",
    installmentAmount: "",
    noOfMonths: "",
    addBallon: true,
    noOfBalloonInst: "",
    ballonAmount: "",
    ballonPercent: "",
    noDownPaymentInstallment: "1",
    downPaymentInstallmentAmount: "",
    possessionPercentage: "20",
    possessionAmount: "",
    installmentRange: "",
    totalBallonAmount: "",
    plotNo: "",
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
        let y = p * state.totalNetAmount;
        let z = state.totalNetAmount - y;
        let discountedAmount = y;

        let possesionpercentage = state.possessionPercentage / 100;
        let possessionAmount = possesionpercentage * parseInt(z);

        let netAmount = z - possessionAmount - state.downPaymentAmount;

        //  setState({ ...state, netAmount: netAmount });
        setState({
          ...state,
          discountAmount: z,
          discountedAmount: y,
          netAmount: netAmount,
          possessionAmount: possessionAmount,
        });

        setError({ ...error, disscountPercentageError: "" });
      }
    } else if (name === "percentage") {
      if (state.percentage < 20) {
        setError({ ...error, percentageError: "Min 20" });
      } else {
        if (state.discountAmount == "") {
          let p = state.percentage / 100;

          let y = p * state.totalNetAmount;
          let z = state.totalNetAmount - y;

          setState({ ...state, downPaymentAmount: y - TokenMoney });
        } else {
          let p = parseInt(state.percentage) / 100;

          let y = p * parseInt(state.discountAmount);
          let z = parseInt(state.discountAmount) - y;

          // let possessionPercentage = 20 / 100;
          // let possessionAmount =
          //   possessionPercentage * parseInt(state.discountAmount);
          let netAmount = state.discountAmount - state.possessionAmount - y;

          setState({
            ...state,
            downPaymentAmount: y - TokenMoney,
            amount: z,
            // possessionPercentage: possessionPercentage * 100,
            // possessionAmount: possessionAmount,
            netAmount: netAmount,
          });

          // setState({ ...state, amount: y,})
        }
        setError({ ...error, percentageError: "" });
      }
    } else if (name === "possessionPercentage") {
      let possesionpercentage = state.possessionPercentage / 100;
      let possessionAmount =
        possesionpercentage * parseInt(state.discountAmount);
      if (state.percentage == "") {
        let netAmount = state.discountAmount - possessionAmount - 0;
        setState({
          ...state,
          possessionAmount: possessionAmount,
          netAmount: netAmount,
        });
      } else {
        let netAmount =
          state.discountAmount - possessionAmount - state.downPaymentAmount;
        setState({
          ...state,
          possessionAmount: possessionAmount,
          netAmount: netAmount,
        });
      }
    } else if (name === "noOfBalloonInst") {
      if (
        state.noOfBalloonInst === "" ||
        state.noOfBalloonInst === undefined ||
        state.noOfBalloonInst === "0"
      ) {
        setError({
          ...error,
          noOfBalloonInstError: "Enter valid Number of Ballon Installment",
        });
      } else {
        setError({ ...error, noOfBalloonInstError: "" });
      }
    } else if (name === "noOfMonths") {
      if (
        state.noOfMonths === "" ||
        state.noOfMonths === undefined ||
        state.noOfMonths === "0"
      ) {
        setError({
          ...error,
          noOfMonthsError: "Enter valid Number of Months",
        });
      } else if (state.addBallon === true && state.noOfMonths !== "") {
        setError({
          ...error,
          noOfMonthsError: "",
        });
        let ballonIns = state.noOfMonths / 12;

        let noOfIns = state.noOfMonths - ballonIns;
        setState({
          ...state,
          noOfBalloonInst: Math.round(ballonIns),
          noOfInstallment: Math.round(noOfIns),
        });
      } else if (state.addBallon === false) {
        let divide = state.netAmount / state.noOfMonths;

        setError({
          ...error,
          noOfMonthsError: "",
        });
        setState({
          ...state,
          noOfBalloonInst: 0,
          ballonAmount: 0,
          installmentAmount: Math.ceil(divide),
          installmentRange: Math.ceil(divide),
          // noOfMonths: state.noOfInstallment,
          noOfInstallment: state.noOfMonths,
        });
      }
    } else if (name === "noDownPaymentInstallment") {
      if (state.noDownPaymentInstallment > 3) {
        setError({
          ...error,
          noDownPaymentInstallmentError: "Maximum length is 3",
        });
      } else {
        setError({ ...error, noDownPaymentInstallmentError: "" });
        let divide = state.downPaymentAmount / state.noDownPaymentInstallment;
        setState({ ...state, downPaymentInstallmentAmount: divide });
      }
    }
  };

  const [label, setLabel] = useState("");
  const Calculate = () => {
    let product, remaining, balamount, balIns, monthIns;

    if (
      (state.noOfMonths === null ||
        state.noOfMonths === "" ||
        state.noOfMonths === undefined) &&
      (state.installmentRange === null ||
        state.installmentRange === "" ||
        state.installmentRange === undefined)
    ) {
      setError({
        ...error,
        noOfMonthsError: "Enter valid Number of Months",
        rangeError: "Enter valid Range",
      });
    } else if (
      (state.noOfMonths !== null ||
        state.noOfMonths !== "" ||
        state.noOfMonths !== undefined) &&
      (state.installmentRange === null ||
        state.installmentRange === "" ||
        state.installmentRange === undefined) &&
      state.addBallon === true
    ) {
      setError({
        ...error,
        noOfMonthsError: "",
        rangeError: "Enter valid Range",
      });
    } else if (
      (state.noOfMonths !== null ||
        state.noOfMonths !== "" ||
        state.noOfMonths !== undefined) &&
      (state.installmentRange === null ||
        state.installmentRange === "" ||
        state.installmentRange === undefined) &&
      state.addBallon === false
    ) {
      setError({
        ...error,
        noOfMonthsError: "",
        rangeError: "",
      });
      // product = state.netAmount / state.noOfMonths;
      // setState({
      //   ...state,
      //   noOfInstallment: state.noOfMonths,
      //   installmentAmount: Math.ceil(product),
      // });
    } else if (
      (state.installmentRange === null ||
        state.installmentRange === "" ||
        state.installmentRange === undefined) &&
      state.addBallon === true
    ) {
      setError({ ...error, rangeError: "Enter valid Range" });
    } else if (
      (state.installmentRange === null ||
        state.installmentRange === "" ||
        state.installmentRange === undefined) &&
      state.addBallon === false
    ) {
      setError({ ...error, rangeError: "" });
    } else if (
      (state.noOfMonths === null ||
        state.noOfMonths === "" ||
        state.noOfMonths === undefined) &&
      (state.installmentRange !== null ||
        state.installmentRange !== "" ||
        state.installmentRange !== undefined)
    ) {
      setError({
        ...error,
        noOfMonthsError: "Enter valid Number of Months",
        rangeError: "",
      });
    } else {
      product = state.noOfInstallment * state.installmentRange;
      if (product > state.netAmount) {
        setError({ ...error, rangeError: "Amount OverExceeded " });
      } else {
        remaining = state.netAmount - product;
        let divide = remaining / state.noOfBalloonInst;
        setState({
          ...state,
          installmentAmount: product,
          ballonAmount: Math.ceil(divide),
          totalBallonAmount: remaining,
        });
        setError({ ...error, rangeError: "" });
      }

      // setError({
      //   ...error,
      //   rangeError: "",
      //   noOfMonthsError: "",
      // });
    }
  };

  const [error, setError] = useState({
    disscountPercentageError: "",
    percentageError: "",
    noOfInstallmentError: "",
    noOfMonthsError: "",
    ballonPercentError: "",
    noOfBalloonInstError: "",
    rangeError: "",
    noofDownInsError: "",
  });
  const onChange = (val, name) => {
    if (name === "addBallon") {
      setState({ ...state, addBallon: !state.addBallon });
    } else if (name === "noDownPaymentInstallment") {
      setState({ ...state, noDownPaymentInstallment: val });
    } else {
      setState({ ...state, [name]: val });
      // if(name === "percentage"){
      //   if(val > "0" && val <="100"){
      //     setState({...state,percentage:val})
      //   }
      // }
    }
  };

  useEffect(() => {
    if (state.percentage == "100") {
      setState({ ...state, possessionPercentage: "0", possessionAmount: "0" });
      setIsPercentageHundred(true);
    } else {
      let possesionpercentage = state.possessionPercentage / 100;
      let possessionAmount =
        possesionpercentage * parseInt(state.discountAmount);
      let netAmount =
        state.discountAmount - possessionAmount - state.downPaymentAmount;
      setState({
        ...state,
        possessionPercentage: "20",
        possessionAmount: possessionAmount,
        netAmount: netAmount,
      });
      setIsPercentageHundred(false);
    }
  }, [state.percentage]);

  useEffect(() => {
    setState({
      ...state,
      noOfBalloonInst: "",
      ballonAmount: "",
      installmentRange: "",
      noOfMonths: "",
      totalBallonAmount: "",
      noOfInstallment: "",
      installmentAmount: "",
    });
  }, [state.addBallon]);

  useEffect(() => {
    if (state.percentage == "") {
      let p = state.percentage / 100;

      let y = p * state.discountAmount;
      let z = state.discountAmount - y;
      setState({
        ...state,
        downPaymentAmount: z - TokenMoney,
        amount: z,
      });
    } else {
      let p = state.percentage / 100;

      let y = p * state.discountAmount;

      let z = state.discountAmount - y;

      setState({
        ...state,
        downPaymentAmount: y - TokenMoney,
        amount: z,
      });
    }
  }, [state.discountAmount]);
  useEffect(() => {}, [state.noDownPaymentInstallment]);

  const [amount, setAmount] = useState(null);
  useEffect(() => {
    if (location.state !== null && location.state !== undefined) {
      let netamount = "";
      let possesionpercentage = state.possessionPercentage / 100;
      let possessionAmount =
        possesionpercentage * parseInt(location.state.amount);
      setState({
        ...state,
        totalNetAmount: location.state.amount,
        plotNo: location.state.plotNo,
        discountAmount: location.state.amount,
        netAmount: netamount,
        possessionAmount: possessionAmount,
      });
    }

    //state.totalNetAmount-state.possessionAmount-state.downPaymentAmount;
    // setState({ ...state, discountAmount: state.totalNetAmount ,netAmount:netamount,possessionAmount:possessionAmount});
  }, [true]);

  const save = () => {
    let downPaymentInstallmentAmount = Math.floor(
      state.downPaymentAmount / state.noDownPaymentInstallment
    );
    setState({
      ...state,
      downPaymentInstallmentAmount: downPaymentInstallmentAmount,
    });
    history.push({
      pathname: "/admin/Saleorder",
      state: {
        state,
      },
      body1: location.state,
    });
  };
  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader>
                <Row>
                  <Col lg="4" md="4" sm="6" xs="12">
                    <h2>Payment Builders</h2>
                  </Col>
                  <Col lg="4" md="4" sm="6" xs="12"></Col>
                  <Col lg="2" md="2" sm="6" xs="12">
                    <h2>
                      {location.state !== null && location.state !== undefined
                        ? location.state.plotNo + "_Custom"
                        : ""}
                    </h2>
                  </Col>
                  <hr />
                </Row>
              </CardHeader>

              <CardBody>
                <Row>
                  <Col lg="4" md="4" sm="6" xs="12">
                    <label className="form-control-label">
                      Total Net Amount
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                      value={state.totalNetAmount}
                      disabled
                    ></Input>

                    {/* {Error.CnicError !== "" && Error.CnicError !== null && (
                      <small>
                        <span style={{ color: "red" }}>{Error.CnicError}</span>
                      </small>
                    )} */}
                  </Col>

                  <Col lg="4" md="4" sm="6" xs="12">
                    <label className="form-control-label">
                      Discount Percentage
                    </label>
                    <Input
                      type="number"
                      max="2"
                      value={state.disscountPercentage}
                      onChange={(e) =>
                        onChange(e.target.value, "disscountPercentage")
                      }
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
                    <label className="form-control-label">
                      After Discount Amount
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                      value={state.discountAmount}
                    ></Input>
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
                      onChange={(e) => {
                        const regex = /^[1-9][0-9]?$|^100$/;
                        if (
                          e.target.value === "" ||
                          regex.test(e.target.value)
                        ) {
                          onChange(e.target.value, "percentage");
                        }
                      }}
                    ></Input>
                    {error.percentageError !== "" &&
                      error.percentageError !== null && (
                        <small>
                          <span style={{ color: "red" }}>
                            {error.percentageError}
                          </span>
                        </small>
                      )}
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      Down payment Amount
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                      value={state.downPaymentAmount}
                      onBlur={() => CheckFields("downPaymentAmount")}
                      onChange={(e) =>
                        onChange(e.target.value, "downPaymentAmount")
                      }
                    ></Input>
                    {/* {Error.Error !== "" && Error.Error !== null && (
                      <small>
                        <span style={{ color: "red" }}>{Error.Error}</span>
                      </small>
                    )}
                       */}
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12"></Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      No Of DownPayment Installment
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                      value={state.noDownPaymentInstallment}
                      onBlur={() => CheckFields("noDownPaymentInstallment")}
                      onChange={(e) =>
                        onChange(e.target.value, "noDownPaymentInstallment")
                      }
                    ></Input>
                    {error.noDownPaymentInstallmentError !== "" &&
                      error.noDownPaymentInstallmentError !== null && (
                        <small>
                          <span style={{ color: "red" }}>
                            {error.noDownPaymentInstallmentError}
                          </span>
                        </small>
                      )}
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      Installment DownPayment{" "}
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                      disabled
                      value={state.downPaymentInstallmentAmount}
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
                      value={state.possessionPercentage}
                      onChange={(e) =>
                        onChange(e.target.value, "possessionPercentage")
                      }
                      onBlur={() => CheckFields("possessionPercentage")}
                      disabled={isPercentageHundred}
                    ></Input>
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      Possession Amount
                    </label>
                    <Input
                      type="text"
                      disabled
                      value={state.possessionAmount}
                    ></Input>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col lg="10" md="10" sm="10" xs="12">
                    <h3>Installments</h3>
                  </Col>
                  <Col lg="2" md="2" sm="2" xs="12">
                    <Button color="danger" onClick={Calculate}>
                      Calculate
                    </Button>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label>{state.netAmount}</Label>
                  </Col>
                </Row>
                {/* Months New Loginc Starts Here */}
                <Row>
                  <Col lg="4" md="4" sm="6">
                    <label className="form-control-label">Plan</label>
                    <Input
                      type="select"
                      value={state.noOfMonths}
                      onBlur={() => CheckFields("noOfMonths")}
                      onChange={(e) => onChange(e.target.value, "noOfMonths")}
                    >
                      <option value="">Select</option>
                      <option value="1">1 Month</option>
                      <option value="12">1 Year</option>
                      <option value="24">2 Year</option>
                      <option value="36">3 Year</option>
                      <option value="48">4 Year</option>
                      <option value="60">5 Year</option>
                    </Input>
                    {error.noOfMonthsError !== "" &&
                      error.noOfMonthsError !== null && (
                        <small>
                          <span style={{ color: "red" }}>
                            {error.noOfMonthsError}
                          </span>
                        </small>
                      )}
                  </Col>
                  <Col lg="4" md="4" sm="6">
                    <label className="form-control-label">
                      Installment Range
                    </label>
                    <Input
                      type="text"
                      disabled={
                        state.addBallon === false || isPercentageHundred
                          ? true
                          : false
                      }
                      value={state.installmentRange}
                      onBlur={() => CheckFields("range")}
                      onChange={(e) =>
                        onChange(e.target.value, "installmentRange")
                      }
                    ></Input>
                    {error.rangeError !== "" && error.rangeError !== null && (
                      <small>
                        <span style={{ color: "red" }}>{error.rangeError}</span>
                      </small>
                    )}
                  </Col>

                  <Col lg="1" md="1" sm="2">
                    <label className="form-control-label"></label>
                    <Input
                      type="checkbox"
                      checked={state.addBallon}
                      onChange={(e) => onChange(e.target.value, "addBallon")}
                    >
                      {/* {" "} */}
                    </Input>
                  </Col>
                  <Col lg="2" md="2" sm="2">
                    <Label>Add Balloon Payment</Label>
                  </Col>
                </Row>

                <Row>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      No of Balloon Installment
                    </label>
                    <Input
                      disabled={
                        state.addBallon === false || isPercentageHundred
                          ? true
                          : false
                      }
                      type="text"
                      value={state.noOfBalloonInst}
                      onBlur={() => CheckFields("noOfBalloonInst")}
                      onChange={(e) =>
                        onChange(e.target.value, "noOfBalloonInst")
                      }
                    ></Input>
                    {error.noOfBalloonInstError !== "" &&
                      error.noOfBalloonInstError !== null && (
                        <small>
                          <span style={{ color: "red" }}>
                            {error.noOfBalloonInstError}
                          </span>
                        </small>
                      )}
                  </Col>

                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      Amount Per Balloon Installment
                    </label>
                    <Input
                      disabled={
                        state.addBallon === false || isPercentageHundred
                          ? true
                          : false
                      }
                      type="text"
                      value={state.ballonAmount}
                      // onBlur={() => CheckFields("noOfMonths")}
                      onChange={(e) => onChange(e.target.value, "addBallon")}
                    >
                      {" "}
                    </Input>
                    {/* {error.noOfMonthsError !== "" &&
                      error.noOfMonthsError !== null && (
                        <small>
                          <span style={{ color: "red" }}>
                            {error.noOfMonthsError}
                          </span>
                        </small>
                      )} */}
                  </Col>

                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      Total Balloon Amount
                    </label>
                    <Input
                      disabled={true}
                      type="text"
                      value={state.totalBallonAmount}
                    >
                      {" "}
                    </Input>
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <Label>{label}</Label>
                  </Col>
                </Row>

                <Row>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      No of Installment
                    </label>
                    <Input
                      type="text"
                      value={state.noOfInstallment}
                      onBlur={() => CheckFields("noOfInstallment")}
                      onChange={(e) =>
                        onChange(e.target.value, "noOfInstallment")
                      }
                      disabled={isPercentageHundred}
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
                    <label className="form-control-label">
                      Installment Amount
                    </label>
                    <Input
                      type="text"
                      value={state.installmentAmount}
                      onBlur={() => CheckFields("installmentAmount")}
                      onChange={(e) =>
                        onChange(e.target.value, "installmentAmount")
                      }
                      disabled={isPercentageHundred}
                    ></Input>
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12"></Col>
                  <Col className="mt-3" lg="4" md="4" sm="8" xs="12">
                    {/* <Button color="danger" size="sm" onClick={save}>
                      <span className="btn-inner--icon">Save</span>
                    </Button> */}

                    <Button color="info" size="sm" onClick={Toggler}>
                      <span className="btn-inner--icon">Generate</span>
                    </Button>
                  </Col>
                </Row>
                <hr />
              </CardBody>
              <CardBody>
                {isOpen === true ? (
                  <PaymentPlan state={state} location={location.state} />
                ) : (
                  ""
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
