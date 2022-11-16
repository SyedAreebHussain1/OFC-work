import React from "react";

import { useState, useEffect } from "react";
import { Button, Table } from "reactstrap";
import InfoModal from "../helpers/InfoModal";
import ActionModal from "../helpers/ActionModal";
import UpdateModal from "../helpers/UpdateModal";
import { Badge } from "reactstrap";
import { CardBody, CardHeader, Row, Col, Input } from "reactstrap";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

const TableOfApprovalReceipt = (props) => {
  const [getResponse, setResponse] = useState([]);
  const [noOfRows, setnoOfRows] = useState(10);

  const [posts, setPosts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [isOpenAction, setIsOpenAction] = useState(false);
  const [stateData, SetStateData] = useState({});

  useEffect(() => {
    props.ShowApprovalReceipt(pageNumber, noOfRows, onSuccess, onFailure);
  }, [true, props.Update, , noOfRows, pageNumber]);
  const onFailure = () => {};
  const onSuccess = () => {};

  // useEffect(() => {
  //     setPosts(null);
  //     setPageNumber(1);
  //     if (getResponse !== null && getResponse !== undefined && getResponse?.length > 0) {

  //         for (let i = 0; i < getResponse.length; i++) {
  //             dataInArrayForPaginaion.push(getResponse);
  //             setPosts(dataInArrayForPaginaion[i]);
  //         }
  //     }
  // }, [getResponse]);

  useEffect(() => {
    if (props.Response !== null && props.Response !== undefined) {
      setPosts(props.Response.response);
      setMetaData(props.Response?.metaData);
    }
  }, [props.Response]);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    if (props.Response?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  const ToggleInfoModal = (info) => {
    setIsOpen(!isOpen);
    SetStateData(info);
  };

  const ToggleUpdateModal = (info) => {
    setIsOpenUpdate(!isOpenUpdate);
    SetStateData(info);
  };

  // useEffect(() => {
  //     if (isOpenAction == false) {
  //         props.ShowApprovalReceipt(onSuccess, onFailure)
  //     }
  // }, [isOpenAction])

  const ToggleActionModal = (info) => {
    setIsOpenAction(!isOpenAction);
    SetStateData(info);
  };

  const OnSuccessJwt = () => {};
  const OnFailureJwt = () => {};

  useEffect(() => {
    props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  }, [true]);

  useEffect(() => {
    if (props.GetUserJWTLogin === false) {
      localStorage.removeItem("auth");
      window.location.href = "/auth/login";
    }
  });
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
      />

      <UpdateModal
        modal={isOpenUpdate}
        toggle={ToggleUpdateModal}
        stateData={stateData}
        ReceiptUpdate={props.ReceiptUpdate}
        ShowUpdatePayment={props.ShowUpdatePayment}
        ShowApprovalReceipt={props.ShowApprovalReceipt}
        pageNumber={pageNumber}
        noOfRows={noOfRows}
      />

      <CardHeader className="border-0">
        <h3 className="mb-0"> Approval Receipt </h3>
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
            </Col>
            <Col lg="8" md="8" sm="4" xs="4"></Col>
          </Row>
          <br />
          <Table className="align-items-center" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Receipt No</th>
                <th scope="col">Description</th>
                <th scope="col">Plot No</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {posts !== null && posts !== undefined ? (
                posts.map((posts, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{posts.user_name}</td>
                      <td>{posts.PaymentReceiptNo}</td>
                      <td>{posts.Description}</td>
                      <td>{posts.Plot_no}</td>
                      <td>
                        {posts.ConfirmationStatusName === "Pending" ? (
                          <Badge color="danger" pill>
                            {posts.ConfirmationStatusName}
                          </Badge>
                        ) : posts.ConfirmationStatusName === "Approved" ? (
                          <Badge color="info" pill>
                            {posts.ConfirmationStatusName}
                          </Badge>
                        ) : posts.ConfirmationStatusName === "Reject" ? (
                          <Badge color="success" pill>
                            {posts.ConfirmationStatusName}
                          </Badge>
                        ) : posts.ConfirmationStatusName === "Closed" ? (
                          <Badge color="warning" pill>
                            {posts.ConfirmationStatusName}
                          </Badge>
                        ) : (
                          ""
                        )}
                      </td>

                      {posts.ConfirmationStatusName !== "Closed" ? (
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
                          <Button
                            color="success"
                            id="search"
                            size="sm"
                            onClick={(e) => ToggleInfoModal(posts)}
                          >
                            <span className="btn-inner--text"></span>
                            <span className="btn-inner--icon">
                              <i class="fas fa-eye"></i>
                            </span>
                          </Button>
                          <Button
                            color="info"
                            id="search"
                            size="sm"
                            onClick={(e) => ToggleUpdateModal(posts)}
                          >
                            <span className="btn-inner--text"></span>
                            <span className="btn-inner--icon">
                              <i class="fas fa-edit"></i>
                            </span>
                          </Button>
                        </td>
                      ) : (
                        <td>
                          <Button
                            color="success"
                            id="search"
                            size="sm"
                            onClick={(e) => ToggleInfoModal(posts)}
                          >
                            <span className="btn-inner--text"></span>
                            <span className="btn-inner--icon">
                              <i class="fas fa-eye"></i>
                            </span>
                          </Button>
                        </td>
                      )}
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
