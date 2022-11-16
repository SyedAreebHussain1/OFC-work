/* eslint-disable no-unused-vars */
import Headers from "components/Headers/Header1";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  CardBody,
  Row,
  Col,
  Input,
  Button,
} from "reactstrap";
import Select from "react-select";
import { Checklead, CheckUserInsert, CheckOrderStatus } from "../middleware";
import { connect } from "react-redux";

import Recording from "views/Leads/Recording";

import validate from "../../../components/Utilities Component/ValidationWrapper";
import { GetSources } from "../../../store/helpers/GetSources/middleware";
import { GetAgent } from "../../../store/helpers/GetAllAgent/middleware";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import AddNew from "../helpers/add_new";
import { Tooltip } from "reactstrap";

const Split_lead2 = (props) => {
  const [posts, setPosts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);
  const [State, setState] = useState({
    user_phone: null,
    user_email: null,
    agentid: null,
  });
  const [selectAgent, setSelectAgent] = useState("");

  useEffect(() => {
    props.GetAgent(OnSuccessAgent, OnFailureAgent);
    props.Checklead(
      pageNumber,
      noOfRows,
      State.agentid,
      State.user_email,
      State.user_phone,
      OnSuccess,
      onFailure
    );
    props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  }, [true]);

  useEffect(() => {
    props.CheckOrderStatus(onSuccessStatus, onFailureStatus);

    props.GetSources(onSuccessSources, onFailureSources);
  }, [props.CheckOrderStatus, props.GetAgent, props.GetSources]);
  useEffect(() => {
    props.Checklead(
      pageNumber,
      noOfRows,
      State.agentid,
      State.user_email,
      State.user_phone,
      OnSuccess,
      onFailure
    );
  }, [pageNumber, noOfRows, State.agentid, State.user_email, State.user_phone]);

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

  const OnSuccess = () => {};
  const onFailure = () => {};
  const OnSuccessAgent = () => {};
  const OnFailureAgent = () => {};
  const onSuccessSources = () => {};
  const onFailureSources = () => {};
  const onSuccessStatus = () => {};
  const onFailureStatus = () => {};
  const OnSuccessJwt = () => {};
  const OnFailureJwt = () => {};
  const statuschange = (elmt, va) => {
    if (elmt == "agentid") {
      setSelectAgent(va);
      setState({ ...State, agentid: va.value });
    } else {
      setState({ ...State, [elmt]: va });
    }
  };

  // const [inventoryData, setinventoryData] = useState({
  //   Uid: null,
  //   Uname: "",
  //   UTaskId: "",
  //   UCnic: "",
  //   Uemail: "",
  //   Uphone: "",
  //   Usourcename: "",
  //   Uagent: "",
  // });
  let history = useHistory();
  const inventory = (opt) => {
    // setinventoryData({
    //   Uname: opt.user_name,
    //   UTaskId: opt.Taskid,
    //   UCnic: opt.cnic,
    //   Uemail: opt.user_email,
    //   Uphone: opt.user_phone,
    //   Usourcename: opt.sourcename,
    //   Uagent: opt.Agent,
    //   UId: parseInt(opt.user_id),
    // });

    history.push({
      pathname: "/admin/plotselection",
      state: opt,
      // {
      //   id: inventoryData.UId,
      //   name: inventoryData.Uname,
      //   taskid: inventoryData.UTaskId,
      //   cnic: inventoryData.UCnic,
      //   email: inventoryData.Uemail,
      //   phone: inventoryData.Uphone,
      //   sourcename: inventoryData.sourcename,
      //   Agent: inventoryData.Uagent,
      // },
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAddNew, setIsOpenAddNew] = useState(false);
  const [Detail, setDetail] = useState({});
  const toggler = (opt) => {
    setIsOpen(!isOpen);
    setSendData(opt);
    setDetail(opt);
  };
  const togglerAddNew = () => {
    setIsOpenAddNew(!isOpenAddNew);
    props.Checklead(
      pageNumber,
      noOfRows,
      State.agentid,
      State.user_email,
      State.user_phone,
      OnSuccess,
      onFailure
    );
  };
  // useEffect(() => {}, [isOpen]);
  const [sendData, setSendData] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setPosts(props.Data?.response);
    setMetaData(props.Data?.metaData);
  }, [props.Data]);

  const [teamId, setteamId] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("teamid") == "null") {
      setteamId(null);
    } else {
      setteamId(parseInt(localStorage.getItem("teamid")));
    }
  }, [true]);

  const CheckFields = (name) => {
    if (name === "email") {
      setError({
        ...error,
        emailError: validate("email", State.user_email),
      });
    } else if (name === "phoneNumber") {
      setError({
        ...error,
        phoneNumberError: validate("phoneNumber", State.user_phone),
      });
    }
  };
  const [error, setError] = useState({
    emailError: "",
    ContactNumber: "",
    ContactNumberError: "",
    phoneNumberError: "",
  });
  useEffect(() => {
    if (props.Agents !== null && props.Agents !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Agents.length; i++) {
        if (teamId === null) {
          let obj = {
            value: props.Agents[i].Dashboarduserid,
            label: props.Agents[i].name,
            phone: props.Agents[i].phoneNo,
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
  const onReset = () => {
    setSelectAgent("");
    setState({ ...State, user_phone: "", user_email: "", agentid: "" });
  };
  const [role, setRole] = useState(null);
  useEffect(() => {
    setRole(parseInt(localStorage.getItem("roleid")));
  }, [true]);
  const [options, setOptions] = useState([null]);
  const toggle = (name) => {
    if (name == "addNewLead") {
      setTooltipOpen({ ...tooltipOpen, addNewLead: !tooltipOpen.addNewLead });
    }
  };
  const [tooltipOpen, setTooltipOpen] = useState({
    addNewLead: false,
  });
  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <Recording modal={isOpen} toggle={toggler} detail={Detail} />
        <AddNew modal={isOpenAddNew} toggle={togglerAddNew} />
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col lg="4" md="4" sm="4" xs="4">
                    <h3 className="mb-0">Confirm Leads</h3>
                  </Col>

                  <Col lg="8" md="8" sm="8" xs="8">
                    {role == 3 ? (
                      <>
                        <Button
                          color="success"
                          size="lg"
                          onClick={togglerAddNew}
                          id="addNewLead"
                          className="mt--1"
                          style={{ float: "right" }}
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
                      </>
                    ) : (
                      ""
                    )}

                    {/* <Button color="info"size="sm"id="proceed"className="mt--1">
             <span className="btn-inner--icon">
               <i class="fas fa-arrow-right"></i>
             </span>
           </Button>

           <Tooltip placement="bottom" isOpen={tooltipOpen.proceed}autohide={false}target="proceed"toggle={() => toggle("proceed")}>Proceed</Tooltip> */}
                  </Col>
                  <br />
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="3" md="4" sm="6">
                    <label className="form-control-label" for="input-username">
                      Agent
                    </label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                      value={selectAgent}
                      options={options}
                      id="exampleFormControlSelect1"
                      type="select"
                      onChange={(e) => statuschange("agentid", e)}
                    />
                  </Col>

                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label"> Phone No. </label>
                    <Input
                      type="text"
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onBlur={() => CheckFields("phoneNumber")}
                      value={State.user_phone}
                      onChange={(e) =>
                        statuschange("user_phone", e.target.value)
                      }
                      placeholder="Client Phone No."
                    ></Input>
                  </Col>
                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label"> Email </label>
                    <Input
                      type="email"
                      onBlur={() => CheckFields("email")}
                      value={State.user_email}
                      onChange={(e) =>
                        statuschange("user_email", e.target.value)
                      }
                      placeholder="Client Email"
                    ></Input>
                  </Col>
                  <Col lg="3" md="4" sm="6" xs="12">
                    <Button
                      color="danger"
                      size="sm"
                      id="reset"
                      onClick={onReset}
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i className="fas fa-undo"></i>
                      </span>
                    </Button>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg="2" md="2" sm="4" xs="4">
                    <label className="form-control-label">
                      {" "}
                      Rows Per Page{" "}
                    </label>
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
              </CardBody>
              <CardBody>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>{" "}
                      <th scope="col">Source Name</th>
                      <th scope="col">Agent Name</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts !== null && posts !== undefined ? (
                      posts.map((opt, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{opt.user_name}</td>
                            <td>{opt.user_email}</td>
                            <td>{opt.user_phone}</td>
                            <td>
                              <Badge color="info" pill>
                                {opt.sourcename}
                              </Badge>
                            </td>
                            <td>
                              <Badge color="danger" pill>
                                {opt.Agent}
                              </Badge>
                            </td>
                            <td>
                              <Button
                                color="success"
                                size="sm"
                                onClick={(e) => toggler(opt)}
                                id="info"
                              >
                                <span className="btn-inner--icon">
                                  <i class="fas fa-info-circle"></i>
                                </span>
                              </Button>

                              <Button
                                disabled={
                                  opt.LeadStageStatusName == "CloseLeads"
                                }
                                color={
                                  opt.LeadStageStatusName == "CloseLeads"
                                    ? "danger"
                                    : "info"
                                }
                                size="sm"
                                id="proceed"
                                onClick={() => inventory(opt)}
                              >
                                <span className="btn-inner--icon">
                                  <i class="fas fa-arrow-right"></i>
                                </span>
                              </Button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                        <th>
                          <h4>No data found</h4>
                        </th>
                        <th></th>
                        <th></th>
                      </tr>
                    )}
                  </tbody>
                </Table>
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
      </Container>
    </>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.lead.isLoading,
  isError: state.lead.isError,
  Data: state.lead.Data,
  Error: state.lead.error,
  OrderReport: state.lead.OrderReport,
  Sources: state.sourceHelper.Sources,
  Agents: state.agentHelper.Agents,
  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    Checklead: (
      page,
      limit,
      agentid,
      userEmail,
      userPhone,
      OnSuccess,
      OnFailure
    ) =>
      dispatch(
        Checklead(
          page,
          limit,
          agentid,
          userEmail,
          userPhone,
          OnSuccess,
          OnFailure
        )
      ),
    CheckUserInsert: (body, OnSuccess, OnFailure) =>
      dispatch(CheckUserInsert(body, OnSuccess, OnFailure)),
    CheckOrderStatus: (body, OnSuccess, OnFailure) =>
      dispatch(CheckOrderStatus(body, OnSuccess, OnFailure)),
    GetSources: (OnSuccess, OnFailure) =>
      dispatch(GetSources(OnSuccess, OnFailure)),
    GetAgent: (OnSuccess, OnFailure) =>
      dispatch(GetAgent(OnSuccess, OnFailure)),
    JwtDashboard: (OnSuccess, OnFailure) =>
      dispatch(JwtDashboard(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Split_lead2);
