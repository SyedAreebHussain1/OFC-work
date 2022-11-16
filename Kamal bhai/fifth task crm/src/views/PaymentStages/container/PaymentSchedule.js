import React from "react";
import { Button } from "reactstrap";
import jsPDF from "jspdf";
import PalmDreamLogo from "../../SaleOrder/images/HIGH-RES-PNG-01-01.png";
import moment from "moment";
import KGCPLogo from "../../SaleOrder/images/KGCP-Logo.png";

const PaymentSchedule = (props) => {
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
  const columnsPossesion = [
    { title: "Possession", field: "Description" },
    { title: " ", field: "" },
    { title: "Date", field: "Date" },
    { title: "Amount", field: "Amount" },
  ];
  const columnsTotal = [
    { title: "Total", field: "Description" },
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

  const numberWithCommas = (arr) => {
    if (arr?.length > 0) {
      let result = arr.map((item) => {
        item.Amount = item.Amount.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        );
        return item;
      });
      return result;
    }
  };
  const printDocument = () => {
    let d = new Date().toISOString().split("T")[0];
    let date = moment(d).format("DD-MM-YYYY");
    const doc = new jsPDF();
    doc.addImage(PalmDreamLogo, "JPEG", 0, 8, 90, 25);
    doc.addImage(KGCPLogo, "JPEG", 165, 8, 20, 20);
    // doc.setTextColor(179, 107, 0);
    doc.setFontSize(15);
    doc.text("Payment Schedule", 75, 50);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Date: " + date, 15, 50);
    doc.setFontSize(11);

    doc.setFontSize(12);
    doc.text("Client Details:", 15, 75);
    doc.text("Amount Details:", 105, 75);

    doc.autoTable({
      theme: "grid",
      body: [
        ["Client Name", " ", props.saleOrderCustomer?.user_name],
        [
          "Plot No",
          " ",
          `${props.saleOrderCustomer?.Plot_no}`,
          " ",
          // "Possession Amount",
          // props.posts[props.posts.length - 2].Amount,
        ],
        ["SQ.YDS", " ", props.saleOrderCustomer?.CategoryName, " "],
        [
          "Gross Amount",
          " ",
          props.saleOrderCustomer?.Gross_Amount.toLocaleString("en-US"),
          "",
        ],
        ["Discount", props.saleOrderCustomer?.Discount + "%", " ", " "],

        // [
        //   "Sold Amount",
        //   " ",
        //   props.saleOrderCustomer?.SoldAmounmt.toLocaleString("en-US"),
        //   "",
        // ],

        // [
        //   "Extra Charges",
        //   props.saleOrderCustomer?.ExtraChargesPercentage + "%",
        //   " ",
        //   " ",
        // ],
        [
          "Net Amount",
          " ",
          props.saleOrderCustomer?.NetAmount.toLocaleString("en-US"),
          "",
        ],
      ],
      margin: { top: 60 },
      styles: { lineColor: 80, fontStyle: "bold" },
    });
    if (
      props.state?.grandTotalAmount !== null &&
      props.state?.grandTotalAmount !== undefined
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columnsTotal.map((col) => ({ ...col, dataKey: col.field })),
        body: numberWithCommas(props.state?.grandTotalAmount),
        styles: { lineColor: 30 },
        margin: { top: 60 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }
    if (
      props.state?.downpaymentStages !== null &&
      props.state?.downpaymentStages !== undefined
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columnsDownpayment.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: numberWithCommas(props.state?.downpaymentStages),
        styles: { lineColor: 30 },
        margin: { top: 60 },
        headStyles: {
          fillColor: ["#8CBC4B"],
          textColor: ["#fff"],
        },
      });
    }
    if (
      props.state?.installmentStages !== null &&
      props.state?.installmentStages !== undefined
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columns.map((col) => ({ ...col, dataKey: col.field })),
        body: numberWithCommas(props.state?.installmentStages),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }
    if (
      props.state?.ballonStages !== undefined &&
      props.state?.ballonStages !== null
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columnsBallon.map((col) => ({ ...col, dataKey: col.field })),
        body: numberWithCommas(props.state?.ballonStages),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }
    if (
      props.state?.extraChargesStage !== undefined &&
      props.state?.extraChargesStage !== null
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columnsextraChargesStage.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: numberWithCommas(props.state?.extraChargesStage),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }
    if (
      props.state?.PossessionStage !== null &&
      props.state?.PossessionStage !== undefined
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columnsPossesion.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: numberWithCommas(props.state?.PossessionStage),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }

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
      styles: { lineColor: "#fff", cellWidth: 45 },
    });
    doc.save("PaymentSchedule.pdf");
  };

  return (
    <>
      <Button color="success" size="sm" onClick={printDocument}>
        <i class="fas fa-print"></i>
        <span className="btn-inner--icon">Payment Schedule</span>
      </Button>
    </>
  );
};

export default PaymentSchedule;
