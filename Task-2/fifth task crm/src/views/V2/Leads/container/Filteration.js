import React from "react";
import Headers from "../../../../components/Headers/Header/container/Header";
import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  Button,
  Container,
  CardBody,
  Row,
  Table,
  Input,
  Col,
} from "reactstrap";
import { connect } from "react-redux";
import readXlsxFile from "read-excel-file";
import swal from "sweetalert";
import Loader from "react-loader-spinner";
import AddNew from "../helpers/add_new";
import Select from "react-select";
import axios from "axios";
import { BASEURL, NOTIFY_USER } from "config/api/URL";
import { Tooltip } from "reactstrap";

import validate from "../../../../components/Utilities Component/ValidationWrapper";
import FileUpload from "./FileUpload";
import TableOfCampaign from "./TableOfCampaign";
import { GetUser, AssignLead, DownloadAPI } from "../middleware";
import { NewUser } from "../middleware";
import { GetAgent } from "store/helpers/GetAllAgent/middleware";
import { GetSources } from "store/helpers/GetSources/middleware";
import { CheckOrderStatus } from "store/helpers/GetOrder/middleware";
import { AiFillWindows } from "react-icons/ai";
import { ContactsOutlined } from "@material-ui/icons";
import { networkPoll } from "socket/Networkpolling";
import socketIOClient from "socket.io-client";
import { post } from "jquery";

let arrayForCheck = [];

