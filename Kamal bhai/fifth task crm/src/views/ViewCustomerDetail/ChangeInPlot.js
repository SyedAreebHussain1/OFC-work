import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  CardBody,
  Card,
  Table,
  CardHeader,
  Col,
  Row,
  Input,
} from "reactstrap";
import Select from "react-select";

import "react-h5-audio-player/lib/styles.css";
import { connect } from "react-redux";
// import {showProject, showPlotSector, showPlotNo} from "./middleware"
import {
  showProject,
  showPlotSector,
  showPlotNo,
  ShowPlotInformation,
  ChangePlotMiddleware,
  newPlotMiddleware,
} from "./middleware";
import swal from "sweetalert";

const ChangeInPlot = (props) => {
  //   const[body1, set1] =useState({
  //     projectid: props.detail.Project_id,
  //     Sector_id: props.detail.Sector_id,
  //  })

  const onChange = (val, name) => {
    if (name == "newPlotId") {
      setplot({ ...getplot, Plotid: val });
    }
    if (name == "remarksInitiator") {
      setChangeBody({ ...ChangeBody, remarksInitiator: val });
    }
    if (name == "ProjectName") {
      setState({ ...state, projectid: val });
      let body2 = {
        projectid: val,
      };
      props.showPlotSector(body2, OnSuccess, OnFailure);
    } else if (name == "SectorName") {
      setState({ ...state, sectorid: val });

      let body1 = {
        projectid: state.projectid,
        Sector_id: val,
      };

      props.showPlotNo(body1, onPlotNoSuccess, onPlotNoFailure);
    }
  };

  let dataInArrayForPaginaion = [];

  useEffect(() => {
    // if (props.PlotNo !== null && props.PlotNo !== undefined) {
    //   for (let i = 0; i < props.PlotNo.length; i++) {
    //     dataInArrayForPaginaion.push(props.PlotNo[i]);
    //     setPosts(props.PlotNo);
    //  }
    // }
    if (props.PlotNo !== null && props.PlotNo !== undefined) {
    }
  }, [props.PlotNo]);

  const onPlotNoSuccess = () => {};
  const onPlotNoFailure = () => {};

  const [body, setbody] = useState({
    projectid: props.detail.Project_id,
  });

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

  const [sector, setsector] = useState([null]);
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

  useEffect(() => {
    props.showProject(body, OnSuccess, OnFailure);
  }, [true]);

  const [bodydata, setbodydata] = useState({
    projectid: props.detail.Plotid,
  });
  useEffect(() => {
    props.showPlotSector(bodydata, onSectorSuccess, onSectorFailure);
  }, [true]);
  const onSectorSuccess = () => {};
  const onSectorFailure = () => {};
  const OnSuccess = () => {};
  const OnFailure = () => {};

  const [state, setState] = useState({
    ClientId: null,
    ClientName: null,
    Clientcnic: null,
    Clientemail: null,
    projectid: null,
    projectName: null,
    sectorid: null,
    streetId: null,
    plotno: null,
    plotid: null,
    category: null,
    type: null,
    direction: null,
    status: null,
    position: null,
    TaskId: null,
  });

  const [noOfRows, setnoOfRows] = useState("");
  let numberOfRows;
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
    if (
      props.ShowPlotInformation !== null &&
      props.ShowPlotInformation !== undefined
    ) {
      let bb = {
        Plotid: props.detail.Plotid,
      };
      props.ShowPlotInformation(bb, OnSuccessPlot, OnFailurePlot);
    }
  }, [props.detail]);

  const OnSuccessPlot = () => {};
  const OnFailurePlot = () => {};

  const positionnewArray = [props.NewPosition];
  const positionArray = [props.PlotPositionsValues];

  const checkplotdata = () => {
    if (props.PlotNo !== null && props.PlotNo !== undefined) {
      if (props.detail.Project_name === props.PlotNo[0].Project_name) {
        if (props.detail.CategoryName === props.PlotNo[0].CategoryName) {
          if (props.detail.PlotType_Name === props.PlotNo[0].PlotType_Name) {
            if (positionArray[0].length === positionnewArray[0].length) {
              props.ChangePlotMiddleware(
                ChangeBody,
                OnSuccessChange,
                OnFailureChange
              );
              swal("Data Inserted!");
            } else {
              swal("Invalid Position contact IT!");
            }
          } else {
            swal("Type issue kindly contact to IT");
          }
        } else {
          swal("Category issue kindly contact to IT ");
        }
      } else {
        swal("Project issue kindly contact to IT!");
      }
    } else {
      swal("Can't Request");
    }
  };

  const OnSuccessChange = () => {};
  const OnFailureChange = () => {};

  const [ChangeBody, setChangeBody] = useState({
    oldPlotId: "",
    taskId: "",
    remarksInitiator: null,
    newPlotId: "",
  });

  useEffect(() => {
    if (props.detail !== null && props.PlotNo !== null) {
      setChangeBody({
        ...ChangeBody,
        oldPlotId: props.detail.Plotid,
        taskId: props.detail.Taskid,
        newPlotId: props.detail.Plotid,
      });
    }
  }, [props.detail, props.PlotNo]);
  // useEffect(() => {
  //   props.ChangePlotMiddleware(ChangeBody, OnSuccessChange, OnFailureChange)
  // },[ChangeBody])

  const [getplot, setplot] = useState({
    Plotid: "",
  });

  useEffect(() => {
    props.newPlotMiddleware(getplot, successplot, failureplot);
  }, [getplot]);
  const successplot = () => {};
  const failureplot = () => {};

  return (
    <Modal size="lg" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Details</h3>
      </ModalHeader>
      <ModalBody style={{ wordBreak: "break-all" }}>
        <hr />
        <h3>Current Plot Status</h3>

        <Row>
          <Col lg="4" md="4" sm="6">
            <label className="form-control-label" for="input-username">
              Project Name:
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              value={props.detail.Project_name}
              disabled={true}
              onChange={(e) => onChange(e.target.value, "ClientPhone")}
            ></input>
          </Col>

          <Col lg="4" md="4" sm="6">
            <label className="form-control-label" for="input-username">
              Sector Name:
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              value={props.detail.Sector_Name}
              disabled={true}
              onChange={(e) => onChange(e.target.value, "ClientPhone")}
            ></input>
          </Col>

          <Col lg="4" md="4" sm="6">
            <label className="form-control-label" for="input-username">
              Plot No:
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              value={props.detail.Plot_no}
              disabled={true}
              onChange={(e) => onChange(e.target.value, "ClientPhone")}
            ></input>
          </Col>

          <Col lg="4" md="4" sm="6">
            <label className="form-control-label" for="input-username">
              Plot Type:
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              value={props.detail.PlotType_Name}
              disabled={true}
              onChange={(e) => onChange(e.target.value, "ClientPhone")}
            ></input>
          </Col>

          <Col lg="4" md="4" sm="6">
            <label className="form-control-label" for="input-username">
              Plot Category:
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              value={props.detail.CategoryName}
              disabled={true}
              onChange={(e) => onChange(e.target.value, "ClientPhone")}
            ></input>
          </Col>

          <Col lg="4" md="4" sm="6">
            <label className="form-control-label" for="input-username">
              Name:
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              value={props.detail.user_name}
              disabled={true}
              onChange={(e) => onChange(e.target.value, "ClientPhone")}
            ></input>
          </Col>
          <Row />
          <br />
          <br />

          <Col lg="5" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Project Name
            </label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={true}
              options={project}
              id="exampleFormControlSelect1"
              type="select"
              onChange={(e) => onChange(e.value, "ProjectName")}
            />
          </Col>

          <Col lg="5" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Plot Sector
            </label>

            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={true}
              options={sector}
              id="exampleFormControlSelect1"
              type="select"
              value={sector.value}
              onChange={(e) => onChange(e.value, "SectorName")}
            />
          </Col>

          <Col lg="4" md="4" sm="6">
            <label className="form-control-label" for="input-username">
              Remarks:
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder=""
              value={ChangeBody.remarksInitiator}
              onChange={(e) => onChange(e.target.value, "remarksInitiator")}
            ></input>
          </Col>

          <Col lg="4" md="4" sm="6">
            <label className="form-control-label" for="input-username">
              Plot Available:
            </label>
            <Input
              id="exampleFormControlSelect1"
              type="select"
              // value={getplot.newPlotId}
              onChange={(e) => onChange(e.target.value, "newPlotId")}
            >
              <option value={null}>Select Plot</option>

              {props.PlotNo !== null &&
                props.PlotNo !== undefined &&
                props.PlotNo.map((source) => {
                  return (
                    <option key={source.Plotid} value={source.Plotid}>
                      {source.Plot_no}
                    </option>
                  );
                })}
            </Input>
          </Col>
        </Row>
        <br />
        <h3 style={{ color: "red" }}>Current plot position</h3>
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Position Name</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            {props.PlotPositionsValues !== null &&
            props.PlotPositionsValues !== undefined
              ? props.PlotPositionsValues.map((posts, index) => {
                  return (
                    <tr>
                      <td>{posts.PositionName}</td>
                      <td>{posts.ExtraCharges}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </Table>

        <br />
        <br />
        <h3 style={{ color: "red" }}>New Plot Status</h3>
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">CategoryName</th>
              <th scope="col">Plot Type</th>
              <th scope="col">Project</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {props.PlotNo !== null && props.PlotNo !== undefined
              ? props.PlotNo.map((posts, index) => {
                  return (
                    <tr>
                      <td>{posts.CategoryName}</td>
                      <td>{posts.PlotType_Name}</td>
                      <td>{posts.Project_name}</td>
                      <td>{posts.status_name}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </Table>

        <h4 style={{ color: "red" }}>Your New Plot Location:</h4>

        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Position</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            {/* { props.NewPosition !== null &&
                        props.NewPosition !== undefined ?(
                          props.NewPosition?.map((posts, index) => {
                            return (
                              <tr>
                                <td>{posts.PositionName}</td>
                                <td>{posts.ExtraCharges}</td>
                              </tr>
                            );
                        }
                        )):''
                        } */}
          </tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button size="sm" color="info" onClick={checkplotdata}>
          Send !
        </Button>
        <Button size="sm" color="info" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// export default Recording;

const mapStateToProps = (state) => ({
  Project: state.viewCustomerDetail.Project,
  Sector: state.viewCustomerDetail.Sector,
  PlotPositionsValues: state.viewCustomerDetail.PlotPositionsValues,
  PlotNo: state.viewCustomerDetail.PlotNo,
  ChangePlotStatus: state.viewCustomerDetail.ChangePlotStatus,
  NewPosition: state.viewCustomerDetail.NewPosition,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showProject: (OnSuccess, OnFailure) =>
      dispatch(showProject(OnSuccess, OnFailure)),
    showPlotSector: (body, OnSuccess, OnFailure) =>
      dispatch(showPlotSector(body, OnSuccess, OnFailure)),
    showPlotNo: (body, OnSuccess, OnFailure) =>
      dispatch(showPlotNo(body, OnSuccess, OnFailure)),
    ShowPlotInformation: (body, OnSuccess, OnFailure) =>
      dispatch(ShowPlotInformation(body, OnSuccess, OnFailure)),
    ChangePlotMiddleware: (body, OnSuccess, OnFailure) =>
      dispatch(ChangePlotMiddleware(body, OnSuccess, OnFailure)),
    newPlotMiddleware: (body, OnSuccess, OnFailure) =>
      dispatch(newPlotMiddleware(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(ChangeInPlot);
