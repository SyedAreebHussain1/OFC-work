/* eslint-disable no-unused-vars */
import Headers from "components/Headers/Header1";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import LeadModal from "../modal";
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

export const Leads = (props) => {
  const [body, setBody] = useState({
    agentid: null,
    sourceid: null,
    Datetime: null,
    orderstatus: 8,
  });
  const [data, setData] = useState(null);
  const [showdata, setShowData] = useState(null);

  // Lead grid table Data
  useEffect(() => {
    props.Checklead(body, OnSuccess, onFailure);
  }, [true]);

  useEffect(() => {
    props.Checklead(body, OnSuccess, onFailure);
  }, [body]);

  const OnSuccess = () => {};
  const onFailure = () => {
    window.alert("Fail");
  };

  // Agent Name dropdown
  useEffect(() => {
    props.GetAgent(body, OnSuccessAgent, OnFailureAgent);
  }, [true]);
  const OnSuccessAgent = () => {};
  const OnFailureAgent = () => {};

  // Sources Name dropdown
  useEffect(() => {
    props.GetSources(onSuccessSources, onFailureSources);
  }, [true]);
  const onSuccessSources = () => {};
  const onFailureSources = () => {};

  // Order Status Name dropdown
  useEffect(() => {
    props.CheckOrderStatus(body, onSuccessStatus, onFailureStatus);
  }, [true]);

  const onSuccessStatus = () => {};
  const onFailureStatus = () => {};

  // Onchange grid update (filtration)

  const [State, setState] = useState({
    user_phone: null,
    user_email: null,
    agentid: null,
  });
  const OnChangeStatus = (name, val) => {
    if (name === "orderstatus" || name === "sourceid" || name === "agentid") {
      setBody({ ...body, [name]: parseInt(val) });
    } else if (name === undefined) {
      return;
    } else if (name === "Datetime") {
      setBody({ ...body, [name]: val });
    }
  };
  const statuschange = (elmt, va) => {
    if (elmt === undefined) {
      return;
    } else {
      if (elmt === "agentid" && va === "Order Agent") {
        setState({ ...State, [elmt]: null });
      } else {
        setState({ ...State, [elmt]: va });
      }
    }
  };

  const onSuccessinsert = () => {};
  const onFailureinsert = () => {};

  useEffect(() => {
    if (props.Data !== null && props.Data !== undefined) {
      for (let i = 0; i < props.Data.length; i++) {
        setData(props.Data);
        setShowData(props.Data);
        setPosts(props.Data);
      }
    }
  }, [props.Data]);

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
  const OnChangeData = (value, name) => {
    setBodyAPI({
      ...Body,
      [name]: value,
    });
  };
  const [Body, setBodyAPI] = useState({
    user_name: null,
    user_email: null,
    user_phone: null,
    user_id: null,
    Father: null,
    cnic: null,
    PassportNo: null,
    Dateofbirth: null,
    Profession: null,
    Organization: null,
    Addressoffice: null,
    AddressResidence: null,
    Teloffice: null,
    TelResidence: null,
    Nationality: null,
  });
  useEffect(() => {
    if (props.Data !== null && props.Data !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Data.length; i++) {
        let obj = {
          value: props.Data[i].user_id,
          label: props.Data[i].user_name,
          userid: props.Data[i].user_id,
        };
        arr.push(obj);
      }
      setBodyAPI(arr);
    }
  }, [props.Data]);

  const [sendId, setSendId] = useState(0);
  // const inventory = (opt) =>{

  //   setSendId((opt.user_id));
  //   window.location.href="/admin/inventory"
  // }

  // useEffect(() => {

  // });
  const [inventoryData, setinventoryData] = useState({
    Uid: null,
    Uname: "",
    UTaskId: "",
    UCnic: "",
  });

  let history = useHistory();
  const inventory = (opt) => {
    setinventoryData({
      Uname: opt.user_name,
      UTaskId: opt.Taskid,
      UCnic: opt.CNIC,
      UId: parseInt(opt.user_id),
    });
  };
  useEffect(() => {
    if (inventoryData.UTaskId !== "" && inventoryData.UId !== "") {
      history.push({
        pathname: "/admin/inventory",
        state: {
          id: inventoryData.UId,
          name: inventoryData.Uname,
          taskid: inventoryData.UTaskId,
          cnic: inventoryData.UCnic,
        },
      });
    }
  }, [inventoryData]);

  const [isOpen, setIsOpen] = useState(false);
  const toggler = (opt) => {
    setIsOpen(!isOpen);
    setSendData(opt);
  };

  const [sendData, setSendData] = useState();

  // const printDocument =() => {
  //   const inputData = document.getElementById('pdfdiv');
  //   html2canvas(inputData)
  //     .then((canvas) => {

  //       var imgWidth = 200;
  //       var pageHeight = 250;
  //       var imgHeight = canvas.height * imgWidth / canvas.width;
  //       var heightLeft = imgHeight;
  //       const imgData = canvas.toDataURL('../../../assets/img/logo.png');
  //       const pdf = new jsPDF('p', 'mm', 'a4')
  //       var position = 10;
  //       var heightLeft = imgHeight;
  //       pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
  //       pdf.save("download.pdf");
  //     });
  // }
  const [searchTerm, setSearchTerm] = useState("");

  const SearchData = () => {
    if (State.user_phone === "") {
      State.user_phone = null;
    }

    if (State.user_email === "") {
      State.user_email = null;
    }

    if (State.user_email || State.user_phone || State.agentid) {
      let filteredData = data.filter(
        (value) =>
          (!State.user_email ||
            (State.user_email &&
              value.user_email
                .toLowerCase()
                .includes(State.user_email?.toLowerCase()))) &&
          (!State.user_phone ||
            (State.user_phone &&
              value.user_phone
                .toLowerCase()
                .includes(State.user_phone?.toLowerCase()))) &&
          (!State.agentid ||
            (State.agentid && value.agentid.toString() == State.agentid))
        //);
        //}
      );

      setShowData(filteredData);
      // setBody({ ...body, ["agentid"]: parseInt(State.agentid),
      //                 ["user_email"]: State.user_email,
      //                 ["user_phone"]: State.user_phone });
      return;
    } else {
      setShowData(data);
      return;
    }
  };

  return (
    <>
      <Headers />

      <Container className="mt--7" fluid>
        {/* <LeadModal modal={isOpen} toggle={toggler} send={sendData}></LeadModal> */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Confirm Leads</h3>
                {/* <Button color="info" type="button" style ={{left: "90%"}}  value={sendId}
                 onClick={inventory} >
                  <i className="fas fa-arrow-circle-right">  </i>
                </Button>  */}
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label">Agent</label>
                    <Input
                      // id="exampleFormControlSelect1"
                      type="select"
                      value={body.agentid}
                      onChange={(e) => statuschange("agentid", e.target.value)}
                      // onChange={(e) =>
                      //   OnChangeStatus("agentid", e.target.value)
                      // }
                    >
                      <option key={null} value={null}>
                        Order Agent
                      </option>
                      {props.Agents !== null &&
                        props.Agents !== undefined &&
                        props.Agents.map((source) => {
                          return (
                            <option
                              key={source.Dashboarduserid}
                              value={source.Dashboarduserid}
                            >
                              {source.name}
                            </option>
                          );
                        })}
                    </Input>
                  </Col>

                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label"> Phone No. </label>
                    <Input
                      // id="exampleFormControlSelect1"
                      // maxLength={12}
                      type="text"
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
                      // id="exampleFormControlSelect1"
                      type="email"
                      value={State.user_email}
                      onChange={(e) =>
                        statuschange("user_email", e.target.value)
                      }
                      placeholder="Client Email"
                    ></Input>
                  </Col>

                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label"> Search </label>
                    <br />
                    <Button
                      color="info"
                      // size="sm"
                      onClick={() => SearchData()}
                      // onChange={(e) => statuschange(e.target.value)}
                    >
                      <i className="fas fa-search"></i>
                    </Button>
                  </Col>
                </Row>
                <br />
                {/* <Button color="danger" onClick={printDocument}> <i class="fas fa-print"></i> </Button> */}
              </CardBody>

              <CardBody>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>{" "}
                      <th scope="col">Status Name</th>
                      <th scope="col">Source Name</th>
                      <th scope="col">Agent Name</th>
                      <th scope="col">Created Date</th>
                      <th scope="col">Assign By</th>
                      <th scope="col">Last Activity</th>
                      <th scope="col">Modal</th>
                      {/* <th scope="col" >
                        Pro
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {showdata !== null && showdata !== undefined ? (
                      showdata.map((opt, index) => {
                        // if( opt.agentid === null && opt.sourceid === null && opt.Datetime === null && opt.orderstatus === "8" &&
                        //    opt.orderstatusname === "Meeting Aligned"){
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{opt.user_name}</td>
                            <td>{opt.user_email}</td>
                            <td>{opt.user_phone}</td>
                            <td>
                              <Badge color="danger" pill>
                                {opt.orderstatusname}
                              </Badge>
                            </td>
                            <td>
                              {" "}
                              <Badge color="info" pill>
                                {opt.sourcename}
                              </Badge>
                            </td>
                            <td>
                              <Badge color="danger" pill>
                                {opt.Agent}
                              </Badge>
                            </td>
                            <td>{opt.Datetime}</td>
                            <td>{opt.Assignby}</td>
                            <td>{opt.lastactivitydatetime}</td>
                            <td>
                              {" "}
                              <i
                                onClick={() => toggler(opt)}
                                class="fas fa-highlighter"
                              ></i>
                            </td>
                            <td>
                              {" "}
                              <i
                                onClick={() => inventory(opt)}
                                class="fas fa-arrow-right"
                              ></i>
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
    </>
  );
};
