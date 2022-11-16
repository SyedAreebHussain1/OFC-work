import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Table,
  Col,
  Input,
  CardBody,
} from "reactstrap";
import Select from "react-select";
import { connect } from "react-redux";
import AddPaymentModal from "../AddPaymentModal";
import {
  SaleOrderMiddleware,
  ShowPaymentType,
  ShowPaymentThrough,
  ShowCurrencyType,
  ShowPaymentSchedule,
  ShowShortPaymentSchedule,
  InsertPaymentStages,
  CustomPlanGenerateMiddleware,
  getSaleOrderPlan,
  getCustomSaleOrderPlan,
  getFullSaleOrderPlan,
} from "../middleware";
import { showPlans, showPackages } from "views/SaleQotation/middleware";
import swal from "sweetalert";
import { useHistory } from "react-router";
import { Split_SaleTable } from "./Split_SaleTable";
import moment from "moment";

import CustomPaymenModal from "./CustomPaymentModal";
import { ContactsOutlined } from "@material-ui/icons";

const Split_Saleorder = (props) => {
  let history = useHistory();
  const [saleOrder, setSaleOrder] = useState({
    paymentPlaneId: "",
    paymentTerm: "",
    currency: "",
    planeName: "",
    packageId: "",
    Dated: "",
    paymentPlanName: "",
    Discount: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isCustom, setIsCustom] = useState(false);
  const [posts, setposts] = useState([]);
  const [netAmount, setNetAmount] = useState("");
  const [newPost, setnewPost] = useState([]);
  const [customBody, setCustomBody] = useState({});
  const [saleOrderState, setSaleOrderState] = useState("");
  const [sendPaymentSchedule, setPaymentSchedule] = useState([]);
  const [downpayment, setDownPayment] = useState();

  const [planPackage, setPlanPackage] = useState(null);
  const [formedArr, setFormedArr] = useState([]);
  useEffect(() => {
    props.ShowPaymentThrough(OnSuccess, onFailure);
    props.ShowCurrencyType(OnSuccess, onFailure);
  }, [true]);
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (props.Response !== null && props.Response !== undefined) {
      setItems(props.Response);
    }
  }, [props.Response]);
  useEffect(() => {
    if (props.Packages !== null && props.Packages !== undefined) {
      setPlanPackage(props.Packages);
    }
  }, [props.Packages]);


  useEffect(() => {
    if (props.state !== null && props.state !== undefined) {
      props.showPackages(props.state?.PlotType_id, OnSuccess, onFailure);
    }
    // props.ShowPaymentType(OnSuccess, onFailure);

    // let bodyOfPayment = {
    //   //comment by iqra because of paymentschedule from backend
    //   //  Plotno: SetSaleOrder.plotno,
    //   Plotno: props.state?.plotno,
    // };
    // props.showPlans(bodyOfPayment, OnSuccess, onFailure);
    setSaleOrderState(props.state);
  }, [props.state]);
  useEffect(() => {
    setFormedArr([]);
    setdateState([]);
    setDownPayment("");
    setItems(null);
    setposts([]);
    setNetAmount("");
    let packageName;
    if (saleOrder.packageId !== "") {
      if (planPackage !== null && planPackage !== undefined) {
        for (let i = 0; i < planPackage.length; i++) {
          if (saleOrder.packageId == planPackage[i].id) {
            packageName = planPackage[i].title;
            setSaleOrder({
              ...saleOrder,
              paymentPlanName: planPackage[i].title,
            });
          }
        }
      }
      if (packageName == "Custom") {
        setIsCustom(!isCustom);
      } else {
        props.showPlans(
          saleOrder.packageId,
          props.state?.Project_id,
          props.state?.Category_id,
          OnSuccess,
          onFailure
        );
      }
    }
  }, [saleOrder.packageId]);
  useEffect(() => {
    setposts([]);
    setNetAmount("");
    if (
      saleOrder.Dated !== "" &&
      saleOrder.paymentPlaneId !== "" &&
      dateState.length == formedArr.length
    ) {
      let body = {
        PaymentPlaneId: saleOrder.paymentPlaneId,
        plotId: props.state?.Plotid,
        Dated: saleOrder.Dated,
        downpaymentDate: dateState,
      };
      props.getSaleOrderPlan(body, OnSuccess, onFailure);
    }
  }, [saleOrder.paymentPlaneId, saleOrder.Dated]);

  // useEffect(() => {
  //   setSaleOrder({ ...saleOrder, Dated: "" });
  // }, [dateState]);

  // useEffect(() => {
  //   if (
  //     saleOrder.paymentPlaneId !== "" &&
  //     saleOrder.paymentPlaneId !== "Custom"
  //   ) {
  //     for (let i = 0; i < props.PaymentSchedule?.length; i++) {
  //       if (
  //         props.PaymentSchedule[i].PaymentPlaneId == saleOrder.paymentPlaneId
  //       ) {
  //         setSaleOrder({
  //           ...saleOrder,
  //           planeName: props.PaymentSchedule[i].PlaneName,
  //         });
  //       }
  //       // else if(saleOrder.paymentPlaneId=="Custom")
  //       // {
  //       //   setSaleOrder({...saleOrder,planeName:"Custom"})
  //       // }
  //     }

  //     let body = {
  //       PaymentPlaneId: saleOrder?.paymentPlaneId,
  //       SaleQuotationId: props.state?.SaleQuotationId,
  //       // "Discount": 0,
  //       Date: `${
  //         current.getMonth() + 1
  //       }-${current.getDate()}-${current.getFullYear()}`,
  //     };
  //     props.ShowShortPaymentSchedule(body, OnSuccess, onFailure);
  //   }
  //   // if (saleOrder.paymentPlaneId == "Custom") {
  //   //   // for(let i=0;i<props.PaymentSchedule?.length;i++)
  //   //   // {
  //   //     // if(props.PaymentSchedule[i].PaymentPlaneId==saleOrder.paymentPlaneId)
  //   //     // {
  //   //       setSaleOrder({...saleOrder,planeName:"Custom"})
  //   //    // }
  //   //   //}

  //   //         let body = {
  //   //           PaymentPlaneId: saleOrder?.paymentPlaneId,
  //   //           SaleQuotationId: props.state?.SaleQuotationId,
  //   //           // "Discount": 0,
  //   //           Date: `${
  //   //             current.getMonth() + 1
  //   //           }-${current.getDate()}-${current.getFullYear()}`,
  //   //         };
  //   //         props.ShowShortPaymentSchedule(body, OnSuccess, onFailure);
  //   //       }
  // }, [saleOrder.paymentPlaneId]);
  const dateConvert = (d) => {
    const date = moment(d);

  };
  const [Downpayment, setDownpayment] = useState("");
  const [Possession, setPossession] = useState("");
  const [Total, setTotal] = useState("");
  const [ballonStages, setballonStages] = useState("");
  const [extraChargesStage, setextraChargesStage] = useState("");

  useEffect(() => {
    setposts([]);
    setDownpayment("");
    setPossession("");
    setTotal("");
    setballonStages("");
    setextraChargesStage("");
    setNetAmount("");
    if (props.PrintOrderPlan !== null && props.PrintOrderPlan !== undefined) {
      // for (let i = 0; i < props.PrintOrderPlan.length; i++) {
      //   dateConvert(props.PrintOrderPlan[i].Date);
      // }
      setposts(props.PrintOrderPlan?.installmentStages);
      // setNetAmount(props.PrintOrderPlan?.netAmount);
      setDownpayment(props.PrintOrderPlan?.downpaymentStages);
      setPossession(props.PrintOrderPlan?.PossessionStage);
      setTotal(props.PrintOrderPlan?.grandTotalAmount);
      setballonStages(props.PrintOrderPlan?.ballonStages);
      setextraChargesStage(props.PrintOrderPlan?.extraChargesStage);
    }
  }, [props.PrintOrderPlan]);

  // useEffect(() => {
  //   if (props.CustomPlan !== null && props.CustomPlan !== undefined) {
  //     // setnewPost(props.CustomPlan);
  //     setposts(props.CustomPlan);
  //   }
  // }, [props.CustomPlan]);

  // useEffect(() => {
  //   if (sendPaymentSchedule?.length > 1) {
  //     // setstateOfPaymentScheduleArray([]);
  //     props.setIsTrue(true);
  //   } else {
  //     // setPaymentSchedule([]);
  //     props.setIsTrue(false);
  //   }
  // }, [sendPaymentSchedule]);

  // const [SetSaleOrder, GetSaleOrder] = useState({
  //   QuotationNo: props.body?.Quotation,
  //   //props.body.Quotation,
  //   Sale_Cnic: "",
  //   plotNo: props.body?.plotNo,
  //   CNIC: "",
  //   Sale_order_no: "",
  //   Sale_order_type: "",
  //   Net_value: "",
  //   Currency: "",
  //   Payment: "",
  //   sold_to_party: props.body?.soldtoparty,
  //   ship_to_party: props.body?.shiptoparty,
  //   paymentSchedule: "",
  //   amount: "",
  //   PaymentPlaneId: "",
  //   Discount: "",
  //   SoldAmount: "",
  // });

  // useEffect(() => {
  //   if (props.body !== null && props.body !== undefined) {

  //     GetSaleOrder({
  //       ...SetSaleOrder,
  //       QuotationNo: props.body.Quotation,
  //       Sale_Cnic: "",
  //       plotNo: props.body.plotNo,
  //       CNIC: "",
  //       Sale_order_no: "",
  //       Sale_order_type: "",
  //       Net_value: "",
  //       Currency: "",
  //       Payment: "",
  //       sold_to_party: props.body.soldtoparty,
  //       ship_to_party: props.body.shiptoparty,
  //       paymentSchedule: "",
  //       amount: "",
  //       PaymentPlaneId: "",
  //       Discount: "",
  //       SoldAmount: "",
  //     });
  //   }
  // }, [true]);
  const current = new Date();
  const date = current.toLocaleDateString("en-CA");
  const onSave = () => {
    if (
      props.state?.AmountType == "FULLPAYMENT" &&
      saleOrder.currency !== "" &&
      saleOrder.Discount !== ""
    ) {
      let body = {
        SaleQuotationId: props.state.SaleQuotationId,
        CurrencyTypeId: saleOrder.currency,
        Dated: date,
        saleOrderType: "Fullpayment",
        Discount: parseFloat(saleOrder.Discount),
      };

      props.SaleOrderMiddleware(body, onSuccessSalesOrder, onFailureSalesOrder);
    } else if (
      props.state?.AmountType == "FULLPAYMENT" &&
      saleOrder.currency !== "" &&
      saleOrder.Discount == ""
    ) {
      let body = {
        SaleQuotationId: props.state.SaleQuotationId,
        CurrencyTypeId: saleOrder.currency,
        Dated: date,
        saleOrderType: "Fullpayment",
      };

      props.SaleOrderMiddleware(body, onSuccessSalesOrder, onFailureSalesOrder);
    } else if (
      props.state?.AmountType !== "FULLPAYMENT" &&
      saleOrder.packageId !== "" &&
      saleOrder.paymentPlaneId !== "" &&
      saleOrder.currency !== "" &&
      saleOrder.Dated !== "" &&
      dateState.length == formedArr.length
    ) {
      let body = {
        SaleQuotationId: props.state.SaleQuotationId,
        CurrencyTypeId: saleOrder.currency,
        PaymentPlaneId: saleOrder.paymentPlaneId,
        Dated: saleOrder.Dated,
        downpaymentDate: dateState,
        saleOrderType: "Package",
      };
      props.SaleOrderMiddleware(body, onSuccessSalesOrder, onFailureSalesOrder);
      // if (saleOrder.paymentPlaneId == 46) {
      //   let body = {
      //     SaleQuotationId: saleOrderState.SaleQuotationId,
      //     Taskid: saleOrderState.Taskid,
      //     PlaneName: saleOrder.planeName,

      //     CurrencyTypeId: parseInt(saleOrder.currency),
      //     PaymentPlaneId: saleOrder.paymentPlaneId,
      //     NetAmount: saleOrderState.NetAmount,
      //     SoldAmounmt: saleOrderState.SoldAmounmt,
      //     Discount: customBody.Discount,

      //     DownPaymentPercentage: customBody.DownPaymentPercentage,
      //     NoOfDownPayment: customBody.NoOfDownPayment,
      //     NoOfInstallment: customBody.NoOfInstallment,
      //     InstallmentPercentage: customBody.InstallmentPercentage,
      //     NoOfBallonInstallment: customBody.NoOfBallonInstallment,
      //     BallonInstallmentPercentage: customBody.BallonInstallmentPercentage,
      //     PossessionPercentage: customBody.PossessionPercentage,
      //     Dated: customBody.Dated,
      //     BaloonInstallmentType: customBody.BaloonInstallmentType,

      //     // Discount: SetSaleOrder?.Discount,
      //     // VarificationNo: null,
      //     // SoldAmounmt: SetSaleOrder?.SoldAmount,
      //     // AgentId: 2,
      //   };
      //   props.SaleOrderMiddleware(
      //     body,
      //     onSuccessSalesOrder,
      //     onFailureSalesOrder
      //   );

      //   // props.SaleOrderMiddleware(
      //   //   newState === "" ? body : newState,
      //   //   onSuccessSalesOrder,
      //   //   onFailureSalesOrder
      //   // );
      // } else {
      //   let body = {
      //     SaleQuotationId: saleOrderState.SaleQuotationId,
      //     Taskid: saleOrderState.Taskid,
      //     PlaneName: saleOrder.planeName,

      //     CurrencyTypeId: parseInt(saleOrder.currency),
      //     PaymentPlaneId: saleOrder.paymentPlaneId,
      //     NetAmount: saleOrderState.NetAmount,
      //     SoldAmounmt: saleOrderState.SoldAmounmt,
      //     Dated: date,
      //   };
      //   props.SaleOrderMiddleware(
      //     body,
      //     onSuccessSalesOrder,
      //     onFailureSalesOrder
      //   );
      // }
    } else {
      swal("Sorry!", "Please Enter Required Fields", "error");
    }
  };
  // let data = {
  //   nme
  // }
  //   setstateOfPaymentScheduleArray({...paymentSchedule , data})
  // useEffect(() => {
  //   if (
  //     props.state !== null &&
  //     props.state !== undefined &&
  //     SetSaleOrder.Currency !== null &&
  //     SetSaleOrder.Currency !== undefined &&
  //     SetSaleOrder.Currency !== ""
  //   ) {
  //     let body = {
  //       SaleQuotationId: props.body.SaleQuotationId,
  //       Taskid: props.body.Taskid,
  //       Status_id: 4,
  //       SaleorderStatus: 4,
  //       CurrencyTypeId: parseInt(SetSaleOrder.Currency),
  //       NetAmount: props.state.totalNetAmount,
  //       Discount: props.state.discountPercentage,
  //       VarificationNo: null,
  //       SoldAmounmt: props.state.afterDiscount,
  //       AgentId: 2,
  //     };
  //     setNewState(body);
  //     // props.SaleOrderMiddleware(body, onSuccessSalesOrder, onFailureSalesOrder);
  //   }
  // }, [SetSaleOrder.Currency]);

  const onSuccessSalesOrder = () => {
    swal({
      title: "Successful",
      text: "Sale Order Successfully Entered",
      type: "success",
      // buttons: true,
      // dangerMode: true,
    });
    // .then(function (isConfirm) {
    //   if (isConfirm) {
    //     history.push({
    //       pathname: "/admin/viewSaleOrderDetail",
    //     });
    //   } else {
    //   }
    // });
    history.push({
      pathname: "/admin/viewSaleOrderDetail",
    });
  };
  const onFailureSalesOrder = () => {
    swal({
      title: "Unsuccessful",
      text: "Something is wrong please contact your admin",
      type: "Warning",
      // buttons: true,
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
      } else {
      }
    });
  };

  // const [stateOfPaymentScheduleArray, setstateOfPaymentScheduleArray] =
  //   useState([]);
  // useEffect(() => {
  //   setstateOfPaymentScheduleArray(props.paymentScheduleArray);
  // }, [props.paymentScheduleArray]);

  const onCancel = () => {
    history.push({
      pathname: "/admin/ViewQuotationDetail",
    });
    //window.location.reload();
  };
  //comment by iqra because of payment schedule
  // const getPaymentSchedule = (arr) => {
  //   let regex = /Possession|Total|Down Payment Amount/gi;
  //   let tempArray = [];
  //   arr?.map((value, index) => {
  //     if (value.Name !== "Total") {
  //       let date = value.Dated;
  //       var dateConvert = moment(date).format("YYYY-MM-DD");
  //       let result = value.Name.match(regex);
  //       let data = {
  //         PaymenTypeId:
  //           value.Name === "Monthly Installment"
  //             ? 3
  //             : value.Name === "Baloon Installment"
  //             ? 5
  //             : result?.[0] === "Possession"
  //             ? 4
  //             : 2,
  //         Description: value.Name,
  //         InstallmentNo: value.index === "-" ? null : value.index,
  //         Dated: dateConvert,
  //         Amount: value.Amount,
  //         PaymentStageStatus: 38,
  //       };
  //       tempArray.push(data);
  //       setPaymentSchedule(tempArray);
  //       if (isNaN(value.Amount)) {
  //         setPaymentSchedule([]);
  //         props.setIsTrue(false);
  //       }
  //     }
  //   });
  // };

  const OnSuccess = () => {};
  const onFailure = () => {};

  // useEffect(() => {
  //   if (props.SalesOrder !== null && props.SalesOrder !== undefined) {
  //     if (
  //       stateOfPaymentScheduleArray !== null &&
  //       stateOfPaymentScheduleArray !== undefined &&
  //       stateOfPaymentScheduleArray?.length > 0
  //     ) {
  //       stateOfPaymentScheduleArray.forEach((element) => {
  //         let ele = {
  //           Amount: element.Amount,
  //           Dated: element.Dated,
  //           Description: element.Description,
  //           InstallmentNo: element.InstallmentNo,
  //           PaymenTypeId: element.PaymenTypeId,
  //           PaymentStageStatus: element.PaymentStageStatus,
  //           SaleOrderId: props.SalesOrder.id,
  //         };
  //         let ele2 = {
  //           ...element,
  //           SaleOrderId: props.SalesOrder.id,
  //         };
  //         custom.push(ele2);
  //       });
  //     }

  //     if (sendPaymentSchedule?.length > 1) {
  //       sendPaymentSchedule?.map((value) => {
  //         let ele = {
  //           SaleOrderId: props.SalesOrder.id,
  //           ...value,
  //         };
  //         schedule.push(ele);
  //       });
  //     }
  //     if (
  //       custom !== null &&
  //       custom !== undefined &&
  //       custom !== "" &&
  //       custom?.length > 0
  //     ) {
  //       let body = {
  //         param: custom,
  //       };
  //       props.InsertPaymentStages(body, OnSuccess, onFailure);
  //     }
  //     if (
  //       schedule !== null &&
  //       schedule !== undefined &&
  //       schedule !== "" &&
  //       schedule?.length > 1
  //     ) {
  //       let body = {
  //         param: schedule,
  //       };

  //       props.InsertPaymentStages(body, OnSuccess, onFailure);
  //     }
  //     // setstateOfPaymentScheduleArray({ ...stateOfPaymentScheduleArray, SaleOrderId: props.SalesOrder.id })
  //   }
  // }, [props.SalesOrder]);

  // useEffect(() => {
  //   if (
  //     stateOfPaymentScheduleArray !== null &&
  //     stateOfPaymentScheduleArray !== undefined &&
  //     stateOfPaymentScheduleArray?.length > 0
  //   ) {
  //     setPaymentSchedule([]);
  //   }
  // }, [stateOfPaymentScheduleArray]);
  const setPaymentPlaneId = (e) => {
    if (e == "select") {
      setFormedArr([]);
      setdateState([]);
      setDownPayment("");
    } else {
      setFormedArr([]);
      setdateState([]);
      setDownPayment("");

      let val = JSON.parse(e);
      // if (e.target.value == "Custom") {
      //   //setIsCustom(!isCustom);
      //   setSaleOrder({
      //     ...saleOrder,
      //     paymentPlaneId: e.target.value,
      //   });
      // } else {

      setSaleOrder({
        ...saleOrder,
        paymentPlaneId: val.PaymentPlaneId,
        Dated: "",
      });
      setDownPayment(val.paymentscheduletype.NoOfDownPayment);

      let arr = new Array(val.paymentscheduletype.NoOfDownPayment)
        .fill("")
        .map((_, i) => i + 1);
      setFormedArr(arr);
    }

    // }
  };
  const Toggler = () => {
    setIsOpen(!isOpen);
  };
  const CustomToggler = () => {
    setIsCustom(!isCustom);
  };
  const customfunction = (val) => {
    setCustomBody(val);
  };

  // let arr;
  // useEffect(() => {

  // arr = new Array(downpayment)
  // .fill("")
  // .map((_, i) => i + 1);
  // }, [downpayment])
  //let downpaymentDateArray = [];

  const [dateState, setdateState] = useState([]);
  const downpaymentDates = (e, i) => {
    setSaleOrder({ ...saleOrder, Dated: "" });
    for (let k = 0; k < downpayment; k++) {
      if (i == k) {
        const temp = dateState;
        temp[i] = e;
        setdateState(temp);
      } else if (
        dateState.length > 0 &&
        dateState.length == downpayment &&
        i < dateState.length - 1
      ) {
        for (let j = i; j < downpayment - 1; j++) {
          const temp = dateState;
          temp[j + 1] = "";
          setdateState(temp);
        }
      }
    }

    // setdateState(dates);
    // setDownPaymentDate(oldArray => [...oldArray,e] )
    //  downpaymentDateArray[i]=e;
    //   setSaleOrder({...saleOrder,Dated:""})

  };

  const [plan, setplan] = useState([]);

  //const date = current.toLocaleDateString("en-CA");
  useEffect(() => {
    if (
      props.state?.AmountType == "FULLPAYMENT" &&
      saleOrder?.Discount !== ""
    ) {
      let body = {
        plotId: props.state?.Plotid,
        Dated: date,
        Discount: saleOrder?.Discount,
      };
      props.getFullSaleOrderPlan(body, onSuccessFullPlan, onFailure);
    } else if (
      props.state?.AmountType == "FULLPAYMENT" &&
      saleOrder?.Discount == ""
    ) {
      let body = {
        plotId: props.state?.Plotid,
        Dated: date,
      };
      props.getFullSaleOrderPlan(body, onSuccessFullPlan, onFailure);
    }
  }, [props.state?.AmountType, saleOrder?.Discount]);
  const [FullSaleOrderPlan, setSaleOrderPlan] = useState("");

  const onSuccessFullPlan = (e) => {
    setSaleOrderPlan(e);
  };
  useEffect(() => {
    //setplan(props.PrintFullPlan);
    setposts([]);
    setDownpayment("");
    setPossession("");
    setTotal("");
    setballonStages("");
    setextraChargesStage("");
    setNetAmount("");
    if (FullSaleOrderPlan !== null && FullSaleOrderPlan !== undefined) {
      // for (let i = 0; i < props.PrintOrderPlan.length; i++) {
      //   dateConvert(props.PrintOrderPlan[i].Date);
      // }
      setNetAmount(FullSaleOrderPlan?.netAmount);
      setposts(FullSaleOrderPlan?.installmentStages);
      setDownpayment(FullSaleOrderPlan?.downpaymentStages);
      setPossession(FullSaleOrderPlan?.PossessionStage);
      setTotal(FullSaleOrderPlan?.grandTotalAmount);
      setballonStages(FullSaleOrderPlan?.ballonStages);
      setextraChargesStage(FullSaleOrderPlan?.extraChargesStage);
    }
  }, [FullSaleOrderPlan]);

  return (
    <CardBody>
      <AddPaymentModal
        modal={isOpen}
        toggle={Toggler}
        //amount={SetSaleOrder.amount}
      />
      <CustomPaymenModal
        modal={isCustom}
        toggle={CustomToggler}
        saleOrderState={saleOrderState}
        CustomPlanGenerateMiddleware={props.CustomPlanGenerateMiddleware}
        CurrencyTypeId={saleOrder.currency}
        PrintCustomPlan={props.PrintCustomPlan}
        getCustomSaleOrderPlan={props.getCustomSaleOrderPlan}

        //customfunction={customfunction}
      />
      <Row>
        <Col lg="3" md="3" sm="4" xs="12">
          <label className="form-control-label">Quotation Type</label>
          <Input
            type="text"
            placeholder="Quotation"
            value={props.state?.AmountType}
            disabled
          ></Input>
        </Col>
        <Col lg="3" md="3" sm="4" xs="12">
          <label className="form-control-label">Quotation No</label>
          <Input
            type="text"
            placeholder="Quotation"
            value={props.state?.SQ_No}
            disabled
          ></Input>
        </Col>
        <Col lg="3" md="3" sm="4" xs="12">
          <label className="form-control-label">Plot No</label>
          <Input type="text" disabled value={props.state?.Plot_no}></Input>
        </Col>
        <Col lg="3" md="3" sm="4" xs="12">
          <label className="form-control-label">CNIC</label>
          <Input
            type="number"
            placeholder="42xxx-xxxx-xxx-x"
            value={props.state?.CNIC}
            disabled
          ></Input>
        </Col>
        <Col lg="3" md="3" sm="4" xs="12">
          <label className="form-control-label">Sold To Party</label>
          <Input
            type="text"
            placeholder="From"
            value={props.state?.AgentName}
            disabled
            // onBlur={() => CheckFields("Sold")}
            // onChange={(e) => OnChange(e.target.value, "sold_to_party")}
          ></Input>
        </Col>
        <Col lg="3" md="3" sm="4" xs="12">
          <label className="form-control-label">Ship To party</label>
          <Input
            type="text"
            placeholder="To"
            value={props.state?.user_name}
            disabled
            // onBlur={() => CheckFields("Ship")}
            // onChange={(e) => OnChange(e.target.value, "ship_to_party")}
          ></Input>
        </Col>
        <Col lg="3" md="3" sm="4" xs="12">
          <label className="form-control-label">Net Value</label>
          <Input
            type="text"
            placeholder=""
            value={props.state?.NetAmount}
            disabled
          ></Input>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg="3" md="3" sm="4" xs="12">
          <label className="form-control-label">Currency *</label>
          <Input
            type="select"
            value={saleOrder.currency}
            onChange={(e) =>
              setSaleOrder({ ...saleOrder, currency: e.target.value })
            }
          >
            <option value={null}>Select Currency </option>
            {props.CurrencyType !== null &&
              props.CurrencyType !== undefined &&
              props.CurrencyType?.map((agent) => {
                return (
                  <option
                    key={agent.CurrencyTypeId}
                    value={agent.CurrencyTypeId}
                  >
                    {agent.CurrencyTypeName}
                  </option>
                );
              })}
          </Input>
        </Col>
        {props.state?.AmountType == "FULLPAYMENT" ? (
          <Col lg="3" md="3" sm="4" xs="12">
            <label className="form-control-label">Discount % (0-90)</label>
            <input
              value={saleOrder?.Discount}
              // onChange={(e) =>
              //   setSaleOrder({ ...saleOrder, Discount: e.target.value })
              // }
              // onKeyPress={(event) => {
              //   if (!/[0-9]/.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}
              // onKeyPress={(event) => {
              //   if (!/([1-9]|[1-4][0-9]|50)/.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}
              onChange={(e) => {
                const regex = /\b([0-9.]|[1-8][0-9]|90)\b/;
                if (e.target.value === "" || regex.test(e.target.value)) {
                  setSaleOrder({ ...saleOrder, Discount: e.target.value });
                }
              }}
              maxLength="3"
              type="text"
              id="input-NetAmount"
              className="form-control"
            ></input>
          </Col>
        ) : (
          <>
            <Col lg="3" md="3" sm="4" xs="12">
              <label className="form-control-label" for="input-username">
                Package *
              </label>
              <Input
                type="select"
                onChange={(e) =>
                  setSaleOrder({ ...saleOrder, packageId: e.target.value })
                }
                disabled={saleOrder.currency !== "" ? false : true}
                // onChange={(e) => onChange(e.target.value, "packageId")}
              >
                <option key="" value="">
                  Select
                </option>

                {planPackage !== null &&
                  planPackage !== undefined &&
                  planPackage.map((role) => {
                    return (
                      <option key={role.id} value={role.id}>
                        {role.title}
                      </option>
                    );
                  })}
              </Input>
            </Col>

            <Col lg="3" md="3" sm="4" xs="12">
              <label className="form-control-label" for="input-username">
                Payment Schedule *
              </label>
              <Input
                type="select"
                disabled={items?.length > 0 ? false : true}
                //value={SetSaleOrder.paymentSchedule !== null && SetSaleOrder.paymentSchedule !== undefined ? SetSaleOrder.paymentSchedule : '' }
                onChange={(e) => {
                  setPaymentPlaneId(e.target.value);

                  // OnChange(e.target.value, "PaymentPlaneId")
                  // setSaleOrder({
                  //   ...saleOrder,
                  //   paymentPlaneId: parseInt(e.target.value),
                  // });
                }}
                //nChange={(e) => OnChange(e.target.value, "PaymentPlaneId")}
              >
                <option key="" value="select">
                  select
                </option>
                {/* <option key={null} value="Custom">
              Custom
            </option> */}

                {items !== null &&
                  items !== undefined &&
                  items.map((role) => {
                    return (
                      <option
                        key={role.PaymentPlaneId}
                        value={JSON.stringify(role)}
                      >
                        {role.paymentscheduletype?.PlaneName}
                      </option>
                    );
                  })}
              </Input>
            </Col>
            {/* </Row>
      <Row> */}
            {formedArr !== null &&
            formedArr !== undefined &&
            formedArr.length > 0
              ? formedArr.map((item, i) => {
                  return (
                    <Col lg="3" md="3" sm="4" xs="12">
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        Down Payment Date {i + 1} *
                      </label>
                      <input
                        type="date"
                        //min={new Date().toISOString().split("T")[0]}
                        min={
                          dateState[i - 1] !== "" &&
                          dateState[i - 1] !== undefined &&
                          dateState[i - 1] !== null
                            ? dateState[i - 1]
                            : new Date().toISOString().split("T")[0]
                        }
                        value={
                          dateState[i] !== null && dateState[i] !== undefined
                            ? dateState[i]
                            : ""
                        }
                        onChange={(e) => downpaymentDates(e.target.value, i)}
                        // onChange={(e) => setDownPaymentDate(e.target.value)}
                        id="input-username"
                        className="form-control"
                      ></input>
                    </Col>
                  );
                })
              : null}

            <Col lg="3" md="3" sm="4" xs="12">
              <label className="form-control-label" for="input-username">
                Plan Start Date
              </label>
              <input
                type="date"
                min={dateState !== "" ? dateState[downpayment - 1] : ""}
                value={saleOrder.Dated}
                onChange={(e) =>
                  setSaleOrder({ ...saleOrder, Dated: e.target.value })
                }
                id="input-username"
                className="form-control"
              ></input>
            </Col>
          </>
        )}
      </Row>
      <br />
      {saleOrder.paymentPlanName == "Custom" ? null : (
        <Col>
          <Split_SaleTable
            netAmount={netAmount}
            posts={posts}
            Downpayment={Downpayment}
            Possession={Possession}
            ballonStages={ballonStages}
            Total={Total}
            state={props.state}
            extraChargesStage={extraChargesStage}
          />

          <Button color="danger" size="sm" onClick={onSave}>
            <span className="btn-inner--icon">
              Save &nbsp;
              <i class="fas fa-save"></i>
            </span>
          </Button>
          <Button color="info" size="sm" onClick={onCancel}>
            <span className="btn-inner--icon">
              Cancel &nbsp;
              <i class="fas fa-times"></i>
            </span>
          </Button>
          {/* <Button size="sm" onClick={save}>Save</Button> */}
        </Col>
      )}

      {/* <Split_SaleTable posts={posts} newPost={newPost} state={props.state} /> */}
    </CardBody>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.salesorder.isLoading,
  isError: state.salesorder.isError,
  SalesOrder: state.salesorder.SalesOrder,
  Error: state.salesorder.error,

  PaymentType: state.salesorder.PaymentType,
  PaymentThrough: state.salesorder.PaymentThrough,
  CurrencyType: state.salesorder.CurrencyType,
  Response: state.saleQotation.Response,
  PaymentSchedule: state.salesorder.PaymentSchedule,
  ShortPaymentSchedule: state.salesorder.ShortPaymentSchedule,
  Stages: state.salesorder.Stages,
  Response: state.saleQotation.Response,
  CustomPlan: state.salesorder.CustomPlan,
  Packages: state.saleQotation.Packages,
  PrintOrderPlan: state.salesorder.PrintOrderPlan,
  PrintCustomPlan: state.salesorder.PrintCustomPlan,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    SaleOrderMiddleware: (body, OnSuccess, OnFailure) =>
      dispatch(SaleOrderMiddleware(body, OnSuccess, OnFailure)),

    InsertPaymentStages: (body, OnSuccess, OnFailure) =>
      dispatch(InsertPaymentStages(body, OnSuccess, OnFailure)),
    ShowPaymentType: (OnSuccess, OnFailure) =>
      dispatch(ShowPaymentType(OnSuccess, OnFailure)),

    ShowPaymentThrough: (OnSuccess, OnFailure) =>
      dispatch(ShowPaymentThrough(OnSuccess, OnFailure)),

    ShowCurrencyType: (OnSuccess, OnFailure) =>
      dispatch(ShowCurrencyType(OnSuccess, OnFailure)),

    ShowPaymentSchedule: (body, OnSuccess, OnFailure) =>
      dispatch(ShowPaymentSchedule(body, OnSuccess, OnFailure)),
    ShowShortPaymentSchedule: (body, OnSuccess, OnFailure) =>
      dispatch(ShowShortPaymentSchedule(body, OnSuccess, OnFailure)),

    showPlans: (packageId, Project_id, Category_id, OnSuccess, OnFailure) =>
      dispatch(
        showPlans(packageId, Project_id, Category_id, OnSuccess, OnFailure)
      ),
    CustomPlanGenerateMiddleware: (body, OnSuccess, OnFailure) =>
      dispatch(CustomPlanGenerateMiddleware(body, OnSuccess, OnFailure)),
    showPackages: (body, OnSuccess, OnFailure) =>
      dispatch(showPackages(body, OnSuccess, OnFailure)),

    getSaleOrderPlan: (body, onSuccess, onFailure) =>
      dispatch(getSaleOrderPlan(body, onSuccess, onFailure)),

    getCustomSaleOrderPlan: (body, onSuccess, onFailure) =>
      dispatch(getCustomSaleOrderPlan(body, onSuccess, onFailure)),
  };
};

export default connect(mapStateToProps, mapDispatchToPrpos)(Split_Saleorder);
