import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Input,
  Label,
  Col,
  Row,
} from "reactstrap";
import moment from "moment";

import jsPDF from "jspdf";
import swal from "sweetalert";
import validate from "components/Utilities Component/ValidationWrapper";
import PalmDreamLogo from "../images/HIGH-RES-PNG-01-01.png";
import KGCPLogo from "../images/KGCP-Logo.png";
//
const arrDiscountPercentage = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];
const CustomPaymenModal = (props) => {
  let dateArr = [];
  let history = useHistory();
  const columns = [
    { title: "Monthly Installment", field: "Description" },
    { title: " ", field: "InstallmentNo" },
    { title: " ", field: "Date" },
    { title: " ", field: "Amount" },
  ];
  const columnsDownpayment = [
    { title: "Downpayment", field: "Description" },
    { title: " ", field: "InstallmentNo" },
    { title: "Date", field: "Date" },
    { title: "Amount", field: "Amount" },
  ];
  const columnsBallon = [
    { title: "Ballon", field: "Description" },
    { title: " ", field: "InstallmentNo" },
    { title: "Date", field: "Date" },
    { title: "Amount", field: "Amount" },
  ];
  const columnsextraChargesStage = [
    { title: "Extra Charges", field: "Description" },
    { title: " ", field: "" },
    { title: "Date", field: "Date" },
    { title: "Amount", field: "Amount" },
  ];
  const columnsPossesion = [
    { title: "Possession", field: "Description" },
    { title: " ", field: "InstallmentNo" },
    { title: "Date", field: "Date" },
    { title: "Amount", field: "Amount" },
  ];
  const columnsTotal = [
    { title: "Total", field: "Description" },
    { title: " ", field: "InstallmentNo" },
    { title: "Date", field: "Date" },
    { title: "Amount", field: "Amount" },
  ];
  const [formedArr, setFormedArr] = useState([]);
  const [state, setState] = useState({
    SaleQuotationId: "",
    CurrencyTypeId: "",
    NetAmount: 0,
    Discount: 0,
    DownPaymentPercentage: 30,
    NoOfDownPayment: 1,
    NoOfInstallment: 0,
    InstallmentPercentage: 0,
    NoOfBallonInstallment: 0,
    BallonInstallmentPercentage: 0,
    PossessionPercentage: 20,
    Dated: "",
    BaloonInstallmentType: "",

    //netAmount
    TempNetAmount: 0,
    AfterDiscountAmount: 0,
    PossessionAmount: 0,
    DownPaymentAmount: 0,
    DownPaymentInstallmentAmount: 0,
    Plan: "",

    InstallmentAmount: 0,
    disabled: true,
    PerBalloonInst: 0,
    checkBox: false,
    TotalBalloonAmount: 0,
    discountedAmount: 0,
  });
  const [error, setError] = useState({
    discounPercentageError: null,
    downpaymentPercentageError: null,
    noOfDownpaymentError: null,
    possessionPercentageError: null,
    planError: null,
    installmentAmountError: null,
    balloonInstallementTypeError: null,
    datedError: null,
  });
  useEffect(() => {
    if (props.saleOrderState !== null && props.saleOrderState !== undefined) {
      setState({
        ...state,
        SaleQuotationId: props.saleOrderState?.SaleQuotationId,
        NetAmount: props.saleOrderState?.NetAmount,
        AfterDiscountAmount: props.saleOrderState?.NetAmount,
        CurrencyTypeId: props.CurrencyTypeId,
        plotId: props.saleOrderState?.Plotid,
      });
    }
  }, [props.saleOrderState, props.CurrencyTypeId]);

  const { modal, toggle } = props;
  const onchange = (value, name) => {
    if (name == "discountedAmount") {
      if (value <= state.NetAmount) {
        let percentage = (value / state.NetAmount) * 100;
        setState({
          ...state,
          AfterDiscountAmount: state.NetAmount - value,
          Discount: percentage,
          discountedAmount: value,
        });
      }
    } else if (name == "Discount") {
      let discountAmount = (value / 100) * state.NetAmount;
      setState({
        ...state,
        AfterDiscountAmount: state.NetAmount - discountAmount,
        discountedAmount: discountAmount,
        Discount: value,
      });
    } else if (name == "DownPaymentPercentage" && value < 100) {
      setState({
        ...state,
        DownPaymentPercentage: value,
        PossessionPercentage: 20,
      });
    } else if (name == "NoOfBallonInstallment") {
      if (value > state?.RegexBallonInstallment) {
        swal({
          title: "Unsuccessful",
          text: `No of Ballon should be equal or less than ${state?.RegexBallonInstallment}`,
          type: "Warning",
          // buttons: true,
          dangerMode: true,
        }).then(function (isConfirm) {
          if (isConfirm) {
          } else {
          }
        });
      } else {
        setState({
          ...state,
          [name]: value,
        });
      }
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }
  };

  const [posts, setposts] = useState([]);
  useEffect(() => {
    if (props.PrintCustomPlan !== null && props.PrintCustomPlan !== undefined) {
      setposts(props.PrintCustomPlan);
    }
  }, [props.PrintCustomPlan]);

  const numberWithCommas = (arr) => {
    if (arr?.length > 0) {
      let result = arr.map((item) => {
        item.Amount = item?.Amount?.toLocaleString("en-US");
        return item;
      });
      return result;
    }
  };

  // const prindoc = (e) => {
  //   const doc = new jsPDF();
  //   let d = new Date().toISOString().split("T")[0];
  //   var date = moment(d).format("DD-MM-YYYY");
  //   doc.addImage(PalmDreamLogo, "JPEG", 0, 8, 90, 25);
  //   doc.addImage(KGCPLogo, "JPEG", 165, 8, 20, 20);
  //   doc.save("CustomPaymentSchedule.pdf");
  // };
  const printDocument = (e) => {
    let d = new Date().toISOString().split("T")[0];
    var date = moment(d).format("DD-MM-YYYY");
    const doc = new jsPDF();
    doc.addImage(PalmDreamLogo, "JPEG", 0, 8, 90, 25);
    doc.addImage(KGCPLogo, "JPEG", 165, 8, 20, 20);
    // doc.setTextColor(179, 107, 0);
    doc.setFontSize(14);
    doc.text("Custom Payment Schedule", 75, 50);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Date: " + date, 15, 50);
    doc.setFontSize(11);
    // doc.text("Client Details", 15, 58);
    // doc.autoTable({
    //   theme: "grid",
    //   body: [
    //     ["Client Name", props.state?.user_name],
    //     ["Plot No", `${props.state.Sector_Name}-${props.state?.Plot_no}`],
    //     ["SQ.YDS", props.state?.CategoryName],
    //   ],
    //   margin: { top: 60, bottom: 10 },
    //   styles: { lineColor: 10, cellWidth: 91 },
    // });
    //  doc.setTextColor(179, 107, 0);

    // doc.text("Client Details:", 15, 75);
    //  doc.text("Amount Details:", 105, 75);

    doc.autoTable({
      theme: "grid",
      body: [
        ["Client Name", " ", props?.saleOrderState?.user_name],
        [
          "Plot No",
          " ",
          `${props?.saleOrderState?.Plot_no}`,
          " ",
          // "Possession Amount",
          // props.posts[props.posts.length - 2].Amount,
        ],
        [
          "SQ.YDS",
          " ",
          props?.saleOrderState?.CategoryName,
          " ",
          // "Downpayment Amount",
          // props.posts[1].Amount,
        ],
        [
          "Gross Amount",
          " ",
          props?.saleOrderState?.NetAmount?.toLocaleString("en-US"),
          // props?.saleOrderState?.GrossAmount?.toLocaleString("en-US"),
          //comment because raheel said data swap

          "",

          // "Downpayment Amount",
          // props.posts[1].Amount,
        ],
        [
          "Discount",
          parseFloat(state?.Discount)?.toFixed(2) + "%",
          state?.discountedAmount?.toLocaleString("en-US"),
          "",
          // "Downpayment Amount",
          // props.posts[1].Amount,
        ],
        //  ```[``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````` // [
        //   "Sold Amount",
        //   " ",

        //   state?.AfterDiscountAmount?.toLocaleString("en-US"),
        //   " ",
        //   // "Downpayment Amount",
        //   // props.posts[1].Amount,
        // ],``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
        // [
        //   "Extra Charges",
        //   `${
        //     props?.saleOrderState?.ExtraChargesPercentage == null
        //       ? "0%"
        //       : props?.saleOrderState?.ExtraChargesPercentage + "%"
        //   }`,

        //   " ",
        //   // "Downpayment Amount",
        //   // props.posts[1].Amount,
        // ],

        [
          "Net Amount",
          " ",
          state?.AfterDiscountAmount?.toLocaleString("en-US"),
          // props?.saleOrderState?.NetAmount?.toLocaleString("en-US"),
          //comment because raheel said data swap
          " ",
          // "Downpayment Amount",
          // props.posts[1].Amount,
        ],
      ],
      margin: { top: 60 },
      styles: { lineColor: 80, fontStyle: "bold" },
    });
    if (e?.grandTotalAmount !== undefined && e?.grandTotalAmount !== null) {
      doc.autoTable({
        theme: "grid",
        columns: columnsTotal.map((col) => ({ ...col, dataKey: col.field })),
        body: numberWithCommas(e?.grandTotalAmount),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }

    if (e?.downpaymentStages !== undefined && e?.downpaymentStages !== null) {
      doc.autoTable({
        theme: "grid",
        columns: columnsDownpayment.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: numberWithCommas(e?.downpaymentStages),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#8CBC4B"],
          textColor: ["#fff"],
        },
      });
    }
    if (e?.installmentStages !== undefined && e?.installmentStages !== null) {
      doc.autoTable({
        theme: "grid",
        columns: columns.map((col) => ({ ...col, dataKey: col.field })),
        body: numberWithCommas(e?.installmentStages),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }
    if (e?.ballonStages !== undefined && e?.ballonStages !== null) {
      doc.autoTable({
        theme: "grid",
        columns: columnsBallon.map((col) => ({ ...col, dataKey: col.field })),
        body: numberWithCommas(e?.ballonStages),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }
    if (e?.PossessionStage !== undefined && e?.PossessionStage !== null) {
      doc.autoTable({
        theme: "grid",
        columns: columnsPossesion.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: numberWithCommas(e?.PossessionStage),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }
    if (e?.extraChargesStage !== undefined && e?.extraChargesStage !== null) {
      doc.autoTable({
        theme: "grid",
        columns: columnsextraChargesStage.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: numberWithCommas(e?.extraChargesStage),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }

    doc.setFontSize(10);
    doc.setFontSize(10);
    doc.autoTable({
      theme: "grid",
      body: [
        ["", "", "", ""],

        [
          "Developer Authorize Sign:________________",
          "",
          "",
          "Applicant Sign:________________",
        ],
      ],

      //margin: { top: 60 },
      styles: { lineColor: "#fff", cellWidth: 45 },
    });

    doc.save("CustomPaymentSchedule.pdf");
  };

  // const printDocument = (e) => {
  //   let date = new Date().toISOString().split("T")[0];
  //   const doc = new jsPDF();
  //   doc.addImage(PalmDreamLogo, "JPEG", 0, 8, 90, 25);
  //   doc.addImage(KGCPLogo, "JPEG", 165, 8, 30, 20);
  //   doc.setTextColor(179, 107, 0);
  //   doc.text("Payment Schedule", 75, 50);
  //   doc.setFontSize(10);
  //   doc.setTextColor(0, 0, 0);
  //   doc.text("Date: " + date, 168, 50);
  //   doc.setFontSize(11);
  //   // doc.text("Client Details", 15, 58);
  //   // doc.autoTable({
  //   //   theme: "grid",
  //   //   body: [
  //   //     ["Client Name", props.state?.user_name],
  //   //     ["Plot No", `${props.state.Sector_Name}-${props.state?.Plot_no}`],
  //   //     ["SQ.YDS", props.state?.CategoryName],
  //   //   ],
  //   //   margin: { top: 60, bottom: 10 },
  //   //   styles: { lineColor: 10, cellWidth: 91 },
  //   // });
  //   doc.setTextColor(179, 107, 0);
  //   doc.setFontSize(12);
  //   doc.text("Client Details:", 15, 75);
  //   doc.text("Amount Details:", 105, 75);

  //   // doc.autoTable({
  //   //   theme: "grid",
  //   //   body: [
  //   //     [
  //   //       "Client Name",
  //   //       props.saleOrderState?.user_name,
  //   //       "NetAmount",
  //   //       props.saleOrderState?.NetAmount,
  //   //     ],
  //   //     [
  //   //       "Plot No",
  //   //       `${props.saleOrderState?.Sector_Name}-${props.saleOrderState?.Plot_no}`,
  //   //       "Downpayment Amount",
  //   //       `${state?.DownPaymentAmount}`,
  //   //     ],
  //   //     [
  //   //       "",
  //   //       "",
  //   //       "After Discount Amount",
  //   //       `${state?.AfterDiscountAmount?.toFixed(2)}`,
  //   //     ],
  //   //     ["", "", "Discount Percentage", `${state?.Discount}`],
  //   //   ],
  //   //   margin: { top: 80, bottom: 10 },
  //   //   styles: { lineColor: 10, cellWidth: 45 },
  //   // });
  //   doc.autoTable({
  //     theme: "grid",
  //     columns: columns.map((col) => ({ ...col, dataKey: col.field })),
  //     body: e,
  //     styles: { lineColor: 10 },
  //   });
  //   doc.setFontSize(10);
  //   doc.text("Applicant Sign:________________", 140, 220);
  //   doc.setFontSize(10);
  //   doc.text("Developer Authorize Sign:________________", 15, 220);
  //   doc.save("PaymentScheduleCustom.pdf");
  // };

  // const printDocument = (e) => {
  //   let date = new Date().toISOString().split("T")[0];
  //   const doc = new jsPDF();
  //   doc.addImage(PalmDreamLogo, "JPEG", 0, -10, 210, 50);
  //   doc.text("Payment Schedule", 85, 50);
  //   doc.setFontSize(10);
  //   doc.text("Date: " + date, 168, 50);
  //   doc.setFontSize(11);
  //   doc.text("Client Details", 15, 58);
  //   // doc.autoTable({
  //   //   theme: "grid",
  //   //   body: [
  //   //     ["Client Name", props.state?.user_name],
  //   //     ["Plot No", `${props.state.Sector_Name}-${props.state?.Plot_no}`],
  //   //     ["SQ.YDS", props.state?.CategoryName],
  //   //   ],
  //   //   margin: { top: 60, bottom: 10 },
  //   //   styles: { lineColor: 10, cellWidth: 91 },
  //   // });
  //   doc.setFontSize(11);
  //   doc.text("Amount Details", 15, 88);
  //   // doc.autoTable({
  //   //   theme: "grid",
  //   //   body: [
  //   //     ["NetAmount", props.posts[props.posts.length - 1].Amount],
  //   //     ["Possession Amount", props.posts[props.posts.length - 2].Amount],
  //   //     ["Downpayment Amount", props.posts[1].Amount],
  //   //   ],
  //   //   styles: { lineColor: 10, cellWidth: 91 },
  //   // });
  //   doc.autoTable({
  //     theme: "grid",
  //     columns: columns.map((col) => ({ ...col, dataKey: col.field })),
  //     body: e,
  //     styles: { lineColor: 10 },
  //   });
  //   doc.setFontSize(10);
  //   doc.text("Applicant Sign:________________", 140, 200);
  //   doc.setFontSize(10);
  //   doc.text("Developer Authorize Sign:________________", 15, 200);
  //   doc.save("PaymentSchedile.pdf");
  // };

  const Print = () => {
    if (state.disabled == false) {
      setError({
        ...error,
        discounPercentageError: validate("required", state.Discount),
        downpaymentPercentageError: validate(
          "required",
          state.DownPaymentPercentage
        ),
        noOfDownpaymentError: validate("required", state.NoOfDownPayment),
        possessionPercentageError: validate(
          "required",
          state.PossessionPercentage
        ),
        planError: validate("required", state.Plan),
        installmentAmountError: validate("required", state.InstallmentAmount),
        balloonInstallementTypeError: validate(
          "required",
          state.BaloonInstallmentType
        ),
        datedError: validate("required", state.Dated),
      });
      if (
        state.Discount !== "" &&
        state.DownPaymentPercentage !== "" &&
        state.NoOfDownPayment !== "" &&
        state.PossessionPercentage !== "" &&
        state.Plan !== "" &&
        state.InstallmentAmount !== "" &&
        state.BaloonInstallmentType !== "" &&
        state.Dated !== "" &&
        dateState.length == formedArr.length
      ) {
        let body = {
          plotId: parseInt(state.plotId),
          SaleQuotationId: parseInt(state.SaleQuotationId),
          NetAmount: parseFloat(state.NetAmount),
          Discount: parseFloat(state.Discount),
          DownPaymentPercentage: parseFloat(state.DownPaymentPercentage),
          NoOfDownPayment: parseFloat(state.NoOfDownPayment),
          NoOfInstallment: parseFloat(state.NoOfInstallment),
          InstallmentPercentage: parseFloat(state.InstallmentPercentage),
          NoOfBallonInstallment: parseFloat(state.NoOfBallonInstallment),
          BallonInstallmentPercentage: parseFloat(
            state.BallonInstallmentPercentage
          ),
          PossessionPercentage: parseFloat(state.PossessionPercentage),
          Dated: state.Dated,
          BaloonInstallmentType: state.BaloonInstallmentType,

          CurrencyTypeId: state.CurrencyTypeId,
          downpaymentDate: dateState,
        };
        props.getCustomSaleOrderPlan(body, onSuccessPrint, onFailurePrint);
      }
    } else if (state.disabled == true) {
      setError({
        ...error,
        discounPercentageError: validate("required", state.Discount),
        downpaymentPercentageError: validate(
          "required",
          state.DownPaymentPercentage
        ),
        noOfDownpaymentError: validate("required", state.NoOfDownPayment),
        possessionPercentageError: validate(
          "required",
          state.PossessionPercentage
        ),
        planError: validate("required", state.Plan),
        installmentAmountError: validate("required", state.InstallmentAmount),
        balloonInstallementTypeError: "",
        // balloonInstallementTypeError: validate(
        //   "required",
        //   state.BaloonInstallmentType
        // ),
        datedError: validate("required", state.Dated),
      });
      if (
        state.Discount !== "" &&
        state.DownPaymentPercentage !== "" &&
        state.NoOfDownPayment !== "" &&
        state.PossessionPercentage !== "" &&
        state.Plan !== "" &&
        state.InstallmentAmount !== "" &&
        //state.BaloonInstallmentType!==""  &&
        state.Dated !== "" &&
        dateState.length == formedArr.length
      ) {
        let body = {
          plotId: parseInt(state.plotId),
          SaleQuotationId: parseInt(state.SaleQuotationId),
          NetAmount: parseFloat(state.NetAmount),
          Discount: parseFloat(state.Discount),
          DownPaymentPercentage: parseFloat(state.DownPaymentPercentage),
          NoOfDownPayment: parseFloat(state.NoOfDownPayment),
          NoOfInstallment: parseFloat(state.NoOfInstallment),
          InstallmentPercentage: parseFloat(state.InstallmentPercentage),
          NoOfBallonInstallment: 0,
          BallonInstallmentPercentage: 0,
          PossessionPercentage: parseFloat(state.PossessionPercentage),
          Dated: state.Dated,
          //BaloonInstallmentType:(state.BaloonInstallmentType)

          CurrencyTypeId: state.CurrencyTypeId,
          downpaymentDate: dateState,
        };
        props.getCustomSaleOrderPlan(body, onSuccessPrint, onFailurePrint);
      }
    }
  };
  const onSuccessPrint = (e) => {
    printDocument(e);
    // prindoc(e);
  };
  const onFailurePrint = (e) => {
    swal({
      title: "Unsuccessful",
      text: e,
      type: "Warning",
      // buttons: true,
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
      } else {
      }
    });
  };
  const Generate = () => {
    if (state.disabled == false) {
      setError({
        ...error,
        discounPercentageError: validate("required", state.Discount),
        downpaymentPercentageError: validate(
          "required",
          state.DownPaymentPercentage
        ),
        noOfDownpaymentError: validate("required", state.NoOfDownPayment),
        possessionPercentageError: validate(
          "required",
          state.PossessionPercentage
        ),
        planError: validate("required", state.Plan),
        installmentAmountError: validate("required", state.InstallmentAmount),
        balloonInstallementTypeError: validate(
          "required",
          state.BaloonInstallmentType
        ),
        datedError: validate("required", state.Dated),
      });

      if (
        state.Discount !== "" &&
        state.DownPaymentPercentage !== "" &&
        state.NoOfDownPayment !== "" &&
        state.PossessionPercentage !== "" &&
        state.Plan !== "" &&
        state.InstallmentAmount !== "" &&
        state.BaloonInstallmentType !== "" &&
        state.Dated !== "" &&
        dateState.length == formedArr.length
      ) {
        let body = {
          SaleQuotationId: parseInt(state.SaleQuotationId),
          NetAmount: parseFloat(state.NetAmount),
          Discount: parseFloat(state.Discount),
          DownPaymentPercentage: parseFloat(state.DownPaymentPercentage),
          NoOfDownPayment: parseFloat(state.NoOfDownPayment),
          NoOfInstallment: parseFloat(state.NoOfInstallment),
          InstallmentPercentage: parseFloat(state.InstallmentPercentage),
          NoOfBallonInstallment: parseFloat(state.NoOfBallonInstallment),
          BallonInstallmentPercentage: parseFloat(
            state.BallonInstallmentPercentage
          ),
          PossessionPercentage: parseFloat(state.PossessionPercentage),
          Dated: state.Dated,
          BaloonInstallmentType: state.BaloonInstallmentType,
          saleOrderType: "Custom",
          CurrencyTypeId: state.CurrencyTypeId,
          downpaymentDate: dateState,
        };
        props.CustomPlanGenerateMiddleware(
          body,
          onSuccessSalesOrder,
          onFailureSalesOrder
        );
      }
    } else if (state.disabled == true) {
      setError({
        ...error,
        discounPercentageError: validate("required", state.Discount),
        downpaymentPercentageError: validate(
          "required",
          state.DownPaymentPercentage
        ),
        noOfDownpaymentError: validate("required", state.NoOfDownPayment),
        possessionPercentageError: validate(
          "required",
          state.PossessionPercentage
        ),
        planError: validate("required", state.Plan),
        installmentAmountError: validate("required", state.InstallmentAmount),
        balloonInstallementTypeError: "",
        datedError: validate("required", state.Dated),
      });

      if (
        state.Discount !== "" &&
        state.DownPaymentPercentage !== "" &&
        state.NoOfDownPayment !== "" &&
        state.PossessionPercentage !== "" &&
        state.Plan !== "" &&
        state.InstallmentAmount !== "" &&
        //state.BaloonInstallmentType!==""  &&
        state.Dated !== "" &&
        dateState.length == formedArr.length
      ) {
        let body = {
          SaleQuotationId: parseInt(state.SaleQuotationId),
          NetAmount: parseFloat(state.NetAmount),
          Discount: parseFloat(state.Discount),
          DownPaymentPercentage: parseFloat(state.DownPaymentPercentage),
          NoOfDownPayment: parseFloat(state.NoOfDownPayment),
          NoOfInstallment: parseFloat(state.NoOfInstallment),
          InstallmentPercentage: parseFloat(state.InstallmentPercentage),
          NoOfBallonInstallment: 0,
          BallonInstallmentPercentage: 0,
          PossessionPercentage: parseFloat(state.PossessionPercentage),
          Dated: state.Dated,

          saleOrderType: "Custom",
          CurrencyTypeId: state.CurrencyTypeId,
          downpaymentDate: dateState,
        };
        props.CustomPlanGenerateMiddleware(
          body,
          onSuccessSalesOrder,
          onFailureSalesOrder
        );
      }
    }
  };

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
  const onFailureSalesOrder = (e) => {
    swal({
      title: "Unsuccessful",
      text: e,
      type: "Warning",
      // buttons: true,
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
      } else {
      }
    });
  };

  // useEffect(() => {
  //   let discountAmount = (state.Discount / 100) * state.NetAmount;
  //   setState({
  //     ...state,
  //     AfterDiscountAmount: state.NetAmount - discountAmount,
  //     //discountedAmount: discountAmount,
  //   });
  // }, [state.Discount]);

  // useEffect(() => {
  //   let percentage = (state.discountedAmount / state.NetAmount) * 100;
  //   setState({
  //     ...state,
  //     AfterDiscountAmount: state.NetAmount - state.discountedAmount,
  //     Discount: percentage,
  //     // discountedAmount: discountAmount,
  //   });
  // }, [state.discountedAmount]);

  // changes in discountedAmount and Downpayment percentage
  useEffect(() => {
    if (
      state.DownPaymentPercentage !== "" &&
      state.DownPaymentPercentage >= 10 &&
      state.DownPaymentPercentage <= 80 &&
      state.PossessionPercentage !== "" &&
      state.PossessionPercentage >= 10
    ) {
      let afterDownPaymentPercentage =
        (state.DownPaymentPercentage / 100) * state.AfterDiscountAmount;
      let afterPossessionPercentage =
        (state.PossessionPercentage / 100) * state.AfterDiscountAmount;

      let installmentPercentage =
        100 - state.DownPaymentPercentage - state.PossessionPercentage;

      setState({
        ...state,
        PossessionAmount: afterPossessionPercentage,
        TempNetAmount:
          state.AfterDiscountAmount -
          afterDownPaymentPercentage -
          afterPossessionPercentage,
        DownPaymentAmount: afterDownPaymentPercentage,
        InstallmentPercentage: installmentPercentage,
      });
      //NoOfDownPayment:1 because percentage is effected on this
      // DownPaymentAmount:afterDownPaymentPercentage-calculatedValue.tokenMoney})
    } else if (state.DownPaymentPercentage == 100) {
      setState({
        ...state,
        PossessionAmount: 0,
        TempNetAmount: 0,
        DownPaymentAmount: state.AfterDiscountAmount,
        InstallmentPercentage: 0,
        PossessionPercentage: 0,
      });

      // NoOfDownPayment:1 because percentage is effected on this
      //  DownPaymentAmount:state.AfterDiscountAmount-calculatedValue.tokenMoney})
    } else if (
      state.DownPaymentPercentage > 100 ||
      state.DownPaymentPercentage > 80
    ) {
      setState({
        ...state,
        PossessionAmount: 0,
        TempNetAmount: 0,
        DownPaymentAmount: 0,
      });
    }
  }, [
    state.AfterDiscountAmount,
    state.DownPaymentPercentage,
    state.PossessionPercentage,
  ]);
  //changes in downpayment installment
  useEffect(() => {
    if (state.NoOfDownPayment !== "") {
      // start multiple downpayment dates show
      let numberOfArray = state.NoOfDownPayment;

      let dataofArray = new Array(parseInt(numberOfArray))
        .fill("")
        .map((_, i) => i + 1);

      setFormedArr(dataofArray);
      // end multiple downpayment dates show

      let downpaymentInstallmentAmount =
        state.DownPaymentAmount / state.NoOfDownPayment;
      setState({
        ...state,
        DownPaymentInstallmentAmount: downpaymentInstallmentAmount,
      });
    }
  }, [state.NoOfDownPayment, state.DownPaymentAmount]);

  //multiple downpayment dates set function
  const [dateState, setdateState] = useState([]);
  const downpaymentDates = (e, i) => {
    setState({ ...state, Dated: "" });
    for (let k = 0; k < state.NoOfDownPayment; k++) {
      if (i == k) {
        const temp = dateState;
        temp[i] = e;
        setdateState(temp);
      } else if (
        dateState.length > 0 &&
        dateState.length == state.NoOfDownPayment &&
        i < dateState.length - 1
      ) {
        for (let j = i; j < state.NoOfDownPayment - 1; j++) {
          const temp = dateState;
          temp[j + 1] = "";
          setdateState(temp);
        }
      }
    }
  };

  //Change in months
  useEffect(() => {
    if (state.Plan !== "") {
      if (state.Plan == "1") {
        setState({
          ...state,
          TotalBalloonAmount: 0,
          NoOfInstallment: state.Plan,
          PerBalloonInst: 0,
          NoOfBallonInstallment: 0,
          BallonInstallmentPercentage: 0,
        });
      } else {
        let installmentAmount = state.TempNetAmount / state.Plan;
        setState({
          ...state,
          InstallmentAmount: installmentAmount,
          NoOfInstallment: state.Plan,
          BaloonInstallmentType: "",
          BallonInstallmentPercentage: 0, //totalBalloonAmount:0,perBalloonInst:0,noOfBalloonInst:0
        });
      }
    }
  }, [state.Plan, state.TempNetAmount]);
  // useEffect(() => {

  // }, [state.NoOfDownPayment]);

  const handleCheck = ({ target }) => {
    if (target.checked) {
      setState({
        ...state,
        checkBox: true,
        disabled: false,
        NoOfInstallment: 0,
        InstallmentAmount: 0,
        NoOfBallonInstallment: 0,
        BallonInstallmentPercentage: 0,
        PerBalloonInst: 0,
        TotalBalloonAmount: 0,
        Plan: "",
        BaloonInstallmentType: "",
      });
    } else {
      setState({
        ...state,
        checkBox: false,
        disabled: true,
        NoOfInstallment: 0,
        InstallmentAmount: 0,
        BallonInstallmentPercentage: 0,
        NoOfBallonInstallment: 0,
        PerBalloonInst: 0,
        TotalBalloonAmount: 0,
        Plan: "",
        BaloonInstallmentType: "",
      });
    }
  };

  //change in balloon installment  type
  useEffect(() => {
    if (state.BaloonInstallmentType == "Yearly" && state.Plan == "12") {
      setState({
        ...state,
        NoOfBallonInstallment: 0,
        RegexBallonInstallment: 0,
      });
    } else if (state.BaloonInstallmentType == "Yearly" && state.Plan == "24") {
      setState({
        ...state,
        NoOfBallonInstallment: 1,
        RegexBallonInstallment: 1,
      });
    } else if (state.BaloonInstallmentType == "Yearly" && state.Plan == "36") {
      setState({
        ...state,
        NoOfBallonInstallment: 2,
        RegexBallonInstallment: 2,
      });
    } else if (state.BaloonInstallmentType == "Yearly" && state.Plan == "48") {
      setState({
        ...state,
        NoOfBallonInstallment: 3,
        RegexBallonInstallment: 3,
      });
    } else if (state.BaloonInstallmentType == "Yearly" && state.Plan == "60") {
      setState({
        ...state,
        NoOfBallonInstallment: 4,
        RegexBallonInstallment: 4,
      });
    } else if (
      state.BaloonInstallmentType == "HalfYearly" &&
      state.Plan == "12"
    ) {
      setState({
        ...state,
        NoOfBallonInstallment: 1,
        RegexBallonInstallment: 1,
      });
    } else if (
      state.BaloonInstallmentType == "HalfYearly" &&
      state.Plan == "24"
    ) {
      setState({
        ...state,
        NoOfBallonInstallment: 3,
        RegexBallonInstallment: 3,
      });
    } else if (
      state.BaloonInstallmentType == "HalfYearly" &&
      state.Plan == "36"
    ) {
      setState({
        ...state,
        NoOfBallonInstallment: 5,
        RegexBallonInstallment: 5,
      });
    } else if (
      state.BaloonInstallmentType == "HalfYearly" &&
      state.Plan == "48"
    ) {
      setState({
        ...state,
        NoOfBallonInstallment: 7,
        RegexBallonInstallment: 7,
      });
    } else if (
      state.BaloonInstallmentType == "HalfYearly" &&
      state.Plan == "60"
    ) {
      setState({
        ...state,
        NoOfBallonInstallment: 9,
        RegexBallonInstallment: 9,
      });
    } else if (
      state.BaloonInstallmentType == "Quarterly" &&
      state.Plan == "12"
    ) {
      setState({
        ...state,
        NoOfBallonInstallment: 3,
        RegexBallonInstallment: 3,
      });
    } else if (
      state.BaloonInstallmentType == "Quarterly" &&
      state.Plan == "24"
    ) {
      setState({
        ...state,
        NoOfBallonInstallment: 7,
        RegexBallonInstallment: 7,
      });
    } else if (
      state.BaloonInstallmentType == "Quarterly" &&
      state.Plan == "36"
    ) {
      setState({
        ...state,
        NoOfBallonInstallment: 11,
        RegexBallonInstallment: 11,
      });
    } else if (
      state.BaloonInstallmentType == "Quarterly" &&
      state.Plan == "48"
    ) {
      setState({
        ...state,
        NoOfBallonInstallment: 15,
        RegexBallonInstallment: 15,
      });
    } else if (
      state.BaloonInstallmentType == "Quarterly" &&
      state.Plan == "60"
    ) {
      setState({
        ...state,
        NoOfBallonInstallment: 19,
        RegexBallonInstallment: 19,
      });
    }
  }, [state.BaloonInstallmentType, state.NoOfInstallment]);

  //Change in installmentAmount and in BaloonInstallmentType
  useEffect(() => {
    if (
      state.InstallmentAmount !== "" &&
      state.Plan !== "" &&
      state.disabled == false
    ) {
      //     else if(state.Plan=="12"  )
      //     {

      //let Months=
      if (state.BaloonInstallmentType !== "") {
        let noOfMonthlyInst = state.Plan - state.NoOfBallonInstallment;
        let installmentAmount = state.InstallmentAmount * noOfMonthlyInst;

        if (installmentAmount > state.TempNetAmount) {
        } else {
          let totalBalloonAmount = state.TempNetAmount - installmentAmount;
          // let noOfBalloonInst=1;
          let perBalloonInst = totalBalloonAmount / state.NoOfBallonInstallment;
          //NoOfInstallment:noOfMonthlyInst in setstate
          setState({
            ...state,
            TotalBalloonAmount: totalBalloonAmount,
            NoOfInstallment: noOfMonthlyInst,
            PerBalloonInst: perBalloonInst,
          });
          //  }
        }
      } else {
        setState({
          ...state,
          TotalBalloonAmount: 0,
          NoOfInstallment: 0,
          PerBalloonInst: 0,
          NoOfBallonInstallment: 0,
          BallonInstallmentPercentage: 0,
        });
      }
      // else if(calculatedValue.paymentPlan=="24")
      // {
      //  let installmentAmount= calculatedValue.installmentAmount*22;

      //  if(installmentAmount>calculatedValue.netAmount)
      //  {
      //   console.log("installmentAmount Is  larger")
      //  }
      //  else{
      //    let totalBalloonAmount=calculatedValue.netAmount-installmentAmount;
      //   let noOfBalloonInst=2;
      //   let perBalloonInst=totalBalloonAmount/noOfBalloonInst;
      //   let noOfMonthlyInst=calculatedValue.paymentPlan-noOfBalloonInst;
      //   setCalculatedValue({...calculatedValue,noOfMonthlyInst:noOfMonthlyInst,totalBalloonAmount:totalBalloonAmount,noOfBalloonInst:noOfBalloonInst,perBalloonInst:perBalloonInst})
      //  }
      // }
      // else if(calculatedValue.paymentPlan=="36")
      // {
      //  let installmentAmount= calculatedValue.installmentAmount*33;

      //  if(installmentAmount>calculatedValue.netAmount)
      //  {
      //   console.log("installmentAmount Is  larger")
      //  }
      //  else{
      //    let totalBalloonAmount=calculatedValue.netAmount-installmentAmount;
      //    let noOfBalloonInst=3;
      //    let perBalloonInst=totalBalloonAmount/noOfBalloonInst;
      //    let noOfMonthlyInst=calculatedValue.paymentPlan-noOfBalloonInst;
      //   setCalculatedValue({...calculatedValue,noOfMonthlyInst:noOfMonthlyInst,totalBalloonAmount:totalBalloonAmount,noOfBalloonInst:noOfBalloonInst,perBalloonInst:perBalloonInst})
      //  }

      // }
      // else if(calculatedValue.paymentPlan=="48")
      // {
      //  let installmentAmount= calculatedValue.installmentAmount*44;

      //  if(installmentAmount>calculatedValue.netAmount)
      //  {
      //   console.log("installmentAmount Is  larger")
      //  }
      //  else{
      //    let totalBalloonAmount=calculatedValue.netAmount-installmentAmount;
      //    let noOfBalloonInst=4;
      //    let perBalloonInst=totalBalloonAmount/noOfBalloonInst;
      //    let noOfMonthlyInst=calculatedValue.paymentPlan-noOfBalloonInst;
      //   setCalculatedValue({...calculatedValue,noOfMonthlyInst:noOfMonthlyInst,totalBalloonAmount:totalBalloonAmount,noOfBalloonInst:noOfBalloonInst,perBalloonInst:perBalloonInst})

      //  }

      // }
      // else if(calculatedValue.paymentPlan=="60")
      // {
      //  let installmentAmount= calculatedValue.installmentAmount*55;

      //  if(installmentAmount>calculatedValue.netAmount)
      //  {
      //   console.log("installmentAmount Is  larger")
      //  }
      //  else{
      //    let totalBalloonAmount=calculatedValue.netAmount-installmentAmount;
      //    let noOfBalloonInst=5;
      //    let perBalloonInst=totalBalloonAmount/noOfBalloonInst;
      //    let noOfMonthlyInst=calculatedValue.paymentPlan-noOfBalloonInst;
      //   setCalculatedValue({...calculatedValue,noOfMonthlyInst:noOfMonthlyInst,totalBalloonAmount:totalBalloonAmount,noOfBalloonInst:noOfBalloonInst,perBalloonInst:perBalloonInst})
      //    console.log("this is installment amount",installmentAmount);
      //    console.log("this is balloon amount",totalBalloonAmount)

      //  }

      // }
    }
  }, [state.InstallmentAmount, state.NoOfBallonInstallment]);

  useEffect(() => {
    let ballonPercentage =
      (state.TotalBalloonAmount / state.AfterDiscountAmount) * 100;
    let installmentPercentage =
      100 -
      ballonPercentage -
      state.DownPaymentPercentage -
      state.PossessionPercentage;
    setState({
      ...state,
      BallonInstallmentPercentage: ballonPercentage,
      InstallmentPercentage: installmentPercentage,
    });
  }, [state.TotalBalloonAmount]);


  const onSuccess = () => {
    props.toggle(true);
    let body = {
      SaleQuotationId: parseInt(state.SaleQuotationId),
      NetAmount: parseFloat(state.NetAmount),
      Discount: parseFloat(state.Discount),
      DownPaymentPercentage: parseFloat(state.DownPaymentPercentage),
      NoOfDownPayment: parseFloat(state.NoOfDownPayment),
      NoOfInstallment: parseFloat(state.NoOfInstallment),
      InstallmentPercentage: parseFloat(state.InstallmentPercentage),
      NoOfBallonInstallment: parseFloat(state.NoOfBallonInstallment),
      BallonInstallmentPercentage: parseFloat(
        state.BallonInstallmentPercentage
      ),
      PossessionPercentage: parseFloat(state.PossessionPercentage),
      Dated: state.Dated,
      BaloonInstallmentType: state.BaloonInstallmentType,
    };
    props.customfunction(body);
  };
  const onFailure = () => {};

  return (
    <Modal size="xl" centered={true} isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} style={{ backgroundColor: "#054D87" }}>
        <h2 style={{ color: "white", textAlign: "center" }}>
          Custom payment modal
        </h2>
      </ModalHeader>
      <ModalBody>
        <Row className="mt-2">
          <Col lg="4" md="4" sm="4" xs="4">
            <label className="form-control-label" for="input-NetAmount">
              Net Amount
            </label>
            <input
              value={state?.NetAmount}
              disabled
              onChange={(e) => onchange(e.target.value, "NetAmount")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              type="text"
              id="input-NetAmount"
              className="form-control"
            ></input>
          </Col>
          <Col lg="4" md="4" sm="4" xs="4">
            <label className="form-control-label" for="input-Discount">
              Discount Percentage
            </label>
            <input
              value={state?.Discount}
              // onChange={(e) => onchange(e.target.value, "Discount")}
              // onKeyPress={(event) => {
              //   if (!/[0-9.]/.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}
              onChange={(e) => {
                // const regex = /\b([0-9.]|[1-4][0-9]|50)\b/;
                const regex = /\b([0-9.]|([1-9][0-9])|100)\b/;
                if (e.target.value === "" || regex.test(e.target.value)) {
                  // setSaleOrder({ ...saleOrder, Discount: e.target.value });
                  onchange(e.target.value, "Discount");
                }
              }}
              type="text"
              id="input-Discount"
              className="form-control"
            ></input>
            {/* <Input
              type="select"
              value={state.Discount}
              onChange={(e) => onchange(e.target.value, "Discount")}
            >
              {arrDiscountPercentage.map((i) => {
                return <option value={i}>{i}</option>;
              })}
            </Input> */}
            {error.discounPercentageError !== "" &&
              error.discounPercentageError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {error.discounPercentageError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
          </Col>
          <Col lg="4" md="4" sm="4" xs="4">
            <label className="form-control-label" for="input-Discount">
              After Discount Amount
            </label>
            <input
              disabled
              value={state?.AfterDiscountAmount?.toFixed(2)}
              type="text"
              id="input-DownPaymentPercentage"
              className="form-control"
            ></input>
          </Col>
          <Col lg="4" md="4" sm="4" xs="4">
            <label className="form-control-label" for="input-Discount">
              Discounted Amount
            </label>
            <input
              // disabled
              onChange={(e) => onchange(e.target.value, "discountedAmount")}
              // value={state?.discountedAmount?.toFixed(2)}
              value={state.discountedAmount}
              type="text"
              id="input-DownPaymentPercentage"
              className="form-control"
            ></input>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg="4" md="4" sm="4" xs="4">
            <label
              className="form-control-label"
              for="input-DownPaymentPercentage"
            >
              DownPayment Percentage(10-80 or 100)
            </label>
            <input
              value={state?.DownPaymentPercentage}
              // onChange={(e) =>
              //   onchange(e.target.value, "DownPaymentPercentage")
              // }
              // onKeyPress={(event) => {
              //   if (!/[0-9.]/.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}
              onChange={(e) => {
                // const regex = /\b([0-9.]|[1-4][0-9]|50)\b/;
                const regex = /\b([0-9.]|([1-7][0-9])|100|80)\b/;
                if (e.target.value === "" || regex.test(e.target.value)) {
                  // setSaleOrder({ ...saleOrder, Discount: e.target.value });
                  onchange(e.target.value, "DownPaymentPercentage");
                }
              }}
              type="text"
              id="input-DownPaymentPercentage"
              className="form-control"
            ></input>
            {error.downpaymentPercentageError !== "" &&
              error.downpaymentPercentageError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {error.downpaymentPercentageError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
          </Col>
          <Col lg="4" md="4" sm="4" xs="4">
            <label
              className="form-control-label"
              for="input-DownPaymentPercentage"
            >
              DownPayment Amount
            </label>
            <input
              value={state?.DownPaymentAmount}
              disabled
              // onChange={(e) =>
              //   onchange(e.target.value, "DownPaymentPercentage")
              // }
              // onKeyPress={(event) => {
              //   if (!/[0-9]/.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}

              type="text"
              id="input-DownPaymentPercentage"
              className="form-control"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="4" xs="4">
            <label className="form-control-label" for="input-NoOfDownPayment">
              No Of DownPayment (1-3)
            </label>
            <input
              value={state?.NoOfDownPayment}
              onChange={(e) =>
                e.target.value <= 3
                  ? onchange(e.target.value, "NoOfDownPayment")
                  : e.preventDefault()
              }
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              min={3}
              type="text"
              id="input-NoOfDownPayment"
              className="form-control"
            ></input>
          </Col>
          {error.noOfDownpaymentError !== "" &&
            error.noOfDownpaymentError !== null && (
              <small style={{ marginTop: "2px" }}>
                <span style={{ color: "red" }}>
                  {error.noOfDownpaymentError}{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}

          <Col lg="4" md="4" sm="8" xs="12">
            <label className="form-control-label">
              DownPayment per Installment Amount{" "}
            </label>
            <Input
              type="text"
              placeholder=""
              disabled
              value={state?.DownPaymentInstallmentAmount.toFixed(2)}
            ></Input>
          </Col>
          {formedArr !== null && formedArr !== undefined && formedArr.length > 0
            ? formedArr.map((item, i) => {
                var today = new Date(dateState[i]);
                var day = today.getDate() + 1;
                var mon = new String(today.getMonth() + 1);
                var yr = today.getFullYear();
                var date = `${yr}-${mon}-${day < 10 ? `0${day}` : day}`;
                dateArr.push(date);
                return (
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label" for="input-username">
                      Down Payment Date {i + 1}{" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="date"
                      min={
                        i == 1
                          ? dateArr[i - 1]
                          : i == 2
                          ? dateArr[i - 1]
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
        </Row>
        <hr />
        <Row>
          <Col lg="4" md="4" sm="4" xs="4">
            <label
              className="form-control-label"
              for="input-PossessionPercentage"
            >
              Possession Percentage
            </label>
            <input
              value={state?.PossessionPercentage}
              onChange={(e) => onchange(e.target.value, "PossessionPercentage")}
              onKeyPress={(event) => {
                if (!/[0-9.]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              type="text"
              id="input-PossessionPercentage"
              className="form-control"
            ></input>
            {error.possessionPercentageError !== "" &&
              error.possessionPercentageError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {error.possessionPercentageError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
          </Col>

          <Col lg="4" md="4" sm="8" xs="12">
            <label className="form-control-label">Possession Amount</label>
            <Input
              type="text"
              disabled
              value={state.PossessionAmount.toFixed(2)}
            ></Input>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col lg="4" md="4" sm="4" xs="4">
            <label className="form-control-label" for="input-NoOfInstallment">
              Amount
            </label>
            <input
              value={state?.TempNetAmount}
              disabled
              // onChange={(e) => onchange(e.target.value, "NoOfInstallment")}
              // onKeyPress={(event) => {
              //   if (!/[0-9]/.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}

              type="text"
              id="input-NoOfInstallment"
              className="form-control"
            ></input>
          </Col>
          <Col lg="4" md="4" sm="4" xs="4">
            <label
              className="form-control-label"
              for="input-InstallmentPercentage"
            >
              Installment Percentage
            </label>
            <input
              disabled
              value={state?.InstallmentPercentage.toFixed(2)}
              // onChange={(e) =>
              //   onchange(e.target.value, "InstallmentPercentage")
              // }
              // onKeyPress={(event) => {
              //   if (!/[0-9]/.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}

              type="text"
              id="input-InstallmentPercentage"
              className="form-control"
            ></input>
          </Col>
          <Col lg="4" md="4" sm="6">
            <label className="form-control-label">Plan</label>
            <Input
              type="select"
              value={state.Plan}
              onChange={(e) => onchange(e.target.value, "Plan")}
            >
              <option value="">Select</option>
              <option value="1">1 Month</option>
              <option value="12">1 year</option>
              <option value="24">2 year</option>
              <option value="36">3 year</option>
              <option value="48">4 year</option>
              <option value="60">5 year</option>
            </Input>
            {error.planError !== "" && error.planError !== null && (
              <small style={{ marginTop: "2px" }}>
                <span style={{ color: "red" }}>
                  {error.planError}{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}
          </Col>
          <Col lg="4" md="4" sm="4" xs="4">
            <label className="form-control-label" for="input-NoOfInstallment">
              Per Installment Amount
            </label>
            <input
              value={state?.InstallmentAmount}
              disabled={state.disabled}
              onChange={(e) => onchange(e.target.value, "InstallmentAmount")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              type="text"
              id="input-NoOfInstallment"
              className="form-control"
            ></input>
            {error.installmentAmountError !== "" &&
              error.installmentAmountError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {error.installmentAmountError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
          </Col>
          <Col lg="4" md="4" sm="4" xs="4">
            <label className="form-control-label" for="input-NoOfInstallment">
              No Of Installments
            </label>
            <input
              value={state?.NoOfInstallment}
              disabled
              onChange={(e) => onchange(e.target.value, "InstallmentAmount")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              type="text"
              id="input-NoOfInstallment"
              className="form-control"
            ></input>
          </Col>

          {state.Plan == 1 ? null : (
            <Col lg="4" md="4" sm="4" xs="4">
              <label className="form-control-label"></label>
              <Input type="checkbox" onClick={handleCheck}></Input>
              <Label>Add Balloon Payment</Label>
            </Col>
          )}
          {/* <Col lg="2" md="2" sm="2">
                 
                  </Col>
       */}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="8" xs="12">
            <label className="form-control-label">Total Balloon Amount</label>
            <Input
              disabled={true}
              type="text"
              value={state?.TotalBalloonAmount.toFixed(2)}
            >
              {" "}
            </Input>
          </Col>

          <Col lg="4" md="4" sm="4" xs="4">
            <label
              className="form-control-label"
              for="input-BallonInstallmentPercentage"
            >
              Ballon Installment Percentage
            </label>
            <input
              disabled
              value={state?.BallonInstallmentPercentage.toFixed(2)}
              onChange={(e) =>
                onchange(e.target.value, "BallonInstallmentPercentage")
              }
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              type="text"
              id="input-BallonInstallmentPercentage"
              className="form-control"
            ></input>
          </Col>
          <Col lg="4" md="4" sm="4" xs="4">
            <label
              className="form-control-label"
              for="input-BallonInstallmentPercentage"
            >
              Ballon Installment Type
            </label>
            <Input
              disabled={
                state.Plan == 1 ? true : state.disabled == true ? true : false
              }
              type="select"
              value={state?.BaloonInstallmentType}
              onChange={(e) =>
                onchange(e.target.value, "BaloonInstallmentType")
              }
            >
              <option value="">Select</option>
              <option value="Yearly">Yearly</option>
              <option value="HalfYearly">Half Yearly</option>
              <option value="Quarterly">Quarterly</option>
            </Input>
            {error.balloonInstallementTypeError !== "" &&
              error.balloonInstallementTypeError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {error.balloonInstallementTypeError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
            {/* <input
             
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Enter Ballon Installment Percentage"
              type="text"
              id="input-BallonInstallmentPercentage"
              className="form-control"
            ></input>*/}
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="4" xs="4">
            <label
              className="form-control-label"
              for="input-NoOfBallonInstallment"
            >
              No Of Ballon Installment
            </label>
            <input
              value={state?.NoOfBallonInstallment}
              // disabled
              disabled={state.disabled}
              onChange={(e) =>
                onchange(e.target.value, "NoOfBallonInstallment")
              }
              // onKeyPress={(event) => {
              //   if (!`[0-${state?.RegexBallonInstallment}`.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}
              max={state.RegexBallonInstallment}
              type="text"
              id="input-NoOfBallonInstallment"
              className="form-control"
            ></input>
          </Col>
          <Col lg="4" md="4" sm="4" xs="4">
            <label
              className="form-control-label"
              for="input-NoOfBallonInstallment"
            >
              Per Ballon Installment Amount
            </label>
            <input
              disabled
              value={state?.PerBalloonInst.toFixed(2)}
              // onChange={(e) =>
              //   onchange(e.target.value, "NoOfBallonInstallment")
              // }
              // onKeyPress={(event) => {
              //   if (!/[0-9]/.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}

              type="text"
              id="input-NoOfBallonInstallment"
              className="form-control"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-date">
              Plan Start Date <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.Dated}
              min={dateState !== "" ? dateState[state.NoOfDownPayment - 1] : ""}
              onChange={(e) => onchange(e.target.value, "Dated")}
              type="date"
              id="input-date"
              className="form-control"
            ></input>
            {error.datedError !== "" && error.datedError !== null && (
              <small style={{ marginTop: "2px" }}>
                <span style={{ color: "red" }}>
                  {error.datedError}{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Row>
          <Col>
            <Button
              style={{ backgroundColor: "#015652  ", color: "white" }}
              onClick={Print}
            >
              Print
            </Button>
          </Col>
          <Col>
            <Button
              style={{ backgroundColor: "#015652  ", color: "white" }}
              onClick={Generate}
            >
              Generate
            </Button>
          </Col>
          <Col>
            <Button
              color="danger"
              //   style={{ backgroundColor: "red  ", color: "white" }}
              onClick={toggle}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </ModalFooter>
    </Modal>
  );
};
export default CustomPaymenModal;
