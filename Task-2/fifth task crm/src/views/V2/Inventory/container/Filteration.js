import React from "react";

import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Col,
  Table,
  Input,
} from "reactstrap";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useLocation, useHistory } from "react-router";
import TableOfPlotSelection from "./TableOfPlotSelection";
import { JwtDashboard } from "../../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";

const Filteration = (props) => {
  useEffect(() => {
    setPosts([]);
    props.showProject(onProjectSuccess, onProjectFailure);
    props.showPlotType(onSuccess, onFailure);
    props.showPlotSize(onSuccess, onFailure);
    props.showPlotStatus(onSuccess, onFailure);
    props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  }, [true]);

  const history = useHistory();
  const [isData, setIsData] = useState(true);
  const [plotTypes, setPlotTypes] = useState([]);
  const [plotSizes, showPlotSizes] = useState([]);
  const [plotStatus, showPlotStatus] = useState([]);
  // const [filteration, setFilteration] = useState({
  //   plot_Types: "",
  //   plot_Sizes: "",
  //   plot_Status: "",
  //   plot_num: "",
  // });
  const onProjectSuccess = () => {};
  const onProjectFailure = () => {};
  const onSectorSuccess = () => {};
  const onSectorFailure = () => {};

  const onPlotNoSuccess = () => {};
  const onPlotNoFailure = () => {};

  const onSuccess = () => {};
  const onFailure = () => {};
  const [noOfRows, setnoOfRows] = useState(5);
  const [plotid, setPlotId] = useState("");

  const [posts, setPosts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.state !== null && location.state !== undefined) {
      setState({
        ...state,
        ClientId: location.state.user_id,
        ClientName: location.state.user_name,
        Clientcnic: location.state.CNIC,
        TaskId: parseInt(location.state.Taskid),
      });
    }
  }, [location]);

  const [state, setState] = useState({
    ClientId: "",
    ClientName: "",
    Clientcnic: "",
    sectorName: "",
    projectName: "",
    plot_Status: "",
    plot_num: "",
    plot_Types: "",
    plot_Sizes: "",
    TaskId: null,
    projectid: "",
  });
  // useEffect(() => {
  //   if (state.plot_Types !== "") {
  //     props.showPlotSize(onSuccess, onFailure, state.plot_Types);
  //   }
  // }, [state.plot_Types]);
  useEffect(() => {
    if (
      state.projectName !== null &&
      state.projectName !== "" &&
      state.projectName !== undefined
    ) {
      props.showPlotSector(state.projectName, onSectorSuccess, onSectorFailure);
      for (var i = 0; i < project.length; i++) {
        if (state.projectName == project[i]?.label) {
          setState({ ...state, projectid: project[i]?.id });
        }
      }
    }
  }, [state.projectName]);

  useEffect(() => {
    setPageNumber(1);
    setnoOfRows(5);
    setPosts([]);
    props.showPlotNo(
      pageNumber,
      noOfRows,
      state.projectName,
      state.sectorName,
      state.plot_Status,
      state.plot_num,
      state.plot_Sizes,
      state.plot_Types,
      onPlotNoSuccess,
      onPlotNoFailure
    );
  }, [
    state.projectName,
    state.sectorName,
    state.plot_Types,
    state.plot_Status,
    state.plot_num,
    state.plot_Sizes,
  ]);

  useEffect(() => {
    setPosts([]);
    props.showPlotNo(
      pageNumber,
      noOfRows,
      state.projectName,
      state.sectorName,
      state.plot_Status,
      state.plot_num,
      state.plot_Sizes,
      state.plot_Types,
      onPlotNoSuccess,
      onPlotNoFailure
    );
  }, [pageNumber, noOfRows]);

  // auto complete on Project
  const [project, setproject] = useState([null]);
  useEffect(() => {
    if (props.Project !== null && props.Project !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Project.length; i++) {
        let obj = {
          value: props.Project[i].Project_name,
          label: props.Project[i].Project_name,
          id: props.Project[i].Project_id,
        };
        arr.push(obj);
      }
      setproject(arr);
    }
  }, [props.Project]);
  //Sector Auto complete
  const [sector, setsector] = useState([null]);
  useEffect(() => {
    if (props.Sector !== null && props.Sector !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Sector.length; i++) {
        let obj = {
          value: props.Sector[i].Sector_Name,
          label: props.Sector[i].Sector_Name,
        };
        arr.push(obj);
      }
      setsector(arr);
    }
  }, [props.Sector]);

  useEffect(() => {
    // setPosts(null);
    //setPageNumber(1);

    if (props.GetUserJWTLogin === false) {
      localStorage.removeItem("auth");
      window.location.href = "/auth/login";
    } else {
      if (props.PlotNo !== null && props.PlotNo !== undefined) {
        setPosts(props.PlotNo.response);
        setMetaData(props.PlotNo?.metaData);
      }
    }
  }, [props.PlotNo]);

  useEffect(() => {
    setPlotTypes(props.Type);
    showPlotSizes(props.Size);
    showPlotStatus(props.Status);
  }, [props.Type, props.Size, props.Status]);

  useEffect(() => {
    if (state.sectorName !== "") {
      setIsData(false);
    } else {
      setIsData(true);
    }
  }, [state.sectorName]);

  const OnSuccessJwt = () => {};
  const OnFailureJwt = () => {};

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    if (props.PlotNo?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };
  const onReset = () => {
    setState({
      ...state,
      projectName: "",
      sectorName: "",
      sectorName: "",
      plot_Sizes: "",
      plot_Types: "",
      plot_Status: "",
      plot_num: "",
    });
  };
  const handleRadio = (val, data) => {
    setPlotId(data?.Plot_no);
  };
  const handleSave = () => {
    history.push({
      pathname: "/admin/QuotationList",
    });
  };
  return (
    <>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col lg="4" md="4" sm="6" xs="12">
                  <h3 className="mb-0">Plot Selection</h3>
                </Col>
                <Col lg="6" md="6" sm="6" xs="12"></Col>
                <Col lg="2" md="2" sm="6" xs="12"></Col>
              </Row>
            </CardHeader>
            <CardHeader className="border-0">
              <Row>
                <Col lg="5" md="5" sm="6" xs="12">
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
                </Col>
                <Col lg="5" md="5" sm="6" xs="12">
                  <label className="form-control-label" for="input-username">
                    Client CNIC No.
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    value={state.Clientcnic}
                    disabled
                  ></input>
                </Col>
                <Col lg="2" md="2" sm="6" xs="12">
                  <br />
                </Col>
              </Row>
            </CardHeader>
            <hr style={{ margin: "0px" }} />
            <CardBody>
              <Row>
                <Col lg="4" md="4" sm="6" xs="12">
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
                    onChange={(e) =>
                      setState({
                        ...state,
                        projectName: e.value,
                      })
                    }
                    value={{ label: state.projectName }}
                    //onChange={(e) => onChange(e.value, "ProjectName")}
                  />
                </Col>
                <Col lg="4" md="4" sm="6" xs="12">
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
                    onChange={(e) =>
                      setState({
                        ...state,
                        sectorName: e.value,
                      })
                    }
                    value={{ label: state.sectorName }}
                    //onChange={(e) => onChange(e.value, "SectorName")}
                  />
                </Col>
                <Col lg="4" md="4" sm="6" xs="12">
                  <label className="form-control-label" for="input-username">
                    Plot Street
                  </label>

                  <Input
                    id="exampleFormControlSelect1"
                    type="select"
                    // onChange={(e) =>
                    //   setFilteration({
                    //     ...filteration,
                    //     plot_Sizes: e.target.value,
                    //   })
                    // }
                    // value={filteration.plot_Sizes}
                    disabled
                  >
                    <option value="">Select</option>
                    {/* {plotSizes?.map((val, index) => {
                      return (
                        <option key={index} value={val.Category_id}>
                          {val.CategoryName}
                        </option>
                      );
                    })} */}
                  </Input>
                </Col>
                <Col lg="4" md="4" sm="6" xs="12">
                  <label className="form-control-label" for="input-username">
                    Select Plot Type
                  </label>
                  <Input
                    id="exampleFormControlSelect1"
                    type="select"
                    onChange={(e) =>
                      setState({
                        ...state,
                        plot_Types: e.target.value,
                      })
                    }
                    value={state.plot_Types}
                    disabled={isData}
                  >
                    <option value="">Select</option>
                    {plotTypes?.map((val, index) => {
                      return (
                        <option key={index} value={val.PlotType_Name}>
                          {val.PlotType_Name}
                        </option>
                      );
                    })}
                  </Input>
                </Col>
                <Col lg="4" md="4" sm="6" xs="12">
                  <label className="form-control-label" for="input-username">
                    Plot Size
                  </label>{" "}
                  <Input
                    id="exampleFormControlSelect1"
                    type="select"
                    onChange={(e) =>
                      setState({
                        ...state,
                        plot_Sizes: e.target.value,
                      })
                    }
                    value={state.plot_Sizes}
                    disabled={isData}
                  >
                    <option value="">Select</option>
                    {plotSizes?.map((val, index) => {
                      return (
                        <option key={index} value={val.pc_CategoryName}>
                          {val.pc_CategoryName}
                        </option>
                      );
                    })}
                  </Input>
                </Col>

                <Col lg="4" md="4" sm="6" xs="12">
                  <label className="form-control-label" for="input-username">
                    Select Status
                  </label>
                  <Input
                    id="exampleFormControlSelect1"
                    type="select"
                    onChange={(e) =>
                      setState({
                        ...state,
                        plot_Status: e.target.value,
                      })
                    }
                    value={state.plot_Status}
                    disabled={isData}
                  >
                    <option value="">Select</option>
                    {plotStatus?.map((val, index) => {
                      return (
                        <option key={index} value={val.status_name}>
                          {val.status_name}
                        </option>
                      );
                    })}
                  </Input>
                </Col>
                <Col lg="4" md="4" sm="6" xs="12">
                  <label className="form-control-label" for="input-username">
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
                    onChange={(e) =>
                      setState({
                        ...state,
                        plot_num: e.target.value,
                      })
                    }
                    value={state.plot_num}
                    // disabled={isData}
                  />
                </Col>
                <Col lg="4" md="4" sm="6" xs="12">
                  <br />
                  <Button color="danger" size="sm" id="reset" onClick={onReset}>
                    <span className="btn-inner--text"></span>
                    <span className="btn-inner--icon">
                      <i className="fas fa-undo"></i>
                    </span>
                  </Button>
                </Col>
              </Row>
              <br />
              {/* <Row>
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
              </Row> */}
              <br />
              <TableOfPlotSelection
                paginatedPosts={posts}
                state={state}
                body={location.state}
                _handleRadio={handleRadio}
              ></TableOfPlotSelection>
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
            {plotid && (
              <>
                <CardHeader style={{ marginTop: "2%" }} className="border-0">
                  <h1
                    style={{
                      textAlign: "center",
                      marginTop: "-30px",
                    }}
                  >
                    {" "}
                    Payment Plan for plot {plotid}
                  </h1>
                </CardHeader>
                <Row style={{ marginLeft: "3%", marginRight: "3%" }}>
                  <Col lg="4" md="4" sm="4">
                    <label className="form-control-label" for="input-username">
                      Plot Price
                    </label>
                    <input
                      type="text"
                      id="input-username"
                      className="form-control"
                      placeholder=""
                      disabled
                      value={20000}
                    ></input>
                  </Col>
                  <Col lg="4" md="4" sm="4">
                    <label className="form-control-label" for="input-username">
                      Payment Method *
                    </label>
                    <Input
                      id="exampleFormControlSelect1"
                      type="select"
                      onChange={(e) => console.log(e.target.value)}
                      // value={paymentMethod}
                      // disabled={body.PaymentPlaneId == ""}
                    >
                      <option value="">Select</option>
                      <option value="TOKEN">Token</option>
                      <option value="FULLPAYMENT">Full Payment</option>
                      <option value="DOWNPAYMENT">Downpayment</option>
                    </Input>
                  </Col>
                  <Col>
                    <label className="form-control-label" for="input-username">
                      Plan *
                    </label>
                    <Input
                      id="exampleFormControlSelect1"
                      type="select"
                      onChange={(e) => console.log(e.target.value)}
                      // value={paymentMethod}
                      // disabled={body.PaymentPlaneId == ""}
                    >
                      <option value="">Select</option>
                      <option value="TOKEN">Token</option>
                      <option value="FULLPAYMENT">Full Payment</option>
                      <option value="DOWNPAYMENT">Downpayment</option>
                    </Input>
                  </Col>
                </Row>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "8px",
                    marginTop: "1%",
                  }}
                >
                  <Button
                    onClick={() => {
                      handleSave();
                    }}
                    color="success"
                  >
                    <i className="fa-fa-save" /> Save
                  </Button>
                  <Button color="info">
                    <i className="fas fa-print" /> Print
                  </Button>
                </div>
              </>
            )}
          </Card>
        </div>
      </Row>
    </>
  );
};

// export default Filteration

const mapStateToProps = (state) => ({
  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    JwtDashboard: (body, OnSuccess, OnFailure) =>
      dispatch(JwtDashboard(body, OnSuccess, OnFailure)),
    // showPlotType: (OnSuccess, OnFailure) =>
    //   dispatch(showPlotType(OnSuccess, OnFailure)),
    // showPlotSize: (OnSuccess, OnFailure) =>
    //   dispatch(showPlotSize(OnSuccess, OnFailure)),
    // showPlotStatus: (OnSuccess, OnFailure) =>
    //   dispatch(showPlotStatus(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Filteration);
