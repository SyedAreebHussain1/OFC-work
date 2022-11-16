import React, { useState, useEffect } from "react";
import { CardBody, Button, CardHeader, Row, Col, Input } from "reactstrap";
import Select from "react-select";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import { Tooltip } from "reactstrap";
import TableOfViewAllAgentForms from "./TableOfViewAllAgentForms";
import readXlsxFile from "read-excel-file";
import { connect } from "react-redux";

import swal from "sweetalert";
import FileUpload from "./FileUpload";
import { post } from "jquery";

const Filteration = (props) => {
  // setValue(val)
  const [arrayOfUploadedFile, setarrayOfUploadedFile] = useState([null]);
  const [value, setValue] = useState("");

  let val = 0;
  useEffect(() => {
    props.ShowBookingStatusFormStatus(onSuccess, onFailure);
    let body = {
      AgnetCnic: null,
      formno: null,
      FormStatus: null,
    };
    props.GetRealStateAgent(body, onSuccess, onFailure);
  }, [true]);
  const [state, setstate] = useState({
    RangeFrom: "",
    RangeTo: "",
    Cnic: "",
    FormNo: "",
    Status: "",
    recevingNo: "",
  });
  const [Error, setError] = useState({
    RangeFromError: "",
    RangeToError: "",
    CnicError: "",
  });

  const Save = () => {
    // setError({
    //   ...Error,
    //   // RangeFromError: validate("required", state.RangeFrom),

    //   // RangeToError: validate("required", state.RangeTo),
    //   CnicError: validate("CNIC", state.Cnic),
    //   });

    //  if(Error.CnicError==null )
    //  {
    if (
      state.Cnic == "" &&
      state.FormNo == "" &&
      state.Status == "" &&
      state.recevingNo == ""
    ) {
      let body = {
        AgnetCnic: null,
        formno: null,
        FormStatus: null,
      };
      props.GetRealStateAgent(body, onSuccess, onFailure);
    } else if (
      state.Cnic !== "" &&
      state.FormNo == "" &&
      state.Status == "" &&
      state.recevingNo == ""
    ) {
      let body = {
        AgnetCnic: state.Cnic,
        formno: null,
        FormStatus: null,
      };
      props.GetRealStateAgent(body, onSuccess, onFailure);
    } else if (
      state.Cnic == "" &&
      state.FormNo !== "" &&
      state.Status == "" &&
      state.recevingNo == ""
    ) {
      let body = {
        AgnetCnic: null,
        formno: state.FormNo,
        FormStatus: null,
      };
      props.GetRealStateAgent(body, onSuccess, onFailure);
    } else if (
      state.Cnic == "" &&
      state.FormNo == "" &&
      state.Status !== "" &&
      state.recevingNo == ""
    ) {
      let body = {
        AgnetCnic: null,
        formno: null,
        FormStatus: parseInt(state.Status),
      };
      props.GetRealStateAgent(body, onSuccess, onFailure);
    } else if (
      state.Cnic !== "" &&
      state.FormNo !== "" &&
      state.Status == "" &&
      state.recevingNo == ""
    ) {
      let body = {
        AgnetCnic: state.Cnic,
        formno: state.FormNo,
        FormStatus: null,
      };
      props.GetRealStateAgent(body, onSuccess, onFailure);
    } else if (
      state.Cnic !== "" &&
      state.FormNo == "" &&
      state.Status !== "" &&
      state.recevingNo == ""
    ) {
      let body = {
        AgnetCnic: state.Cnic,
        formno: null,
        FormStatus: parseInt(state.Status),
      };
      props.GetRealStateAgent(body, onSuccess, onFailure);
    } else if (
      state.Cnic == "" &&
      state.FormNo !== "" &&
      state.Status !== "" &&
      state.recevingNo == ""
    ) {
      let body = {
        AgnetCnic: null,
        formno: state.FormNo,
        FormStatus: parseInt(state.Status),
      };
      props.GetRealStateAgent(body, onSuccess, onFailure);
    } else if (
      state.Cnic !== "" &&
      state.FormNo !== "" &&
      state.Status !== "" &&
      state.recevingNo == ""
    ) {
      let body = {
        AgnetCnic: state.Cnic,
        formno: state.FormNo,
        FormStatus: parseInt(state.Status),
      };
      props.GetRealStateAgent(body, onSuccess, onFailure);
    } else if (
      state.Cnic == "" &&
      state.FormNo == "" &&
      state.Status == "" &&
      state.recevingNo !== ""
    ) {
      let body = {
        AgnetCnic: null,
        formno: null,
        FormStatus: null,
      };
      props.GetRealStateAgent(body, onSuccess, onFailure);
    }
    //  }
  };

  const onReset = () => {
    setstate({ ...state, Cnic: "", FormNo: "", Status: "", recevingNo: "" });
    setValue("");
    let body = {
      AgnetCnic: null,
      formno: null,
      FormStatus: null,
    };
    props.GetRealStateAgent(body, onSuccess, onFailure);
  };

  const [noOfRows, setnoOfRows] = useState("");
  let numberOfRows;
  const onChange = (name, value) => {
    setstate({ ...state, [name]: value });
  };

  const checkFields = (name) => {
    // if(name=="RangeFrom")
    // {
    //     setError({...Error,RangeFromError: validate("required", state.RangeFrom)})
    // }
    // else if(name="RangeTo")
    // {
    //     setError({...Error,RangeToError: validate("required", state.RangeTo)})
    // }
    // else
    if ((name = "Cnic")) {
      setError({ ...Error, CnicError: validate("CNIC", state.Cnic) });
    }
  };

  let dataInArrayForPaginaion = [];
  useEffect(() => {
    setPosts(null);
    setPageNumber(1);
    if (props.AgentDetail !== null && props.AgentDetail !== undefined) {
      if (
        props.AgentDetail[0].Data !== null &&
        props.AgentDetail[0].Data !== undefined
      )
        if (state.recevingNo !== "") {
          // for (let i = 0; i < props.AgentDetail.length; i++) {
          // dataInArrayForPaginaion.push(props.AgentDetail[0].Data[i]);
          let arr = props.AgentDetail[0].Data.filter((i) => {
            return i.receipt_no == state.recevingNo;
          });
          setPosts(arr);
        } else {
          setPosts(props.AgentDetail[0].Data);
        }
      // }
    }
  }, [props.AgentDetail]);

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    numberOfRows = parseInt(val);
    setPageNumber(1);
  };
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(2);
  let postNumber = 10;
  if (noOfRows != "") {
    postNumber = noOfRows;
  }
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

  useEffect(() => {
    if (props.Response !== null) {
      Save();
    }
  }, [props.Response]);
  const onSuccess = () => {};
  const onFailure = () => {};

  useEffect(() => {
    if (state.Cnic !== "") {
      posts?.map((i) => {
        val += i.amount;
      });
      setValue(val);
    }
  }, [posts]);

  return (
    <>
      <CardHeader className="border-0">
        <Row>
          <Col lg="9" md="9" sm="12" xs="12">
            <h3 className="mb-0">Upload Currency Numbers</h3>
          </Col>
          <Col lg="2" md="2" sm="12" xs="12" className="col text-right">
            <Input
              id="exampleFormControlSelect1"
              type="file"
              onChange={(e) => {
                readXlsxFile(e.target.files[0]).then((rows) => {
                  setarrayOfUploadedFile(rows);
                });
              }}
              accept=".xlsx, .xls, .csv"
            />
          </Col>
          <Col lg="1" md="1" sm="12" xs="12">
            <FileUpload
              arrayOfUploadedFile={arrayOfUploadedFile}
              uploadCurrrencyNotes={props.uploadCurrrencyNotes}
            />

            <Button color="success" size="sm" id="load" className="mt--1">
              <a
                href="https://callrecordingskgccrm.s3.ap-south-1.amazonaws.com/templates/currencyFileStructure.xlsx"
                download
                target="_blank"
                className=" text-decoration-none text-white"
              >
                <i className="fas fa-download"></i>
              </a>
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <h3 className="mb-0">View Agent's Form </h3>
      </CardHeader>
      <CardBody>
        <form>
          <div className="pl-lg-4">
            <Row>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Status
                </label>

                <Input
                  id="exampleFormControlSelect1"
                  type="select"
                  value={state.Status}
                  onChange={(e) => onChange("Status", e.target.value)}
                >
                  <option value={null}> Select Status</option>
                  {props.Status !== null &&
                    props.Status !== undefined &&
                    props.Status.map((i) => {
                      return (
                        <option key={i.status_name} value={i.status_id}>
                          {i.status_name}
                        </option>
                      );
                    })}
                </Input>
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Form No.
                </label>
                <input
                  type="text"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  id="input-username"
                  className="form-control"
                  placeholder=""
                  // onBlur={() => checkFields("Fo")}
                  value={state.FormNo}
                  onChange={(e) => onChange("FormNo", e.target.value)}
                ></input>
              </Col>
              {/*  <Col lg="4" md="4" sm="6">
                  <label className="form-control-label" for="input-username">
                  Select Range To
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    onBlur={() => checkFields("RangeTo")}
                     value={state.RangeTo}
                     onChange={(e) => onChange("RangeTo",e.target.value)}
                  ></input>
                  {Error.RangeToError !== "" && Error.RangeToError !== null && (
                    <small>
                      <span style={{ color: "red" }}>
                        {Error.RangeToError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )}
                </Col> */}
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  CNIC
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  maxLength={13}
                  onBlur={() => checkFields("Cnic")}
                  value={state.Cnic}
                  onChange={(e) => onChange("Cnic", e.target.value)}
                ></input>
                {Error.CnicError !== "" && Error.CnicError !== null && (
                  <small>
                    <span style={{ color: "red" }}>
                      {Error.CnicError}{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                  </small>
                )}
                &nbsp;
              </Col>
              <Col lg="4" md="4" sm="6" xs="12">
                <label className="form-control-label" for="input-username">
                  Receving No.
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  onChange={(e) => onChange("recevingNo", e.target.value)}
                  // onBlur={() => CheckFields("recevingNo")}
                  value={state.recevingNo}
                ></input>
                {/* {stateError.RecevingNoError !== "" &&
                  stateError.RecevingNoError !== null && (
                    <small>
                      <span style={{ color: "red" }}>
                        {stateError.RecevingNoError}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )} */}
                <br />
              </Col>
              {value !== "" ? (
                <Col lg="4" md="4" sm="6" xs="12">
                  <label className="form-control-label" for="input-username">
                    Total Amount
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    // onChange={(e) => onChange("recevingNo", e.target.value)}
                    // onBlur={() => CheckFields("recevingNo")}
                    value={value}
                    disabled
                  ></input>
                  {/* {value} */}
                  <br />
                </Col>
              ) : (
                ""
              )}
            </Row>
            <Button
              color="info"
              size="sm"
              id="search"
              onClick={Save}
              // onClick={(e) => onSearchButton(state.userName)}
            >
              <span className="btn-inner--text"></span>
              <span className="btn-inner--icon">
                <i className="fas fa-search"></i>
              </span>
            </Button>
            {/* <Tooltip
                placement="bottom"
                isOpen={tooltipOpen.search}
                autohide={false}
                target="search"
                toggle={() => toggle("search")}
              >
                Search
              </Tooltip> */}

            <Button color="danger" size="sm" id="reset" onClick={onReset}>
              <span className="btn-inner--text"></span>
              <span className="btn-inner--icon">
                <i className="fas fa-undo"></i>
              </span>
            </Button>
            {/* <Tooltip
                placement="bottom"
                isOpen={tooltipOpen.reset}
                autohide={false}
                target="reset"
                toggle={() => toggle("reset")}
              >
                Reset
              </Tooltip> */}
          </div>
        </form>
        <br />
        <br />
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
        </Row>
        <br />
        <TableOfViewAllAgentForms
          paginatedPosts={paginatedPosts}
          upgradeFormStatus={props.upgradeFormStatus}
          // ToggleApproveFormModal={props.ToggleApproveFormModal}
        ></TableOfViewAllAgentForms>
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
      </CardBody>
    </>
  );
};

export default Filteration;
