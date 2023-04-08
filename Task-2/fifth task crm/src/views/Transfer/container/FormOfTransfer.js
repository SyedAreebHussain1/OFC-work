import React, { useState, useEffect, useRef } from "react";
import { CardBody, Button, CardHeader, Row, Col, Input } from "reactstrap";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import { useLocation, useHistory } from "react-router";
import InfoModal from "views/Transfer/helpers/InfoModal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useReactToPrint } from "react-to-print";
import TransferRequest from "views/HtmlReciept/TransferRequest/TransferRequest";
import swal from "sweetalert";
import TransferReceipt from "views/HtmlReciept/TransferReceipt/TransferReceipt";
const FormOfTransfer = (props) => {
  const location = useLocation();
  const history = useHistory();
  const componentRef = useRef();
  const componentRef1 = useRef();
  const [stateData, SetStateData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [transferPrintData, setTransferPrintData] = useState(null);
  const [transferData, settransferData] = useState(false);
  const [PaymentDetails, setPaymetDetails] = useState(null);
  const [uploadNOC, setUploadNOC] = useState(null);
  const [uploadReciept, setUploadReciept] = useState(null);
  const fileInputNOC = useRef(null);
  const fileInputReceipt = useRef(null);

  const handleUploadNOC = (e) => {
    setUploadNOC(e.target.files[0]);
  };
  const deleteNOC = (e) => {
    setUploadNOC(null);
  };
  const handleUploadReceipt = (e) => {
    setUploadReciept(e.target.files[0]);
  };
  const deleteReceipt = (e) => {
    setUploadReciept(null);
  };

  const [state, setstate] = useState({
    CustomerName: "",
    PhoneNo: "",
    CustomerCnic: "",
    CustomerEmail: "",
    PlotNo: "",
  });
  const [stateTransfer, setstateTransfer] = useState({
    Cnic: "",
    TransferName: "",
    TransferCnic: "",
    TransferPhone: "",
    TransferEmail: "",
    TransferTo: "",
    Transferfee: "",
    Comment: "",
    paymentType: "",
    Chequedate: "",
    chequeno: "",
  });
  const onSuccess = () => {};
  const onFailure = () => {};
  const onSuccessTransfer = (data) => {
    // console.log("Response DATA", data);
    // setTransferPrintData(data);
    swal({
      title: "Successful",
      text: "Successfully Initiated",
      type: "success",
      icon: "success",
    }).then(function (isConfirm) {
      if (isConfirm) {
        // history.replace("/admin/ViewTransferRecords");
        history.push({
          pathname: "/admin/transferRequest",
          TransferFrom: location.state,
          TransferTo: stateTransfer,
          Response: data,
        });
      } else {
        history.push({
          pathname: "/admin/transferRequest",
          TransferFrom: location.state,
          TransferTo: stateTransfer,
          Response: data,
        });
      }
    });
    setstateTransfer({
      ...stateTransfer,
      TransferName: "",
      TransferEmail: "",
      TransferCnic: "",
      TransferPhone: "+92",
      TransferTo: "",
      Transferfee: "",
      Comment: "",
      Cnic: "",
      paymentType: "",

      Chequedate: "",
      chequeno: "",
    });
  };
  const onFailureTransfer = () => {};
  const [error, setError] = useState({
    TransferNameError: "",
    TransferEmailError: "",
    TransferPhoneError: "",
    TransferCnicError: "",
    paymentTypeError: "",
    TransferfeeError: "",
    ChequedateError: "",
    chequenoError: "",
    CommentError: "",
  });
  const CheckFields = (name) => {
    if (name === "TransferName") {
      setError({
        ...error,
        TransferNameError: validate("required", stateTransfer.TransferName),
      });
    } else if (name === "TransferPhone") {
      setError({
        ...error,
        TransferPhoneError: validate("required", stateTransfer.TransferPhone),
      });
    } else if (name === "TransferCnic") {
      setError({
        ...error,
        TransferCnicError: validate("required", stateTransfer.TransferCnic),
      });
    } else if (name === "TransferEmail") {
      setError({
        ...error,
        TransferEmailError: validate("required", stateTransfer.TransferEmail),
      });
    } else if (name === "paymentType") {
      setError({
        ...error,
        paymentTypeError: validate("required", stateTransfer.paymentType),
      });
    } else if (name === "Transferfee") {
      setError({
        ...error,
        TransferfeeError: validate("required", stateTransfer.Transferfee),
      });
    } else if (
      name === "Chequedate" &&
      stateTransfer?.paymentType === "Cheque"
    ) {
      setError({
        ...error,
        ChequedateError: validate("required", stateTransfer.Chequedate),
      });
    } else if (name === "chequeno" && stateTransfer?.paymentType === "Cheque") {
      setError({
        ...error,
        chequenoError: validate("required", stateTransfer.chequeno),
      });
    } else if (name === "Comment") {
      setError({
        ...error,
        CommentError: validate("required", stateTransfer.Comment),
      });
    }
  };
  useEffect(() => {
    // console.log("LOCATION STATE TRANSER", location.state);
    if (
      location.state.SaleOrderId !== "" &&
      location.state.SaleOrderId !== undefined &&
      location.state.SaleOrderId !== null
    ) {
      props._getPaymentDetailsMiddleware(
        location.state.SaleOrderId,
        onSuccess,
        onFailure
      );
    }
    setstate({
      ...state,
      TaskId: location.state?.Taskid,
      TransferFrom: location.state?.user_id,
      CustomerName: location.state?.user_name,
      CustomerPhoneNo: location.state?.user_phone,
      CustomerCnic: location.state?.CNIC,
      PlotNo: location.state?.Plot_no,
      CustomerEmail: location.state?.user_email,
      Plotid: location.state?.Plotid,
    });
    SetStateData(location.state);
  }, [location]);

  // let transferData=false;
  useEffect(() => {
    if (props.Users !== null && props.Users !== undefined) {
      if (props.Users[0] !== null && props.Users[0] !== undefined) {
        settransferData(true);
        setstateTransfer({
          ...stateTransfer,
          TransferName: props.Users[0].user_name,
          TransferEmail: props.Users[0].user_email,
          TransferCnic: props.Users[0].CNIC,
          TransferPhone: props.Users[0].user_phone,
          TransferTo: props.Users[0].user_id,
        });
      }
    } else {
      settransferData(false);
      setstateTransfer({
        ...stateTransfer,
        TransferName: "",
        TransferEmail: "",
        TransferCnic: "",
        TransferPhone: "",
        TransferTo: "",
      });
      // transferData=false;
    }
  }, [props.Users]);

  const ToggleInfoModal = () => {
    setIsOpen(!isOpen);
  };
  const onChange = (name, value) => {
    setstateTransfer({ ...stateTransfer, [name]: value });
  };
  //  const  onChangeTranfer=(name,value)=>{

  //  }
  const onSearchButton = () => {
    if (stateTransfer.Cnic !== "") {
      let body = {
        user_id: null,
        cnic: stateTransfer.Cnic,
      };
      props.ShowUserInfo(body, onSuccess, onFailure);
    }
  };

  const RequestInitiate = () => {
    setError({
      ...error,
      TransferNameError: validate("required", stateTransfer.TransferName),
      TransferEmailError: validate("required", stateTransfer.TransferEmail),
      TransferPhoneError: validate("required", stateTransfer.TransferPhone),
      TransferCnicError: validate("required", stateTransfer.TransferCnic),
      paymentTypeError: validate("required", stateTransfer.paymentType),
      TransferfeeError: validate("required", stateTransfer.Transferfee),
      ChequedateError:
        stateTransfer?.paymentType === "Cheque"
          ? validate("required", stateTransfer.Chequedate)
          : "",
      chequenoError:
        stateTransfer?.paymentType === "Cheque"
          ? validate("required", stateTransfer.chequeno)
          : "",
      CommentError: validate("required", stateTransfer.Comment),
    });
    // if (
    //   state.TransferTo !== "" &&
    //   state.TransferTo !== undefined &&
    //   stateTransfer.Transferfee !== "" &&
    //   state?.Plotid &&
    //   state.TransferFrom !== "" &&
    //   stateTransfer.paymentType !== ""
    // ) {
    //   console.log("FIRST IF");
    //   let body = {
    //     // Taskid: state.TaskId,
    //     Transferfrom: state.TransferFrom,
    //     Transferto: stateTransfer.TransferTo,
    //     Transferfee: stateTransfer.Transferfee,
    //     // TranferFeePercentage: 30,
    //     Remarks: stateTransfer.Comment,
    //     Plotid: state.Plotid,
    //     Paymenttype: stateTransfer.paymentType,
    //     // UserEmail: null,
    //     // UserPhoneNumber: null,
    //     // UserCnic: null,
    //     // UserName: null,
    //   };
    //   props.ShowPlotTransfer(body, onSuccessTransfer, onFailureTransfer);
    //   history.push({
    //     pathname: "/admin/transferRequest",
    //     TransferFrom: location.state,
    //     TransferTo: stateTransfer,
    //   });
    //   // setstateTransfer({
    //   //   ...stateTransfer,
    //   //   TransferName: "",
    //   //   TransferEmail: "",
    //   //   TransferCnic: "",
    //   //   TransferPhone: "+92",
    //   //   TransferTo: "",
    //   //   Transferfee: "",
    //   //   Comment: "",
    //   //   Cnic: "",
    //   //   paymentType: "",
    //   // });
    // }
    if (
      location.state.SaleOrderId === "" &&
      location.state.SaleOrderId === undefined &&
      location.state.SaleOrderId === null
    ) {
      swal(
        "Sorry!",
        "Transfer can not be proceed,Sale order doesn't exist",
        "error"
      );
    } else if (uploadReciept === null || uploadNOC === null) {
      swal(
        "Sorry!",
        "Transfer can not be proceed, Please upload NOC and Receipt files",
        "error"
      );
    } else if (
      stateTransfer.Transferfee !== "" &&
      state.TransferFrom !== "" &&
      stateTransfer.paymentType !== "" &&
      stateTransfer.TransferEmail !== "" &&
      stateTransfer.TransferPhone !== "" &&
      stateTransfer.TransferCnic !== "" &&
      stateTransfer.TransferName !== ""
    ) {
      // console.log("Transfer fee", stateTransfer.Transferfee);
      let formData = new FormData();
      formData.append("Transferfrom", state.TransferFrom);
      formData.append("Transferfee", stateTransfer.Transferfee);
      formData.append("Plotid", state.Plotid);
      formData.append("Remarks", stateTransfer.Comment);
      formData.append("UserEmail", stateTransfer.TransferEmail);
      formData.append("UserPhoneNumber", stateTransfer.TransferPhone);
      formData.append("UserCnic", stateTransfer.TransferCnic);
      formData.append("user_name", stateTransfer.TransferName);
      formData.append("Paymenttype", stateTransfer.paymentType);
      formData.append("noc", uploadNOC);
      formData.append("reciept", uploadReciept);
      // let body = {
      //   // Taskid: state.TaskId,
      //   Transferfrom: state.TransferFrom,
      //   Transferfee: stateTransfer.Transferfee,
      //   Plotid: state.Plotid,
      //   // TransferTo: null,
      //   // TranferFeePercentage: 30,
      //   Remarks: stateTransfer.Comment,
      //   UserEmail: stateTransfer.TransferEmail,
      //   UserPhoneNumber: stateTransfer.TransferPhone,
      //   UserCnic: stateTransfer.TransferCnic,
      //   user_name: stateTransfer.TransferName,
      //   Paymenttype: stateTransfer.paymentType,
      // };
      // console.log("BODY", body);
      props.ShowPlotTransfer(formData, onSuccessTransfer, onFailureTransfer);

      // setstateTransfer({
      //   ...stateTransfer,
      //   TransferName: "",
      //   TransferEmail: "",
      //   TransferCnic: "",
      //   TransferPhone: "+92",
      //   TransferTo: "",
      //   Transferfee: "",
      //   Comment: "",
      //   Cnic: "",
      //   paymentType: "",
      // });
    }
  };

  //  const Update=()=>{
  //   settransferData(false);
  //  }
  const handlePrintNOC = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Transfer NOC Letter`,
    copyStyles: true,
  });
  const handlePrintReceipt = useReactToPrint({
    content: () => componentRef1.current,
    documentTitle: `Transfer Receipt`,
    copyStyles: true,
  });

  // useEffect(() => {
  //   if (transferPrintData) {
  //     handlePrint();
  //   }
  // }, [transferPrintData]);

  useEffect(() => {
    if (props.PaymentDetails !== null && props.PaymentDetails !== undefined) {
      if (props.PaymentDetails !== null && props.PaymentDetails !== undefined) {
        // console.log("PAYMENT DETAILS", props.PaymentDetails);
        setPaymetDetails(props.PaymentDetails);
      }
    }
  }, [props.PaymentDetails]);
  const PrintNOC = () => {
    // console.log("STATE TRANSFER", stateTransfer);
    setError({
      ...error,
      TransferNameError: validate("required", stateTransfer.TransferName),
      TransferEmailError: validate("required", stateTransfer.TransferEmail),
      TransferPhoneError: validate("required", stateTransfer.TransferPhone),
      TransferCnicError: validate("required", stateTransfer.TransferCnic),
      paymentTypeError: validate("required", stateTransfer.paymentType),
      TransferfeeError: validate("required", stateTransfer.Transferfee),
      ChequedateError:
        stateTransfer?.paymentType === "Cheque"
          ? validate("required", stateTransfer.Chequedate)
          : "",
      chequenoError:
        stateTransfer?.paymentType === "Cheque"
          ? validate("required", stateTransfer.chequeno)
          : "",
      CommentError: validate("required", stateTransfer.Comment),
    });
    if (
      (stateTransfer?.paymentType === "Cheque"
        ? stateTransfer?.chequeno !== "" && stateTransfer?.Chequedate !== ""
        : true) &&
      // true is defined because if paymentType other than check then condition should be true else && used for comapre if PaymentType is cheque
      stateTransfer?.paymentType !== "" &&
      stateTransfer?.Comment !== "" &&
      stateTransfer?.TransferCnic !== "" &&
      stateTransfer?.TransferEmail !== "" &&
      stateTransfer?.TransferName !== "" &&
      stateTransfer?.TransferPhone !== "" &&
      stateTransfer?.Transferfee !== ""
    ) {
      handlePrintNOC();
    }
  };
  const PrintReceipt = () => {
    setError({
      ...error,
      TransferNameError: validate("required", stateTransfer.TransferName),
      TransferEmailError: validate("required", stateTransfer.TransferEmail),
      TransferPhoneError: validate("required", stateTransfer.TransferPhone),
      TransferCnicError: validate("required", stateTransfer.TransferCnic),
      paymentTypeError: validate("required", stateTransfer.paymentType),
      TransferfeeError: validate("required", stateTransfer.Transferfee),
      ChequedateError:
        stateTransfer?.paymentType === "Cheque"
          ? validate("required", stateTransfer.Chequedate)
          : "",
      chequenoError:
        stateTransfer?.paymentType === "Cheque"
          ? validate("required", stateTransfer.chequeno)
          : "",
      CommentError: validate("required", stateTransfer.Comment),
    });
    if (
      (stateTransfer?.paymentType === "Cheque"
        ? stateTransfer?.chequeno !== "" && stateTransfer?.Chequedate !== ""
        : true) &&
      // true is defined because if paymentType other than check then condition should be true else && used for comapre if PaymentType is cheque
      stateTransfer?.paymentType !== "" &&
      stateTransfer?.Comment !== "" &&
      stateTransfer?.TransferCnic !== "" &&
      stateTransfer?.TransferEmail !== "" &&
      stateTransfer?.TransferName !== "" &&
      stateTransfer?.TransferPhone !== "" &&
      stateTransfer?.Transferfee !== ""
    ) {
      handlePrintReceipt();
    }
  };
  const handleTest = () => {
    history.push({
      pathname: "/admin/transferRequest",
      TransferFrom: location.state,
      TransferTo: stateTransfer,
    });
  };
  return (
    <CardHeader className="border-0">
      <TransferReceipt
        ref={componentRef1}
        transferFromData={location.state}
        transferToData={stateTransfer}
        transferPaymentDetails={PaymentDetails}
      />
      <TransferRequest
        ref={componentRef}
        transferFromData={location.state}
        transferToData={stateTransfer}
        transferPaymentDetails={PaymentDetails}
      />
      <InfoModal
        modal={isOpen}
        toggle={ToggleInfoModal}
        stateData={stateData}
      />
      <h3 className="mb-0"> Customer Info </h3>
      <CardBody>
        <form>
          <div className="pl-lg-4">
            <Row>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Name
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  placeholder=""
                  disabled
                  // onBlur={() => CheckFields("phoneNumber")}
                  value={state.CustomerName}
                  // onChange={(e) => onChange(e.target.value, "ClientPhone")}
                ></input>
                {/* {error.phoneNumberError !== "" &&
                    error.phoneNumberError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.phoneNumberError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )} */}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Phone No
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  disabled
                  // onBlur={() => CheckFields("email")}
                  placeholder=""
                  value={state.CustomerPhoneNo}
                  // onChange={(e) => onChange(e.target.value, "ClientEmail")}
                ></input>
              </Col>

              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Email
                </label>
                <input
                  type="text"
                  id="input-username"
                  disabled
                  className="form-control"
                  value={state.CustomerEmail}
                  // disabled
                ></input>
              </Col>

              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Plot No
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  disabled
                  // onBlur={() => CheckFields("email")}
                  placeholder=""
                  value={state.PlotNo}
                  // onChange={(e) => onChange(e.target.value, "ClientEmail")}
                ></input>
              </Col>
              {/* <Col lg="4" md="4" sm="6">
                  <label className="form-control-label" for="input-username">
                    Token Money
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    // onBlur={() => CheckFields("email")}
                    placeholder=""
                    // value={state.ClientEmail}
                    // onChange={(e) => onChange(e.target.value, "ClientEmail")}
                  ></input>
                  
                </Col> */}
            </Row>
          </div>
        </form>
        <br />

        <Button color="danger" size="sm" onClick={(e) => ToggleInfoModal()}>
          Info
        </Button>
      </CardBody>
      <hr />
      <CardBody>
        <h3 className="mb-0"> Transfer To </h3>
        <br />
        <form>
          <div className="pl-lg-4">
            <Row>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Cnic
                </label>
                <input
                  autoComplete="off"
                  maxLength={13}
                  type="text"
                  onKeyPress={(event) => {
                    if (!/[0-9-+]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  id="input-username"
                  className="form-control"
                  placeholder=""
                  // onBlur={() => CheckFields("phoneNumber")}
                  // value={state.ClientPhone}
                  onChange={(e) => onChange("Cnic", e.target.value)}
                ></input>
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label"> Search </label>
                <br />
                <Button
                  color="info"
                  size="sm"
                  id="search"
                  onClick={onSearchButton}
                >
                  <span className="btn-inner--text"></span>
                  <span className="btn-inner--icon">
                    <i className="fas fa-search"></i>
                  </span>
                </Button>
              </Col>

              <Col lg="4" md="4" sm="6"></Col>
            </Row>
            <br />
            <Row>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  id="input-username"
                  className="form-control"
                  value={stateTransfer.TransferName}
                  disabled={transferData == true ? true : false}
                  onChange={(e) => onChange("TransferName", e.target.value)}
                  onBlur={() => CheckFields("TransferName")}
                ></input>
                {error.TransferNameError !== "" &&
                  error.TransferNameError !== null && (
                    <small>
                      <span style={{ color: "red" }}>
                        {error.TransferNameError}
                      </span>
                    </small>
                  )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Phone No <span style={{ color: "red" }}>*</span>
                </label>
                {/* <input
                    type="text"
                    id="input-username"
                    className="form-control"
                     value={stateTransfer.TransferPhone}
                     disabled={transferData==true?true:false}
                     onChange={(e) => onChange("TransferPhone",e.target.value)}
                  ></input> */}
                <PhoneInput
                  className="input-group-alternative"
                  // onBlur={() => CheckFields("phoneNumber")}
                  value={
                    stateTransfer.TransferPhone
                      ? stateTransfer.TransferPhone
                      : ""
                  }
                  disabled={transferData == true ? true : false}
                  disableDropdown={transferData == true ? true : false}
                  // onChange={(e) => OnChange(e, "phone")}
                  onChange={(e, value, country, formattedValue) => {
                    // console.log("EEEEEE", value);
                    let val = `+${e}`;
                    onChange("TransferPhone", val);
                  }}
                  onBlur={() => CheckFields("TransferPhone")}
                  inputStyle={
                    transferData == true
                      ? {
                          width: "100%",
                          border: "solid 1px lightgrey",
                          backgroundColor: "lightgrey",
                          // border: "none",
                        }
                      : {
                          width: "100%",
                          border: "solid 1px lightgrey",
                          // border: "none",
                        }
                  }
                  inputExtraProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                  fullWidth="true"
                  //  containerStyle={{border:"none"}}
                  countryCodeEditable={false}
                  country={"pk"}
                  // value={state.phone}
                />
                {error.TransferPhoneError !== "" &&
                  error.TransferPhoneError !== null && (
                    <small>
                      <span style={{ color: "red" }}>
                        {error.TransferPhoneError}
                      </span>
                    </small>
                  )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Cnic <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  autoComplete="off"
                  maxLength={13}
                  type="text"
                  id="input-username"
                  className="form-control"
                  value={stateTransfer.TransferCnic}
                  disabled={transferData == true ? true : false}
                  onChange={(e) => onChange("TransferCnic", e.target.value)}
                  onKeyPress={(event) => {
                    if (!/[0-9-+]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onBlur={() => CheckFields("TransferCnic")}
                ></input>
                {error.TransferCnicError !== "" &&
                  error.TransferCnicError !== null && (
                    <small>
                      <span style={{ color: "red" }}>
                        {error.TransferCnicError}
                      </span>
                    </small>
                  )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  id="input-username"
                  className="form-control"
                  value={stateTransfer.TransferEmail}
                  disabled={transferData == true ? true : false}
                  onChange={(e) => onChange("TransferEmail", e.target.value)}
                  onBlur={() => CheckFields("TransferEmail")}
                ></input>
                {error.TransferEmailError !== "" &&
                  error.TransferEmailError !== null && (
                    <small>
                      <span style={{ color: "red" }}>
                        {error.TransferEmailError}
                      </span>
                    </small>
                  )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Payment Type <span style={{ color: "red" }}>*</span>
                </label>
                <Input
                  id="exampleFormControlSelect1"
                  type="select"
                  className="form-control"
                  onChange={(e) => onChange("paymentType", e.target.value)}
                  onBlur={() => CheckFields("paymentType")}
                >
                  <option value="">Select</option>
                  <option value="Cash">Cash</option>
                  <option value="Cheque">Cheque</option>
                  <option value="PayOrder">Pay Order</option>
                  <option value="OnlinePayment">Online Payment</option>
                </Input>
                {error.paymentTypeError !== "" &&
                  error.paymentTypeError !== null && (
                    <small>
                      <span style={{ color: "red" }}>
                        {error.paymentTypeError}
                      </span>
                    </small>
                  )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Transfer Fee <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  id="input-username"
                  className="form-control"
                  value={stateTransfer.Transferfee}
                  onChange={(e) => onChange("Transferfee", e.target.value)}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onBlur={() => CheckFields("Transferfee")}
                ></input>
                {error.TransferfeeError !== "" &&
                  error.TransferfeeError !== null && (
                    <small>
                      <span style={{ color: "red" }}>
                        {error.TransferfeeError}
                      </span>
                    </small>
                  )}
              </Col>
              &nbsp;
            </Row>
            {stateTransfer?.paymentType === "Cheque" && (
              <Row style={{ marginTop: "-8px" }}>
                <Col lg="6" md="6" sm="6" xs="6">
                  <label className="form-control-label" for="input-username">
                    Cheque No <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    value={stateTransfer.chequeno}
                    placeholder="Enter checque no"
                    onChange={(e) => onChange("chequeno", e.target.value)}
                    onBlur={() => CheckFields("chequeno")}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    // disabled
                    type="text"
                    id="input-username"
                    className="form-control"
                  ></input>
                  {error.chequenoError !== "" && error.chequenoError !== null && (
                    <small>
                      <span style={{ color: "red" }}>
                        {error.chequenoError}
                      </span>
                    </small>
                  )}
                </Col>
                <Col lg="6" md="6" sm="6" xs="6">
                  <label className="form-control-label" for="input-username">
                    Cheque Date <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="date"
                    id="input-username"
                    className="form-control"
                    placeholder="Only"
                    value={stateTransfer.Chequedate}
                    onChange={(e) => onChange("Chequedate", e.target.value)}
                    onBlur={() => CheckFields("Chequedate")}
                  ></input>
                  {error.ChequedateError !== "" &&
                    error.ChequedateError !== null && (
                      <small>
                        <span style={{ color: "red" }}>
                          {error.ChequedateError}
                        </span>
                      </small>
                    )}
                </Col>
              </Row>
            )}
            <Row>
              <Col style={{}} lg="12" md="12" sm="12">
                <label className="form-control-label" for="input-username">
                  Comment <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  value={stateTransfer.Comment}
                  onBlur={() => CheckFields("Comment")}
                  onChange={(e) => onChange("Comment", e.target.value)}
                ></input>
                {error.CommentError !== "" && error.CommentError !== null && (
                  <small>
                    <span style={{ color: "red" }}>{error.CommentError}</span>
                  </small>
                )}
              </Col>
            </Row>

            <br />
            <Row>
              <Col lg="2" md="2" sm="2">
                <Button
                  color="danger"
                  size="sm"
                  // onClick={RequestInitiate}
                  onClick={handleTest}
                >
                  Request Initiate
                </Button>
              </Col>
              <Col lg="2" md="2" sm="2">
                <Button color="success" size="sm" onClick={PrintNOC}>
                  Print NOC Letter
                </Button>
              </Col>
              <Col lg="2" md="2" sm="2">
                <Button color="info" size="sm" onClick={PrintReceipt}>
                  Print Receipt
                </Button>
              </Col>
              <Col lg="3" md="3" sm="3">
                {uploadNOC !== null ? (
                  <div style={{ dipslay: "flex", flexDirection: "row" }}>
                    <span>{uploadNOC?.name}</span> &nbsp;
                    <i
                      onClick={deleteNOC}
                      style={{ cursor: "pointer" }}
                      class="fas fa-trash"
                    ></i>
                  </div>
                ) : (
                  <>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      accept="application/pdf"
                      ref={fileInputNOC}
                      onChange={handleUploadNOC}
                    />
                    <Button
                      color="warning"
                      size="sm"
                      onClick={(e) =>
                        fileInputNOC.current && fileInputNOC.current.click()
                      }
                    >
                      <i class="fas fa-file-upload"></i> Upload NOC Letter
                    </Button>
                  </>
                )}
              </Col>
              <Col lg="3" md="3" sm="3">
                {uploadReciept !== null ? (
                  <div style={{ dipslay: "flex", flexDirection: "row" }}>
                    <span>{uploadReciept?.name}</span> &nbsp;
                    <i
                      onClick={deleteReceipt}
                      style={{ cursor: "pointer" }}
                      class="fas fa-trash"
                    ></i>
                  </div>
                ) : (
                  <>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      accept="application/pdf"
                      ref={fileInputReceipt}
                      onChange={handleUploadReceipt}
                    />
                    <Button
                      color="warning"
                      size="sm"
                      style={{
                        backgroundColor: "#819830",
                        borderColor: "#819830",
                      }}
                      onClick={(e) =>
                        fileInputReceipt.current &&
                        fileInputReceipt.current.click()
                      }
                    >
                      <i class="fas fa-file-upload"></i> Upload Reciept
                    </Button>
                  </>
                )}
              </Col>
            </Row>

            {/* <Button color="danger" size="sm" onClick={handlePrint}>
              Print
            </Button> */}
            {/* <Button color="danger" size="sm" 
               onClick={Update}
              >
                <span className="btn-inner--text"></span>
                <span className="btn-inner--icon">
                <i class="fas fa-edit"></i>
                </span>
              </Button> */}
          </div>
        </form>
      </CardBody>
    </CardHeader>
  );
};

export default FormOfTransfer;
