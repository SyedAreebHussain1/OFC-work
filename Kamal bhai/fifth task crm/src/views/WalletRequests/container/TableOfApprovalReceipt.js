import React from "react";

import { useState, useEffect } from "react";
import { Button, Table } from "reactstrap";
import InfoModal from "../helpers/InfoModal";
import ActionModal from "../helpers/ActionModal";
import UpdateModal from "../helpers/UpdateModal";
import { Badge } from "reactstrap";
import { CardBody, CardHeader, Row, Col, Input } from "reactstrap";
import Pagination from "components/Pagination/Pagination";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import moment from "moment";
const TableOfApprovalReceipt = (props) => {
  const [amount, setAmount] = useState("");
  const [datee, setDatee] = useState("");
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);
  let postNumber = 10;
  let paginatedPosts, total_pages;

  if (noOfRows != "") {
    postNumber = noOfRows;
  }

  const start = pageNumber * postNumber - postNumber;
  const end = start + postNumber;

  if (posts) {
    paginatedPosts = posts;
    // paginatedPosts = posts?.slice(start, end);
    total_pages = Math.ceil(posts.length / postNumber);
  }
  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };
  useEffect(() => {
    props.ShowApprovalReceipt(
      onSuccess,
      onFailure,
      amount,
      datee,
      noOfRows,
      pageNumber
    );
  }, [noOfRows, pageNumber]);
  const getData = () => {
    props.ShowApprovalReceipt(
      onSuccess,
      onFailure,
      amount,
      datee,
      noOfRows,
      pageNumber
    );
  };
  useEffect(() => {
    setPosts(props.Response);
  }, [props.Response]);

  const search = () => {
    props.ShowApprovalReceipt(
      onSuccess,
      onFailure,
      amount,
      datee,
      noOfRows,
      pageNumber
    );
  };
  const onFailure = () => {};
  const onSuccess = () => {};

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [isOpenAction, setIsOpenAction] = useState(false);
  const [stateData, SetStateData] = useState({});

  const ToggleInfoModal = (info) => {
    setIsOpen(!isOpen);
    SetStateData(info);
  };

  const ToggleUpdateModal = (info) => {
    setIsOpenUpdate(!isOpenUpdate);
    SetStateData(info);
  };

  const ToggleActionModal = (info) => {
    setIsOpenAction(!isOpenAction);
    SetStateData(info);
  };

  return (
    <>
      <InfoModal
        modal={isOpen}
        toggle={ToggleInfoModal}
        stateData={stateData}
      />
      <ActionModal
        modal={isOpenAction}
        toggle={ToggleActionModal}
        stateData={stateData}
        Update={props.Update}
        ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus}
        ShowApprovalReceipt={props.ShowApprovalReceipt}
        getData={getData}
      />

      <UpdateModal
        modal={isOpenUpdate}
        toggle={ToggleUpdateModal}
        stateData={stateData}
        UpdatePayment={props.UpdatePayment}
        ShowUpdatePayment={props.ShowUpdatePayment}
      />

      <CardHeader className="border-0">
        <h3 className="mb-0">Wallet Requests</h3>
        <CardBody>
          <Row>
            <Col lg="4" md="4" sm="4">
              <label className="form-control-label" for="input-username">
                Amount
              </label>
              <input
                type="text"
                id="input-username"
                className="form-control"
                placeholder="Enter your amount"
                //onBlur={() => CheckFields("phoneNumber")}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              ></input>
            </Col>

            <Col lg="4" md="4" sm="4">
              <label className="form-control-label" for="input-username">
                Date
              </label>
              <input
                type="date"
                id="input-username"
                className="form-control"
                // placeholder=""
                value={datee}
                onChange={(e) => setDatee(e.target.value)}
              ></input>
            </Col>
            <Col style={{ marginTop: "20px" }} lg="4" md="4" sm="4">
              <Button
                style={{
                  backgroundColor: "#2DCE89",
                  color: "white",
                  marginTop: "8px",
                  // width: "100%",
                }}
                onClick={() => {
                  search();
                }}
                // disabled={loading}

                // size="lg"
              >
                <i color="white" class="fas fa-search"></i>
              </Button>
            </Col>
          </Row>
          <br />
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
            <Col lg="8" md="8" sm="4" xs="4"></Col>
          </Row>
          <br />
          <Table className="align-items-center" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Request ID</th>
                <th scope="col">Wallet ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Request Date</th>
                <th scope="col">Amount</th>
                {/* <th scope="col">Hand in cash</th> */}
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPosts !== null && paginatedPosts !== undefined ? (
                paginatedPosts.map((posts, index) => {
                  return (
                    <tr>
                      <td>{posts.Wallet_RequestId}</td>
                      <td>{posts.CustomerWallet_Id}</td>
                      <td>{posts.user_name}</td>
                      <td>{moment(posts.Datetime).format("MMMM Do YYYY")}</td>
                      <td>{posts.Amount}</td>
                      {/* <td>{posts.cash}</td> */}

                      <td>
                        {posts.Status === "Pending" ||
                        posts.Status === "Rejected" ? (
                          <Badge color="danger" pill>
                            {posts.Status}
                          </Badge>
                        ) : posts.Status === "Accepted" ? (
                          <Badge color="info" pill>
                            {posts.Status}
                          </Badge>
                        ) : (
                          ""
                        )}
                      </td>
                      <td>
                        <Button
                          color="danger"
                          id="search"
                          size="sm"
                          onClick={(e) => ToggleActionModal(posts)}
                        >
                          <span className="btn-inner--text"></span>
                          <span className="btn-inner--icon">
                            <i class="fas fa-info-circle"></i>
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
                  <th>
                    <h3>No data found</h3>
                  </th>
                  <th></th>
                </tr>
              )}
            </tbody>
          </Table>

          <Pagination
            pageNumber={pageNumber}
            handlePrev={handlePrev}
            handleNext={handleNext}
            totalPages={total_pages}
          />
        </CardBody>
      </CardHeader>
    </>
  );
};

// export default TableOfApprovalReceipt

const mapStateToProps = (state) => ({
  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    JwtDashboard: (OnSuccess, OnFailure) =>
      dispatch(JwtDashboard(OnSuccess, OnFailure)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToPrpos
)(TableOfApprovalReceipt);
