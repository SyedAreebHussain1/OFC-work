import React from "react";
import { CardBody, Button, CardHeader, Row, Col, Input } from "reactstrap";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Tooltip } from "reactstrap";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import { connect } from "react-redux";
import {
  Insert_Payment_Recipt_Middleware,
  Update_Payment_Stages_Middleware,
} from "../middleware";
// import { connect } from "react-redux";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import swal from "sweetalert";

const FormOfPaymentReceipt = (props) => {
  useEffect(() => {
    props.showAmountMiddleware(onsuccess, onfailure);
    props.showPaymentThroughMiddleware(onsuccess, onfailure);
    props.showPaymentTypeMiddleware(onsuccess, onfailure);
  }, [true]);

  const onsuccess = () => {};
  const onfailure = () => {};
  const [state, setState] = useState({
    saleOrderNo:"",
    clientName: "",
    relationName: "",
    contactNo: "",
    email: "",
    cnic: "",
    passport: "",
    paymentType: "",
    Amount: "",
    // setstate.PR_useramount,

    PaymentThroughDescription: "",
    plotNo: "",
    DrawnThrough: "",
    remarks: "",
    currencyDescription: "",
    chequeNo: "",
    fileNo: "",
    currency: "",
    CurrencyTypeId: "",
    PaymentThroughId: "",
    Dated: "",
    PaymentTypeId: "",
  });
useEffect(() => {
  let body={
    saleOrder:state.saleOrderNo
  }
  props.GetTransferInfoMiddleware(body,onsuccess,onfailure)
}, [state.saleOrderNo])
useEffect(() => {
 if(props.TransferInfo!==null && props.TransferInfo!==undefined)
 {
   setState({...state,
    clientName: props.TransferInfo.user_name,
    
    contactNo: props.TransferInfo.user_phone,
    email: props.TransferInfo.user_email,
    cnic: props.TransferInfo.CNIC,
    passport: props.TransferInfo.PassportNo,
  })
 }
}, [props.TransferInfo])



  // const [amount, setamount] = useState([null]);
  // useEffect(() => {
  //   if (props.PaymentAmount !== null && props.PaymentAmount !== undefined) {
  //     let arr = [];
  //     for (let i = 0; i < props.PaymentAmount.length; i++) {
  //       let obj = {
  //         value: props.PaymentAmount[i].CurrencyTypeId,
  //         label: props.PaymentAmount[i].CurrencyTypeName,
  //       };
  //       arr.push(obj);
  //     }
  //     setamount(arr);
  //   }
  // }, [props.PaymentAmount]);

  // const [paymentthrough, setpaymentthrough] = useState([null]);
  // useEffect(() => {
  //   if (props.PaymentThrough !== null && props.PaymentThrough !== undefined) {
  //     let arr = [];
  //     for (let i = 0; i < props.PaymentThrough.length; i++) {
  //       let obj = {
  //         value: props.PaymentThrough[i].PaymentThroughId,
  //         label: props.PaymentThrough[i].PaymentthroughName,
  //       };
  //       arr.push(obj);
  //     }
  //     setpaymentthrough(arr);
  //   }
  // }, [props.PaymentThrough]);

  // //auto Complete of PaymentType
  // const [paymentType, setPaymentType] = useState([null]);
  // useEffect(() => {
  //   if (props.PaymentType !== null && props.PaymentType !== undefined) {
  //     let arr = [];
  //     for (let i = 0; i < props.PaymentType.length; i++) {
  //       let obj = {
  //         value: props.PaymentType[i].PaymentTypeId,
  //         label: props.PaymentType[i].PaymentTypeName,
  //       };
  //       arr.push(obj);
  //     }
  //     setPaymentType(arr);
  //   }
  // }, [props.PaymentType]);
  // const [tooltipOpen, setTooltipOpen] = useState({
  //   proceed: false,
  //   update: false,
  //   save: false,
  // });
  // const toggle = (name) => {
  //   if (name == "update") {
  //     setTooltipOpen({ ...tooltipOpen, update: !tooltipOpen.update });
  //   } else if (name == "proceed") {
  //     setTooltipOpen({ ...tooltipOpen, proceed: !tooltipOpen.proceed });
  //   } else if (name == "save") {
  //     setTooltipOpen({ ...tooltipOpen, save: !tooltipOpen.save });
  //   }
  // };

  // const [error, setError] = useState({
  //   emailError: "",
  //   phoneNumberError: "",
  //   cnicError: "",
  //   amountError: "",
  //   clientNameError: "",
  //   relationNameError: "",
  //   paymentTypeError: "",
  //   currencyError: "",
  //   remarksError: "",
  //   plotNoError: "",
  //   drawnThroughError: "",
  //   chequeNoError: "",
  //   fileNoError: "",
  // });
  const onChange = (val, name) => {
    setState({ ...state, [name]: val });
  };

  // let arrayForInsertMultipleInstallments = [];

  // const [stateForInsert, setstateForInsert] = useState("");
  // useEffect(() => {
  //   var data1 = location.data?.arrayofMultipleInstallment;

  //   data1?.map((value, i) => {
  //     var a = {
  //       Amount: value.Amount,
  //       InstallmentNo: value.InstallmentNo,
  //       PaymentTypeId: value.PaymenTypeId,
  //       PaymentStageId: value.PaymentStageId,
  //       CurrencyTypeId: state.CurrencyTypeId,
  //       PaymentThroughId: state.PaymentThroughId,
  //       PaymentThroughDescription: state.PaymentThroughDescription,
  //       Dated: state.Dated,
  //       through: state.DrawnThrough,
  //       ConfirmationStatus: 49,
  //       Remarks: state.remarks,
  //     };
  //     arrayForInsertMultipleInstallments.push(a);

  //     setstateForInsert(arrayForInsertMultipleInstallments);

  //     return arrayForInsertMultipleInstallments;
  //   });
  // }, [state]);

  // const onproceedButton = () => {
  //   if (state !== "") {
  //     setError({
  //       ...error,
  //       chequeNoError: validate("required", state.chequeNo),
  //       emailError: validate("email", state.email),
  //       clientNameError: validate("required", state.clientName),
  //       relationNameError: validate("required", state.relationName),
  //       phoneNumberError: validate("phoneNumber", state.contactNo),
  //       cnicError: validate("CNIC", state.cnic),
  //       amountError: validate("required", state.amount),
  //       remarksError: validate("required", state.remarks),
  //       plotNoError: validate("required", state.plotNo),
  //       drawnThroughError: validate("required", state.drawnThrough),
  //       paymentTypeError: validate("required", state.paymentType),
  //       currencyError: validate("required", state.currency),
  //       fileNoError: validate("required", state.fileNo),
  //     });
  //   }
  // };
  // const [setstate, getstate] = useState({
  //   PR_ordernumber: null,
  //   PR_username: null,
  //   PR_userphone: null,
  //   PR_usercnic: null,
  //   PR_useremail: null,
  //   PR_useramount: null,
  //   PR_userpaymentrecipt: null,
  // });

  // const location = useLocation();
  // useEffect(() => {
  //   if (location.state !== null && location.state !== undefined) {
  //     getstate({
  //       ...setstate,
  //       PR_ordernumber: location.state.sale_order_number,
  //       PR_username: location.state.sale_name,
  //       PR_userphone: location.state.sale_phone,
  //       PR_usercnic: location.state.sale_cnic,
  //       PR_useremail: location.state.sale_email,
  //       PR_useramount: location.state.sale_amount,
  //       PR_userpaymentrecipt: location.state.sale_paymentstagesid,
  //       PR_userpaymenttype: location.state.sale_paymenttypeid,
  //       PR_userinstallmentNo: location.state.sale_installmentNo,
  //     });
  //   }
  //   if (location.data !== null && location.data !== undefined) {
  //     getstate({
  //       ...setstate,
  //       PR_ordernumber: location.state.sale_order_number,
  //       PR_username: location.state.sale_name,
  //       PR_userphone: location.state.sale_phone,
  //       PR_usercnic: location.state.sale_cnic,
  //       PR_useremail: location.state.sale_email,
  //       PR_useramount: location.state.sale_amount,
  //       PR_userpaymentrecipt: location.state.sale_paymentstagesid,
  //       PR_userpaymenttype: location.state.sale_paymenttypeid,
  //       PR_userinstallmentNo: location.state.sale_installmentNo,
  //     });
  //   }
  // }, [location]);

  // const [paymentdata, setpaymentdata] = useState({
  //   user_name:
  //     location.state !== null && location.state !== undefined
  //       ? location.state.user_name
  //       : (window.location.href = "/admin/dashboard"),
  // });

  // useEffect(() => {
  //   if (location.state !== null && location.state !== undefined) {
  //     setpaymentdata({
  //       ...paymentdata,
  //       user_name: location.state.user_name,
  //     });
  //   }
  // }, [location.state]);

  // const [body, setPaymentInsert] = useState({
  //   PaymentStageId: location.state.sale_paymentstagesid,
  //   CurrencyTypeId: null,
  //   Amount: "",
  //   PaymentThroughId: null,
  //   PaymentThroughDescription: "ok",
  //   Dated: "",
  //   PaymentTypeId: null,
  //   InstallmentNo: location.state.sale_installmentNo,
  //   through: "-",
  //   Remarks: "",
  //   ConfirmationStatus: 49,
  // });

  // useEffect(() => {
  //   if (
  //     props.Insert_Payment_Recipt !== null &&
  //     props.Insert_Payment_Recipt !== undefined
  //   ) {
  //     swal({
  //       title: "Successful!",
  //       text: "Successfully Insert",
  //       type: "success",
  //       icon: "success",
  //       // buttons: true,
  //       // dangerMode: true,
  //     }).then(function (isConfirm) {
  //       if (isConfirm) {
  //       } else {
  //       }
  //     });
  //   } else {
  //   }
  // }, [props.Insert_Payment_Recipt]);

  // const onSuccess = () => {};
  // const onFailure = () => {};
  // const onFailureInsert = () => {
  //   swal({
  //     title: "Unsuccessful!",
  //     text: "Already Exist",
  //     type: "success",
  //     icon: "warning",
  //     // buttons: true,
  //     // dangerMode: true,
  //   }).then(function (isConfirm) {
  //     if (isConfirm) {
  //     } else {
  //     }
  //   });
  // };
  // const onSuccessUpdate = () => {};
  // const onFailureUpdate = () => {};

  // const SaveData = () => {
  //   let body = {
  //     param: stateForInsert, //["CurrencyTypeId","Dated","PaymentThroughDescription","PaymentThroughId","Remarks","through"]
  //   };
  //   let targetProperty = body.param[0];
  //   if (
  //     targetProperty?.CurrencyTypeId !== "" &&
  //     targetProperty?.Dated !== "" &&
  //     targetProperty?.PaymentThroughDescription !== "" &&
  //     targetProperty?.PaymentThroughId !== "" &&
  //     targetProperty?.Remarks !== "" &&
  //     targetProperty?.through !== ""
  //   ) {
  //   props.Insert_Payment_Recipt_Middleware(body, onSuccess, onFailureInsert);
  //   }else{
  //       swal({
  //           title: "Empty!",
  //           text: "Please fill all fields",
  //           type: "error",
  //           icon: "warning",
  //           // buttons: true,
  //           // dangerMode: true,
  //         })
  //   }
  //   // props.Insert_Payment_Recipt_Middleware(body, onSuccess, onFailureInsert);
  //   // props.Update_Payment_Stages_Middleware(updatebody ,onSuccessUpdate, onFailureUpdate)
  // };

  // const [updatebody, setupdatebody] = useState({
  //   PaymentStageStatus: 53,
  //   PaymentStageId: location.state.sale_paymentstagesid,
  // });

  // useEffect(() => {}, [props.Update_Payment_stages]);

  // useEffect(() => {
  //   props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  // }, [true]);

  // useEffect(() => {}, [props.GetUserJWTLogin]);

  // const OnSuccessJwt = () => {};
  // const OnFailureJwt = () => {};

  // useEffect(() => {
  //   if (props.GetUserJWTLogin === false) {
  //     localStorage.removeItem("auth");
  //     window.location.href = "/auth/login";
  //   }
  // });

  return (
    <>
      <CardHeader className="border-0">
        <Row>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Sale Order No.
            </label>
            <input
              onChange={(e) =>
                onChange(e.target.value, "saleOrderNo")}
              // value={location.state.sale_order_number}
              // disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
        </Row>
      </CardHeader>
      <hr style={{ margin: "0px" }} />
      <CardBody>
        <Row>
          {/* <Col lg="1" md="1" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Select
            </label>
            <Input
              id="exampleFormControlSelect1"
              type="select"
              
              //onChange={(e) => onChangeNoOfRows(e.target.value)}
            >
              <option value="">Mr.</option>
              <option value="10">Ms.</option>
              <option value="25">Mrs.</option>
            </Input>
          </Col> */}
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Name
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Client Name"
              value={state.clientName}
              disabled
              // onBlur={() => CheckFields("clientName")}
              // onChange={(e) =>
              //     onChange(e.target.value, "ClientName")}
            ></input>
       
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Contact No.
            </label>

            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Contact No"
               value={state.contactNo}
              disabled
              // onBlur={() => CheckFields("phoneNumber")}
              // onChange={(e) =>
              //     onChange(e.target.value, "contactNo")}
              // onKeyPress={(event) => {
              //     if (!/[0-9]/.test(event.key)) {
              //         event.preventDefault();
              //     }
              // }}
            ></input>

          </Col>

          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Email
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Email"
              value={state.email}
              disabled
              // onBlur={() => CheckFields("email")}
              // onChange={(e) =>
              //     onChange(e.target.value, "email")}
            ></input>
            {/* {error.emailError !== "" &&
                                    error.emailError !== null && (
                                        <small>
                                            <span style={{ color: "red" }}>
                                                {error.emailError}{" "}
                                                <i className="fas fa-exclamation-circle"></i>
                                            </span>
                                        </small>
                                    )} */}
          </Col>
          <br />
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Cnic
            </label>

            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Cnic"
               value={state.cnic}
              disabled
              // onChange={(e) =>
              //     onChange(e.target.value, "cnic")}
              // onKeyPress={(event) => {
              //     if (!/[0-9]/.test(event.key)) {
              //         event.preventDefault();
              //     }
              // }}
              // onBlur={() => CheckFields("cnic")}
            ></input>
           
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Passport No.
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Passport No"
              disabled
              // onChange={(e) =>
              //     onChange(e.target.value, "passport")}
              value={state.passport}
            ></input>
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label">Currency</label>
            <Input
              type="select"
              // value={state.CurrencyTypeId}
              // onChange={(e) => onChange(e.target.value, "CurrencyTypeId")}
            >
              <option>Select Currency</option>
              {props.PaymentAmount !== null &&
                props.PaymentAmount !== undefined &&
                props.PaymentAmount.map((val) => {
                  return (
                    <option key={val.CurrencyTypeId} value={val.CurrencyTypeId}>
                      {val.CurrencyTypeName}
                    </option>
                  );
                })}
            </Input>
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Payment Through.
            </label>
            <Input
              type="select"
             // value={state.PaymentThroughId}
            //  onChange={(e) => onChange(e.target.value, "PaymentThroughId")}
            >
              <option>Select Payment Option</option>
              {props.PaymentThrough !== null &&
                props.PaymentThrough !== undefined &&
                props.PaymentThrough.map((val) => {
                  return (
                    <option
                      key={val.PaymentThroughId}
                      value={val.PaymentThroughId}
                    >
                      {val.PaymentthroughName}
                    </option>
                  );
                })}
            </Input>
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Amount
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Amount"
              // onChange={(e) => onChange(e.target.value, "Amount")}
              // value={setstate.PR_useramount}
              //  disabled
              // onBlur={() => CheckFields("Amount")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></input>
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Dated
            </label>
            <input
              type="date"
              id="input-username"
              className="form-control"
              placeholder="Only"
              // value={state.Dated}
              // onChange={(e) => onChange(e.target.value, "Dated")}
            ></input>
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Payment Type
                                </label>
                                <Input
            type="select"
            // value={state.PaymentTypeId}
            // onChange={(e) => onChange(e.target.value, "PaymentTypeId")}
          >
            {props.PaymentType !== null &&
              props.PaymentType  !== undefined &&
              props.PaymentType.map((val) => {
                return (
                  <option key={val.PaymentTypeId} value={val.PaymentTypeId}>
                    {val.PaymentTypeName}
                  </option>
                );
              })}
          </Input>

       </Col> 

          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Drawn Through
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              // value={state.DrawnThrough}
              // onBlur={() => CheckFields("through")}
              // onChange={(e) => onChange(e.target.value, "DrawnThrough")}
            ></input>
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Payment Through Description
            </label>

            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              // value={body.paymentType !== "Installment" ? state.paymentType : state.paymentType = ""}
              // value={state.PaymentThroughDescription}
              // onChange={(e) =>
              //   onChange(e.target.value, "PaymentThroughDescription")
              // }
              // onBlur={() => CheckFields("PaymentThroughDescription")}
            ></input>
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Transfer No
            </label>

            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              // value={body.paymentType !== "Installment" ? state.paymentType : state.paymentType = ""}
              // value={state.PaymentThroughDescription}
              // onChange={(e) =>
              //   onChange(e.target.value, "PaymentThroughDescription")
              // }
              // onBlur={() => CheckFields("PaymentThroughDescription")}
            ></input>
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Transfer Money
            </label>

            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              // value={body.paymentType !== "Installment" ? state.paymentType : state.paymentType = ""}
              // value={state.PaymentThroughDescription}
              // onChange={(e) =>
              //   onChange(e.target.value, "PaymentThroughDescription")
              // }
              // onBlur={() => CheckFields("PaymentThroughDescription")}
            ></input>
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Percentage
            </label>

            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              // value={body.paymentType !== "Installment" ? state.paymentType : state.paymentType = ""}
              // value={state.PaymentThroughDescription}
              // onChange={(e) =>
              //   onChange(e.target.value, "PaymentThroughDescription")
              // }
              // onBlur={() => CheckFields("PaymentThroughDescription")}
            ></input>
          </Col>
          {/* <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                   Installment No
                                </label>
                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder=""
                                //    value={props.stateData.InstallmentNo}
                                   // onBlur={() => CheckFields("through")}
                                    onChange={(e) =>
                                        onChange(e.target.value, "InstallmentNo")}
                                ></input>
                               
                            </Col> */}
          <Col lg="12" md="12" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Remarks:
            </label>
            <Input
              type="text"
              className="form-control"
              //    value={props.stateData.Remarks}
              // onBlur={() => CheckFields("remarks")}
              // onChange={(e) => onChange(e.target.value, "remarks")}
            ></Input>

            <br />
          </Col>
        </Row>

        {/* <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Currency
                                </label>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    isSearchable={false}
                                    options={amount}
                                    value={body.CurrencyTypeId}
                                    id="exampleFormControlSelect1"
                                    type="select"
                                    onChange={(e) =>
                                        onChange(e.value, "CurrencyTypeId")
                                    }
                                />
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Payment Through.
                                </label>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    isSearchable={false}
                                    options={paymentthrough}
                                    id="exampleFormControlSelect1"
                                    type="select"
                                    value={body.PaymentTypeId}
                                     onChange={(e) =>
                                    onChange(e.value, "PaymentTypeId")
                                 } 
                                />
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Amount
                                </label>
                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder="Amount"
                                    onChange={(e) =>
                                        onChange(e.target.value, "Amount")}
                                    value={setstate.PR_useramount}
                                    // disabled
                                    onBlur={() => CheckFields("Amount")}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                ></input>
                                {error.amountError !== "" &&
                                    error.amountError !== null && (
                                        <small>
                                            <span style={{ color: "red" }}>
                                                {error.amountError}{" "}
                                                <i className="fas fa-exclamation-circle"></i>
                                            </span>
                                        </small>
                                    )}
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Dated
                                </label>
                                <input
                                    type="date"
                                    id="input-username"
                                    className="form-control"
                                    placeholder="Only"
                                    value={body.Dated}
                                    onChange={(e) =>
                                        onChange(e.target.value, "Dated")}
                                ></input>
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Payment Type
                                </label>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    isSearchable={false}
                                    options={paymentType}
                                    id="exampleFormControlSelect1"
                                        value={body.PaymentThroughId}
                                    type="select"
                                    onChange={(e) =>
                                        onChange(e.value, "PaymentThroughId")
                                    }
                                />
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Payment Type Description
                                </label>

                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder=""

                                    // value={body.paymentType !== "Installment" ? state.paymentType : state.paymentType = ""}
                                    value={body.PaymentThroughDescription}
                                    onChange={(e) =>
                                        onChange(e.target.value, "PaymentThroughDescription")}
                                    onBlur={() => CheckFields("PaymentThroughDescription")}

                                ></input>
                                {error.paymentTypeError !== "" &&
                                    error.paymentTypeError !== null && (
                                        <small>
                                            <span style={{ color: "red" }}>
                                                {error.paymentTypeError}{" "}
                                                <i className="fas fa-exclamation-circle"></i>
                                            </span>
                                        </small>
                                    )}


                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Drawn Through
                                </label>
                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder=""
                                    value={body.through}
                                    onBlur={() => CheckFields("through")}
                                    onChange={(e) =>
                                        onChange(e.target.value, "through")}
                                ></input>
                                {error.drawnThroughError !== "" &&
                                    error.drawnThroughError !== null && (
                                        <small>
                                            <span style={{ color: "red" }}>
                                                {error.drawnThroughError}{" "}
                                                <i className="fas fa-exclamation-circle"></i>
                                            </span>
                                        </small>
                                    )}
                            </Col>
                            <Col lg="12" md="12" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Remarks:
                                </label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    value={body.Remarks}
                                    // onBlur={() => CheckFields("remarks")}
                                    onChange={(e) =>onChange(e.target.value, "Remarks")}
                                ></Input>
                                {error.remarksError !== "" &&
                                    error.remarksError !== null && (
                                        <small>
                                            <span style={{ color: "red" }}>
                                                {error.remarksError}{" "}
                                                <i className="fas fa-exclamation-circle"></i>
                                            </span>
                                        </small>
                                    )}
                                <br />
                            </Col> */}
        {/* </Row> */}
        <Row>
          <Col>
            <Button
              className="btn-icon btn-2"
              color="danger"
              type="button"
              size="sm"
              id="save"
              // onClick={SaveData}
            >
              <span className="btn-inner--icon">
                <i className="fas fa-save"></i>
              </span>
            </Button>
            <Tooltip
              placement="bottom"
              // isOpen={tooltipOpen.save}
              autohide={false}
              target="save"
              // toggle={() => toggle("save")}
            >
              Save
            </Tooltip>
            {/* <Button
            className="btn-icon btn-2"
            color="danger"
            type="button"
            size="sm"
            id="proceed"
            onClick={() => onproceedButton()}
          >
            <span className="btn-inner--icon">
              <i className="fas fa-arrow-right" />
            </span>
          </Button>
          <Tooltip
            placement="bottom"
            isOpen={tooltipOpen.proceed}
            autohide={false}
            target="proceed"
            toggle={() => toggle("proceed")}
          >
            Proceed
          </Tooltip> */}
          </Col>
        </Row>
      </CardBody>
    </>
  );
};
// export default FormOfPaymentReceipt
const mapStateToProps = (state) => ({
  // Insert_Payment_Recipt:state.paymentreceipt.Insert_Payment_Recipt,
  // Update_Payment_stages:state.paymentreceipt.Update_Payment_Stages,
  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    // Insert_Payment_Recipt_Middleware: (body,OnSuccess, OnFailure) =>
    // dispatch(Insert_Payment_Recipt_Middleware(body,OnSuccess, OnFailure)),
    // Update_Payment_Stages_Middleware: (OnSuccess, OnFailure) =>
    // dispatch(Update_Payment_Stages_Middleware(OnSuccess, OnFailure)),
    JwtDashboard: (OnSuccess, OnFailure) =>
      dispatch(JwtDashboard(OnSuccess, OnFailure)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToPrpos
)(FormOfPaymentReceipt);
