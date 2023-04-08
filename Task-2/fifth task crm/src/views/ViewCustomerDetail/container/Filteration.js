import React, { useState, useEffect } from "react";
import { CardBody, Button, CardHeader, Row, Col, Input } from "reactstrap";
import Select from "react-select";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import { Tooltip } from "reactstrap";
import TableOfViewCustomer from "./TableOfViewCustomer";
import RecordingModal from "../RecordingModal";
import { connect } from "react-redux";
import { CallRecording } from "../middleware";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import swal from "sweetalert";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Filteration = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);
  const [state, setState] = useState({
    id: "",
    agentName: "",
    phone: "",
    date: "",
    ClientPhone: "",
    ClientEmail: "",
    ClientName: "",
    UserId: "",
  });

  const [options, setOptions] = useState([null]);
  const [error, setError] = useState({
    emailError: "",
    ContactNumber: "",
    ContactNumberError: "",
    phoneNumberError: "",
  });
  //end validation
  //tooltip start
  const [tooltipOpen, setTooltipOpen] = useState({
    reset: false,
    info: false,
    search: false,
  });
  useEffect(() => {
    setPosts(null);
    setState({ ...state, userName: "" });
    props.showAgent(OnSuccessAgent, OnFailureAgent);
  }, [true]);

  const [teamId, setteamId] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("teamid") == "null") {
      setteamId(null);
    } else {
      setteamId(parseInt(localStorage.getItem("teamid")));
    }
  }, [true]);
  const onSearchButton = () => {
    if (state.ClientEmail !== "" && state.ClientPhone !== "") {
      props.showClientDetail(
        pageNumber,
        noOfRows,
        state.ClientPhone,
        state.ClientEmail,
        onSuccessClient,
        onFailureClient
      );
    } else {
      swal("Warning", "Please Enter Phone Number And Email Address", "warning");
    }
  };
  useEffect(() => {
    if (props.Response !== null && props.Response !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Response.length; i++) {
        if (teamId === null) {
          let obj = {
            value: props.Response[i].Dashboarduserid,
            label: props.Response[i].name,
            phone: props.Response[i].phoneNo,
          };
          arr.push(obj);
        } else if (props.Response[i].teamid == teamId) {
          let obj = {
            value: props.Response[i].Dashboarduserid,
            label: props.Response[i].name,
            phone: props.Response[i].phoneNo,
          };
          arr.push(obj);
        } else {
        }
      }
      setOptions(arr);
    }
  }, [props.Response]);

  let dataInArrayForPaginaion = [];
  useEffect(() => {
    setPosts(null);
    setPageNumber(1);
    if (props.Client !== null && props.Client !== undefined) {
      for (let i = 0; i < props.Client?.response?.length; i++) {
        dataInArrayForPaginaion.push(props.Client?.response[i]);
        setPosts(props.Client?.response);
        setMetaData(props.Client?.metaData);
      }
    }

    if (
      dataInArrayForPaginaion[0] !== null &&
      dataInArrayForPaginaion[0] !== undefined
    ) {
      setState({
        ...state,
        ClientName: dataInArrayForPaginaion[0].user_name,
        UserId: dataInArrayForPaginaion[0].user_id,
      });
    } else {
    }
  }, [props.Client]);
  useEffect(() => {
    if (props.File !== null && props.File !== undefined) {
      let body = {
        UserEmail: state.ClientEmail,
        UserPhoneNumber: state.ClientPhone,
      };
      props.showClientDetail(
        pageNumber,
        noOfRows,
        state.ClientPhone,
        state.ClientEmail,
        onSuccessClient,
        onFailureClient
      );
    }
  }, [props.File]);
  useEffect(() => {
    findValueInArray(state.userName);
  }, [state.userName]);

  const OnSuccessAgent = () => {};
  const OnFailureAgent = () => {};

  const onSuccess = () => {};
  const onFailure = () => {};
  const GenerateNewFile = () => {
    if (state.ClientPhone !== "" && state.ClientEmail !== "") {
      if (state.UserId !== "") {
        let body = {
          user_id: state.UserId,
          order_description: "",
        };
        props.showInsertNewFileDetail(body, onSuccess, onFailure);
      } else {
        swal({
          title: "Not Working!",
          text: "Please Enter Search button for generate new file.",
          icon: "warning",
        });
      }
    } else {
      swal({
        title: "Not Working!",
        text: "Please Enter Phone number and Email",
        icon: "warning",
      });
    }
  };

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    if (props.Data?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  const onChange = (val, name) => {
    setState({ ...state, [name]: val });
  };

  //Start Validation
  const CheckFields = (name) => {
    if (name === "email") {
      setError({
        ...error,
        emailError: validate("email", state.ClientEmail),
      });
    } else if (name === "phoneNumber") {
      setError({
        ...error,
        phoneNumberError: validate("phoneNumber", state.ClientPhone),
      });
    }
  };

  const toggle = (name) => {
    if (name == "search") {
      setTooltipOpen({ ...tooltipOpen, search: !tooltipOpen.search });
    } else if (name == "info") {
      setTooltipOpen({ ...tooltipOpen, info: !tooltipOpen.info });
    } else if (name == "reset") {
      setTooltipOpen({ ...tooltipOpen, reset: !tooltipOpen.reset });
    }
  };
  //tooltip end

  const toggler = () => {
    setIsOpen(!isOpen);
  };
  const onSuccessClient = () => {};
  const onFailureClient = () => {};

  const onReset = () => {
    setState({
      ...state,
      id: "",
      ClientEmail: "",
      UserId: "",
      ClientPhone: "",
      ClientName: "",
    });
    setPosts([]);
  };

  const findValueInArray = (value) => {
    props.showAgent(OnSuccessAgent, OnFailureAgent);
  };

  // const [bodydata, setBody] = useState({
  //   Agentid: null,
  //   Calldatetime: null,
  //   Clientphoneno:  "03102922930",
  //   Calltype: null,
  // });

  // useEffect(() => {
  //   if(bodydata !== null && bodydata !== undefined ) {
  //     // window.location.reload();
  //     props.CallRecording(bodydata, OnSuccess, OnFailure);
  //   }
  // }, [false]);
  // const OnSuccess = () => {};
  // const OnFailure = () => {};

  // useEffect(() => {

  // }, [props.Call_Records]);

  return (
    <CardHeader className="border-0">
      {/* <RecordingModal modal={isOpen} toggle={toggler} Data={props.Call_Records} number={state.ClientPhone} /> */}
      <h3 className="mb-0"> View Customer Detail </h3>
      <CardBody>
        <form>
          <div className="pl-lg-4">
            <Row>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Client Phone Number
                </label>
                {/* <input
                  type="text"
                  onKeyPress={(event) => {
                    if (!/[0-9-+]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  id="input-username"
                  className="form-control"
                  placeholder=""
                  onBlur={() => CheckFields("phoneNumber")}
                  value={state.ClientPhone}
                  onChange={(e) => onChange(e.target.value, "ClientPhone")}
                ></input> */}
                <PhoneInput
                  className="input-group-alternative"
                  onBlur={() => CheckFields("phoneNumber")}
                  value={state.ClientPhone ? state.ClientPhone : ""}
                  // onChange={(e) => OnChange(e, "phone")}
                  onChange={(e, value, country, formattedValue) => {
                    // console.log("EEEEEE", value);
                    let val = `+${e}`;
                    onChange(val, "ClientPhone");
                  }}
                  inputStyle={{
                    width: "100%",
                    border: "solid 1px lightgrey",
                    // border: "none",
                  }}
                  inputExtraProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                  fullWidth="true"
                  //  containerStyle={{border:"none"}}
                  countryCodeEditable={false}
                  country={"pk"}
                  // value={state.phone}
                />
                {error.phoneNumberError !== "" &&
                  error.phoneNumberError !== null && (
                    <small style={{ marginTop: "2px" }}>
                      <span style={{ color: "red" }}>
                        {error.phoneNumberError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Client Email Address
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  onBlur={() => CheckFields("email")}
                  placeholder=""
                  value={state.ClientEmail}
                  onChange={(e) => onChange(e.target.value, "ClientEmail")}
                ></input>
                {error.emailError !== "" && error.emailError !== null && (
                  <small>
                    <span style={{ color: "red" }}>
                      {error.emailError}{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                  </small>
                )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Client Name
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  value={state.ClientName}
                  disabled
                ></input>
                &nbsp;
              </Col>
              &nbsp;
            </Row>
            <Button
              color="info"
              size="sm"
              id="search"
              //  onClick={(e) => findValueInArray(state.userName)}
              onClick={(e) => onSearchButton(state.userName)}
            >
              <span className="btn-inner--text"></span>
              <span className="btn-inner--icon">
                <i className="fas fa-search"></i>
              </span>
            </Button>
            <Tooltip
              placement="bottom"
              isOpen={tooltipOpen.search}
              autohide={false}
              target="search"
              toggle={() => toggle("search")}
            >
              Search
            </Tooltip>

            <Button color="danger" size="sm" id="reset" onClick={onReset}>
              <span className="btn-inner--text"></span>
              <span className="btn-inner--icon">
                <i className="fas fa-undo"></i>
              </span>
            </Button>
            <Tooltip
              placement="bottom"
              isOpen={tooltipOpen.reset}
              autohide={false}
              target="reset"
              toggle={() => toggle("reset")}
            >
              Reset
            </Tooltip>
          </div>
        </form>
        <br />
        <br />
        {/* <Button color="danger" size="sm" onClick={toggler}>
          View Recording..
        </Button> */}
        <Button color="danger" size="sm" onClick={GenerateNewFile}>
          Generate New File
        </Button>
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
        <TableOfViewCustomer
          showReturnPlot={props.showReturnPlot}
          PlotReturn={props.PlotReturn}
          InsertReturnPlot={props.InsertReturnPlot}
          ReturnRequest={props.ReturnRequest}
          paginatedPosts={posts}
          state={state}
          teamId={teamId}
          showPlotSector={props.showPlotSector}
          Sector={props.Sector}
          showPlotNo={props.showPlotNo}
          PlotNo={props.PlotNo}
          ShowPlotInformation={props.ShowPlotInformation}
          PlotPositionsValues={props.PlotPositionsValues}
          newPlotMiddleware={props.newPlotMiddleware}
          NewPosition={props.NewPosition}
          ChangePlotMiddleware={props.ChangePlotMiddleware}
          ChangePlotStatus={props.ChangePlotStatus}
        ></TableOfViewCustomer>
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
// export default Filteration

const mapStateToProps = (state) => ({
  Call_Records: state.viewCustomerDetail.Call_Records,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    CallRecording: (body, OnSuccess, OnFailure) =>
      dispatch(CallRecording(body, OnSuccess, OnFailure)),
  };
};

export default connect(mapStateToProps, mapDispatchToPrpos)(Filteration);