const Filteration = (props) => {
  const SOCKET_URL = "https://backendcrm.squarepro.net";
  let socket = socketIOClient(`${SOCKET_URL}`, networkPoll);
  const [selectAgent, setselectAgent] = useState("");
  const { Response } = props;
  const [leadStageStatus, setLeadStageStatus] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isSocketData, setIsSocketData] = useState(false);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);

  // const [newLead, setNewLead] = useState([null]);

  let arrayForSend = [];
  const [tooltipOpen, setTooltipOpen] = useState({
    upload: false,
    load: false,
    addNewLead: false,
    assignLeads: false,
    proceed: false,
    deAssignLeads: false,
    info: false,
    download: false,
  });
  const toggle = (name) => {
    if (name == "upload") {
      setTooltipOpen({ ...tooltipOpen, upload: !tooltipOpen.upload });
    } else if (name == "load") {
      setTooltipOpen({ ...tooltipOpen, load: !tooltipOpen.load });
    } else if (name == "addNewLead") {
      setTooltipOpen({ ...tooltipOpen, addNewLead: !tooltipOpen.addNewLead });
    } else if (name == "assignLeads") {
      setTooltipOpen({ ...tooltipOpen, assignLeads: !tooltipOpen.assignLeads });
    } else if (name == "proceed") {
      setTooltipOpen({ ...tooltipOpen, proceed: !tooltipOpen.proceed });
    } else if (name == "deAssignLeads") {
      setTooltipOpen({
        ...tooltipOpen,
        deAssignLeads: !tooltipOpen.deAssignLeads,
      });
    } else if (name == "info") {
      setTooltipOpen({
        ...tooltipOpen,
        info: !tooltipOpen.info,
      });
    } else if (name == "download") {
      setTooltipOpen({
        ...tooltipOpen,
        download: !tooltipOpen.download,
      });
    }
  };
  const dateFunction = (date) => {
    const nDate = new Date(date).toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
    });
    return nDate;
  };
  useEffect(() => {
    props.GetUser(
      pageNumber,
      noOfRows,
      body.sourceid,
      body.orderstatus,
      OnSuccess,
      onFailure
    );
  }, [true]);
  const [agent, setAgent] = useState(null);
  useEffect(() => {
    props.GetAgent(OnSuccessAgent, onFailure);
  }, [true]);
  const [arrayOfUploadedFile, setarrayOfUploadedFile] = useState([null]);
  const input = document.getElementById("fileinput");
  useEffect(() => {
    if (input !== null && input !== undefined) {
      input.addEventListener("change", () => {
        readXlsxFile(input.files[0]).then((rows) => {
          setarrayOfUploadedFile(rows);
        });
      });
    } else {
    }
  }, [input]);
  useEffect(() => {
    if (props.AssignResponse !== undefined && props.AssignResponse) {
      props.GetUser(
        pageNumber,
        noOfRows,
        body.sourceid,
        body.orderstatus,
        OnSuccess,
        onFailure
      );
    }
  }, [props.AssignResponse]);

  const [teamId, setteamId] = useState(null);

  useEffect(() => {
    if (props.Agents !== null && props.Agents !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Agents.length; i++) {
        if (teamId === null) {
          let obj = {
            value: props.Agents[i].Dashboarduserid,
            label: props.Agents[i].name,
            phone: props.Agents[i].phoneNo,
            fcmtoken: props.Agents[i].fcmtoken,
          };
          arr.push(obj);
        } else if (props.Agents[i].teamid == teamId) {
          let obj = {
            value: props.Agents[i].Dashboarduserid,
            label: props.Agents[i].name,
            phone: props.Agents[i].phoneNo,
          };
          arr.push(obj);
        } else {
        }
      }
      setOptions(arr);
    }
  }, [props.Agents]);

  useEffect(() => {
    props.GetSources(onSuccessSources, onFailureSources);
  }, [true]);

  useEffect(() => {
    props.GetOrder(onSuccessStatus, onFailureStatus);
  }, [true]);

  const onSuccessStatus = () => {};
  const onFailureStatus = () => {};

  const onSuccessSources = () => {};
  const [options, setOptions] = useState([null]);
  const onFailureSources = () => {};
  const OnSuccess = () => {
    if (props.Users !== null) {
      setContact(props.Users);
    }
  };
  const OnSuccessAgent = () => {};
  const onFailure = (e) => {
    swal(
      "Sorry!",
      "Something Went Wrong Please Try Again Later or Contact Admin",
      "error"
    );
  };
  const [source, setSource] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggler = () => {
    setIsOpen(!isOpen);
    props.GetUser(
      pageNumber,
      noOfRows,
      body.sourceid,
      body.orderstatus,
      OnSuccess,
      onFailure
    );
  };

  const [body, setBody] = useState({
    agentid: null,
    sourceid: null,
    orderstatus: null,
    Datetime: null,
    teamid: null,
  });

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
  });

  const [token, setToken] = useState({
    title: "New Leads Assign",
    message: `Admin assign ${arrayForCheck.length} leads to you`,
    fcmtoken: null,
    agentid: null,
  });
  const [contact, setContact] = useState(null);
  const OnChange = (value, name) => {
    if (name === "userName") {
      setselectAgent(value);
      //  let val = value.split(" ");
      setState({
        ...state,
        [name]: value.label,
        phone: value.phone,
      });

      setAgent(value.value);
      setToken({
        ...token,
        fcmtoken: value.fcmtoken,
        agentid: value.value,
      });
    } else {
      setState({
        ...state,
        [name]: value,
      });

      //   setState({
      //     ...state,
      //     [name]: val[0],
      //     phone: val[1],
      //   });

      //   setAgent(val[3]);
      //   setToken({
      //     ...token,
      //     fcmtoken: val[2],
      //     agentid: parseInt(val[3]),
      //   });
      // } else {
      //   setState({
      //     ...state,
      //     [name]: value,
      //   });
    }
  };
  const download = () => {
    props.DownloadAPI(onSuccessFile, onFailureFile);
  };
  useEffect(() => {
    if (props.File !== null && props.File !== undefined) {
      window.open(props.File?.response, "_self");
    }
  }, [props.File]);

  const onSuccessFile = () => {};
  const onFailureFile = () => {};
  const AssignLead = () => {
    if (agent !== null && agent !== undefined) {
      for (let i = 0; i < arrayForCheck.length; i++) {
        let details = arrayForCheck[i].split("+");
        let records = {
          Taskid: details[0],
          LeadStageStatus: leadStageStatus, //leadStageStatus
        };

        props.Assign(
          parseInt(agent),
          records,
          onSuccessAssign,
          onFailureAssign
        );
      }
    } else {
      swal({
        title: "Not Working!",
        text: "Please select an agent.",
        icon: "warning",
      });
    }
  };
  const SendNotification = () => {
    let authToken = localStorage.getItem("auth");

    let body = {
      title: "New Leads Assign",
      message: `Admin assign ${arrayForCheck.length} leads to you`,
      fcmtoken: token.fcmtoken,
      agentid: token.agentid,
    };

    let link = `${BASEURL}sendnotification`;

    axios
      .post(link, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${authToken}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          props.GetUser(
            pageNumber,
            noOfRows,
            body.sourceid,
            body.orderstatus,
            OnSuccess,
            onFailure
          );
        } else {
        }
      })
      .catch((err) => console.log("Error"));
  };

  // const clear=()=>{
  //   selectAgent.select.clearValue();
  // }
  const onSuccessAssign = () => {
    //  clear()

    //props.GetUser(pageNumber, noOfRows,body.sourceid,body.orderstatus, OnSuccess, onFailure);
    SendNotification();
    setselectAgent("");
    setState({ ...state, userName: "", id: "", phone: "" });

    arrayForCheck = [];
    //window.location.reload();
  };
  const onFailureAssign = () => {};
  const OnChangeSoures = (val) => {
    // let bodyVal = parseInt(val);
    setSource(val);
    setBody({ ...body, sourceid: val });
  };

  // const onSuccess = () => {
  //   swal("Congratulations!", "Lead Added From Uploaded File", "success");
  //   props.toggle();
  // };
  // const OnFailure = () => {
  //   swal(
  //     "Sorry!",
  //     "Something Went Wrong Please Try Again Later or Contact Admin",
  //     "error"
  //   );
  // };

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));

    setPageNumber(1);
  };

  const handlePrev = () => {
    arrayForCheck = [];
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    // arrayForCheck = [];
    if (props.Users?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  let tempArr = [];
  useEffect(() => {
    //setPosts(null);

    if (props.Users?.response !== null && props.Users?.response !== undefined) {
      tempArr = [...props.Users?.response];
      setPosts(tempArr);
      setMetaData(props.Users?.metaData);
    }
  }, [props.Users]);

  useEffect(() => {
    socket.on(`new-lead`, (data) => {
      if (pageNumber == 1) {
        let sockectData = [data];
        setPosts([...sockectData, ...posts]);
        setIsSocketData(true);
      }
    });
    return () => socket.off(`new-lead`);
  }, [posts, pageNumber]);

  const onChangeOrder = (val) => {
    setBody({ ...body, orderstatus: val });
  };
  //with pagination
  useEffect(() => {
    props.GetUser(
      pageNumber,
      noOfRows,
      body.sourceid,
      body.orderstatus,
      OnSuccess,
      onFailure
    );
  }, [pageNumber, noOfRows]);
  useEffect(() => {
    setPageNumber(1);
    props.GetUser(
      pageNumber,
      noOfRows,
      body.sourceid,
      body.orderstatus,
      OnSuccess,
      onFailure
    );
  }, [body.sourceid, body.orderstatus]);

  //without pagination
  // useEffect(() => {
  //   props.GetUser(body, OnSuccess, onFailure);
  // }, [body]);
  const [state, setState] = useState({
    id: "",
    userName: "",
    phone: "",
    date: "",
  });

  const LoadNew = () => {
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}insertfacebookleads`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          swal("Congratulations!", "New Leads Loaded Successfully", "success");

          props.GetUser(
            pageNumber,
            noOfRows,
            body.sourceid,
            body.orderstatus,
            OnSuccess,
            onFailure
          );
        } else {
        }
      })
      .catch((err) => console.log(err));
  };
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const onReset = () => {
    setSource("");
    setBody({ ...body, orderstatus: "", sourceid: "" });
  };

  return (
    <>
      <AddNew
        modal={isOpen}
        toggle={toggler}
        arrayOfFile={arrayOfUploadedFile}
      />
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col lg="10" md="10" sm="12" xs="12">
                  <h3 className="mb-0">Leads</h3>
                </Col>

                <Col lg="2" md="2" sm="12" xs="12">
                  <Button
                    color="danger"
                    size="sm"
                    onClick={toggler}
                    id="addNewLead"
                    className="mt--1"
                  >
                    <span className="btn-inner--icon">
                      <i class="fas fa-user-plus"></i>
                    </span>
                  </Button>

                  <Tooltip
                    placement="bottom"
                    isOpen={tooltipOpen.addNewLead}
                    autohide={false}
                    target="addNewLead"
                    toggle={() => toggle("addNewLead")}
                  >
                    Add New Lead
                  </Tooltip>
                </Col>
                <br />
              </Row>
              <hr />
            </CardHeader>

            <CardBody style={{ marginTop: "-4%" }}>
              <Row>
                <Col lg="3" md="3" sm="3" xs="3">
                  <label className="form-control-label">Rows Per Pages</label>

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

              <TableOfCampaign
                noOfRows={noOfRows}
                paginatedPosts={posts}
                posts={posts}
                isSocketData={isSocketData}
                AssignLead={AssignLead}
                postNumber={pageNumber}
                body={body}
                arrayForCheck={arrayForCheck}
                GetUser={props.GetUser}
                Users={props.Users}
                setLeadStageStatus={setLeadStageStatus}
              />
            </CardBody>
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
          </Card>
        </div>
      </Row>
    </>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.fetchContacts.isLoading,

  isError: state.fetchContacts.isError,

  Users: state.fetchContacts.Users,

  Error: state.fetchContacts.error,

  AssignResponse: state.fetchContacts.AssignResponse,

  isError: state.agentHelper.isError,

  Agents: state.agentHelper.Agents,

  Error: state.agentHelper.error,

  Sources: state.sourceHelper.Sources,

  OrderReport: state.orderHelper.OrderReport,

  Response: state.fetchContacts.Response,

  File: state.fetchContacts.File,
});

const mapDispatchToPrpos = (dispatch) => {
  return {
    NewUser: (body, OnSuccess, OnFailure) =>
      dispatch(NewUser(body, OnSuccess, OnFailure)),

    DownloadAPI: (onsuccess, onFailure) =>
      dispatch(DownloadAPI(onsuccess, onFailure)),

    //with pagination

    GetUser: (page, limit, sourceid, orderstatus, OnSuccess, OnFailure) =>
      dispatch(
        GetUser(page, limit, sourceid, orderstatus, OnSuccess, OnFailure)
      ),

    //without pagination work by iqra

    // GetUser: (body, OnSuccess, OnFailure) =>

    //   dispatch(GetUser(body, OnSuccess, OnFailure)),

    GetAgent: (OnSuccess, OnFailure) =>
      dispatch(GetAgent(OnSuccess, OnFailure)),

    Assign: (handledby, leads, OnSuccess, OnFailure) =>
      dispatch(AssignLead(handledby, leads, OnSuccess, OnFailure)),

    GetSources: (OnSuccess, OnFailure) =>
      dispatch(GetSources(OnSuccess, OnFailure)),

    GetOrder: (OnSuccess, OnFailure) =>
      dispatch(CheckOrderStatus(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Filteration);
