import React from "react";
import Headers from "components/Headers/Header1";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import readXlsxFile from "read-excel-file";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Table,
  Col,
  Input,
} from "reactstrap";
import { BASEURL } from "config/api/URL";
import { Tooltip } from "reactstrap";
import Select from "react-select";
import { post } from "jquery";
import Filteration from "./Filteration";
import swal from "sweetalert";
import axios from "axios";
const Main = (props) => {
  let token = localStorage.getItem("auth");
  let inputFile;

  const [isOpen, setIsOpen] = useState(false);
  const [Detail, setDetail] = useState({});
  const toggler = (opt) => {
    setIsOpen(!isOpen);
    setDetail(opt);
  };
  const [isOpenAddProject, setIsOpenAddProject] = useState(false);
  const [stateprojectId, setstateProjectId] = useState({});
  const [stateproject, setstateProject] = useState({});
  const togglerForAddProjects = (opt, opt1) => {
    setIsOpenAddProject(!isOpenAddProject);
  };

  useEffect(() => {}, [isOpen]);
  useEffect(() => {
    props.showProject(onProjectSuccess, onProjectFailure);
    props.showPlotType(onSuccess, onFailure);
    props.showPlotSize(onSuccess, onFailure);
    props.showPlotStatus(onSuccess, onFailure);
    props.showPlotInfo(
      pageNumber,
      noOfRows,
      state.projectid,
      state.sectorid,
      state.typeid,
      state.sizeid,
      state.statusid,
      state.Plot_no,
      onSuccess,
      onFailure
    );
  }, [true]);
  const onSectorSuccess = () => {};
  const onSectorFailure = () => {};
  const onSuccess = () => {};
  const onSuccessexcel = () => {
    swal({
      title: "Succesful.",
      text: "File has been Inserted.",
      type: "success",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, I am sure!",
      cancelButtonText: "No, cancel it!",
      closeOnConfirm: false,
      closeOnCancel: false,
    });
    props.showPlotInfo(
      pageNumber,
      noOfRows,
      state.projectid,
      state.sectorid,
      state.typeid,
      state.sizeid,
      state.statusid,
      state.Plot_no,
      onSuccess,
      onFailure
    );
  };
  const onFailure = () => {};
  const [state, setState] = useState({
    projectid: "",
    sectorid: "",
    sizeid: "",
    typeid: "",
    statusid: "",
    Plot_no: "",
  });

  const [noOfRows, setnoOfRows] = useState(10);

  const [posts, setPosts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    if (props.Info?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }

    // if (pageNumber) {
    //   setPageNumber(pageNumber + 1);
    // }
  };

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  const [stateForAddProject, setStateForAddProject] = useState({
    projectid: null,
    Project_name: null,
  });
  const [project, setproject] = useState([null]);
  // const onChange = (val, name) => {

  //   if (name == "ProjectName") {
  //     setState({ ...state, projectid: val });
  //     let body = {
  //       projectid: val,
  //     }
  //     props.showPlotSector(body, onSectorSuccess, onSectorFailure);
  //     props.showPlotInfo(body, onSuccess, onFailure);

  //   }
  //   else if (name == "plotSector") {
  //     setState({ ...state, sectorid: val });

  //   }
  //   else if (name === "plotSize") {
  //     setState({ ...state, sizeid: val });
  //   }
  //   else if (name === "plotType") {
  //     setState({ ...state, typeid: val });
  //   }
  //   else if (name === "plotStatus") {
  //     setState({ ...state, statusid: val });

  //   }
  // };
  let projectName = null;
  const onChangeForAddFile = (val, label, name) => {
    if (name == "ProjectName") {
      projectName = label;
      setStateForAddProject({
        ...stateForAddProject,
        projectid: val,
        Project_name: label,
      });
    }
  };

  const handleChange = () => {
    if (stateForAddProject !== null && stateForAddProject !== undefined) {
      projectName = stateForAddProject.Project_name;
    }
    let projectArray = [];
    let sectorArray = [];
    let plotsArray = [];
    let arrayOfUploadedFile = {};
    const event = new Event("change");
    document.dispatchEvent(event);
    document.addEventListener("change", (func) => {
      readXlsxFile(func.target.files[0]).then((rows) => {
        let j = 0;

        if (rows[0][1] == projectName) {
          for (let i = 1; i < rows[0].length; i++) {
            if (rows[0][i] !== null) {
              projectArray[j] = rows[0][i];
              j++;
            }
          }
          let totalNoOfSectors = rows[1][1];

          for (let i = 0; i < totalNoOfSectors; i++) {
            sectorArray[i] = rows[2 + i][1];
          }
          let k = 0;
          for (let i = 0; i < rows.length; i++) {
            if (rows[i][0] === "Plot_no") {
              k = i;
            }
          }
          let i = 0;
          for (let j = k + 1; j < rows.length; j++) {
            const position = rows[j][6].split(",");
            let objOfPosition = { Position: position };

            plotsArray[i] = [
              rows[j][0],
              rows[j][1],
              rows[j][2],
              rows[j][3],
              rows[j][4],
              rows[j][5],
              objOfPosition,
            ];
            i++;
          }
          arrayOfUploadedFile = {
            projectname: projectArray,
            sectors: sectorArray,
            plots: plotsArray,
          };

          let body = {
            param: arrayOfUploadedFile,
          };
          props.showProjectFile(body, onSuccessexcel, onFailure);
        } else {
          arrayOfUploadedFile = null;
        }
      });
    });
  };

  useEffect(() => {
    if (props.File !== null && props.File !== undefined) {
    }
  }, [props.File]);
  useEffect(() => {
    props.showPlotInfo(
      pageNumber,
      noOfRows,
      state.projectid,
      state.sectorid,
      state.typeid,
      state.sizeid,
      state.statusid,
      state.Plot_no,
      onSuccess,
      onFailure
    );
  }, [pageNumber, noOfRows]);

  useEffect(() => {
    setPageNumber(1);
    setnoOfRows(10);
    if (
      state.projectid !== null &&
      state.projectid !== "" &&
      state.projectid !== undefined
    ) {
      props.showPlotSector(state.projectid, onSectorSuccess, onSectorFailure);
    }
    props.showPlotInfo(
      pageNumber,
      noOfRows,
      state.projectid,
      state.sectorid,
      state.typeid,
      state.sizeid,
      state.statusid,
      state.Plot_no,
      onSuccess,
      onFailure
    );
  }, [
    state.projectid,
    state.sectorid,
    state.typeid,
    state.sizeid,
    state.statusid,
    state.Plot_no,
  ]);
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
  const [sector, setsector] = useState([]);
  useEffect(() => {
    if (props.Sector !== null && props.Sector !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Sector.length; i++) {
        let obj = {
          value: props.Sector[i].Sector_id,
          label: props.Sector[i].Sector_Name,
        };
        arr.push(obj);
      }
      setsector(arr);
    }
  }, [props.Sector]);
  const [type, setType] = useState([null]);
  useEffect(() => {
    if (props.Type !== null && props.Type !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Type.length; i++) {
        let obj = {
          value: props.Type[i].PlotType_id,
          label: props.Type[i].PlotType_Name,
        };
        arr.push(obj);
      }
      setType(arr);
    }
  }, [props.Type]);
  const [size, setSize] = useState([null]);
  useEffect(() => {
    if (props.Size !== null && props.Size !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Size.length; i++) {
        let obj = {
          value: props.Size[i].pc_Category_id,
          label: props.Size[i].pc_CategoryName,
        };
        arr.push(obj);
      }
      setSize(arr);
    }
  }, [props.Size]);
  const [status, setStatus] = useState([null]);
  useEffect(() => {
    if (props.Status !== null && props.Status !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Status.length; i++) {
        let obj = {
          value: props.Status[i].status_id,
          label: props.Status[i].status_name,
        };
        arr.push(obj);
      }
      setStatus(arr);
    }
  }, [props.Status]);

  const onProjectSuccess = () => {};
  const onProjectFailure = () => {};
  let dataInArrayForPaginaion = [];

  // const [noOfRows, setnoOfRows] = useState("");
  // let numberOfRows;
  // const onChangeNoOfRows = (val) => {
  //   setnoOfRows(parseInt(val));
  //   numberOfRows = parseInt(val);
  //   setPageNumber(1);
  // };
  // const [posts, setPosts] = useState([]);
  // const [pageNumber, setPageNumber] = useState(1);

  // let postNumber = 10;
  // if (noOfRows != "") {
  //   postNumber = noOfRows;
  // }
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
  // const [tooltipOpen, setTooltipOpen] = useState({
  //   proceed: false,
  //   info: false,
  //   search: false,
  // });
  // const toggle = (name) => {
  //   if (name == "search") {
  //     setTooltipOpen({ ...tooltipOpen, search: !tooltipOpen.search });
  //   } else if (name == "info") {
  //     setTooltipOpen({ ...tooltipOpen, info: !tooltipOpen.info });
  //   } else if (name == "proceed") {
  //     setTooltipOpen({ ...tooltipOpen, proceed: !tooltipOpen.proceed });
  //   }

  // };

  useEffect(() => {
    setPosts(null);
    // setPageNumber(1);
    if (props.Info !== null && props.Info !== undefined) {
      // for (let i = 0; i < props.Info.length; i++) {
      // dataInArrayForPaginaion.push(props.Info[i]);
      setPosts(props.Info?.response);
      setMetaData(props.Info?.metaData);
      // }
    }
  }, [props.Info]);

  // useEffect(() => {

  //   setPosts(null);
  //   setPageNumber(1);
  //   if (props.Info !== null &&
  //       props.Info !== undefined &&
  //       props.Info?.length > 0) {
  //     for (let i = 0; i < props.Info.length; i++) {
  //       if (state.sectorid ==null && state.sizeid==null && state.typeid==null && state.statusid==null) {
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==props.Info[i].Sector_id && state.sizeid==null && state.typeid==null && state.statusid==null){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==null && state.sizeid==props.Info[i].Category_id && state.typeid==null && state.statusid==null){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==null && state.sizeid==null && state.typeid==props.Info[i].PlotType_id  && state.statusid==null){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==null && state.sizeid==null && state.typeid==null && state.statusid==props.Info[i].House_Status){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==props.Info[i].Sector_id && state.sizeid==props.Info[i].Category_id && state.typeid==null && state.statusid==null){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==props.Info[i].Sector_id && state.sizeid==null && state.typeid==props.Info[i].PlotType_id  && state.statusid==null){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==props.Info[i].Sector_id && state.sizeid==null && state.typeid==null && state.statusid==props.Info[i].House_Status){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==null && state.sizeid==props.Info[i].Category_id && state.typeid==props.Info[i].PlotType_id  && state.statusid==null){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==null && state.sizeid==props.Info[i].Category_id && state.typeid==null && state.statusid==props.Info[i].House_Status){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==null && state.sizeid==null && state.typeid==props.Info[i].PlotType_id  && state.statusid==props.Info[i].House_Status){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==props.Info[i].Sector_id && state.sizeid==props.Info[i].Category_id && state.typeid==props.Info[i].PlotType_id  && state.statusid==null){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==props.Info[i].Sector_id && state.sizeid==null && state.typeid==props.Info[i].PlotType_id  && state.statusid==props.Info[i].House_Status){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==props.Info[i].Sector_id && state.sizeid==props.Info[i].Category_id && state.typeid==null && state.statusid==props.Info[i].House_Status){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==null && state.sizeid==props.Info[i].Category_id && state.typeid==props.Info[i].PlotType_id  && state.statusid==props.Info[i].House_Status){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //       else if(state.sectorid ==props.Info[i].Sector_id && state.sizeid==props.Info[i].Category_id && state.typeid==props.Info[i].PlotType_id  && state.statusid==props.Info[i].House_Status){
  //         dataInArrayForPaginaion.push(props.Info[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }

  //     }
  //   }
  // }, [state]);

  // let inputFile;
  //= document.getElementById("fileinput");
  // plots count
  const [total_house, setTotal] = useState("");
  const [available_house, setAvailable] = useState("");
  const [booked_house, setBooked] = useState("");
  const [reserved_house, setReserved] = useState("");
  const [locked_house, setLocked] = useState("");
  const getAvailableCounts = () => {
    const path = "PlotCounts";
    axios
      .get(`${BASEURL}${path}?House_StatusName=Available`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setAvailable(res.data?.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const getBookedCounts = () => {
    const path = "PlotCounts";
    axios
      .get(`${BASEURL}${path}?House_StatusName=Booked`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setBooked(res.data?.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const getReservedCounts = () => {
    const path = "PlotCounts";
    axios
      .get(`${BASEURL}${path}?House_StatusName=Reserved`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setReserved(res.data?.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const getLockedCounts = () => {
    const path = "PlotCounts";
    axios
      .get(`${BASEURL}${path}?House_StatusName=Lock`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setLocked(res.data?.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const getTotalCounts = () => {
    const path = "PlotCounts";
    axios
      .get(`${BASEURL}${path}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setTotal(res.data?.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  useEffect(() => {
    getAvailableCounts();
    getBookedCounts();
    getLockedCounts();
    getReservedCounts();
    getTotalCounts();
  }, []);
  const onReset = () => {
    setState({
      ...state,
      projectid: "",
      sectorid: "",
      sizeid: "",
      typeid: "",
      statusid: "",
      Plot_no: "",
    });
  };

  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0"> Inventory </h3>
                {/* Counts UI */}
                <h2 className="mb-0" style={{ textAlign: "center" }}>
                  House details
                </h2>
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
                        <th scope="col">Total House</th>

                        <th scope="col">Available House</th>

                        <th scope="col">Booked House</th>

                        <th scope="col">Reserved House</th>
                        <th scope="col">Locked House</th>
                      </tr>
                    </thead>

                    <tbody style={{ fontSize: "12px" }}>
                      <tr>
                        <td> {total_house}</td>

                        <td>{available_house}</td>

                        <td>{booked_house}</td>

                        <td>{reserved_house}</td>
                        <td>{locked_house}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                {/* <Row style={{ marginTop: "-20px" }} className="ml-5">
                  <Col lg="3" md="3" sm="3">
                    Total House:{" "}
                    <span style={{ fontWeight: "bold" }}>{total_house}</span>
                  </Col>
                </Row>
                <hr
                  style={{
                    backgroundColor: "black",
                    marginTop: "20px",
                    marginLeft: "7%",
                    marginRight: "7%",
                  }}
                />
                <Row style={{ marginTop: "-15px" }} className="ml-5 mb-2">
                  <Col lg="3" md="3" sm="3">
                    Available House:{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {available_house}
                    </span>
                  </Col>
                  <Col lg="3" md="3" sm="3">
                    Booked House:{" "}
                    <span style={{ fontWeight: "bold" }}> {booked_house}</span>
                  </Col>
                  <Col lg="3" md="3" sm="3">
                    Reserved House:{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      {reserved_house}
                    </span>
                  </Col>
                  <Col lg="3" md="3" sm="3">
                    Locked:{" "}
                    <span style={{ fontWeight: "bold" }}> {locked_house}</span>
                  </Col>
                </Row> */}
                {/* Counts UI end */}
                <CardBody>
                  <form>
                    <div className="pl-lg-4">
                      {/* <Row>
                        <Col lg="4" md="4" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Select Project
                          </label>
                          <Select
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable={true}
                            options={project}
                            id="exampleFormControlSelect1"
                            type="select"
                            onChange={(e) =>
                              onChangeForAddFile(
                                e.value,
                                e.label,
                                "ProjectName"
                              )
                            }
                          />
                        </Col>
                        <Col lg="4" md="4" sm="6">
                          <input
                            type="file"
                            accept=".xlsx, .xls, .csv"
                            onChange={handleChange}
                            id="fileinput"
                          />
                        </Col>
                      </Row> */}
                      {/* <hr /> */}
                      <Row>
                        <Col lg="4" md="4" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Select Project
                          </label>
                          <Select
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable={true}
                            value={{ label: state.projectid }}
                            options={project}
                            id="exampleFormControlSelect1"
                            type="select"
                            onChange={(e) =>
                              //onChange(e.value, "ProjectName")
                              setState({ ...state, projectid: e.label })
                            }
                          />
                        </Col>
                        <Col lg="4" md="4" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Project Sector
                          </label>
                          <Select
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable={true}
                            options={sector}
                            id="exampleFormControlSelect1"
                            type="select"
                            value={{ label: state.sectorid }}
                            onChange={
                              (e) => setState({ ...state, sectorid: e.label })
                              //onChange(e.value, "plotSector")
                            }
                          />
                        </Col>
                        <Col lg="4" md="4" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Select Plot Type
                          </label>
                          <Select
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable={true}
                            options={type}
                            id="exampleFormControlSelect1"
                            type="select"
                            value={{ label: state.typeid }}
                            onChange={
                              (e) => setState({ ...state, typeid: e.label })
                              //  onChange(e.value, "plotType")
                            }
                          />
                        </Col>
                        <Col lg="4" md="4" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Plot Size
                          </label>{" "}
                          <Select
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable={true}
                            options={size}
                            id="exampleFormControlSelect1"
                            type="select"
                            value={{ label: state.sizeid }}
                            onChange={
                              (e) => setState({ ...state, sizeid: e.label })
                              //onChange(e.value, "plotSize")
                            }
                          />
                        </Col>

                        <Col lg="4" md="4" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Select Status
                          </label>
                          <Select
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable={true}
                            options={status}
                            id="exampleFormControlSelect1"
                            type="select"
                            value={{ label: state.statusid }}
                            onChange={
                              (e) => setState({ ...state, statusid: e.label })
                              //onChange(e.value, "plotStatus")
                            }
                          />
                        </Col>
                        <Col lg="4" md="4" sm="6" xs="12">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Plot Number
                          </label>
                          <Input
                            id="exampleFormControlSelect1"
                            type="text"
                            // onKeyPress={(event) => {
                            //   if (!/[0-9]/.test(event.key)) {
                            //     event.preventDefault();
                            //   }
                            // }}
                            onChange={
                              (e) =>
                                setState({ ...state, Plot_no: e.target.value })
                              //onChange(e.value, "plotStatus")
                            }
                            // onChange={(e) =>
                            //   setState({
                            //     ...state,
                            //     plot_num: e.target.value,
                            //   })
                            // }
                            value={state.Plot_no}
                            //  disabled={isData}
                          />
                        </Col>
                        <Col lg="4" md="4" sm="6" xs="12">
                          <br />
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
                    </div>
                  </form>
                  <Row>
                    <Col lg="2" md="2" sm="4" xs="4">
                      <label className="form-control-label">
                        {" "}
                        Rows Per Pages{" "}
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
                  <Filteration
                    state={state}
                    pageNumber={pageNumber}
                    noOfRows={noOfRows}
                    posts={posts}
                    showPlotInfo={props.showPlotInfo}
                    deleteRes={props.Delete}
                    addRes={props.Add}
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
              </CardHeader>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Main;
