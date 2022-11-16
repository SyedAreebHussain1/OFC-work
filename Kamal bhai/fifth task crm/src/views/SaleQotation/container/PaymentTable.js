import React, { useState, useEffect, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { Button, Container, Row, Table, Col, Input } from "reactstrap";
//import { getQuotation } from "../middleware/index";
import jsPDF from "jspdf";
import Loader from "react-loader-spinner";
import autoTable from "jspdf-autotable";
// import { data } from "jquery";
import PalmDreamLogo from "../../SaleOrder/images/HIGH-RES-PNG-01-01.png";
//import KGCPLogo from "../images/KGCP-Logo.png";
import KGCPLogo from "../../SaleOrder/images/KGCP-Logo.png";
import moment from "moment";
const PaymentTable = (props) => {
  const onSuccess = () => {};
  const onFailure = () => {};
  let price = "423564276354";
  let dollarUSLocale = Intl.NumberFormat("en-PK");
  // const [dropid, setdropid] = useState(null)
  // useEffect(() => {
  //   setdropid(props.id.id);
  // }, [props.id.id]);

  // function makeamount(percentageval) {
  //   for (let i in props.Values) {
  //     let Amount = props.Values[i].NetAmount / 100;
  //     let result = percentageval * Amount;
  //     return result;
  //   }
  // }
  // var arr = [];
  // var arr1 = [];

  // function  getdata () {

  //   for (let i in props.Values) {
  //     let DownPayment = makeamount(props.Values[i].BookingAmountPercentage);
  //     let possession = makeamount(props.Values[i].OnPossessionPercentage);
  //     let eachinstallmentvalue = makeamount(
  //       props.Values[i].InstallmentPercentage
  //     );
  //     let eachBaloonInstallmentAmount = makeamount(
  //       props.Values[i].BallonInstallmentPercentage
  //     );
  //     let TotalNoOfInstallments =
  //       props.Values[i].NoOfInstallment + props.Values[i].NoOfBallonInstallment;
  //     let netAmount = props.Values[i].NetAmount;
  //     let remainingAmount = props.Values[i].NetAmount - DownPayment;
  //     let remaining = props.Values[i].NetAmount - DownPayment;
  //     var dt = new Date();
  //     function AddMonth(dt, addMonth) {
  //       return new Date(dt.getFullYear(), dt.getMonth() + addMonth, 1);
  //     }
  //     let date = AddMonth(new Date(), 0);
  //     var dateStr = `1-${date.toLocaleString("default", {
  //       month: "long",
  //     })}-${date.getFullYear()}`;
  //     for (let i = 1; i <= TotalNoOfInstallments + 2; i++) {
  //       let remainingamount =
  //         i == 12 || i == 24
  //           ? remainingAmount - eachBaloonInstallmentAmount
  //           : remainingAmount - eachinstallmentvalue;
  //       if (i == 12 || i == 24) {
  //         arr1.push({
  //           Name: "Balloon Installment",
  //           index: i,
  //           Dated: dateStr,
  //           Amount: eachBaloonInstallmentAmount,
  //           Balance: remainingamount,
  //         });
  //       } else if (i == TotalNoOfInstallments + 1) {
  //         arr1.push({
  //           Name: possession / 1000 + "% On Possession",
  //           index: "-",
  //           Dated: "-",
  //           Amount: possession,
  //           Balance: "-",
  //         });
  //       } else if (i > TotalNoOfInstallments) {
  //         arr1.push({
  //           Name: "Total",
  //           index: "-",
  //           Dated: "-",
  //           Amount: netAmount,
  //           Balance: "-",
  //         });
  //       } else {
  //         arr1.push({
  //           Name: "Monthly Installment",
  //           index: i,
  //           Dated: dateStr,
  //           Amount: eachinstallmentvalue,
  //           Balance: remainingamount,
  //           Possession: possession,
  //         });
  //       }
  //       remainingAmount = remainingamount;
  //       let date = AddMonth(new Date(), i);
  //       var dateStr = `1-${date.toLocaleString("default", {
  //         month: "long",
  //       })}-${date.getFullYear()}`;
  //     }

  //     arr.push({
  //       GrossAmount: netAmount,
  //       Discount: 0,
  //       Net_Amount: netAmount,
  //       Downpayment: DownPayment,
  //       remaining: remaining,
  //       Possession: possession,
  //     });
  //     return false;
  //   }
  //   return;
  // }
  // useEffect(() => {
  //   let body = {};

  //   if (props.id !== null && props.id !== undefined) {
  //     body = {
  //       PaymentPlaneId: props.id.id,
  //     };
  //     // getdata();
  //   }
  //   props.getQuotation(body, onSuccess, onFailure);
  // }, [props.id]);

  // useEffect(() => {
  //   getdata();

  // },[getdata()]);

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

  // const columns2 = [
  //   { title: "Gross Amount", field: "GrossAmount" },
  //   { title: "Discount", field: "Discount" },
  //   { title: "Net Amount", field: "Net_Amount" },
  //   { title: "Downpayment", field: "Downpayment" },
  //   // { title: "Possession", field: "Possession", },
  //   { title: "Remaining", field: "remaining" },
  // ];
  // const printDocument = () => {
  //   const doc = new jsPDF();
  //   doc.text("Payment Schedule", 20, 10);
  //   doc.autoTable({
  //     columns: columns2.map((col) => ({ ...col, dataKey: col.field })),
  //     body: arr,
  //   });
  //   doc.autoTable({
  //     columns: columns.map((col) => ({ ...col, dataKey: col.field })),
  //     body: arr1,
  //   });
  //   doc.save("receipt.pdf");
  // };

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
  const commaNumber = (item) => {
    let val = item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return val;
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
        [
          "Client Name",
          "",
          props.User !== undefined && props.User !== null
            ? props.User[0]?.user_name
            : "",
        ],
        [
          "Plot No",
          "",
          `${props.body?.Plotno}`,

          // "Possession Amount",
          // props.posts[props.posts.length - 2].Amount,
        ],
        // [
        //   "SQ.YDS",
        //   " ",
        //   props.body?.CategoryName,
        //   " ",
        //   // "Downpayment Amount",
        //   // props.posts[1].Amount,
        // ],
        [
          "Net Amount",
          " ",

          commaNumber(props.plotPrice),

          // "Downpayment Amount",
          // props.posts[1].Amount,
        ],

        // [
        //   "Extra Charges",
        //   props.saleOrderState?.ExtraChargesPercentage + "%",
        //   " ",

        //   " ",
        //   // "Downpayment Amount",
        //   // props.posts[1].Amount,
        // ],
        // [
        //   "Net Amount",
        //   " ",

        //   props.saleOrderState?.NetAmount,
        //   " ",
        //   // "Downpayment Amount",
        //   // props.posts[1].Amount,
        // ],
      ],
      margin: { top: 60 },
      styles: { lineColor: 80 },
    });
    doc.autoTable({
      theme: "grid",
      columns: columnsTotal.map((col) => ({ ...col, dataKey: col.field })),
      body: numberWithCommas(props.posts?.grandTotalAmount),
      styles: { lineColor: 30 },
      headStyles: {
        fillColor: ["#054d87"],
        textColor: ["#fff"],
      },
    });

    doc.autoTable({
      theme: "grid",
      columns: columnsDownpayment.map((col) => ({
        ...col,
        dataKey: col.field,
      })),
      body: numberWithCommas(props.posts?.downpaymentStages),
      styles: { lineColor: 30 },
      // margin: { top: 60 },
      headStyles: {
        fillColor: ["#8CBC4B"],
        textColor: ["#fff"],
      },
    });

    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: numberWithCommas(props.posts?.installmentStages),
      styles: { lineColor: 30 },
      headStyles: {
        fillColor: ["#054d87"],
        textColor: ["#fff"],
      },
    });
    if (
      props.posts?.ballonStages !== undefined &&
      props.posts?.ballonStages !== null
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columnsBallon.map((col) => ({ ...col, dataKey: col.field })),
        body: numberWithCommas(props.posts?.ballonStages),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }
    if (
      props.posts?.extraChargesStage !== undefined &&
      props.posts?.extraChargesStage !== null
    ) {
      doc.autoTable({
        theme: "grid",
        columns: columnsextraChargesStage.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: numberWithCommas(props.posts?.extraChargesStage),
        styles: { lineColor: 30 },
        headStyles: {
          fillColor: ["#054d87"],
          textColor: ["#fff"],
        },
      });
    }

    doc.autoTable({
      theme: "grid",
      columns: columnsPossesion.map((col) => ({ ...col, dataKey: col.field })),
      body: numberWithCommas(props.posts?.PossessionStage),
      styles: { lineColor: 30 },
      headStyles: {
        fillColor: ["#054d87"],
        textColor: ["#fff"],
      },
    });

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

  // const printDocument = () => {
  //   let date = new Date().toISOString().split("T")[0];
  //   const doc = new jsPDF();
  //   doc.addImage(PalmDreamLogo, "png", 10, 10, 0, 0, 80, 80);
  //   doc.text("Payment Schedule", 85, 15);
  //   doc.setFontSize(10);
  //   doc.text("Date: " + date, 168, 15);
  //   doc.setFontSize(11);
  //   // doc.text("Amount Details", 15, 75);
  //   doc.autoTable({
  //     theme: "grid",
  //     body: [
  //       ["Net Amount", props?.posts[props.posts.length - 1].Amount],
  //       ["Possession Amount", props?.posts[props.posts.length - 2].Amount],
  //       ["Extra Charges", props?.posts[props.posts.length - 3].Amount],
  //     ],
  //     margin: { top: 40, bottom: 10 },
  //     styles: { lineColor: 10, cellWidth: 91 },
  //   });
  //   doc.autoTable({
  //     theme: "grid",
  //     columns: columns.map((col) => ({ ...col, dataKey: col.field })),
  //     body: props.posts,
  //     styles: { lineColor: 10 },
  //   });
  //   doc.save("paymentPlan.pdf");
  // };
  const [noOfRows, setnoOfRows] = useState("");
  const GridChange = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };
  // const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  let postNumber = 12;
  if (noOfRows != "") {
    postNumber = noOfRows;
  }
  let paginatedPosts, total_pages;
  const start = pageNumber * postNumber - postNumber;
  const end = start + postNumber;
  // if (arr1 !== null) {
  //   paginatedPosts = arr1.slice(start, end);
  //   total_pages = Math.ceil(arr1.length / postNumber);
  // }
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
  // useEffect(() => {
  //   if (arr1 !== null && arr1 !== undefined) {
  //     // for (let i = 0; i < arr1.length; i++) {
  //       setPosts(arr1);
  //     // }
  //   }
  // }, [arr1]);
  const [isDisable, setIsDisable] = useState(true);
  useEffect(() => {
    if (
      props.posts !== null &&
      props.posts !== undefined &&
      props.posts?.installmentStages?.length > 0
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [props.posts]);

  return (
    <>
      <div id="content">
        {/* <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Gross Amount</th>
              <th scope="col">Discount</th>
              <th scope="col">Net Amount</th>
              <th scope="col">DownPayment</th>
              <th scope="col">Remaining Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* {arr !== null && arr !== undefined ? (
              arr.map((opt, index) => {
                if (arr.length !== 0) {
                  return (
                    <tr key={index}>
                      <td>{opt.GrossAmount}</td>
                      <td>{opt.Discount}</td>
                      <td>{opt.Net_Amount}</td>
                      <td>{opt.Downpayment}</td>
                      <td>{opt.remaining}</td>
                    </tr>
                  );
                }
              })
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
        </Table> */}
        {/* <br /> */}
        {/* <Row>
          <Col lg="2" md="4" sm="4" xs="4">
            <label className="form-control-label"> Rows Per Pages </label>
            <Input
              id="exampleFormControlSelect1"
              type="select"
              onChange={(e) => GridChange(e.target.value)}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Input>
          </Col>
        </Row> */}
        {/* <br /> */}
        {/* <Table className="align-items-center" responsive>
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
              props.posts.map((opt) => {
              //  if (arr.length !== 0) {
                  return (
                    <tr>
                      <td>{opt.Name}</td>
                      <td>{opt.Index}</td>
                      <td>{opt.Dated}</td>
                      <td>{opt.Amount}</td>
                      <td>{opt.Balance}</td>
                    </tr>
                  );
              //  }
              })
            ) :  <tr>
            <th></th>
            <th></th>
            
            <th><h3>No data found</h3></th>
            <th></th></tr>}
          </tbody>
        </Table> */}
      </div>
      {/* <nav aria-label="Page navigation example">
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
      </nav> */}

      <Button
        color="success"
        size="sm"
        onClick={printDocument}
        disabled={isDisable}
      >
        Download Payment Plan &nbsp;
        <i class="fas fa-print"></i>
      </Button>
    </>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.saleQotation.isLoading,
  isError: state.saleQotation.isError,
  Error: state.saleQotation.error,
  Values: state.saleQotation.Values,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    // getQuotation: (body, OnSuccess, OnFailure) =>
    //   dispatch(getQuotation(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(PaymentTable);
