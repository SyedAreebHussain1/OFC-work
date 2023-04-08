import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  Card,
  CardHeader,
  Table,
  Container,
  CardBody,
  Row,
  Col,
  Button,
  Badge,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import Headers from "components/Headers/Header1";
import { useLocation } from "react-router";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";
import Letter from "./Letter";
import AlloteeDetail from "./AlloteeDetail";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";
import { controllers } from "chart.js";
import PaymentSchedule from "./PaymentSchedule";
import moment from "moment";
import InfoModal from "./InfoModal";
import { GetRecieptDetailsByIdMiddleware } from "../middleware";

const PaymentStages = (props) => {
  const [visiblity, setVisiblity] = useState("visible");
  const [visiblitySaleOrder, setVisiblitySaleOrder] = useState("hidden");
  const [noOfRows, setnoOfRows] = useState(10);

  const [posts, setPosts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  let history = useHistory();
  const location = useLocation();
  const [saleOrderCustomer, setSaleOrderCustomer] = useState();
  const onSuccessSaleOrder = () => {};
  const onFailureSaleOrder = () => {};
  useEffect(() => {
    setSaleOrderCustomer(location.state);
    setbody({ ...body, SaleOrderNo: location?.state?.SaleOrderNo });
    props.GetSaleOrderByIdMiddleware(
      location.state?.SaleOrderId,
      onSuccessSaleOrder,
      onFailureSaleOrder
    );
  }, [location]);
  const [body, setbody] = useState({
    //SaleOrderNo
    // SaleOrderNo: location.state.orderno,
    SaleOrderNo: "",
    // location?.state?.SaleOrderNo,
  });
  // const [state, setstate] = useState({
  //   saleid: null,
  //   saleorderid: null,
  //   nameuser: null,
  //   plotuser: null,
  // });

  // useEffect(() => {
  //   if (location.state !== null && location.state !== undefined) {
  //     setstate({
  //       ...state,
  //       saleid: location.state.orderno,
  //       saleorderid: location.state.saleid,
  //       nameuser: location.state.agentname,
  //       plotuser: location.state.agentplotname,
  //     });
  //   }
  // }, [location]);

  // useEffect(() => {
  //   if (location.state == null || location.state == undefined) {
  //     setVisiblity("hidden");
  //     setVisiblitySaleOrder("visible");
  //   }

  //   // if (
  //   //   props.GetSaleMiddleware !== null &&
  //   //   props.GetSaleMiddleware !== undefined
  //   // ) {
  //   if (body) props.GetSaleMiddleware(body, OnSuccess, OnFailure);
  //   // }
  // }, [true]);

  // const [data, setdata] = useState({
  //   user_name:
  //     props.Get_SalesOrder !== null && props.Get_SalesOrder !== undefined
  //       ? props.Get_SalesOrder.user_name
  //       : null,
  //   Plot_no:
  //     props.Get_SalesOrder !== null && props.Get_SalesOrder !== undefined
  //       ? props.Get_SalesOrder.Plot_no
  //       : null,
  //   CategoryName:
  //     props.Get_SalesOrder !== null && props.Get_SalesOrder !== undefined
  //       ? props.Get_SalesOrder.CategoryName
  //       : null,
  //   Discount:
  //     props.Get_SalesOrder !== null && props.Get_SalesOrder !== undefined
  //       ? props.Get_SalesOrder.Discount
  //       : null,
  //   SoldAmounmt:
  //     props.Get_SalesOrder !== null && props.Get_SalesOrder !== undefined
  //       ? props.Get_SalesOrder.SoldAmounmt
  //       : null,
  //   ExtraChargesPercentage:
  //     props.Get_SalesOrder !== null && props.Get_SalesOrder !== undefined
  //       ? props.Get_SalesOrder.ExtraChargesPercentage
  //       : null,
  //   NetAmount:
  //     props.Get_SalesOrder !== null && props.Get_SalesOrder !== undefined
  //       ? props.Get_SalesOrder.NetAmount
  //       : null,
  //   SaleOrderId:
  //     props.Get_SalesOrder !== null && props.Get_SalesOrder !== undefined
  //       ? props.Get_SalesOrder.SaleOrderId
  //       : null,
  //   SaleOrderNo:
  //     props.Get_SalesOrder !== null && props.Get_SalesOrder !== undefined
  //       ? props.Get_SalesOrder.SaleOrderNo
  //       : null,
  // });
  // useEffect(() => {
  //   if (props.Get_SalesOrder !== null && props.Get_SalesOrder !== undefined) {
  //     setdata({
  //       ...data,
  //       user_name: props.Get_SalesOrder[0].user_name,
  //       Plot_no: props.Get_SalesOrder[0].Plot_no,
  //       CategoryName: props.Get_SalesOrder[0].CategoryName,
  //       Discount: props.Get_SalesOrder[0].Discount,
  //       SoldAmounmt: props.Get_SalesOrder[0].SoldAmounmt,
  //       ExtraChargesPercentage: props.Get_SalesOrder[0].ExtraChargesPercentage,
  //       NetAmount: props.Get_SalesOrder[0].NetAmount,
  //       SaleOrderId: props.Get_SalesOrder[0].SaleOrderId,
  //       SaleOrderNo: props.Get_SalesOrder[0].SaleOrderNo,
  //     });
  //   }
  // }, [props.Get_SalesOrder]);
  const OnSuccess = () => {};
  const OnFailure = () => {};

  // const [getbody, setgetbody] = useState({
  //   SaleOrderId:
  //     location.state !== null && location.state !== undefined
  //       ? location.state.SaleOrderId
  //       : null,
  //   //(window.location.href = "/admin/dashboard"),
  // });

  useEffect(() => {
    setPosts([]);

    if (
      saleOrderCustomer?.SaleOrderNo !== null &&
      saleOrderCustomer?.SaleOrderNo !== undefined
    ) {
      let body = {
        saleOrderId: saleOrderCustomer?.SaleOrderId,
      };
      props.GetPayment(
        pageNumber,
        noOfRows,
        saleOrderCustomer?.SaleOrderNo,
        OnSuccess,
        OnFailure
      );
      props.GetFullPaymentSchedule(
        saleOrderCustomer?.SaleOrderId,
        OnSuccess,
        OnFailure
      );
      props.GetScheduleMiddleware(body, OnSuccess, OnFailure);
    }

    props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  }, [true, saleOrderCustomer?.SaleOrderNo]);
  const [plan, setplan] = useState("");

  useEffect(() => {
    if (
      (props.GetPaymentPlan !== null) &
      (props.GetPaymentPlan !== undefined)
    ) {
      setplan(props.GetPaymentPlan?.response?.query2);
    }
  }, [props.GetPaymentPlan]);

  useEffect(() => {
    if (
      saleOrderCustomer?.SaleOrderNo !== null &&
      saleOrderCustomer?.SaleOrderNo !== undefined
    ) {
      props.GetPayment(
        pageNumber,
        noOfRows,
        saleOrderCustomer?.SaleOrderNo,
        OnSuccess,
        OnFailure
      );
    }
  }, [noOfRows, pageNumber]);

  // const dateFunction = (date) => {
  //   let str, d;
  //   str = date;
  //   const myArr = str.split("T");
  //   d = myArr[0];

  //   return d;
  // };
  const dateFunction = (date) => {
    let d = date?.split("T")[0];

    return moment(d).format("DD-MM-YYYY");
  };
  const [stateAppRequest, setstateAppRequest] = useState(false);
  const [cocFilePath, setcocFilePath] = useState("");
  const [appReqFilePath, setappReqFilePath] = useState("");
  const [AllotteePath, setAllotteePath] = useState("");
  const [LetterPath, setLetterPath] = useState("");
  const [stateCOC, setstateCOC] = useState(false);
  const [stateAllotee, setstateAllotee] = useState(false);
  const [stateLetter, setstateLetter] = useState(false);
  const [VerificationRef, setVerificationRef] = useState("");
  useEffect(() => {
    if (props.GetUserJWTLogin === false) {
      localStorage.removeItem("auth");
      window.location.href = "/auth/login";
    } else {
      if (
        props.Get_PaymentStages !== null &&
        props.Get_PaymentStages !== undefined
      ) {
        setPosts(props.Get_PaymentStages?.response?.PaymentStages);
        setMetaData(props.Get_PaymentStages?.metaData);
        //for (let i = 0; i < props.Get_PaymentStages?.response.length; i++) {
        // setData(props.Data);
        setVerificationRef(
          props.Get_PaymentStages?.response?.saleOrder?.VarificationNo
        );
        setcocFilePath(
          props.Get_PaymentStages?.response?.verifications[1]?.FilePathId
        );
        setappReqFilePath(
          props.Get_PaymentStages?.response?.verifications[0]?.FilePathId
        );

        setLetterPath(
          props.Get_PaymentStages?.response?.verifications[2]?.FilePathId
        );
        setAllotteePath(
          props.Get_PaymentStages?.response?.verifications[3]?.FilePathId
        );
        if (
          props.Get_PaymentStages?.response?.verifications[0]?.FilePath !== null
        ) {
          setstateAppRequest(true);
        } else {
          setstateAppRequest(false);
        }
        if (
          props.Get_PaymentStages?.response?.verifications[1]?.FilePath !== null
        ) {
          setstateCOC(true);
        } else {
          setstateCOC(false);
        }

        if (
          props.Get_PaymentStages?.response?.verifications[2]?.FilePath !==
            null ||
          props.Get_PaymentStages?.response?.saleOrder?.VarificationNo == "" ||
          props.Get_PaymentStages?.response?.saleOrder?.VarificationNo == null
        ) {
          setstateLetter(true);
        } else {
          setstateLetter(false);
        }
        if (
          props.Get_PaymentStages?.response?.verifications[3]?.FilePath !==
            null ||
          props.Get_PaymentStages?.response?.saleOrder?.VarificationNo == "" ||
          props.Get_PaymentStages?.response?.saleOrder?.VarificationNo == null
        ) {
          setstateAllotee(true);
        } else {
          setstateAllotee(false);
        }
      }
    }
  }, [props.Get_PaymentStages]);

  const OnSuccessJwt = () => {};
  const OnFailureJwt = () => {};

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    if (
      props.Get_PaymentStages?.metaData?.totalPagesPaymentStage > pageNumber
    ) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  // const [paymentRecipt, setpaymentrecipt] = useState({
  //   salerordernumber: null,
  //   username: null,
  //   userphone: null,
  //   usercnic: null,
  //   useremail: null,
  //   useramount: null,
  //   userpaymentstages: null,
  //   userpaymenttypeid: null,
  //   userinstallmentNo: null,
  // });

  // const SendToPaymentBuilder = (opt) => {
  //   setpaymentrecipt({
  //     salerordernumber: opt.SaleOrderNo,
  //     username: opt.user_name,
  //     userphone: parseInt(opt.user_phone),
  //     usercnic: parseInt(opt.CNIC),
  //     useremail: opt.user_email,
  //     useramount: parseInt(opt.Amount),
  //     userpaymentstages: parseInt(opt.PaymentStageId),
  //     userpaymenttypeid: parseInt(opt.PaymenTypeId),
  //     userinstallmentNo: opt.InstallmentNo,
  //   });
  //   // if (paymentRecipt.salerordernumber !== null && paymentRecipt.salerordernumber !== undefined) {
  //   //       history.push({
  //   //         pathname: "/admin/PaymentReceipt",
  //   //         state: {
  //   //           sale_order_number: paymentRecipt.salerordernumber,
  //   //           sale_name: paymentRecipt.username,
  //   //           sale_phone: paymentRecipt.userphone,
  //   //           sale_cnic: paymentRecipt.usercnic,
  //   //           sale_email: paymentRecipt.useremail,
  //   //           sale_amount: paymentRecipt.useramount,
  //   //           sale_paymentstagesid: paymentRecipt.userpaymentstages,
  //   //           sale_paymenttypeid: paymentRecipt.userpaymenttypeid,
  //   //           sale_installmentNo: paymentRecipt.userinstallmentNo,
  //   //         }
  //   //       })
  //   //     }
  // };

  // useEffect(() => {
  //   if (
  //     paymentRecipt.salerordernumber !== null &&
  //     paymentRecipt.salerordernumber !== undefined
  //   ) {
  //     history.push({
  //       pathname: "/admin/PaymentReceipt",
  //       state: {
  //         sale_order_number: paymentRecipt.salerordernumber,
  //         sale_name: paymentRecipt.username,
  //         sale_phone: paymentRecipt.userphone,
  //         sale_cnic: paymentRecipt.usercnic,
  //         sale_email: paymentRecipt.useremail,
  //         sale_amount: paymentRecipt.useramount,
  //         sale_paymentstagesid: paymentRecipt.userpaymentstages,
  //         sale_paymenttypeid: paymentRecipt.userpaymenttypeid,
  //         sale_installmentNo: paymentRecipt.userinstallmentNo,
  //       },
  //     });
  //   }
  // }, [paymentRecipt]);
  // const [stateForPaymentReceipt, setstateForPaymentReceipt] = useState({});

  // useEffect(() => {
  //   if (
  //     stateForPaymentReceipt.salerordernumber !== null &&
  //     stateForPaymentReceipt.salerordernumber !== undefined
  //   ) {
  //     // history.push({
  //     //   pathname: "/admin/PaymentReceipt",
  //     //   state: {
  //     //     sale_order_number: stateForPaymentReceipt.salerordernumber,
  //     //     sale_name: stateForPaymentReceipt.username,
  //     //     sale_phone: stateForPaymentReceipt.userphone,
  //     //     sale_cnic: stateForPaymentReceipt.usercnic,
  //     //     sale_email: stateForPaymentReceipt.useremail,
  //     //   }
  //     // })
  //   }
  // }, [stateForPaymentReceipt]);
  //const [stateOfMultipleInstallment, setOfMultipleInstallment] = useState([])

  const [isMultiple, setisMultiple] = useState(false);
  const [multiArray, setmultiArray] = useState([]);

  // const singlePayment = (value) => {
  //

  //   // var arrayofMultipleInstallment = [];
  //   // arrayofMultipleInstallment.push(value)
  //   // setmultiArray(arrayofMultipleInstallment);
  //   MultiplePayment(value);
  // };

  const ArrayForInstallment = (event, value) => {
    var arrayofMultipleInstallment = [...multiArray];
    if (event.target.checked) {
      arrayofMultipleInstallment = [...multiArray, value];
      //.push(value)
    } else {
      arrayofMultipleInstallment.splice(multiArray.indexOf(value.id), 1);
      //arrayofMultipleInstallment.pop(value);
      // setmultiArray([arrayofMultipleInstallment])
    }

    setmultiArray(arrayofMultipleInstallment);
    // if (check == true) {
    //   arrayofMultipleInstallment.push(value);

    // } else {
    //   arrayofMultipleInstallment.pop(value);
    // }
    if (arrayofMultipleInstallment.length > 0) {
      setisMultiple(true);
    } else {
      setisMultiple(false);
    }

    // if (check == "") {
    //   arrayofMultipleInstallment.push(value);
    // }

    // FunctionOfIsTrue(value);
    // if (arrayofMultipleInstallment.length !== 0) {
    //    setisMultiple(true)
    // setstateForPaymentReceipt({
    //   salerordernumber: value.SaleOrderNo,
    //   username: value.user_name,
    //   userphone: parseInt(value.user_phone),
    //   usercnic: parseInt(value.CNIC),
    //   useremail: value.user_email,
    // useramount: parseInt(value.Amount),
    // userpaymentstages: parseInt(value.PaymentStageId),
    // userpaymenttypeid: parseInt(value.PaymenTypeId),
    // userinstallmentNo: value.InstallmentNo
    // })
    // }
    // else {
    //   setisMultiple(false)
    // }
  };
  const singlePayment = (value) => {
    let arrayofMultipleInstallment = [];
    arrayofMultipleInstallment.push(value);

    history.push({
      pathname: "/admin/PaymentReceipt",
      state: {
        user_id: value.user_id,
        plot_no: value.Plot_no,
        sale_order_number: value.SaleOrderNo,
        sale_name: value.user_name,
        sale_phone: value.user_phone,
        sale_cnic: value.CNIC,
        sale_email: value.user_email,
        sale_amount: value.Amount,
        sale_paymentstagesid: value.PaymentStageId,
        sale_paymenttypeid: value.PaymenTypeId,
        sale_installmentNo: value.InstallmentNo,
        type: value.Description,
        Sector_Name: value.Sector_Name,
        CategoryName: value.CategoryName,
      },
      dataState: saleOrderCustomer,
      data: { arrayofMultipleInstallment },
    });
  };
  const MultiplePayment = () => {
    let arrayofMultipleInstallment = multiArray;
    if (multiArray.length > 0) {
      let totalAmount = 0;
      let value = "";
      for (let i = 0; i < multiArray.length; i++) {
        totalAmount += multiArray[i].Amount;
        value += multiArray[i].Description + ", ";
      }
      history.push({
        pathname: "/admin/PaymentReceipt",
        state: {
          user_id: multiArray[0].user_id,
          plot_no: multiArray[0].Plot_no,
          sale_order_number: multiArray[0].SaleOrderNo,
          sale_name: multiArray[0].user_name,
          sale_phone: multiArray[0].user_phone,
          sale_cnic: multiArray[0].CNIC,
          sale_email: multiArray[0].user_email,
          sale_amount: totalAmount,
          sale_paymentstagesid: multiArray[0].PaymentStageId,
          sale_paymenttypeid: multiArray[0].PaymenTypeId,
          type: value,
          // sale_installmentNo: paymentRecipt.userinstallmentNo,
        },
        data: { arrayofMultipleInstallment },
        dataState: saleOrderCustomer,
      });
    }
  };

  // const FunctionOfIsTrue = (value) => {
  //   if (arrayofMultipleInstallment.length !== 0) {
  //     setisMultiple(true);
  //   } else {
  //     setisMultiple(false);
  //   }
  //   if (isMultiple == true) {
  //     setstateForPaymentReceipt({
  //       salerordernumber: value.SaleOrderNo,
  //       username: value.user_name,
  //       userphone: parseInt(value.user_phone),
  //       usercnic: parseInt(value.CNIC),
  //       useremail: value.user_email,
  //       // useramount: parseInt(value.Amount),
  //       // userpaymentstages: parseInt(value.PaymentStageId),
  //       // userpaymenttypeid: parseInt(value.PaymenTypeId),
  //       // userinstallmentNo: value.InstallmentNo
  //     });
  //   }
  // };
  // useEffect(() => {
  //   if(isMultiple==true){
  //     setstateForPaymentReceipt({
  //           salerordernumber: value.SaleOrderNo,
  //           username: value.user_name,
  //           userphone: parseInt(value.user_phone),
  //           usercnic: parseInt(value.CNIC),
  //           useremail: value.user_email,
  //           // useramount: parseInt(value.Amount),
  //           // userpaymentstages: parseInt(value.PaymentStageId),
  //           // userpaymenttypeid: parseInt(value.PaymenTypeId),
  //           // userinstallmentNo: value.InstallmentNo
  //         })

  //   }
  // }, [isMultiple])

  const AppRequest = () => {
    history.push({
      pathname: "/admin/AppRequest",
      state: location.state,
      appReqFilePath: appReqFilePath,
    });
  };
  const CertificateOfCertificate = () => {
    history.push({
      pathname: "/admin/CertificateOfConfirmation",
      state: location.state,
      cocFilePath: cocFilePath,
    });
  };
  // const CertificateOfCertificate = () => {
  //   history.push({
  //     pathname: "/admin/CertificateOfConfirmation",
  //     state: location.state,
  //     cocFilePath: cocFilePath,
  //   });
  // };
  const [role, setRole] = useState(null);
  useEffect(() => {
    setRole(parseInt(localStorage.getItem("roleid")));
  }, [true]);

  // useEffect(() => {
  //   if (role === 5) setView("none");
  //   else setView("");
  // }, [role]);

  const [view, setView] = useState("none");
  const [stateSaleOrder, setstateSaleOrder] = useState("");
  const onChangeSaleOrder = (val) => {
    setstateSaleOrder(val);
  };
  useEffect(() => {
    if (stateSaleOrder !== null) {
      let body = {
        SaleOrderNo: stateSaleOrder,
      };
      props.GetAllSaleOrder(body, OnSuccess, OnFailure);
    }

    // props.GetPayment(body, OnSuccess, OnFailure);
  }, [stateSaleOrder]);
  // useEffect(() => {
  //  if(props.GetSale!==null && props.GetSale!==undefined)
  //  {
  //    let body={
  //     SaleOrderId:props.GetSale[0]?.SaleOrderId
  //    }
  //   //  setSaleOrderCustomer({
  //   //    ...saleOrderCustomer,
  //   //    user_name:props.GetSale[0]?.user_name,
  //   //  Plot_no:props.GetSale[0]?.Plot_no,
  //   //  CategoryName:props.GetSale[0]?.CategoryName,
  //   //  Discount:props.GetSale[0]?.Discount,
  //   //  SoldAmounmt:props.GetSale[0]?.SoldAmounmt,
  //   //  ExtraChargesPercentage:props.GetSale[0]?.ExtraChargesPercentage,
  //   //  NetAmount:props.GetSale[0]?.NetAmount

  //   // });
  //   // saleOrderCustomer.user_name=props.GetSale[0]?.user_name;
  //   // saleOrderCustomer.Plot_no=props.GetSale[0]?.Plot_no;
  //   // saleOrderCustomer.CategoryName=props.GetSale[0]?.CategoryName;
  //   // saleOrderCustomer.Discount=props.GetSale[0]?.Discount;
  //   // saleOrderCustomer.SoldAmounmt=props.GetSale[0]?.SoldAmounmt;
  //   // saleOrderCustomer.ExtraChargesPercentage=props.GetSale[0]?.ExtraChargesPercentage;
  //   // saleOrderCustomer.NetAmount=props.GetSale[0]?.NetAmount;

  //   // });

  //    props.GetPayment(body, OnSuccess, OnFailure);
  //  }
  // }, [props.GetSale])
  const [isOpen, setIsOpen] = useState(false);
  const [recieptId, setRecieptId] = useState(null);
  const [recieptData, setRecieptData] = useState(null);
  const onSuccessRecieptDetailsById = (data) => {
    setRecieptData(data);
    ToggleInfoModal();
  };
  const onFailureRecieptDetailsById = () => {};

  const ToggleInfoModal = () => {
    // if (id) {
    //   props.GetRecieptDetailsByIdMiddleware(
    //     id,
    //     onSuccessRecieptDetailsById,
    //     onFailureRecieptDetailsById
    //   );
    // }
    // setIsOpen(!isOpen);
    setIsOpen(!isOpen);
    setRecieptId(null);
  };
  useEffect(() => {
    if (recieptId) {
      props.GetRecieptDetailsByIdMiddleware(
        recieptId,
        onSuccessRecieptDetailsById,
        onFailureRecieptDetailsById
      );
    }
  }, [recieptId]);
  return (
    <>
      <Headers />
      <InfoModal
        modal={isOpen}
        toggle={ToggleInfoModal}
        stateData={recieptData}
        Plot_no={saleOrderCustomer?.Plot_no}
      />
      <Container className="mt--7" fluid>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col lg="10" md="10" sm="4" xs="4">
                  <h3>Payment Stages</h3>
                </Col>
                {/* <Col
                  lg="2"
                  md="2"
                  sm="4"
                  xs="4"
                  // style={{ display: view, visibility: visiblitySaleOrder }}
                >
                  <Label for="exampleEmail">Sale Order No</Label>
              
                  <Input
                    type="text"
                    onChange={(e) => onChangeSaleOrder(e.target.value)}
                  />
                </Col> */}
              </Row>
            </CardHeader>

            <CardBody>
              <Row></Row>
              <Row>
                <FormGroup>
                  <Label for="exampleEmail">Name</Label>
                  {/* <Input type="text"  value={location.state.agentname} disabled   /> */}
                  <Input
                    type="text"
                    value={saleOrderCustomer?.user_name}
                    disabled
                  />
                </FormGroup>
                &nbsp; &nbsp;
                <FormGroup>
                  <Label for="exampleEmail">Plot No</Label>
                  <Input
                    type="text"
                    value={saleOrderCustomer?.Plot_no}
                    disabled
                  />
                </FormGroup>
                &nbsp; &nbsp;
                <FormGroup>
                  <Label for="exampleEmail">SQ.YDS</Label>
                  <Input
                    type="text"
                    value={saleOrderCustomer?.CategoryName}
                    disabled
                  />
                </FormGroup>
                &nbsp; &nbsp;
                {/* <FormGroup>
                     <Label for="exampleEmail">Gross Amount</Label>
                     <Input type="text"    />
               </FormGroup>
               &nbsp;
               &nbsp; */}
                <FormGroup>
                  <Label for="exampleEmail">Discount</Label>
                  <Input
                    type="text"
                    value={saleOrderCustomer?.Discount}
                    disabled
                  />
                </FormGroup>
                &nbsp; &nbsp;
                <FormGroup>
                  <Label for="exampleEmail">Sold Amount</Label>
                  <Input
                    type="text"
                    value={saleOrderCustomer?.SoldAmounmt}
                    disabled
                  />
                </FormGroup>
                &nbsp; &nbsp;
                <FormGroup>
                  <Label for="exampleEmail">Extra Charges</Label>
                  <Input
                    type="text"
                    value={saleOrderCustomer?.ExtraChargesPercentage}
                    disabled
                  />
                </FormGroup>
                &nbsp; &nbsp;
                <FormGroup>
                  <Label for="exampleEmail">Net Amount</Label>
                  <Input
                    type="text"
                    value={saleOrderCustomer?.NetAmount}
                    disabled
                  />
                </FormGroup>
              </Row>
              {role === 9 || role === 5 || role === 6 ? (
                <Row
                  id="control"
                  // style={{ display: view, visibility: visiblity }}
                >
                  <Col lg="2" md="2" sm="4" xs="4">
                    <Button
                      size="sm"
                      color="success"
                      onClick={AppRequest}
                      disabled={stateAppRequest == true}
                    >
                      <i class="fas fa-print"></i>
                      <span className="btn-inner--icon">
                        Application Request
                      </span>
                    </Button>
                  </Col>
                  <Col lg="2" md="2" sm="4" xs="4">
                    <Button
                      size="sm"
                      color="success"
                      onClick={CertificateOfCertificate}
                      disabled={stateCOC == true}
                    >
                      <i class="fas fa-print"></i>
                      <span className="btn-inner--icon">Confirmation </span>
                    </Button>
                  </Col>
                  <Col lg="2" md="2" sm="4" xs="4">
                    <AlloteeDetail
                      state={location.state}
                      AllotteePath={AllotteePath}
                      stateAllotee={stateAllotee}
                      GetPayment={props.GetPayment}
                      pageNumber={pageNumber}
                      noOfRows={noOfRows}
                      SaleOrderNo={saleOrderCustomer?.SaleOrderNo}
                      OnSuccess={OnSuccess()}
                      OnFailure={OnFailure()}
                      VerificationRef={VerificationRef}
                    ></AlloteeDetail>
                  </Col>

                  <Col lg="2" md="2" sm="4" xs="4">
                    <Letter
                      state={saleOrderCustomer}
                      LetterPath={LetterPath}
                      stateLetter={stateLetter}
                      GetPayment={props.GetPayment}
                      pageNumber={pageNumber}
                      noOfRows={noOfRows}
                      SaleOrderNo={saleOrderCustomer?.SaleOrderNo}
                      OnSuccess={OnSuccess()}
                      OnFailure={OnFailure()}
                      VerificationRef={VerificationRef}
                    ></Letter>
                  </Col>
                  <Col lg="2" md="2" sm="4" xs="4">
                    <PaymentSchedule
                      //state={plan}
                      state={props.schedule}
                      saleOrderCustomer={saleOrderCustomer}
                    />
                  </Col>
                  <Col lg="2" md="2" sm="4" xs="4">
                    <Button
                      size="sm"
                      color="success"
                      onClick={MultiplePayment}
                      disabled={isMultiple == false}
                    >
                      <i class="fas fa-print"></i>
                      <span className="btn-inner--icon">Multiple Payment </span>
                    </Button>
                  </Col>
                  <hr />
                </Row>
              ) : role === 8 || role === 10 ? (
                <Row>
                  <Col lg="2" md="2" sm="4" xs="4">
                    {/* {isMultiple !== false ? */}
                    <Button
                      size="sm"
                      color="success"
                      onClick={MultiplePayment}
                      disabled={isMultiple == false}
                    >
                      <i class="fas fa-print"></i>

                      <span className="btn-inner--icon">Multiple Payment </span>
                    </Button>
                    {/* : ""} */}
                  </Col>
                </Row>
              ) : (
                // role === 3 ? (
                //   <Row
                //     id="control"
                //     // style={{ display: view, visibility: visiblity }}
                //   >
                //     <Col lg="2" md="2" sm="4" xs="4">
                //       <Button
                //         size="sm"
                //         color="success"
                //         onClick={AppRequest}
                //         disabled={stateAppRequest == true}
                //       >
                //         <i class="fas fa-print"></i>
                //         <span className="btn-inner--icon">
                //           Application Request
                //         </span>
                //       </Button>
                //     </Col>
                //     <Col lg="2" md="2" sm="4" xs="4">
                //       <Button
                //         size="sm"
                //         color="success"
                //         onClick={CertificateOfCertificate}
                //         disabled={stateCOC == true}
                //       >
                //         <i class="fas fa-print"></i>
                //         <span className="btn-inner--icon">Confirmation </span>
                //       </Button>
                //     </Col>
                //     <Col lg="2" md="2" sm="4" xs="4">
                //       <AlloteeDetail
                //         state={location.state}
                //         AllotteePath={AllotteePath}
                //         // stateAllotee={stateAllotee}
                //       ></AlloteeDetail>
                //     </Col>

                //     <Col lg="2" md="2" sm="4" xs="4">
                //       <Letter
                //         state={saleOrderCustomer}
                //         LetterPath={LetterPath}
                //         // stateLetter={stateLetter}
                //       ></Letter>
                //     </Col>
                //     <Col lg="2" md="2" sm="4" xs="4">
                //       <PaymentSchedule
                //         //state={plan}
                //         state={props.schedule}
                //         saleOrderCustomer={saleOrderCustomer}
                //       />
                //     </Col>
                //     <hr />
                //   </Row>
                // ) : (
                ""
              )}

              <Row>
                <Col lg="2" md="2" sm="4" xs="4">
                  <label className="form-control-label"> Rows Per Page </label>
                  <Input
                    id="exampleFormControlSelect1"
                    type="select"
                    onChange={(e) => onChangeNoOfRows(e.target.value)}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </Input>
                </Col>
              </Row>
            </CardBody>
            <CardBody>
              <Table className="align-items-center" responsive>
                <thead className="thead-light">
                  <tr>
                    {role === 6 ||
                    role === 8 ||
                    role === 9 ||
                    role === 5 ||
                    role === 10 ? (
                      <th scope="col"></th>
                    ) : (
                      ""
                    )}
                    {/* <th scope="col"></th> */}
                    <th scope="col">S.No</th>
                    <th scope="col">Payment Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th> <th scope="col">Status</th>{" "}
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {posts !== null && posts !== undefined ? (
                    posts.map((opt, index) => {
                      return (
                        <tr key={index}>
                          {role === 6 ||
                          role === 8 ||
                          role === 9 ||
                          role === 5 ||
                          role === 10 ? (
                            <td>
                              <Input
                                disabled={opt.status_name !== "Unpaid"}
                                type="checkbox"
                                onChange={(e) => ArrayForInstallment(e, opt)}
                              />
                            </td>
                          ) : (
                            ""
                          )}
                          <td>{index + 1}</td>
                          <td>{opt.Description}</td>
                          <td>{opt.Amount?.toLocaleString("en-US")}</td>
                          <td>
                            {dateFunction(opt.Dated)}
                            {/* {dateFunction(opt.DateTime).toLocaleString(
                              "en-US",
                              {
                                timeZone: "Asia/Karachi",
                              }
                            )} */}
                          </td>
                          <td>
                            {opt.status_name == "Unpaid" ? (
                              <Badge color="info" pill>
                                {opt.status_name}
                              </Badge>
                            ) : opt.status_name == "Paid" ? (
                              <Badge color="success" pill>
                                {opt.status_name}
                              </Badge>
                            ) : opt.status_name == "Pending" ? (
                              <Badge color="warning" pill>
                                {opt.status_name}
                              </Badge>
                            ) : opt.status_name ==
                              "Varification in Progress" ? (
                              <Badge color="primary" pill>
                                {opt.status_name}
                              </Badge>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>
                            <Button
                              color="success"
                              size="sm"
                              id="proceed"
                              // onClick={() => SendToPaymentBuilder(opt)}
                              onClick={() => setRecieptId(opt.PaymentReceiptId)}
                              disabled={
                                opt.status_name == "Paid" ? false : true
                              }
                            >
                              <span className="btn-inner--icon">
                                <i class="fas fa-eye"></i>
                              </span>
                            </Button>
                            {role === 6 ||
                            role === 8 ||
                            role === 9 ||
                            role === 5 ||
                            role === 10 ? (
                              <Button
                                color={
                                  opt.status_name !== "Unpaid" ||
                                  isMultiple == true
                                    ? "danger"
                                    : "info"
                                }
                                // color="danger"
                                size="sm"
                                id="proceed"
                                disabled={
                                  opt.status_name !== "Unpaid" ||
                                  isMultiple == true
                                }
                                // onClick={() => SendToPaymentBuilder(opt)}
                                onClick={() => singlePayment(opt)}
                              >
                                <span className="btn-inner--icon">
                                  <i class="fas fa-arrow-right"></i>
                                </span>
                              </Button>
                            ) : (
                              ""
                            )}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>

                      <th>
                        <h3>No data found</h3>
                      </th>
                      <th></th>
                    </tr>
                  )}
                </tbody>
              </Table>
            </CardBody>

            {/* Pagination Code */}
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li className="page-item">
                  Page {pageNumber} - {metaData?.totalPagesPaymentStage}
                </li>
              </ul>
            </nav>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" onClick={handlePrev}>
                    <i class="fa fa-angle-left"></i>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" onClick={handleNext}>
                    <i class="fa fa-angle-right"></i>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </Card>
        </div>
      </Container>
    </>
  );
};

// export default PaymentStages

const mapStateToProps = (state) => ({
  isLoading: state.getsale.isLoading,
  isError: state.getsale.isError,
  Error: state.getsale.error,
  GetRecieptDetailsById: state.getsale.GetRecieptDetailsById,
  GetUserJWTLogin: state.getsale.GetUserJWTLogin,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    JwtDashboard: (body, OnSuccess, OnFailure) =>
      dispatch(JwtDashboard(body, OnSuccess, OnFailure)),
    GetRecieptDetailsByIdMiddleware: (id, OnSuccess, OnFailure) =>
      dispatch(GetRecieptDetailsByIdMiddleware(id, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(PaymentStages);
