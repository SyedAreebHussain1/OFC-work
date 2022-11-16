import React, { useState, useEffect } from "react";
import {
  Table,
  Container,
  CardBody,
  Row,
  Col,
  Input,
  Button,
} from "reactstrap";
import Loader from "react-loader-spinner";
import SaleOrderModal from "../helpers/ViewModal";
import { connect } from "react-redux";
import { GetAllSaleOrder } from "../middleware";
import { useHistory } from "react-router";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import moment from "moment";
import { networkPoll } from "socket/Networkpolling";
import socketIOClient from "socket.io-client";

const TableData = (props) => {
  const SOCKET_URL = "https://backendcrm.squarepro.net";
  let socket = socketIOClient(`${SOCKET_URL}`, networkPoll);
  const [posts, setPosts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);
  const [isSocketData, setIsSocketData] = useState(false);
  const [body, setbody] = useState({
    saleorderNo: "",
    phone: "",
  });
  // useEffect(() => {
  //   props.GetAllSaleOrder(
  //     pageNumber,
  //     noOfRows,
  //     body.saleorderNo,
  //     body.phone,
  //     OnSuccess,
  //     OnFailure
  //   );
  //   props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  // }, [true, noOfRows, pageNumber]);

  useEffect(() => {
    setPosts(null);
    // setPageNumber(1);
    if (props.GetSale !== null && props.GetSale !== undefined) {
      setPosts(props.GetSale?.response);
      setMetaData(props.GetSale?.metaData);
    }
  }, [props.GetSale]);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    if (props.GetSale?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  // const [state, setstate] = useState({
  //   phone: "",
  // });
  const dateFunction = (date) => {
    // const nDate = new Date(date).toLocaleString("en-US", {
    //   timeZone: "Asia/Karachi",
    // });
    // return nDate;
    let d = date.split("T")[0];
    // var date = date.split("T");
    // return d[0];

    // const d = new Date(date[0]);

    return moment(d).format("DD-MM-YYYY");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [saleOrderData, setSaleOrderData] = useState({});

  const ToggleSaleOrderModal = (ViewSale, opt) => {
    setIsOpen(!isOpen);
    setSaleOrderData(ViewSale);
  };

  const onStatus = (name, val) => {
    setbody({ ...body, [name]: val });
  };
  useEffect(() => {
    props.GetAllSaleOrder(
      pageNumber,
      noOfRows,
      body.saleorderNo,
      body.phone,
      OnSuccess,
      OnFailure
    );
  }, [true, pageNumber, noOfRows, body.saleorderNo, body.phone]);

  // const SearchData = (e) => {
  //   // if (body.SaleOrderNo == "") {
  //   //   body.SaleOrderNo = null;
  //   //   props.GetAllSaleOrder(body, OnSuccess, OnFailure);
  //   // } else {
  //   props.GetAllSaleOrder(
  //     pageNumber,
  //     noOfRows,
  //     body.saleorderNo,
  //     body.phone,
  //     OnSuccess,
  //     OnFailure
  //   );
  //   // }
  // };
  const OnSuccess = () => {};
  const OnFailure = () => {};
  // const [paymentstage, setpaymentstage] = useState({
  //   saleorderid: null,
  //   orderid: null,
  //   username: null,
  //   userplot: null,
  // });
  let history = useHistory();

  const TogglePaymentStagesForm = (opt) => {
    history.push({
      pathname: "/admin/PaymentStages",
      state: opt,
    });

    //   setpaymentstage({
    //   saleorderid: opt.SaleOrderNo ,
    //   orderid: parseInt(opt.SaleOrderId),
    //   username: opt.user_name,
    //   userplot: opt.Plot_no,

    // })
  };

  // useEffect(() => {
  //   if(paymentstage.saleorderid !== null && paymentstage.saleorderid !== undefined){
  //     history.push({
  //       pathname: "/admin/PaymentStages",
  //       state:{
  //         orderno : paymentstage.saleorderid,
  //         saleid: paymentstage.orderid,
  //         agentname: paymentstage.username,
  //         agentplotname: paymentstage.userplot
  //       }
  //     })
  //   }
  // },[paymentstage])

  const OnSuccessJwt = () => {};
  const OnFailureJwt = () => {};
  const reset = () => {
    setbody({ ...body, saleorderNo: "", phone: "" });
  };
  useEffect(() => {
    socket.on("new-saleorder", (data) => {
      if (pageNumber == 1) {
        let sockectData = [data];
        setPosts([...sockectData, ...posts]);
        setIsSocketData(true);
      }
    });
    return () => socket.off(`new-saleorder`);
  }, [posts, pageNumber]);
  return (
    <>
      <SaleOrderModal
        modal={isOpen}
        toggle={ToggleSaleOrderModal}
        Data={saleOrderData}
      />
      <CardBody>
        <Row>
          <Col lg="3" md="4" sm="6" xs="12">
            <label className="form-control-label">Sale Order Number</label>
            <Input
              type="text"
              placeholder="Sale Order No"
              value={body.saleorderNo}
              onChange={(e) => onStatus("saleorderNo", e.target.value)}
            ></Input>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12">
            <label className="form-control-label">Phone:</label>
            <Input
              type="text"
              placeholder="Phone No"
              value={body.phone}
              onChange={(e) => onStatus("phone", e.target.value)}
            ></Input>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12">
            <br />
            {/* <Button color="info" size="sm" onClick={SearchData}>
            <span className="btn-inner--icon">
              <i className="fas fa-search"></i>
              </span>
            </Button> */}
            <Button color="danger" size="sm" onClick={reset}>
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
            <br />
          </Col>
        </Row>
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Sale Order No</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Gross Amount</th>
              <th scope="col">Discount %</th>
              {/* <th scope="col">Net Amount</th> */}
              <th scope="col">Sold Amount</th>
              <th scope="col">Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {posts !== null && posts !== undefined ? (
              posts.map((opt, index) => {
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
                    <td>{opt.SaleOrderNo}</td>
                    <td>{opt.user_name}</td>
                    <td>{opt.user_phone}</td>
                    {/* <td>{opt.NetAmount?.toLocaleString("en-US")}</td> */}
                    <td>{opt.Gross_Amount?.toLocaleString("en-US")}</td>
                    <td>{opt.Discount}%</td>
                    <td>{opt.SoldAmounmt?.toLocaleString("en-US")}</td>
                    <td>{dateFunction(opt.Datetime)}</td>
                    <td>
                      <Button
                        color="success"
                        size="sm"
                        onClick={(e) => ToggleSaleOrderModal(opt)}
                      >
                        <span className="btn-inner--text"></span>
                        <span className="btn-inner--icon">
                          <i class="fas fa-info-circle"></i>
                        </span>
                      </Button>

                      <Button
                        color="info"
                        size="sm"
                        onClick={(e) => TogglePaymentStagesForm(opt)}
                      >
                        <span className="btn-inner--text"></span>
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
    </>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.viewsaleorder.isLoading,
  isError: state.viewsaleorder.isError,
  Error: state.viewsaleorder.error,
  GetSale: state.viewsaleorder.GetSale,

  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    // GetAllSaleOrder: (body, OnSuccess, OnFailure) =>
    //   dispatch(GetAllSaleOrder(body, OnSuccess, OnFailure)),
    JwtDashboard: (body, OnSuccess, OnFailure) =>
      dispatch(JwtDashboard(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(TableData);
