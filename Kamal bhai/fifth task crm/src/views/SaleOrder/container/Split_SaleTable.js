import Headers from "components/Headers/Header1";
import React, { useState, useEffect } from "react";

import jsPDF from "jspdf";
import { Button, Container, Row, Table, Col, Input } from "reactstrap";

import Loader from "react-loader-spinner";

import PalmDreamLogo from "../images/HIGH-RES-PNG-01-01.png";
import KGCPLogo from "../images/KGCP-Logo.png";
import { withTheme } from "@material-ui/core";
import moment from "moment";
export const Split_SaleTable = (props) => {
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
  const columnsextraChargesStage = [
    { title: "Extra Charges", field: "Description" },
    { title: " ", field: "" },
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

  // function makeamount(percentageval) {
  //   //  for (let i in props.Values) {
  //   let Amount = props.Values[0]?.NetAmount / 100;
  //   let result = percentageval * Amount;
  //   return result;
  //   //}
  // }
  // var arr = [];
  // var arr1 = [];
  // useEffect(() => {
  //   let DownPayment =
  //     makeamount(props.Values[0]?.BookingAmountPercentage) - props.body?.TokenMoney;
  //   let possession = makeamount(props.Values[0]?.OnPossessionPercentage);
  //   let eachinstallmentvalue = makeamount(
  //     props.Values[0]?.InstallmentPercentage
  //   );
  //   let eachBaloonInstallmentAmount = makeamount(
  //     props.Values[0]?.BallonInstallmentPercentage
  //   );
  //   let TotalNoOfInstallments =
  //     props.Values[0]?.NoOfInstallment + props.Values[0]?.NoOfBallonInstallment;
  //   let netAmount = props.Values[0]?.NetAmount;
  //   let remainingAmount = props.Values[0]?.NetAmount - DownPayment;
  //   let remaining = props.Values[0]?.NetAmount - DownPayment;

  //   var dt = new Date();
  //   function AddMonth(dt, addMonth) {
  //     return new Date(dt.getFullYear(), dt.getMonth() + addMonth, 1);
  //   }
  //   let date = AddMonth(new Date(), 0);
  //   var dateStr = `1-${date.toLocaleString("default", {
  //     month: "long",
  //   })}-${date.getFullYear()}`;
  //   arr1.push({
  //     Name: "Down Payment Amount",
  //     index: "-",
  //     Dated: dateStr,
  //     //date,
  //     //new Date().getFullYear() + '-' + ( new Date().getMonth() + 1) + '-' + new Date().getDate(),
  //     Amount: DownPayment,
  //     Balance: DownPayment,
  //   });
  //   for (let i = 1; i <= TotalNoOfInstallments + 2; i++) {
  //     let remainingamount =
  //       i == 12 || i == 24
  //         ? remainingAmount - eachBaloonInstallmentAmount
  //         : remainingAmount - eachinstallmentvalue;
  //     if (i == 12 || i == 24) {
  //       arr1.push({
  //         Name: "Baloon Installment",
  //         index: i,
  //         Dated: dateStr,
  //         Amount: eachBaloonInstallmentAmount,
  //         Balance: remainingamount,
  //       });
  //     } else if (i == TotalNoOfInstallments + 1) {
  //       arr1.push({
  //         Name: "20% On Possession",
  //         index: "-",
  //         Dated: dateStr,
  //         Amount: possession,
  //         Balance: "-",
  //       });
  //     } else if (i > TotalNoOfInstallments) {
  //       arr1.push({
  //         Name: "Total",
  //         index: "-",
  //         Dated: "-",
  //         Amount: netAmount,
  //         Balance: "-",
  //       });
  //     } else {
  //       arr1.push({
  //         Name: "Monthly Installment",
  //         index: i,
  //         Dated: dateStr,
  //         Amount: eachinstallmentvalue,
  //         Balance: remainingamount,
  //         Possession: possession,
  //       });
  //     }
  //     remainingAmount = remainingamount;
  //     let date = AddMonth(new Date(), i);
  //     var dateStr = `1-${date.toLocaleString("default", {
  //       month: "long",
  //     })}-${date.getFullYear()}`;
  //   }
  //   //(possession / 1000) +
  //   arr.push({
  //     GrossAmount: netAmount,

  //     Net_Amount: netAmount,
  //     Downpayment: DownPayment,
  //     remaining: remaining,
  //     Possession: possession,
  //   });
  // }, [true]);

  // arr.push({
  //   GrossAmount: props.Values[0]?.NetAmount,

  //   Net_Amount: props.Values[0]?.NetAmount,
  //   Downpayment:
  //     props.Values[0]?.BookingAmountPercentage *
  //       (props.Values[0]?.NetAmount / 100) -
  //     props.body?.TokenMoney,
  //   remaining:
  //     props.Values[0]?.NetAmount -
  //     props.Values[0]?.BookingAmountPercentage *
  //       (props.Values[0]?.NetAmount / 100),
  //   Possession: props.Values[0]?.NetAmount,
  // });
  // useEffect(() => {
  //   if (arr1 !== null && arr1 !== undefined) {
  //     for (let i = 0; i < arr1.length; i++) {
  //       setPosts(arr1);
  //     }
  //   }
  // }, [arr1]);

  //   if (noOfRows != "") {
  //     postNumber = noOfRows;
  //   }
  // let paginatedPosts, total_pages;
  // const start = pageNumber * postNumber - postNumber;
  // const end = start + postNumber;
  // if (posts !== null) {
  //   paginatedPosts = posts.slice(start, end);

  //   total_pages = Math.ceil(posts.length / postNumber);
  // }
  // const handlePrev = () => {
  //   if (pageNumber === 1) return;
  //   setPageNumber(pageNumber - 1);
  // };
  // const handleNext = () => {
  //   if (total_pages > pageNumber) {
  //     setPageNumber(pageNumber + 1);
  //   } else {
  //     return;
  //   }
  // };
  //   const printDocument = () => {
  //     const doc = new jsPDF();
  //     doc.text("Payment Schedule", 20, 10);
  //     doc.autoTable({
  //       columns: columns2.map((col) => ({ ...col, dataKey: col.field })),
  //       body: arr,
  //     });
  //     doc.autoTable({
  //       columns: columns.map((col) => ({ ...col, dataKey: col.field })),
  //       body: posts,
  //     });
  //     doc.save("receipt.pdf");
  //   };
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
    var date = moment(d).format("DD-MM-YYYY");
    const doc = new jsPDF();
    doc.addImage(PalmDreamLogo, "JPEG", 0, 8, 90, 25);
    doc.addImage(KGCPLogo, "JPEG", 165, 8, 20, 20);
    // doc.setTextColor(179, 107, 0);
    doc.setFontSize(14);
    doc.text("Payment Schedule", 75, 50);
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
    doc.setFontSize(12);
    // doc.text("Client Details:", 15, 75);
    //  doc.text("Amount Details:", 105, 75);

    doc.autoTable({
      theme: "grid",
      body: [
        ["Client Name", " ", props.state?.user_name],
        [
          "Plot No",
          " ",
          `${props.state?.Plot_no}`,
          " ",
          // "Possession Amount",
          // props.posts[props.posts.length - 2].Amount,
        ],
        [
          "SQ.YDS",
          " ",
          `${props.state?.CategoryName}`,
          " ",
          // "Downpayment Amount",
          // props.posts[1].Amount,
        ],
        [
          "Gross Amount",
          " ",

          `${props.state?.NetAmount?.toString()?.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )}`,

          "",

          // "Downpayment Amount",
          // props.posts[1].Amount,
        ],

        // [
        //   "Extra Charges",
        //   `${
        //     props.state?.ExtraChargesPercentage == null
        //       ? "0%"
        //       : props.state?.ExtraChargesPercentage + "%"
        //   }`,
        //   " ",

        //   " ",
        //   // "Downpayment Amount",
        //   // props.posts[1].Amount,
        // ],
        [
          "Net Amount",
          " ",
          `${
            props.netAmount !== "" &&
            props.netAmount !== null &&
            props.netAmount !== undefined
              ? props.netAmount
              : props.state?.NetAmount?.toString()?.replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )
          }`,
          // `${props.netAmount!=="" && props.netAmount!==null && props.netAmount!==undefined?props.netAmount:props.state.NetAmount.toString().replace(
          //   /\B(?=(\d{3})+(?!\d))/g},
          //   ","
          // ),
          " ",
          // "Downpayment Amount",
          // props.posts[1].Amount,
        ],
      ],
      margin: { top: 60 },
      styles: { lineColor: 80, fontStyle: "bold" },
    });
    doc.autoTable({
      theme: "grid",
      columns: columnsTotal.map((col) => ({ ...col, dataKey: col.field })),
      body: numberWithCommas(props.Total),
      styles: { lineColor: 30 },
      headStyles: {
        fillColor: ["#054d87"],
        textColor: ["#fff"],
      },
    });
    if (
      props.Downpayment !== null &&
      props.Downpayment !== undefined &&
      props.Downpayment !== ""
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columnsDownpayment.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: numberWithCommas(props.Downpayment),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#8CBC4B"],
          textColor: ["#fff"],
        },
      });
    }

    if (
      props.posts !== null &&
      props.posts !== undefined &&
      props.posts !== ""
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columns.map((col) => ({ ...col, dataKey: col.field })),
        body: numberWithCommas(props.posts),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }

    if (
      props.ballonStages !== undefined &&
      props.ballonStages !== null &&
      props.ballonStages !== ""
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columnsBallon.map((col) => ({ ...col, dataKey: col.field })),
        body: numberWithCommas(props.ballonStages),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }
    if (
      props.extraChargesStage !== undefined &&
      props.extraChargesStage !== null &&
      props.extraChargesStage !== ""
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columnsextraChargesStage.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: numberWithCommas(props.extraChargesStage),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }
    if (
      props.Possession !== null &&
      props.Possession !== undefined &&
      props.Possession !== ""
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columnsPossesion.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: numberWithCommas(props.Possession),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }

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

    doc.save("PaymentSchedule.pdf");
  };

  // useEffect(() => {
  //   if (posts !== null && posts !== undefined) {
  //     props.getPaymentSchedule(posts);
  //   }
  // }, [posts]);
  return (
    <>
      {/* <div id="content"> */}
      {/* <br /> */}
      {/* {props.newPost !== null && props.newPost !== undefined ? 

          <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Monthly Installment</th>
                  <th scope="col">index</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount </th>
                  <th scope="col">Balance</th>
                </tr>
              </thead>
              <tbody>
                {props.newPost !== null && props.newPost !== undefined ? (
                  props.newPost.map(
                    (opt, index) => {
                      //   if (arr.length !== 0) {

                      return (
                        <tr key={index}>
                          <td>{opt.Name}</td>
                          <td>{opt.Index}</td>
                          <td>{opt.Date}</td>
                          <td>{opt.Amount}</td>
                          <td>{opt.Balance}</td>
                        </tr>
                      );
                    }
                    // }
                  )
                ) : (
                  <tr>
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
            :
             */}
      {/*             
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Monthly Installment</th>
                  <th scope="col">index</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount </th>
                  <th scope="col">Balance</th>
                </tr>
              </thead>
              <tbody>
                {props.posts !== null && props.posts !== undefined ? (
                  props.posts.map(
                    (opt, index) => {
                      //   if (arr.length !== 0) {

                      return (
                        <tr key={index}>
                          <td>{opt.Name}</td>
                          <td>{opt.Index}</td>
                          <td>{opt.Date}</td>
                          <td>{opt.Amount}</td>
                          <td>{opt.Balance}</td>
                        </tr>
                      );
                    }
                    // }
                  )
                ) : (
                  <tr>
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
             */}

      {/* <Col lg="3" md="4" sm="6" xs="8"> */}
      <Button
        color="success"
        size="sm"
        onClick={printDocument}
        disabled={props.posts?.length > 0 ? false : true}
      >
        Print &nbsp;
        <i class="fas fa-print"></i>
      </Button>
      {/* </Col> */}

      {/* } */}
      {/* </div> */}
    </>
  );
};
