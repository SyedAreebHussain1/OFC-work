import Headers from "components/Headers/Header1";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Table,
  Container,
  CardBody,
  Row,
  Col,
  Input,
  Button,
  Badge,
} from "reactstrap";
//import Loader from "react-loader-spinner";
import ViewQuotationModal from "../ViewModal";
// import NewModal from "../NewModal";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { networkPoll } from "socket/Networkpolling";
import socketIOClient from "socket.io-client";
export const ViewQuotation = (props) => {
  const SOCKET_URL = "https://backendcrm.squarepro.net";
  let socket = socketIOClient(`${SOCKET_URL}`, networkPoll);
  let history = useHistory();
  const [posts, setPosts] = useState([]);
  const [isSocketData, setIsSocketData] = useState(false);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);
  const [body, setbody] = useState({
    SaleQuotationNo: "",
    phone: "",
    date: "",
    status: "",
  });
  const [role, setRole] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [issOpen, setIssOpen] = useState(false);
  const [GetQuotationData, SetQuotationData] = useState({});
  const [Detail, setDetail] = useState({});

  useEffect(() => {
    props.GetAllQuotationStatus(OnSuccessStatus, OnFailureStatus);
    setRole(parseInt(localStorage.getItem("roleid")));
  }, [true]);
  useEffect(() => {
    props.GetAllQuotation(
      pageNumber,
      noOfRows,
      body.SaleQuotationNo,
      body.status,
      body.phone,
      OnSuccess,
      OnFailure
    );
  }, [pageNumber, noOfRows]);

  useEffect(() => {
    setPageNumber(1);
    setnoOfRows(10);
    props.GetAllQuotation(
      pageNumber,
      noOfRows,
      body.SaleQuotationNo,
      body.status,
      body.phone,
      OnSuccess,
      OnFailure
    );
  }, [body.SaleQuotationNo, body.status, body.phone]);
  useEffect(() => {
    if (props.GetsQuotation !== null && props.GetsQuotation !== undefined) {
      setPosts(props.GetsQuotation?.response);
      setMetaData(props.GetsQuotation?.metaData);
    }
  }, [props.GetsQuotation]);

  const Redirect = (data) => {
    history.push({
      pathname: "/admin/SaleOrder",
      stateData: data,
    });
  };
  //comment by iqra because of payment schedule is from backend
  // const Redirect = (data) => {
  //   let plot = "";
  //   let amount = "";
  //   if (body !== undefined && body !== null) {
  //     plot = body.Plotno;
  //     amount = body.Amount;
  //   }
  //   history.push({
  //     pathname: "/admin/SaleOrder",
  //     body1: {
  //       Uname: data.user_name,
  //       CNIC: data.CNIC,
  //       Quotation: data.SQ_No,
  //       Currency: data.Currency,
  //       soldtoparty: data.AgentName,
  //       shiptoparty: data.user_name,
  //       paymentSchedule: data.PaymentPlaneId,
  //       plotNo: data.Plot_no,
  //       amount: data.NetAmount,
  //       SaleQuotationId: data.SaleQuotationId,
  //       TokenMoney: data.TokenMoney,
  //       Taskid: data.Taskid,
  //       Project_id: data.Project_id,
  //       Category_id: data.Category_id,
  //       ExtraChargesPercentage: data.ExtraChargesPercentage,
  //       CategoryName: data.CategoryName,
  //       Sector_Name: data.Sector_Name,
  //     },
  //   });
  // };
  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    if (props.GetsQuotation?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  // let dataInArrayForPaginaion = [];
  // useEffect(() => {
  //   setPosts(null);
  //   setPageNumber(1);

  //   if (reverseArray !== null && reverseArray !== undefined) {
  //     for (let i = 0; i < reverseArray.length; i++) {
  //       let str = reverseArray[i]?.DateTime.toString();
  //       str = str.split("T");
  //       if (state.phone === "" && state.date === "" && state.status === "") {
  //         dataInArrayForPaginaion.push(reverseArray[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       } else if (
  //         props.GetsQuotation[i].user_phone === state.phone &&
  //         state.date === "" &&
  //         state.status === ""
  //       ) {
  //         dataInArrayForPaginaion.push(reverseArray[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       } else if (
  //         state.phone === "" &&
  //         str[0] === state.date &&
  //         state.status === ""
  //       ) {
  //         dataInArrayForPaginaion.push(reverseArray[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       } else if (
  //         state.phone === "" &&
  //         state.date === "" &&
  //         props.GetsQuotation[i].QuotationStatusName === state.status
  //       ) {
  //         dataInArrayForPaginaion.push(reverseArray[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       } else if (
  //         props.GetsQuotation[i].user_phone === state.phone &&
  //         str[0] === state.date &&
  //         state.status === ""
  //       ) {
  //         dataInArrayForPaginaion.push(reverseArray[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       } else if (
  //         state.phone === "" &&
  //         str[0] === state.date &&
  //         props.GetsQuotation[i].QuotationStatusName === state.status
  //       ) {
  //         dataInArrayForPaginaion.push(reverseArray[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       } else if (
  //         props.GetsQuotation[i].user_phone === state.phone &&
  //         state.date === "" &&
  //         props.GetsQuotation[i].QuotationStatusName === state.status
  //       ) {
  //         dataInArrayForPaginaion.push(reverseArray[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       } else if (
  //         props.GetsQuotation[i].user_phone === state.phone &&
  //         str[0] === state.date &&
  //         props.GetsQuotation[i].QuotationStatusName === state.status
  //       ) {
  //         dataInArrayForPaginaion.push(reverseArray[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //     }
  //   }
  // }, [reverseArray]);

  // const [noOfRows, setnoOfRows] = useState("");
  // let numberOfRows;
  // const onChangeNoOfRows = (val) => {
  //   setnoOfRows(parseInt(val));
  //   numberOfRows = parseInt(val);
  //   setPageNumber(1);
  // };
  // const [posts, setPosts] = useState([]);
  // const [pageNumber, setPageNumber] = useState(2);
  // let postNumber = 10;
  // if (noOfRows !== "") {
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

  // const [body2, setbody2] = useState({
  //   projectid: 1,
  //   Sector_id: 1,
  // });

  const OnSuccess = () => {};
  const OnFailure = () => {};
  const OnSuccessStatus = () => {};
  const OnFailureStatus = () => {};

  const onReset = () => {
    setbody({ ...body, phone: "", date: "", status: "", SaleQuotationNo: "" });
  };

  const onStatus = (name, val) => {
    setbody({ ...body, [name]: val });
  };

  // const SearchData = (e) => {
  //   if (body.SaleQuotationNo == "") {
  //     body.SaleQuotationNo = null;
  //     props.GetAllQuotation(body, OnSuccess, OnFailure);
  //   } else {
  //     props.GetAllQuotation(body, OnSuccess, OnFailure);
  //   }
  // };
  const dateFunction = (date) => {
    var d = date?.split("T")[0];
    return moment(d).format("DD-MM-YYYY");
  };

  const ToggleViewQuotationModal = (ViewQuotation) => {
    setIsOpen(!isOpen);
    SetQuotationData(ViewQuotation);
  };
  const toggler = (ViewQuotation) => {
    setIssOpen(!issOpen);
    setDetail(ViewQuotation);
  };
  const DeleteQuotation = () => {
    swal({
      title: "Are you sure?",
      text: "If quotation deleted not able to recover again",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your Quotation has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  useEffect(() => {
    socket.on("new-salequotation", (data) => {
      if (pageNumber == 1) {
        let sockectData = [data];
        setPosts([...sockectData, ...posts]);
        setIsSocketData(true);
      }
    });
    return () => socket.off(`new-salequotation`);
  }, [posts, pageNumber]);
  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <ViewQuotationModal
          modal={isOpen}
          toggle={ToggleViewQuotationModal}
          QuotationSingleArray={GetQuotationData}
        />
        {/* <NewModal
          modal={issOpen}
          toggle={toggler}
          QuotationSingleArray={Detail}
        /> */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Get Quotation</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label">
                      Quotation Number
                    </label>
                    <Input
                      type="text"
                      placeholder="Quotation No"
                      value={body.SaleQuotationNo}
                      onChange={(e) =>
                        onStatus("SaleQuotationNo", e.target.value)
                      }
                    ></Input>
                  </Col>

                  {/* <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label"> Search </label>
                    <br />
                    <Button color="info" onClick={SearchData}>
                      <i className="fas fa-search"></i>
                    </Button>
                  </Col> */}
                  {/* </Row>
                <hr />
                <Row> */}
                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label">
                      Quotation Status :
                    </label>
                    <Input
                      id="exampleFormControlSelect1"
                      type="select"
                      value={body.status}
                      onChange={(e) => onStatus("status", e.target.value)}
                    >
                      <option value={""}> Quotation Status </option>
                      {props.GetsQuotationStatus !== null &&
                        props.GetsQuotationStatus !== undefined &&
                        props.GetsQuotationStatus.map((QuotationStatus) => {
                          return (
                            <option
                              key={QuotationStatus.status_id}
                              value={QuotationStatus.status_name}
                            >
                              {QuotationStatus.status_name}
                            </option>
                          );
                        })}
                    </Input>
                  </Col>

                  <Col lg="3" md="4" sm="6" xs="12">
                    <label className="form-control-label">Phone Number:</label>
                    <Input
                      type="text"
                      placeholder="Phone No"
                      value={body.phone}
                      onChange={(e) => onStatus("phone", e.target.value)}
                    ></Input>
                  </Col>

                  <Col lg="2" md="4" sm="6" xs="12">
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
              </CardBody>

              <CardBody>
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
                    <br />
                  </Col>
                </Row>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Quotation No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Status</th>
                      <th scope="col">Valid From</th>
                      <th scope="col">Valid To</th>
                      <th scope="col">Payment Method</th>
                      <th scope="col">Amount</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts !== null && posts !== undefined ? (
                      posts.map((ViewQuotation, index) => {
                        return (
                          <tr
                            key={index}
                            style={
                              isSocketData && index == 0
                                ? { backgroundColor: "rgba(112,181,249,0.2)" }
                                : {}
                            }
                          >
                            <td>{index + 1}</td>
                            <td>{ViewQuotation.SQ_No}</td>
                            <td>{ViewQuotation.user_name}</td>
                            <td>{ViewQuotation.user_phone}</td>

                            <td>
                              {" "}
                              <Badge color="success">
                                {ViewQuotation.QuotationStatusName}
                              </Badge>
                            </td>
                            <td>
                              {/* {dateFunction( */}
                              {dateFunction(ViewQuotation.Validfrom)}
                              {/* ).toLocaleString("en-US", {
                                timeZone: "Asia/Karachi",
                              })} */}
                            </td>
                            <td>{dateFunction(ViewQuotation.Validto)}</td>
                            <td>{ViewQuotation.AmountType}</td>
                            <td>
                              {ViewQuotation.Amount?.toLocaleString("en-US")}
                            </td>
                            <td>
                              {/* <Button color="info"size="sm"onClick={(e) => toggler(ViewQuotation)}id="info">
                                 <span className="btn-inner--icon">
                                   <i class="fas fa-align-center"></i>
                                 </span>
                              </Button> */}
                              <Button
                                color="success"
                                id="search"
                                size="sm"
                                onClick={(e) =>
                                  ToggleViewQuotationModal(ViewQuotation)
                                }
                              >
                                <span className="btn-inner--text"></span>
                                <span className="btn-inner--icon">
                                  <i class="fas fa-info-circle"></i>
                                </span>
                              </Button>
                              {/* EDIT BUTTON */}
                              <Button
                                color="success"
                                id="search"
                                size="sm"
                                onClick={(e) => console.log("EDIT MODAL OPEN")}
                              >
                                <span className="btn-inner--text"></span>
                                <span className="btn-inner--icon">
                                  <i class="fas fa-edit"></i>
                                </span>
                              </Button>
                              {/* EDIT BUTTON */}
                              {/* {role !== 3 ? ( */}
                              <Button
                                //color="info"
                                id="search"
                                size="sm"
                                onClick={() => Redirect(ViewQuotation)}
                                color={
                                  ViewQuotation.QuotationStatus == 41
                                    ? "danger"
                                    : "info"
                                }
                                disabled={
                                  ViewQuotation.QuotationStatus == 41
                                    ? true
                                    : false
                                }
                              >
                                <span className="btn-inner--text"></span>
                                <span className="btn-inner--icon">
                                  <i class="fas fa-arrow-right"></i>
                                </span>
                              </Button>
                              {/* ) : (
                                ""
                               )} */}
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
                          <h3>No data found</h3>
                        </th>
                        <th></th>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </CardBody>

              {/* Pagination Code */}
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
