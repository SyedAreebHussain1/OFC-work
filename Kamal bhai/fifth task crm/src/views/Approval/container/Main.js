import React, { useState, useEffect } from "react";
import Select from "react-select";
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

function Main(props) {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [postNumber] = useState(10);
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

  //1
  useEffect(() => {
  
    props.showProject(onProjectSuccess, onProjectFailure);
  }, [true]);
  const onProjectSuccess = () => {};
  const onProjectFailure = () => {};
  const onSectorSuccess = () => {};
  const onSectorFailure = () => {};
  const onStreetSuccess = () => {};
  const onStreetFailure = () => {};
  const onPlotNoSuccess = () => {};
  const onPlotNoFailure = () => {};
  const onSellPlotSuccess = () => {};
  const onSellPlotFailure = () => {};

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

  const onChange = (val, name) => {

    if (name == "ProjectName") {
      // let array = val.split("+");
      setState({ ...state, projectid: val });
      setbody2({ ...body2, projectid: state.projectid });

      let body = {
        projectid: val,
      };
      props.showPlotSector(body, onSectorSuccess, onSectorFailure);
    } else if (name == "SectorName") {
      setState({ ...state, sectorid: val });

      let body = {
        projectid: state.projectid,
        Sector_id: val,
      };
    }
  };

  const [nproject, nsetproject] = useState([null]);
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

  //Sector Auto complete
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

  //3rd
  const [body2, setbody2] = useState({
    projectid: "",
    Sector_id: 1,
  });

  useEffect(() => {
    props.showPlotNo(body2, onPlotNoSuccess, onPlotNoFailure);
  }, [body2]);
  return (
    <div>
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Approval</h3>
              </CardHeader>
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
                      //value={state.plotno}
                      //value={state.projectid}

                      onChange={(e) => onChange(e.value, "ProjectName")}
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
                      //value={state.plotno}
                      value={sector.value}
                      onChange={(e) => onChange(e.value, "SectorName")}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <label className="form-control-label">Plot Name</label>
                    <Input
                      type="select"
                      //    value={source}
                      //    onChange={(e) => OnChangeSouress(e.target.value)}
                    >
                      <option key={null} value={null}>
                        Plot No
                      </option>

                      {props.PlotNo !== null &&
                        props.PlotNo !== undefined &&
                        props.PlotNo.map((name) => {
                          return (
                            <option key={name.Plotid} value={name.Plotid}>
                              {name.House_Status == 25 ? name.Plot_no : ""}
                            </option>
                          );
                        })}
                    </Input>
                  </Col>
                </Row>
                <Row>
                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label">Filter 1</label>
                    <Input type="select"></Input>
                  </Col>

                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label">Filter 2</label>
                    <Input type="select"></Input>
                  </Col>

                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label">Filter 3</label>
                    <Input type="select"></Input>
                  </Col>

                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label">Filter 4</label>
                    <Input type="select"></Input>
                  </Col>
                </Row>
                <br />
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
                </Table>
              </CardBody>

              {/* Pagination Code */}
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
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
