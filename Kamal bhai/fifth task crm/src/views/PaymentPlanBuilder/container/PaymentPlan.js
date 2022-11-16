import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Container, Row, Table, Col, Input } from "reactstrap";
import { PaymentType } from "constants/PaymentType";
import jsPDF from "jspdf";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";

import PalmDreamLogo from "../images/Palm-Dreams-Karachi.jpg";

const PaymentPlan = (props) => {
  const moment = require("moment");
  const [amountsInArray, setAmountsInArray] = useState([]);
  let arr = [];
  let arr1 = [];
  let arrayForapi = [];
  const columns = [
    { title: "Name", field: "Name" },
    { title: "index", field: "index" },
    { title: "Dated", field: "Dated" },
    { title: "Amount", field: "Amount" },
    { title: "Balance", field: "Balance" },
  ];
  const columns2 = [
    { title: "Gross Amount", field: "GrossAmount" },
    { title: "Discount", field: "Discount" },
    { title: "Sold Amount", field: "Sold_Amount" },
    { title: "Net Amount", field: "Net_Amount" },
    // { title: "Possession", field: "Possession", },
    // { title: "Remaining", field: "remaining" },
  ];
  const InfoColumns = [
    { title: "Client Name", field: "client_name" },
    { title: "Plot No", field: "plot_no" },
    { title: "SQ.YDS", field: "square_yards" },
  ];

  const printDocument = () => {
    let date = new Date().toISOString().split("T")[0];
    const doc = new jsPDF();
    doc.addImage(PalmDreamLogo, "JPEG", 0, -10, 210, 50);

    doc.text("Payment Schedule", 85, 50);
    doc.setFontSize(10);

    doc.text("Date: " + date, 168, 50);

    // doc.autoTable({
    //   columns: InfoColumns.map((col) => ({ ...col, dataKey: col.field })),
    //   body: [{ client_name: props.location.Uname, plot_no: "23", square_yards: "120" }],
    //   margin: { top: 50 },
    //   styles: {fontSize: 10}
    // });
    doc.setFontSize(11);

    doc.text("Client Details", 15, 58);

    doc.autoTable({
      // head: [['Client Name', 'Plot No', 'SQ.YDS']],
      theme: "grid",
      body: [
        ["Client Name", props.location.Uname],
        ["Plot No", `${props.location.Sector_Name}-${props.location.plotNo}`],
        ["SQ.YDS", props.location.CategoryName],
        // ...
      ],
      margin: { top: 60, bottom: 10 },
      styles: { lineColor: 10, cellWidth: 91 },
    });
    doc.setFontSize(11);

    doc.text("Amount Details", 15, 88);

    doc.autoTable({
      // columns: columns2.map((col) => ({ ...col, dataKey: col.field })),
      // body: amountsInArray,
      theme: "grid",
      body: [
        ["Gross Amount", amountsInArray[0].GrossAmount],
        ["Discount", amountsInArray[0].Discount],
        ["Extra Charges", `${props.location.ExtraChargesPercentage}%`],
        ["Net Amount", amountsInArray[0].Net_Amount],
        // ...
      ],
      styles: { lineColor: 10, cellWidth: 91 },
    });
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: posts,
      styles: { lineColor: 10 },
    });
    doc.setFontSize(10);
    doc.text("Applicant Sign:________________", 140, 280);
    doc.setFontSize(10);
    doc.text("Developer Authorize Sign:________________", 15, 280);
    doc.save("receipt.pdf");
  };

  useEffect(() => {
    if (props.state.noOfMonths !== "") {
      let DiscountAmount = props.state.discountAmount;
      let DownPayment = props.state.downPaymentAmount - 1000;

      let possession = props.state.possessionAmount;
      let eachinstallmentvalue = props.state.installmentRange;

      let eachBaloonInstallmentAmount = props.state.ballonAmount;

      let TotalNoOfInstallments =
        props.state.noOfInstallment + props.state.noOfBalloonInst;

      let netAmount = props.state.netAmount;
      let remainingAmount = props.state.netAmount;
      let remaining = props.state.netAmount;
      let totalBallonAmount = props.state.totalBallonAmount;
      var dt = new Date();
      function AddMonth(dt, addMonth) {
        return new Date(dt.getFullYear(), dt.getMonth() + addMonth, 1);
      }
      let date = AddMonth(new Date(), 0);
      var dateStr = `1-${date.toLocaleString("default", {
        month: "long",
      })}-${date.getFullYear()}`;
      var new_startDate = new Date(dateStr);
      var dateConvert = moment(new_startDate).format("YYYY-MM-DD");
      arrayForapi.push({
        SaleOrderId: "",
        PaymenTypeId: PaymentType.DownPayment,
        Description: "ok",
        InstallmentNo: null,
        Dated: dateConvert,
        Amount: DownPayment,
        PaymentStageStatus: 38,
      });
      arr1.push({
        Name:
          props.state.percentage === "100"
            ? "One Short Payment"
            : "Down Payment Amount",
        index: "-",
        Dated: dateStr,
        //date,
        //new Date().getFullYear() + '-' + ( new Date().getMonth() + 1) + '-' + new Date().getDate(),
        Amount: DownPayment,
        Balance: DiscountAmount - DownPayment,
      });
      for (let i = 1; i <= TotalNoOfInstallments + 2; i++) {
        let remainingamount =
          i == 12 || i == 24
            ? remainingAmount - eachBaloonInstallmentAmount
            : remainingAmount > 0
            ? remainingAmount - eachinstallmentvalue
            : 0;
        if ((i == 12 || i == 24) && remainingAmount > 0) {
          var new_startDate = new Date(dateStr);
          var dateConvert = moment(new_startDate).format("YYYY-MM-DD");

          arrayForapi.push({
            SaleOrderId: "",
            PaymenTypeId: PaymentType.Ballon,
            Description: "ok",
            InstallmentNo: i,
            Dated: dateConvert,
            Amount: eachBaloonInstallmentAmount,
            PaymentStageStatus: 38,
          });
          if (remainingamount >= 0 && eachBaloonInstallmentAmount > 0) {
            totalBallonAmount = totalBallonAmount - eachBaloonInstallmentAmount;
            arr1.push({
              Name: "Balloon Installment",
              index: i,
              Dated: dateStr,
              Amount: eachBaloonInstallmentAmount,
              // Balance: remainingamount < 0 ? 0 : remainingamount,
              Balance: totalBallonAmount < 0 ? 0 : totalBallonAmount,
            });
          }
        } else if (i == TotalNoOfInstallments + 1) {
          var new_startDate = new Date(dateStr);
          var dateConvert = moment(new_startDate).format("YYYY-MM-DD");
          arrayForapi.push({
            SaleOrderId: "",
            PaymenTypeId: PaymentType.Possession,
            Description: "ok",
            InstallmentNo: null,
            Dated: dateConvert,
            Amount: possession,
            PaymentStageStatus: 38,
          });
          if (possession > 0) {
            arr1.push({
              Name: "20% On Possession", /// possession / 1000 +
              index: "-",
              Dated: "-",
              Amount: possession,
              Balance: "-",
            });
          }
        } else if (i > TotalNoOfInstallments + 1 && remainingAmount > 0) {
          arr1.push({
            Name: "Total",
            index: "-",
            Dated: "-",
            Amount: DiscountAmount,
            Balance: "-",
          });
        } else if (remainingAmount > 0) {
          remainingAmount = remainingamount;
          let date = AddMonth(new Date(), i);
          // if (i<= TotalNoOfInstallments &&remainingAmount >= 0) {

          var dateStr = `1-${date.toLocaleString("default", {
            month: "long",
          })}-${date.getFullYear()}`;
          arr1.push({
            Name: "Monthly Installment",
            index: i,
            Dated: dateStr,
            Amount: eachinstallmentvalue,
            Balance: remainingamount < 0 ? 0 : remainingamount,
            Possession: possession,
          });
          var new_startDate = new Date(dateStr);
          var dateConvert = moment(new_startDate).format("YYYY-MM-DD");
          arrayForapi.push({
            SaleOrderId: "",
            PaymenTypeId: PaymentType.Installment,
            Description: "ok",
            InstallmentNo: i,
            Dated: dateConvert,

            //dateStr,
            Amount: eachinstallmentvalue,
            PaymentStageStatus: 38,
          });
          // }
        }
      }

      arr.push({
        // GrossAmount: netAmount,
        // Net_Amount: netAmount,
        // Downpayment: DownPayment,
        // // remaining: remaining,
        // Possession: possession,
        GrossAmount: props.state.totalNetAmount,
        Discount: props.state.discountedAmount,
        Net_Amount: props.state.discountAmount,
        Sold_Amount: props.state.discountAmount,
      });
    }
  }, [props.state.noOfMonths]);

  let arrayForInsertPaymentStages = [];
  const [stateOfArray, setstateOfArray] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let tempArr = [];
    if (arr1 !== null && arr1 !== undefined && arr1?.length > 0) {
      for (let i = 0; i < arr1.length; i++) {
        tempArr.push(arr1[i]);
      }
      setPosts(tempArr);
    }
    if (arrayForapi !== null && arrayForapi !== undefined) {
      for (let i = 0; i < arrayForapi.length; i++) {
        setstateOfArray(arrayForapi);
        arrayForInsertPaymentStages[i] = arrayForapi[i];
      }
    }
    // arrayForInsertPaymentStages.push(stateOfArray)
    //arrayForInsertPaymentStages.push(posts)
  }, [arr1]);

  useEffect(() => {
    let tempArr = [];
    if (arr !== null && arr !== undefined && arr?.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        tempArr.push(arr[i]);
      }
      setAmountsInArray(tempArr);
    }
  }, [arr]);

  const [pageNumber, setPageNumber] = useState(1);
  let postNumber = 12;
  //   if (noOfRows != "") {
  //     postNumber = noOfRows;
  //   }
  let paginatedPosts, total_pages;
  const start = pageNumber * postNumber - postNumber;
  const end = start + postNumber;
  if (posts !== null) {
    paginatedPosts = posts.slice(start, end);

    total_pages = Math.ceil(posts.length / postNumber);
  }
  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    if (total_pages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };
  let history = useHistory();
  const save = () => {
    history.push({
      pathname: "/admin/Saleorder",
      state: props.state,
      body1: props.location,
      arrayForapi: stateOfArray,
    });
  };
  return (
    <>
      {/* <Button onClick={getdata}>add</Button> */}
      <Button color="danger" size="sm" onClick={save}>
        <span className="btn-inner--icon">Save</span>
      </Button>
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
          {paginatedPosts !== null && paginatedPosts !== undefined ? (
            paginatedPosts.map(
              (opt, index) => {
                //if (arr.length !== 0) {

                return (
                  <tr key={index}>
                    <td>{opt.Name}</td>
                    <td>{opt.index}</td>
                    <td>{opt.Dated}</td>
                    <td>{opt.Amount}</td>
                    <td>{opt.Balance}</td>
                  </tr>
                );
              }
              //}
            )
          ) : (
            <Loader
              type="ThreeDots"
              color="#8dbc4c"
              height={80}
              width={80}
              visible={props.isLoading}
              secondaryColor="#4f9cb9"
            />
          )}
        </tbody>
      </Table>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">Page {pageNumber}</li>
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
      <Col lg="3" md="4" sm="6" xs="8">
        <Button
          color="success"
          onClick={printDocument}
          //disabled={isDisable}
        >
          Print &nbsp;
          <i class="fas fa-print"></i>
        </Button>
      </Col>
    </>
  );
};

export default PaymentPlan;
