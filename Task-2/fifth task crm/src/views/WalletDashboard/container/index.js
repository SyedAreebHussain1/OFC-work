import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Col,
  Input,
  Label,
} from "reactstrap";
import Select from "react-select";
import swal from "sweetalert";
import Headers from "components/Headers/Header1";
import Pagination from "components/Pagination/Pagination";
import {
  getDashboardWalletMiddleware,
  getTransactionHistoryMiddleware,
  UpdateRequest_Middleware,
} from "../middleware";
import TableWallet from "../components/TableWallet";
import axios from "axios";
import CustomerWalletGraph from "../components/Graphs/CustomerWalletGraph";
import HistoryTable from "../components/HistoryTable";
import { BASEURL } from "config/api/URL";
import jsPDF from "jspdf";
const WalletDashboard = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const {
    _getDashboardWalletMiddleware,
    GetDashboardWallet,
    _getTransactionHistoryMiddleware,
    GetWalletHistory,
    _UpdateRequest_Middleware,
  } = props;

  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(5);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [totalamout, setTotalAmount] = useState("");
  const [search, setSearch] = useState("");
  const [posts1, setPosts1] = useState([]);
  const [pageNumber1, setPageNumber1] = useState(1);
  const [noOfRows1, setnoOfRows1] = useState(10);
  const [yearArr, setYearArr] = useState([]);
  const [counts, setCounts] = useState("");
  const [status, setStatus] = useState("");
  const [historytoDate, setHistoryToDate] = useState("");
  const [historyfromDate, setHistoryFromDate] = useState("");
  const [reportDate, setReportDate] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [grpcount, setGrpCount] = useState([]);
  const [ture, setTure] = useState(false);
  const getGraphCounts = () => {
    let arr = [];
    // console.log("VVVVVVV", reportDate);
    const path = "GetCounts";
    axios
      .get(`${BASEURL}${path}?date=${reportDate}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          arr.push(parseInt(res.data?.response?.DailyAmount));
          arr.push(parseInt(res.data?.response?.monthlyAmount));
          arr.push(parseInt(res.data?.response?.yearlyAmount));
          // console.log("DASHBOARD GRAPH COUNTS", res.data?.response);
          // console.log("GRPCOUNT", res.data?.response);
          // setCounts(res.data?.response);
          setGrpCount(arr);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  useEffect(() => {
    getGraphCounts();
  }, [reportDate]);
  let token = localStorage.getItem("auth");
  const isMounted = useRef(false);
  const getAvailableCounts = () => {
    const path = "TotatCountsofDashboardUi";
    axios
      .get(`${BASEURL}${path}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setCounts(res.data?.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const setYears = () => {
    let arr = [];
    var start_year = new Date().getFullYear();

    for (var i = start_year; i > start_year - 25; i--) {
      arr.push({
        value: i,
        label: i,
      });
      // $('select').append('<option value="' + i + '">' + i + '</option>');
    }
    setYearArr(arr);
    // console.log("ARRA OF YEARS", arr);
  };
  useEffect(() => {
    setYears();
    getAvailableCounts();
  }, []);
  ///////////----------Pagination--------------//////////////
  let postNumber = 5;
  let paginatedPosts, total_pages;

  if (noOfRows != "") {
    postNumber = noOfRows;
  }

  const start = pageNumber * postNumber - postNumber;
  const end = start + postNumber;

  if (posts) {
    paginatedPosts = posts;
    // paginatedPosts = posts?.slice(start, end);
    // total_pages = Math.ceil(posts.length / postNumber);
    total_pages = GetDashboardWallet?.metaData?.totalPages;
  }

  ///////////----------Pagination1--------------//////////////

  let postNumber1 = 10;
  let paginatedPosts1, total_pages1;
  if (noOfRows1 != "") {
    postNumber1 = noOfRows1;
  }

  const start1 = pageNumber1 * postNumber1 - postNumber1;
  const end1 = start1 + postNumber1;

  if (posts1) {
    paginatedPosts1 = posts1;
    // paginatedPosts1 = posts1?.slice(start1, end1);
    total_pages1 = GetWalletHistory?.metaData?.totalPages;
    // total_pages1 = Math.ceil(posts1.length / postNumber1);
  }

  ///////////----------Functions--------------//////////////

  const onSuccess = () => {};
  const onFailure = () => {};

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    // if (pageNumber) {
    //   setPageNumber(pageNumber + 1);
    // }
    if (GetDashboardWallet?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
    // if (total_pages > pageNumber) {
    //   setPageNumber(pageNumber + 1);
    // } else {
    //   return;
    // }
  };

  // Handling pagination for second table

  const onChangeNoOfRows1 = (val) => {
    setnoOfRows1(parseInt(val));
    setPageNumber1(1);
    // if (search.trim().length > 0) {
    //   setnoOfRows1(parseInt(val));
    //   setPageNumber1(1);
    // } else {
    //   swal("Sorry!", "Please input cnic", "error");
    // }
  };

  const handlePrev1 = () => {
    // if (search.trim().length > 0) {
    //   if (pageNumber1 === 1) return;
    //   setPageNumber1(pageNumber1 - 1);
    // } else {
    //   swal("Sorry!", "Please input cnic", "error");
    // }
    if (pageNumber1 === 1) return;
    setPageNumber1(pageNumber1 - 1);
  };

  const handleNext1 = () => {
    // if (search.trim().length > 0) {
    //   if (pageNumber1) {
    //     setPageNumber1(pageNumber1 + 1);
    //   }
    // } else {
    //   swal("Sorry!", "Please input cnic", "error");
    // }
    // if (pageNumber1) {
    //   setPageNumber1(pageNumber1 + 1);
    // }
    if (GetWalletHistory?.metaData?.totalPages > pageNumber1) {
      setPageNumber1(pageNumber1 + 1);
    } else {
      return;
    }
  };
  // Handling pagination for second table end

  const handleSearch = (StartDate, EndDate) => {
    _getDashboardWalletMiddleware(
      noOfRows,
      pageNumber,
      StartDate,
      EndDate,
      status,
      onSuccess,
      onFailure
    );
  };

  //////////-------useEffects--------//////////////

  useEffect(() => {
    _getDashboardWalletMiddleware(
      noOfRows,
      pageNumber,
      fromDate,
      toDate,
      status,
      onSuccess,
      onFailure
    );
  }, [noOfRows, pageNumber, status]);

  useEffect(() => {
    setPosts(GetDashboardWallet?.response);
  }, [GetDashboardWallet?.response]);
  // console.log(GetDashboardWallet, posts1);
  const getTotalAmount = () => {
    let token = localStorage.getItem("auth");
    let path = "GetComapnyWallet";
    axios
      .get(`https://backendcrm.squarepro.net/CRM/${path}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setTotalAmount(res.data?.response[0]);
          // console.log("DATA", res.data.response.Amount);
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getTotalAmount();
  }, []);
  var style = {
    boxShadow:
      "3px 3px 3px 3px rgba(0, 0, 0, 0.16), 3px 3px 3px 3px rgba(0, 0, 0, 0.16)",
    borderRadius: "15px",
  };
  const onSuccessTransaction = () => {};
  const onFailureTransaction = () => {};
  const getHistory = () => {
    if (search.trim().length === 13) {
      setTure(true);
      _getTransactionHistoryMiddleware(
        search,
        pageNumber1,
        noOfRows1,
        historytoDate,
        historyfromDate,
        onSuccessTransaction,
        onFailureTransaction
      );
    } else {
      setTure(false);
      swal("Sorry!", "Please input valid cnic", "error");
    }
  };
  useEffect(() => {
    _getTransactionHistoryMiddleware(
      search,
      pageNumber1,
      noOfRows1,
      historytoDate,
      historyfromDate,
      onSuccessTransaction,
      onFailureTransaction
    );

    // if (isMounted.current) {
    //   // console.log("CURRENT MOUNT");
    //   if (search.trim().length > 0) {
    //     _getTransactionHistoryMiddleware(
    //       search,
    //       pageNumber1,
    //       noOfRows1,
    //       onSuccessTransaction,
    //       onFailureTransaction
    //     );
    //   } else {
    //     swal("Sorry!", "Please input cnic", "error");
    //   }
    // } else {
    //   isMounted.current = true;
    // }
  }, [pageNumber1, noOfRows1]);
  useEffect(() => {
    if (ture === false) {
      _getTransactionHistoryMiddleware(
        "",
        pageNumber1,
        noOfRows1,
        historytoDate,
        historyfromDate,
        onSuccessTransaction,
        onFailureTransaction
      );
    }
  }, [ture]);
  const getReportDatewise = () => {
    _getTransactionHistoryMiddleware(
      search,
      pageNumber1,
      noOfRows1,
      historytoDate,
      historyfromDate,
      onSuccessTransaction,
      onFailureTransaction
    );
  };
  useEffect(() => {
    setPosts1(GetWalletHistory?.response);
    // console.log("HISTORAY DATA AT INDEX", GetWalletHistory);
  }, [GetWalletHistory]);
  const getData = () => {
    _getDashboardWalletMiddleware(
      noOfRows,
      pageNumber,
      fromDate,
      toDate,
      status,
      onSuccess,
      onFailure
    );
  };
  const toggleStatus = () => {
    if (status?.includes("Pending")) {
      setStatus("");
    } else {
      setStatus("Pending");
    }
  };
  const HistoryToDate = (date) => {
    setHistoryToDate(date);
  };
  const HistoryFromDate = (date) => {
    setHistoryFromDate(date);
  };
  const PrintPdf = () => {
    const columns = [
      // { title: "S No", field: "S.No" },
      { title: "Transaction Type", field: "TransactionType" },
      { title: "Amount", field: "Amount" },
      { title: "Expiry Date", field: "ExpiryDate" },
      { title: "Installment No.", field: "InstallmentNo" },
      { title: "Plot", field: "Plot_No" },
    ];
    // console.log("printclicked");
    // posts1
    if (
      search.trim().length > 0 &&
      ture === true &&
      paginatedPosts1?.length !== 0
    ) {
      let date = new Date().toISOString().split("T")[0];
      const doc = new jsPDF();
      doc.text("Transaction History", 75, 10);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text("Date: " + date, 168, 10);
      doc.setFontSize(11);
      // userinforstart
      doc.setTextColor(179, 107, 0);
      doc.setFontSize(12);
      doc.text("User Details:", 15, 20);

      doc.autoTable({
        theme: "grid",
        body: [
          [
            "User Name",
            `${paginatedPosts1[0].CustomerWallet?.tbl_user.user_name}`,
          ],
          ["User CNIC", `${paginatedPosts1[0].CustomerWallet?.tbl_user.CNIC}`],
          ["wallet Balance", `${paginatedPosts1[0].CustomerWallet?.Amount}`],
        ],
        margin: { top: 26, bottom: 10 },
        styles: { lineColor: 10, cellWidth: 45 },
      });

      //userinfoend
      doc.autoTable({
        theme: "grid",
        columns: columns.map((col) => ({ ...col, dataKey: col.field })),
        body: paginatedPosts1,
        styles: { lineColor: 10 },
      });
      doc.setFontSize(10);
      doc.save("PaymentScheduleCustom.pdf");
    } else if (paginatedPosts1?.length === 0) {
      // console.log("Show alert data not available");
    } else {
      let date = new Date().toISOString().split("T")[0];
      const doc = new jsPDF();
      doc.text("Transaction History", 75, 10);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text("Date: " + date, 168, 10);
      doc.setFontSize(11);
      doc.autoTable({
        theme: "grid",
        columns: columns.map((col) => ({ ...col, dataKey: col.field })),
        body: paginatedPosts1,
        styles: { lineColor: 10 },
      });
      doc.setFontSize(10);
      doc.save("PaymentScheduleCustom.pdf");
    }
  };
  return (
    <div>
      <Headers />
      <Container style={{ marginTop: "-120px" }}>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h1 className="mb-0">Wallet Dashboard</h1>
                <hr
                  style={{
                    backgroundColor: "#F1F3F9",
                    marginTop: "5px",
                    borderWidth: "2px",
                  }}
                />
              </CardHeader>
              <CardBody>
                <Row style={{ marginTop: "-50px" }}>
                  <Col lg="4" md="4" sm="4" xs="4" xl="4">
                    <div
                      className="wallet-card"
                      style={{
                        background: "#fff",
                        // padding: "50px",
                        borderRadius: "6px",
                        borderBottomColor: "#054D87",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          paddingLeft: "5px",
                          paddingRight: "12px",
                          paddingTop: "8px",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h2>Withdraw requests</h2>
                          <div
                            style={{
                              borderRadius: "6px",
                              marginTop: "-5px",
                              borderBottomColor: "#F1F3F9",
                              borderBottomStyle: "solid",
                              borderBottomWidth: "3px",
                            }}
                          />
                        </div>
                        <span
                          onClick={() => {
                            toggleStatus();
                          }}
                          className="blink-btn"
                        >
                          New
                        </span>
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          paddingLeft: "12px",
                          paddingRight: "12px",
                          paddingTop: "8px",
                          paddingBottom: "14px",

                          // marginTop: "-5px",
                          // marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "45px",
                            fontWeight: "bold",
                            fontFamily: "Courier New",
                          }}
                        >
                          {counts?.queryCredit}
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4" sm="4" xs="4" xl="4">
                    <div
                      className="wallet-card"
                      style={{
                        background: "#fff",
                        // padding: "50px",
                        borderRadius: "6px",
                        borderBottomColor: "#054D87",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          paddingLeft: "5px",
                          paddingRight: "12px",
                          paddingTop: "8px",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h2>Debit amount</h2>
                          <div
                            style={{
                              borderRadius: "6px",
                              marginTop: "-5px",
                              borderBottomColor: "#F1F3F9",
                              borderBottomStyle: "solid",
                              borderBottomWidth: "3px",
                            }}
                          />
                        </div>
                        {/* <span className="blink-btn">New</span> */}
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          paddingLeft: "12px",
                          paddingRight: "12px",
                          paddingTop: "13px",
                          paddingBottom: "22px",

                          // marginTop: "-5px",
                          // marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "33px",
                            fontWeight: "bold",
                            fontFamily: "Courier New",
                          }}
                        >
                          PKR:
                          {counts?.queryDebitCustomerWallet
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4" sm="4" xs="4" xl="4">
                    <div
                      className="wallet-card"
                      style={{
                        background: "#fff",
                        // padding: "50px",
                        borderRadius: "6px",
                        borderBottomColor: "#054D87",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          paddingLeft: "5px",
                          paddingRight: "12px",
                          paddingTop: "8px",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h2>Compnay wallet amount</h2>
                          <div
                            style={{
                              borderRadius: "6px",
                              marginTop: "-5px",
                              borderBottomColor: "#F1F3F9",
                              borderBottomStyle: "solid",
                              borderBottomWidth: "3px",
                            }}
                          />
                        </div>
                        {/* <span className="blink-btn">New</span> */}
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          paddingLeft: "12px",
                          paddingRight: "12px",
                          paddingTop: "13px",
                          paddingBottom: "22px",

                          // marginTop: "-5px",
                          // marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "33px",
                            fontWeight: "bold",
                            fontFamily: "Courier New",
                          }}
                        >
                          PKR:
                          {counts?.companyWalletAmount
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                  <Col lg="4" md="4" sm="4" xs="4" xl="4">
                    <div
                      className="wallet-card"
                      style={{
                        background: "#fff",
                        // padding: "50px",
                        borderRadius: "6px",
                        borderBottomColor: "#054D87",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          paddingLeft: "5px",
                          paddingRight: "12px",
                          paddingTop: "8px",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h2>Approved requests</h2>
                          <div
                            style={{
                              borderRadius: "6px",
                              marginTop: "-5px",
                              borderBottomColor: "#F1F3F9",
                              borderBottomStyle: "solid",
                              borderBottomWidth: "3px",
                            }}
                          />
                        </div>
                        {/* <span className="blink-btn">New</span> */}
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          paddingLeft: "12px",
                          paddingRight: "12px",
                          paddingTop: "8px",
                          paddingBottom: "14px",

                          // marginTop: "-5px",
                          // marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "45px",
                            fontWeight: "bold",
                            fontFamily: "Courier New",
                          }}
                        >
                          {counts?.statusAccepted}
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4" sm="4" xs="4" xl="4">
                    <div
                      className="wallet-card"
                      style={{
                        background: "#fff",
                        // padding: "50px",
                        borderRadius: "6px",
                        borderBottomColor: "#054D87",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          paddingLeft: "5px",
                          paddingRight: "12px",
                          paddingTop: "8px",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h2>Pending requests</h2>
                          <div
                            style={{
                              borderRadius: "6px",
                              marginTop: "-5px",
                              borderBottomColor: "#F1F3F9",
                              borderBottomStyle: "solid",
                              borderBottomWidth: "3px",
                            }}
                          />
                        </div>
                        {/* <span className="blink-btn">New</span> */}
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          paddingLeft: "12px",
                          paddingRight: "12px",
                          paddingTop: "8px",
                          paddingBottom: "14px",

                          // marginTop: "-5px",
                          // marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "45px",
                            fontWeight: "bold",
                            fontFamily: "Courier New",
                          }}
                        >
                          {counts?.statusPending}
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="4" sm="4" xs="4" xl="4">
                    <div
                      className="wallet-card"
                      style={{
                        background: "#fff",
                        // padding: "50px",
                        borderRadius: "6px",
                        borderBottomColor: "#054D87",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          paddingLeft: "5px",
                          paddingRight: "12px",
                          paddingTop: "8px",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h2>Rejected requests</h2>
                          <div
                            style={{
                              borderRadius: "6px",
                              marginTop: "-5px",
                              borderBottomColor: "#F1F3F9",
                              borderBottomStyle: "solid",
                              borderBottomWidth: "3px",
                            }}
                          />
                        </div>
                        {/* <span className="blink-btn">New</span> */}
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          paddingLeft: "12px",
                          paddingRight: "12px",
                          paddingTop: "8px",
                          paddingBottom: "14px",

                          // marginTop: "-5px",
                          // marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "45px",
                            fontWeight: "bold",
                            fontFamily: "Courier New",
                          }}
                        >
                          {counts?.statusRejected}
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "25px" }}>
                  {/* <CustomerWalletGraph /> */}
                  <Col lg="4" md="4" sm="4" xs="4" xl="4">
                    <Card
                      style={{
                        borderBottomColor: "#054D87",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "6px",
                      }}
                      className="wallet-card"
                      // style={style}
                      // className="wallet-card"
                    >
                      <CardHeader className="bg-transparent">
                        <Row className="align-items-center">
                          <div className="col">
                            <h6 className="text-uppercase text-muted ls-1 mb-1">
                              Customer Wallet Cash Flow
                            </h6>
                            <h2 style={{ marginTop: "10px" }} className="mb-0">
                              Customer Wallet
                            </h2>
                            {/* <br /> */}
                          </div>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Row style={{ marginTop: "-10px" }}>
                          <Col lg="12" md="12" sm="12">
                            <label
                              className="form-control-label"
                              for="input-username"
                            >
                              Select Year
                            </label>
                            <input
                              type="date"
                              id="input-username"
                              className="form-control"
                              placeholder="DD-MM-YYYY"
                              value={reportDate}
                              // max={dateState.CurrentDate}
                              onChange={(e) => setReportDate(e.target.value)}
                            ></input>
                            {/* <Select
                              className="basic-single"
                              classNamePrefix="select"
                              isSearchable={true}
                              options={yearArr}
                              id="exampleFormControlSelect1"
                              type="select"
                              onChange={
                                (e) => console.log(e)
                                //onChange(e.value, "ProjectName")
                                // setState({ ...state, projectid: e.label })
                              }
                            /> */}
                          </Col>
                        </Row>
                        <div
                          style={{ marginTop: "20px" }}
                          className="chart"
                          id="chart"
                        >
                          {grpcount?.length > 0 && (
                            <CustomerWalletGraph data={grpcount} />
                          )}
                        </div>
                        {/* <Row style={{ marginTop: "14px" }}>
                          <Col lg="12" md="12" sm="12">
                            <Button
                              color="success"
                              style={{ width: "100%" }}
                              onClick={() => {
                                console.log("dsd");
                              }}
                            >
                              Generate Report &nbsp;
                              <i class="fas fa-print"></i>
                            </Button>
                          </Col>
                        </Row> */}
                      </CardBody>
                    </Card>

                    <div
                      className="wallet-card"
                      style={{
                        background: "#fff",
                        // padding: "20px",
                        borderRadius: "6px",
                        marginTop: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                      }}
                    >
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        Search user transaction history
                      </label>
                      <Row>
                        <Col lg="8" md="8" sm="8" xs="8" xl="8">
                          <Input
                            id="exampleFormControlSelect1"
                            type="text"
                            name="cnic"
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            maxLength={13}
                            placeholder="Enter customer CNIC"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                          ></Input>
                        </Col>
                        <Col lg="4" md="4" sm="4" xs="4" xl="4">
                          <Button
                            style={{
                              backgroundColor: "#054D87",
                              color: "white",
                              // marginTop: "30px",
                            }}
                            onClick={() => {
                              getHistory();
                            }}
                          >
                            <i color="white" class="fas fa-search"></i>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg="8" md="8" sm="8" xs="8" xl="8">
                    <div
                      style={{ padding: "15px", borderRadius: "6px" }}
                      className="wallet-card"
                    >
                      <TableWallet
                        paginatedPosts={paginatedPosts}
                        onChangeNoOfRows={onChangeNoOfRows}
                        _getDashboardWalletMiddleware={
                          _getDashboardWalletMiddleware
                        }
                        _UpdateRequest_Middleware={_UpdateRequest_Middleware}
                        getData={getData}
                        handleSearch={handleSearch}
                        getAvailableCounts={getAvailableCounts}
                      />
                      <Pagination
                        pageNumber={pageNumber}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        totalPages={GetDashboardWallet?.metaData?.totalPages}
                      />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <hr
                style={{
                  marginLeft: "5%",
                  marginRight: "5%",
                  backgroundColor: "#F1F3F9",
                  marginTop: "10px",
                  borderWidth: "2px",
                }}
              />
              <CardBody>
                <CardHeader className="border-0">
                  <h1 style={{ textAlign: "center", marginTop: "-50px" }}>
                    {" "}
                    Transaction History{" "}
                  </h1>
                </CardHeader>
                <div
                  style={{ padding: "15px", borderRadius: "6px" }}
                  className="wallet-card"
                >
                  <HistoryTable
                    paginatedPosts={paginatedPosts1}
                    onChangeNoOfRows={onChangeNoOfRows1}
                    noOfRows1={noOfRows1}
                    getReportDatewise={getReportDatewise}
                    setToDate={HistoryToDate}
                    setFromDate={HistoryFromDate}
                    cninc={search}
                    ture={ture}
                    PrintPdf={PrintPdf}
                  />
                  <Pagination
                    pageNumber={pageNumber1}
                    handlePrev={handlePrev1}
                    handleNext={handleNext1}
                    totalPages={GetWalletHistory?.metaData?.totalPages}
                  />
                </div>
                {/* {paginatedPosts.length > 0 ? (
                  <Pagination
                    pageNumber={pageNumber}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    totalPages={total_pages}
                  />
                ) : (
                  ""
                )} */}
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  GetDashboardWallet: state.WalletDashboard?.GetDashboardWallet,
  GetWalletHistory: state.WalletDashboard?.GetWalletHistory,
  Responseupdate: state.WalletDashboard?.Responseupdate,
});

const mapDispatchToProps = (dispatch) => ({
  _getDashboardWalletMiddleware: (
    noOfRows,
    pageNumber,
    fromDate,
    toDate,
    status,
    onSuccess,
    onFailure
  ) =>
    dispatch(
      getDashboardWalletMiddleware(
        noOfRows,
        pageNumber,
        fromDate,
        toDate,
        status,
        onSuccess,
        onFailure
      )
    ),
  _getTransactionHistoryMiddleware: (
    cninc,
    pageNumber1,
    noOfRows1,
    historytoDate,
    historyfromDate,
    onSuccess,
    onFailure
  ) =>
    dispatch(
      getTransactionHistoryMiddleware(
        cninc,
        pageNumber1,
        noOfRows1,
        historytoDate,
        historyfromDate,
        onSuccess,
        onFailure
      )
    ),
  _UpdateRequest_Middleware: (body, OnSuccess, OnFailure) =>
    dispatch(UpdateRequest_Middleware(body, OnSuccess, OnFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletDashboard);
