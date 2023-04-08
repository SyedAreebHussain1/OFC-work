import React from "react";
import {
  CardBody,
  Button,
  CardHeader,
  Row,
  Col,
  Input,
  Table,
} from "reactstrap";
import { URLPAYMENTRECEIPT, URL } from "config/api/URL";
import { useEffect, useState } from "react";
import axios from "axios";
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
import jsPDF from "jspdf";
import RequestWallet from "../components/RequestWallet";
import WithdrawWallet from "../components/WithdrawWallet";
import moment from "moment";

const FormOfPaymentReceipt = (props) => {
  const location = useLocation();
  // var today = new Date();
  // var day = today.getDate() - 20;
  // var mon = new String(today.getMonth() + 1);
  // var yr = today.getFullYear();
  // var date = `${yr}-${mon}-${day < 10 ? `0${day}` : day}`;
  var startdate = moment();
  startdate = startdate.subtract(20, "days");
  startdate = startdate.format("YYYY-MM-DD");
  // const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [totalbal, setTotalbal] = useState("");
  useEffect(() => {
    props.showAmountMiddleware(onsuccess, onfailure);
    props.showPaymentThroughMiddleware(onsuccess, onfailure);
    props.showPaymentTypeMiddleware(onsuccess, onfailure);
    props.bankMiddleware(onsuccess, onfailure);
  }, [true]);
  let history = useHistory();
  const Back = () => {
    // history.push({
    //   pathname: "/admin/PaymentStages",
    //   state: location.dataState,
    // });
    history.goBack();
  };
  const onsuccess = () => {};
  const onfailure = () => {};
  const [state, setStatee] = useState({
    user_id: "",
    clientName: "",
    relationName: "",
    contactNo: "",
    email: "",
    cnic: "",
    passport: "",
    paymentType: "",
    Amount: "",
    PaymentThroughDescription: "",
    plotNo: "",
    DrawnThrough: "",
    remarks: "",
    currencyDescription: "",
    chequeNo: "",
    fileNo: "",
    currency: "",
    currencyName: "",
    CurrencyTypeId: "",
    PaymentThroughId: "",
    PaymentthroughName: "",
    Dated: "",
    PaymentTypeId: "",
  });
  const handlePrice = (e) => {
    if (props.PaymentAmount !== null && props.PaymentAmount !== undefined) {
      let arr = [];
      for (let i = 0; i < props.PaymentAmount.length; i++) {
        let obj = {
          value: props.PaymentAmount[i].CurrencyTypeId,
          label: props.PaymentAmount[i].CurrencyTypeName,
        };
        arr.push(obj);
      }
      for (let i = 0; i < arr.length; i++) {
        if (e == arr[i]?.value) {
          setStatee({
            ...state,
            CurrencyTypeId: e,
            currencyName: arr[i].label,
          });
        }
      }
    }
  };
  // useEffect(() => {
  //   if (location.state !== null && location.state !== undefined) {
  //     setStatee({
  //       ...state,
  //       clientName: location.state.sale_name,
  //       cnic: location.state.sale_cnic,

  //       Amount: location.state.sale_amount,
  //     });
  //   }
  // }, []);
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

  // useEffect(() => {
  //   if (amount !== null && amount !== undefined) {
  //     for (let i = 0; i < amount.length; i++) {
  //       if (state.CurrencyTypeId == amount[i]?.value) {
  //         setStatee({ ...state, currencyName: amount[i].label });
  //       }
  //     }
  //   }
  // }, [state.CurrencyTypeId]);

  const [paymentthrough, setpaymentthrough] = useState([null]);
  useEffect(() => {
    if (props.PaymentThrough !== null && props.PaymentThrough !== undefined) {
      let arr = [];
      for (let i = 0; i < props.PaymentThrough.length; i++) {
        let obj = {
          value: props.PaymentThrough[i].PaymentThroughId,
          label: props.PaymentThrough[i].PaymentthroughName,
        };
        arr.push(obj);
      }
      setpaymentthrough(arr);
    }
  }, [props.PaymentThrough]);

  // const [bank, setbank] = useState([null]);
  // useEffect(() => {
  //   if (props.banks !== null && props.banks !== undefined) {
  //     let arr = [];
  //     for (let i = 0; i < props.banks.length; i++) {
  //       let obj = {
  //         value: props.banks[i].PaymentThroughId,
  //         label: props.banks[i].PaymentthroughName,
  //       };
  //       arr.push(obj);
  //     }
  //     setbank(arr);
  //   }
  // }, [props.banks]);

  useEffect(() => {
    if (paymentthrough !== null && paymentthrough !== undefined) {
      for (let i = 0; i < paymentthrough.length; i++) {
        if (state.PaymentThroughId == paymentthrough[i]?.value) {
          setStatee({ ...state, PaymentthroughName: paymentthrough[i].label });
        }
      }
    }
  }, [state.PaymentThroughId]);
  useEffect(() => {
    if (state.PaymentthroughName == "Cash") {
      setError({
        ...error,

        DrawnThroughError: "",
      });
    }
  }, [state.PaymentthroughName]);

  //auto Complete of PaymentType
  const [paymentType, setPaymentType] = useState([null]);
  useEffect(() => {
    if (props.PaymentType !== null && props.PaymentType !== undefined) {
      let arr = [];
      for (let i = 0; i < props.PaymentType.length; i++) {
        let obj = {
          value: props.PaymentType[i].PaymentTypeId,
          label: props.PaymentType[i].PaymentTypeName,
        };
        arr.push(obj);
      }
      setPaymentType(arr);
    }
  }, [props.PaymentType]);
  const [tooltipOpen, setTooltipOpen] = useState({
    proceed: false,
    update: false,
    save: false,
  });
  const toggle = (name) => {
    if (name == "update") {
      setTooltipOpen({ ...tooltipOpen, update: !tooltipOpen.update });
    } else if (name == "proceed") {
      setTooltipOpen({ ...tooltipOpen, proceed: !tooltipOpen.proceed });
    } else if (name == "save") {
      setTooltipOpen({ ...tooltipOpen, save: !tooltipOpen.save });
    }
  };

  const [error, setError] = useState({
    CurrencyTypeIdError: null,
    PaymentThroughIdError: null,
    DatedError: null,
    DrawnThroughError: null,
    PaymentThroughDescriptionError: null,
    remarksError: null,
  });
  const CheckFields = (name) => {
    if (name === "CurrencyTypeId") {
      setError({
        ...error,
        CurrencyTypeIdError: validate("required", state.CurrencyTypeId),
      });
    } else if (name === "PaymentThroughId") {
      setError({
        ...error,
        PaymentThroughIdError: validate("required", state.PaymentThroughId),
      });
    } else if (name === "Dated") {
      setError({
        ...error,
        DatedError: validate("required", state.Dated),
      });
    } else if (name === "DrawnThrough") {
      setError({
        ...error,
        DrawnThroughError: validate("required", state.DrawnThrough),
      });
    } else if (name === "PaymentThroughDescription") {
      setError({
        ...error,
        PaymentThroughDescriptionError: validate(
          "required",
          state.PaymentThroughDescription
        ),
      });
    } else if (name === "remarks") {
      setError({
        ...error,
        remarksError: validate("required", state.remarks),
      });
    }
  };
  const onChange = (val, name, namevalue) => {
    setStatee({ ...state, [name]: val });
    setStatee({ ...state, [name]: val });
  };
  // const onChangePaymentThrough = (val, name) => {
  //   setStatee({ ...state, [name]: val });
  // };

  let arrayForInsertMultipleInstallments = [];

  const [stateForInsert, setstateForInsert] = useState("");
  useEffect(() => {
    var data1 = location.data?.arrayofMultipleInstallment;
    data1?.map((value, i) => {
      var a = {
        Amount: value.Amount,
        InstallmentNo: value.InstallmentNo,
        PaymentTypeId: parseInt(value.PaymenTypeId),
        PaymentStageId: parseInt(value.PaymentStageId),
        CurrencyTypeId: parseInt(state.CurrencyTypeId),
        PaymentThroughId: parseInt(state.PaymentThroughId),
        PaymentThroughDescription: state.PaymentThroughDescription,
        Dated: state.Dated,
        through: state.DrawnThrough,
        ConfirmationStatus: 49,
        Remarks: state.remarks,
      };
      arrayForInsertMultipleInstallments.push(a);

      setstateForInsert(arrayForInsertMultipleInstallments);

      return arrayForInsertMultipleInstallments;
    });
  }, [state]);

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
  const [setstate, getstate] = useState({
    PR_ordernumber: null,
    PR_username: null,
    PR_userphone: null,
    PR_usercnic: null,
    PR_useremail: null,
    PR_useramount: null,
    PR_userpaymentrecipt: null,
  });

  useEffect(() => {
    if (location.state !== null && location.state !== undefined) {
      setStatee({
        ...state,
        user_id: location.state.user_id,
        plotNo: location.state.plot_no,
        clientName: location.state.sale_email,
        cnic: location.state.sale_cnic,
        Amount: location.state.sale_amount,
        installmentno: location.state.sale_installmentNo,
        sale_paymentstagesid: location.state.sale_paymentstagesid,
        PaymentTypeId: location.state.sale_paymenttypeid,
      });
      getstate({
        ...setstate,

        PR_ordernumber: location.state.sale_order_number,
        PR_username: location.state.sale_name,
        PR_userphone: location.state.sale_phone,
        PR_usercnic: location.state.sale_cnic,
        PR_useremail: location.state.sale_email,
        PR_useramount: location.state.sale_amount,
        PR_userpaymentrecipt: location.state.sale_paymentstagesid,
        PR_userpaymenttype: location.state.sale_paymenttypeid,
        PR_userinstallmentNo: location.state.sale_installmentNo,
      });
    }
    if (location.data !== null && location.data !== undefined) {
      getstate({
        ...setstate,
        PR_ordernumber: location.state.sale_order_number,
        PR_username: location.state.sale_name,
        PR_userphone: location.state.sale_phone,
        PR_usercnic: location.state.sale_cnic,
        PR_useremail: location.state.sale_email,
        PR_useramount: location.state.sale_amount,
        PR_userpaymentrecipt: location.state.sale_paymentstagesid,
        PR_userpaymenttype: location.state.sale_paymenttypeid,
        PR_userinstallmentNo: location.state.sale_installmentNo,
      });
    }
  }, [location]);

  const [paymentdata, setpaymentdata] = useState({
    user_name:
      location.state !== null && location.state !== undefined
        ? location.state.user_name
        : (window.location.href = "/admin/dashboard"),
  });

  useEffect(() => {
    if (location.state !== null && location.state !== undefined) {
      setpaymentdata({
        ...paymentdata,
        user_name: location.state.user_name,
      });
    }
  }, [location.state]);

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

  const onSuccess = () => {
    history.goBack();
    // history.push({
    //   pathname: "/admin/PaymentStages",
    //   state: location.dataState,
    // });
  };
  const onFailure = () => {};
  const onFailureInsert = () => {
    swal({
      title: "Unsuccessful!",
      text: "Already Exist",
      type: "success",
      icon: "warning",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
      } else {
      }
    });
  };
  const onSuccessUpdate = () => {};
  const onFailureUpdate = () => {};

  const SaveData = () => {
    let body = {
      param: stateForInsert, //["CurrencyTypeId","Dated","PaymentThroughDescription","PaymentThroughId","Remarks","through"]
    };

    let targetProperty = body.param[0];
    if (state.PaymentthroughName == "Cash") {
      setError({
        ...error,
        CurrencyTypeIdError: validate("required", state.CurrencyTypeId),
        PaymentThroughIdError: validate("required", state.PaymentThroughId),
        DatedError: validate("required", state.Dated),
        DrawnThroughError: "",
        PaymentThroughDescriptionError: validate(
          "required",
          state.PaymentThroughDescription
        ),
        remarksError: validate("required", state.remarks),
      });
    } else {
      setError({
        ...error,
        CurrencyTypeIdError: validate("required", state.CurrencyTypeId),
        PaymentThroughIdError: validate("required", state.PaymentThroughId),
        DatedError: validate("required", state.Dated),
        DrawnThroughError: validate("required", state.DrawnThrough),
        PaymentThroughDescriptionError: validate(
          "required",
          state.PaymentThroughDescription
        ),
        remarksError: validate("required", state.remarks),
      });
    }
    if (state.PaymentthroughName == "Cash") {
      if (
        targetProperty?.CurrencyTypeId !== "" &&
        targetProperty?.CurrencyTypeId !== null &&
        targetProperty?.CurrencyTypeId !== undefined &&
        targetProperty?.Dated !== "" &&
        targetProperty?.PaymentThroughDescription !== "" &&
        targetProperty?.PaymentThroughId !== "" &&
        targetProperty?.PaymentThroughId !== null &&
        targetProperty?.PaymentThroughId !== undefined &&
        targetProperty?.Remarks !== ""
        //  &&
        // targetProperty?.through !== ""
      ) {
        props.Insert_Payment_Recipt_Middleware(
          body,
          onSuccess,
          onFailureInsert
        );
      } else {
        swal({
          title: "Empty!",
          text: "Please fill all fields",
          type: "error",
          icon: "warning",
          // buttons: true,
          // dangerMode: true,
        });
      }
    } else {
      if (
        targetProperty?.CurrencyTypeId !== "" &&
        targetProperty?.CurrencyTypeId !== null &&
        targetProperty?.CurrencyTypeId !== undefined &&
        targetProperty?.Dated !== "" &&
        targetProperty?.PaymentThroughDescription !== "" &&
        targetProperty?.PaymentThroughId !== "" &&
        targetProperty?.PaymentThroughId !== null &&
        targetProperty?.PaymentThroughId !== undefined &&
        targetProperty?.Remarks !== "" &&
        targetProperty?.through !== ""
      ) {
        props.Insert_Payment_Recipt_Middleware(
          body,
          onSuccess,
          onFailureInsert
        );
      } else {
        swal({
          title: "Empty!",
          text: "Please fill all fields",
          type: "error",
          icon: "warning",
          // buttons: true,
          // dangerMode: true,
        });
      }
    }

    // props.Insert_Payment_Recipt_Middleware(body, onSuccess, onFailureInsert);
    // props.Update_Payment_Stages_Middleware(updatebody ,onSuccessUpdate, onFailureUpdate)
  };

  const [updatebody, setupdatebody] = useState({
    PaymentStageStatus: 53,
    PaymentStageId: location.state.sale_paymentstagesid,
  });

  useEffect(() => {}, [props.Update_Payment_stages]);

  useEffect(() => {
    props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  }, [true]);

  useEffect(() => {}, [props.GetUserJWTLogin]);

  const OnSuccessJwt = () => {};
  const OnFailureJwt = () => {};

  useEffect(() => {
    if (props.GetUserJWTLogin === false) {
      localStorage.removeItem("auth");
      window.location.href = "/auth/login";
    }
  });
  // const printDocument = () => {
  //   let date = new Date().toISOString().split("T")[0];
  //   if (
  //     body.cnic !== "" &&
  //     body.s1 !== "" &&
  //     body.s2 !== "" &&
  //     body.Validfrom !== "" &&
  //     body.Validto !== "" &&
  //     body.Plotno !== ""
  //   ) {
  //     const doc = new jsPDF();
  //     doc.addImage(PalmDreamLogo, "png", 15, 0, 30, 30);
  //     doc.text("SALE QUTATION", 88, 40);
  //     doc.setFontSize(10);
  //     doc.text("Date: " + date, 168, 18);
  //     doc.autoTable({

  //       theme: "grid",
  //       head: [["Details", ""]],
  //       body: [
  //         ["Sale Order No.", location.state?.sale_order_number],
  //         ["Name", location.state?.sale_name],
  //         ["Contact No.", location.state?.sale_phone],
  //         ["Email", location.state.sale_email],
  //         ["CNIC No.", location.state.sale_cnic],
  //         ["Passport No.", body.s1],
  //         ["Currency", body.s1],
  //         ["Payment Through", body.s1],
  //         ["Amount", body.s1],
  //         ["Dated", body.s1],
  //         ["Drawn Through", body.s1],
  //         ["Payment Through Description", body.s1],
  //         ["Remarks", body.s1],
  //       ],
  //       margin: { top: 55 },
  //       styles: { lineColor: 10, cellWidth: 91 },
  //     });
  //     doc.setFontSize(10);
  //     doc.text("Singnature:________________", 145, 130);

  //     doc.save("receipt.pdf");
  //   }
  // };

  const showChange = () => {
    setShowModal(!showModal);
  };
  const showChange1 = () => {
    setShowModal1(!showModal1);
  };
  useEffect(() => {
    let token = localStorage.getItem("auth");
    let path = "GetuserWallet";

    axios
      .get(`${URL}${path}?user_id=${location.state.user_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setTotalbal(res.data?.response?.Amount);
        }
      })
      .catch((error) => console.log(error));
  }, [location.state]);

 

  return (
    <>
      <RequestWallet
        userdata={state}
        toggle={showChange}
        modal={showModal}
        wallet_Middleware={props.wallet_Middleware}
        file_Middleware={props.file_Middleware}
      />
      {showModal1 && (
        <WithdrawWallet
          userdata={state}
          toggle={showChange1}
          modal={showModal1}
          paymentType={location.state?.type}
          wallet_request_Middleware={props.wallet_request_Middleware}
          file_Middleware={props.file_Middleware}
        />
      )}
      <CardHeader className="border-0">
        {/* <Row>
        <Col lg="8" md="8" sm="6" xs="12">
        </Col>
          <Col lg="2" md="2" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
             Payment Bank.
            </label>
            <input
              // value={location.state.sale_order_number}
              disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
          <Col lg="2" md="2" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Amount in wallet.
            </label>
            <input
              // value={location.state.sale_order_number}
              disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
        </Row> */}
        <Row>
          <Col lg="3" md="3" sm="3" xs="3">
            <label className="form-control-label" for="input-username">
              Sale Order No.
            </label>
            <input
              value={location.state.sale_order_number}
              disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
          <Col lg="3" md="3" sm="3" xs="3">
            <label className="form-control-label" for="input-username">
              Plot No.
            </label>
            <input
              value={location.state?.plot_no}
              disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
          <Col lg="3" md="3" sm="3" xs="3">
            <label className="form-control-label" for="input-username">
              Block
            </label>
            <input
              value={location.state?.Sector_Name}
              disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
          <Col lg="3" md="3" sm="3" xs="3">
            <label className="form-control-label" for="input-username">
              Plot Size
            </label>
            <input
              value={location.state?.CategoryName}
              disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
          <Col lg="8" md="8" sm="8" xs="8">
            <label className="form-control-label" for="input-username">
              Balance Information.
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
                  <th scope="col">Wallet Balance</th>

                  <th scope="col">Payment Type</th>

                  <th scope="col">Payable Amount</th>
                </tr>
              </thead>

              <tbody style={{ fontSize: "12px" }}>
                <tr>
                  <td>{totalbal?.toLocaleString("en-US")}</td>

                  <td>{location.state?.type}</td>

                  <td>{setstate.PR_useramount?.toLocaleString("en-US")}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </CardHeader>
      <hr style={{ margin: "0px" }} />
      <CardBody>
        <Row>
          <Col lg="1" md="1" sm="6" xs="12">
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
          </Col>
          <Col lg="3" md="3" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Name
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Client Name"
              value={location.state.sale_name}
              disabled
              // onBlur={() => CheckFields("clientName")}
              // onChange={(e) =>
              //     onChange(e.target.value, "ClientName")}
            ></input>
            {/* {error.clientNameError !== "" &&
                                    error.clientNameError !== null && (
                                        <small>
                                            <span style={{ color: "red" }}>
                                                {error.clientNameError}{" "}
                                                <i className="fas fa-exclamation-circle"></i>
                                            </span>
                                        </small>
                                    )} */}
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
              value={location.state.sale_phone}
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

          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Email
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Email"
              value={location.state.sale_email}
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
              value={location.state.sale_cnic}
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
            {/* {error.cnicError !== "" &&
                                    error.cnicError !== null && (
                                        <small>
                                            <span style={{ color: "red" }}>
                                                {error.cnicError}{" "}
                                                <i className="fas fa-exclamation-circle"></i>
                                            </span>
                                        </small>
                                    )} */}
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
              // value={state.passport}
            ></input>
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label">
              Currency <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              type="select"
              value={state.CurrencyTypeId}
              onChange={(e) => handlePrice(e.target.value)}
              onBlur={() => CheckFields("CurrencyTypeId")}
            >
              <option value="" key="">
                Select Currency
              </option>
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
            {error.CurrencyTypeIdError !== "" &&
              error.CurrencyTypeIdError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {error.CurrencyTypeIdError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Mode of Payment <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              type="select"
              value={state.PaymentThroughId}
              onChange={(e) => {
                onChange(e.target.value, "PaymentThroughId");
              }}
              onBlur={() => CheckFields("PaymentThroughId")}
            >
              <option value="" key="">
                Select Payment Option
              </option>
              {props.PaymentThrough !== null &&
                props.PaymentThrough !== undefined &&
                props.PaymentThrough.map((val) => {
                  // PaymentthroughName
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
            {error.PaymentThroughIdError !== "" &&
              error.PaymentThroughIdError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {error.PaymentThroughIdError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
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
              onChange={(e) => onChange(e.target.value, "Amount")}
              value={setstate.PR_useramount}
              disabled
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
              Transaction Date <span style={{ color: "red" }}>*</span>
            </label>
            <input
              min={startdate}
              type="date"
              id="input-username"
              className="form-control"
              placeholder="Only"
              value={state.Dated}
              onChange={(e) => onChange(e.target.value, "Dated")}
              onBlur={() => CheckFields("Dated")}
            ></input>
            {error.DatedError !== "" && error.DatedError !== null && (
              <small>
                <span style={{ color: "red" }}>
                  {error.DatedError}{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}
          </Col>

          {/* <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Payment Type
                                </label>
                                <Input
            type="select"
            value={state.PaymentTypeId}
            onChange={(e) => onChange(e.target.value, "PaymentTypeId")}
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
          </Input> */}

          {/* </Col>  */}

          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Drawn Through <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              type="select"
              value={state.DrawnThrough}
              onChange={(e) => {
                onChange(e.target.value, "DrawnThrough");
              }}
              onBlur={() => CheckFields("DrawnThrough")}
              disabled={state.PaymentthroughName == "Cash" ? true : false}
            >
              <option value="" key="">
                Select Bank
              </option>
              {props.banks !== null &&
                props.banks !== undefined &&
                props.banks.map((val) => {
                  // PaymentthroughName
                  return (
                    <option key={val.name} value={val.name}>
                      {val.name}
                    </option>
                  );
                })}
            </Input>
            {/* <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              value={state.DrawnThrough}
              onBlur={() => CheckFields("DrawnThrough")}
              onChange={(e) => onChange(e.target.value, "DrawnThrough")}
            ></input> */}
            {error.DrawnThroughError !== "" &&
              error.DrawnThroughError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {error.DrawnThroughError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Payment Through Description{" "}
              <span style={{ color: "red" }}>*</span>
            </label>

            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              // value={body.paymentType !== "Installment" ? state.paymentType : state.paymentType = ""}
              value={state.PaymentThroughDescription}
              onChange={(e) =>
                onChange(e.target.value, "PaymentThroughDescription")
              }
              onBlur={() => CheckFields("PaymentThroughDescription")}
            ></input>
            {error.PaymentThroughDescriptionError !== "" &&
              error.PaymentThroughDescriptionError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {error.PaymentThroughDescriptionError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
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
              Remarks <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              type="text"
              className="form-control"
              //    value={props.stateData.Remarks}
              onBlur={() => CheckFields("remarks")}
              onChange={(e) => onChange(e.target.value, "remarks")}
            ></Input>
            {error.remarksError !== "" && error.remarksError !== null && (
              <small>
                <span style={{ color: "red" }}>
                  {error.remarksError}{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}

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
              color="success"
              type="button"
              id="proceed"
              onClick={Back}
            >
              <span className="btn-inner--icon">
                <i className="fas fa-arrow-left" />
                Back
              </span>
            </Button>
            <Button
              className="btn-icon btn-2"
              color="danger"
              type="button"
              id="proceed"
              onClick={showChange1}
            >
              <span className="btn-inner--icon">Withdraw request</span>
            </Button>
            <Button
              className="btn-icon btn-2"
              color="info"
              type="button"
              id="proceed"
              onClick={() => {
                if (
                  state?.PaymentThroughId.trim().length > 0 &&
                  state?.CurrencyTypeId?.trim().length > 0 &&
                  state?.Dated.trim().length > 0
                ) {
                  showChange();
                } else {
                  setError({
                    ...error,
                    CurrencyTypeIdError: validate(
                      "required",
                      state.CurrencyTypeId
                    ),
                    PaymentThroughIdError: validate(
                      "required",
                      state.PaymentThroughId
                    ),
                    DatedError: validate("required", state.Dated),
                    // DrawnThroughError: validate("required", state.DrawnThrough),
                    // PaymentThroughDescriptionError: validate(
                    //   "required",
                    //   state.PaymentThroughDescription
                    // ),
                    remarksError: validate("required", state.remarks),
                  });
                  swal("Sorry!", "All * fields are required.", "error");
                }
                // proceed();
              }}
              // onClick={showChange}
            >
              <span className="btn-inner--icon">Add to wallet</span>
            </Button>

            <Button
              className="btn-icon btn-2"
              color="danger"
              type="button"
              id="save"
              onClick={SaveData}
            >
              <span className="btn-inner--icon">
                Save <i className="fas fa-save"></i>
              </span>
            </Button>
            <Tooltip
              placement="bottom"
              isOpen={tooltipOpen.save}
              autohide={false}
              target="save"
              toggle={() => toggle("save")}
            >
              Save
            </Tooltip>
            {/* <Button
            className="btn-icon btn-2"
            color="success"
            type="button"
           
            id="proceed"
            //  onClick={Back}
          >
            <span className="btn-inner--icon">
            
              Add in wallet
              
            </span>
          </Button>
          <Button
            className="btn-icon btn-2"
            color="success"
            type="button"
           
            id="proceed"
            //  onClick={Back}
          >
            <span className="btn-inner--icon">
            
             Request
              
            </span>
          </Button> */}
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
