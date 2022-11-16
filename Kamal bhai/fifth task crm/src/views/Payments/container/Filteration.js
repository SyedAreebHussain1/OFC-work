import React from "react";
import { useState, useEffect } from "react";
import {
  CardBody,
  Button,
  CardHeader,
  Row,
  Col,
  Input,
  Table,
} from "reactstrap";
import Select from "react-select";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import { Tooltip } from "reactstrap";
import TableOfPayments from "./TableOfPayments";
import { BASEURL } from "config/api/URL";
import Report from "./Report";
import axios from "axios";
const Filteration = (props) => {
  let token = localStorage.getItem("auth");
  const [noOfRows, setnoOfRows] = useState(10);
  const [posts, setPosts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [unPaidState, setunPaidState] = useState(0);
  const [PaidState, setPaidState] = useState(0);
  let unPaidVar = 0;
  let paidVar = 0;
  const [state, setstate] = useState({
    Cnic: "",
    MonthTo: "",
    MonthFrom: "",
    FileNo: "",
    Status: "",
    ProjectName: "",
  });
  const [paidcounts, setPaidCounts] = useState("");
  const [unpaidcounts, setUnPaidCounts] = useState("");
  const [verifiedcounts, setVerifiedCounts] = useState("");
  const getPaidCounts = () => {
    const path = "getStatusCount/";
    axios
      .get(`${BASEURL}${path}?status_name=Paid`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setPaidCounts(res.data?.response.Count);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const getUnpaidCounts = () => {
    const path = "getStatusCount/";
    axios
      .get(`${BASEURL}${path}?status_name=Unpaid`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setUnPaidCounts(res.data?.response.Count);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const getVerifiedCounts = () => {
    const path = "getStatusCount/";
    axios
      .get(`${BASEURL}${path}?status_name=Varification in Progress`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setVerifiedCounts(res.data?.response.Count);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  useEffect(() => {
    getPaidCounts();
    getUnpaidCounts();
    getVerifiedCounts();
  }, []);
  let countStatus = ["Paid", "Unpaid", "Varification in Progress"];
  let count = [];

  useEffect(() => {
    props.showPaymentDetail(
      pageNumber,
      noOfRows,
      state.MonthTo,
      state.MonthFrom,
      state.Cnic,
      state.FileNo,
      state.ProjectName,
      state.Status,
      onSuccess,
      onFailure
    );
    props.showPaymentStatus(onSuccess, onFailure);
    props.showProject(onSuccess, onFailure);
    for (let i = 0; i < countStatus.length; i++) {
      props.showPaymentCount(countStatus[i], onSuccess, onFailure);
    }
  }, [true]);
  useEffect(() => {
    if (props.Count !== null && props.Count !== undefined) {
      count.push(props.Count);
    }
  }, [props.Count]);

  useEffect(() => {
    setPosts(null);
    setPageNumber(1);
    props.showPaymentDetail(
      pageNumber,
      noOfRows,
      state.MonthTo,
      state.MonthFrom,
      state.Cnic,
      state.FileNo,
      state.ProjectName,
      state.Status,
      onSuccess,
      onFailure
    );
  }, [state]);
  useEffect(() => {
    props.showPaymentDetail(
      pageNumber,
      noOfRows,
      state.MonthTo,
      state.MonthFrom,
      state.Cnic,
      state.FileNo,
      state.ProjectName,
      state.Status,
      onSuccess,
      onFailure
    );
  }, [noOfRows, pageNumber]);

  //AutoComplete Of Status
  const [status, setStatus] = useState([null]);
  useEffect(() => {
    if (props.Status !== null && props.Status !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Status.length; i++) {
        let obj = {
          value: props.Status[i].status_name,
          label: props.Status[i].status_name,
        };
        arr.push(obj);
      }
      setStatus(arr);
    }
  }, [props.Status]);

  const [project, setproject] = useState([null]);
  useEffect(() => {
    if (props.Project !== null && props.Project !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Project.length; i++) {
        let obj = {
          value: props.Project[i].Project_id,
          label: props.Project[i].Project_name,
        };
        arr.push(obj);
      }
      setproject(arr);
    }
  }, [props.Project]);

  //start Count Paid and Unpaid Work

  useEffect(() => {
    if (props.PaymentResponse !== null && props.PaymentResponse !== undefined) {
      setPosts(props.PaymentResponse.response);
      setMetaData(props.PaymentResponse?.metaData);
      for (var i = 0; i < props.PaymentResponse.response?.length; i++) {
        if (props.PaymentResponse.response[i]?.status_name == "Unpaid") {
          unPaidVar = unPaidVar + 1;
          setunPaidState(unPaidVar);
        } else {
          paidVar = paidVar + 1;
          setPaidState(paidVar);
        }
      }
    }
  }, [props.PaymentResponse]);

  const onSuccess = () => {};
  const onFailure = () => {};

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    if (props.PaymentResponse?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  const onChange = (value, name) => {
    setstate({ ...state, [name]: value });
  };

  const CheckFields = (name) => {
    if (state.MonthFrom !== "" && state.MonthTo !== "") {
      setError({ ...error, monthsError: "" });
    } else {
      setError({ ...error, monthsError: "Please Select a Range" });
    }
  };
  const [error, setError] = useState({
    monthsError: "",
  });
  const reset = () => {
    setstate({
      ...state,
      MonthFrom: "",
      MonthTo: "",
      Cnic: "",
      Status: "",
      ProjectName: "",
      FileNo: "",
    });
  };
  return (
    <CardHeader className="border-0">
      <h3 className="mb-0"> Payments </h3>
      <CardBody>
        <form>
          <div className="pl-lg-4">
            <hr
              style={{
                backgroundColor: "black",
                marginTop: "0px",
                marginLeft: "7%",
                marginRight: "7%",
              }}
            />
            <div
              style={{
                marginLeft: "6%",
                marginRight: "6%",
                marginTop: "-5px",
              }}
            >
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
                    <th scope="col">Unpaid</th>
                    <th scope="col">Paid</th>
                    <th scope="col">In Process</th>
                  </tr>
                </thead>

                <tbody style={{ fontSize: "12px" }}>
                  <tr>
                    <td> {unpaidcounts}</td>
                    <td>{paidcounts}</td>
                    <td>{verifiedcounts}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Row>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  CNIC
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  placeholder=""
                  onKeyPress={(event) => {
                    if (!/[0-9-]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  //onBlur={() => CheckFields("phoneNumber")}
                  value={state.Cnic}
                  onChange={(e) => onChange(e.target.value, "Cnic")}
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
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  File No
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  // onBlur={() => CheckFields("email")}
                  // placeholder=""
                  value={state.FileNo}
                  onChange={(e) => onChange(e.target.value, "FileNo")}
                ></input>
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Status
                </label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  options={status}
                  id="exampleFormControlSelect1"
                  type="select"
                  value={{ label: state.Status }}
                  onChange={(e) => onChange(e.value, "Status")}
                />
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Month to
                </label>
                <input
                  type="date"
                  id="input-username"
                  className="form-control"
                  onBlur={() => CheckFields("monthTo")}
                  // placeholder=""
                  value={state.MonthTo}
                  onChange={(e) => {
                    onChange(e.target.value, "MonthTo");
                    CheckFields();
                  }}
                ></input>
                {error.monthsError !== "" && error.monthsError !== null && (
                  <small>
                    <span style={{ color: "red" }}>
                      {error.monthsError}{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                  </small>
                )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Month from
                </label>
                <input
                  type="date"
                  id="input-username"
                  className="form-control"
                  onBlur={() => CheckFields("monthFrom")}
                  min={
                    state.MonthTo !== undefined && state.MonthTo !== null
                      ? state.MonthTo
                      : ""
                  }
                  value={state.MonthFrom}
                  onChange={(e) => {
                    onChange(e.target.value, "MonthFrom");
                    CheckFields();
                  }}
                ></input>
                {error.monthsError !== "" && error.monthsError !== null && (
                  <small>
                    <span style={{ color: "red" }}>
                      {error.monthsError}{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                  </small>
                )}
                &nbsp;
              </Col>
              <Col lg="4" md="4" sm="6" xs="12">
                <label className="form-control-label" for="input-username">
                  Project Name
                </label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  options={project}
                  value={{ label: state.ProjectName }}
                  id="exampleFormControlSelect1"
                  type="select"
                  onChange={(e) => onChange(e.label, "ProjectName")}
                />
              </Col>
              &nbsp;
            </Row>
            <Button color="danger" size="sm" id="reset" onClick={reset}>
              <span className="btn-inner--text"></span>
              <span className="btn-inner--icon">
                <i className="fas fa-undo"></i>
              </span>
            </Button>
          </div>
        </form>
      </CardBody>
      <CardBody>
        <Row>
          <Col lg="2" md="2" sm="4" xs="4">
            <label className="form-control-label"> Rows Per Pages </label>
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

          <Col lg="2" md="2" sm="4" xs="4"></Col>
          {/* <Col lg="2" md="2" sm="4" xs="4">
            Paid Count: {paidcounts}
          </Col>
          <Col lg="2" md="2" sm="4" xs="4">
            Unpaid Count: {unpaidcounts}
          </Col>
          <Col lg="4" md="4" sm="4" xs="4">
            Verification in Progress Count: {verifiedcounts}
          </Col> */}
        </Row>
        <br />

        <Report paginatedPosts={posts} state={state} />
        <TableOfPayments paginatedPosts={posts} state={state}></TableOfPayments>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li className="page-item">
              Page {pageNumber} - {metaData?.totalPages}
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
      </CardBody>
    </CardHeader>
  );
};

export default Filteration;
