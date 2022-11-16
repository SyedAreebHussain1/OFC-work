import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Col,
  Input,
  Label,
} from "reactstrap";

import Headers from "components/Headers/Header1";
import Pagination from "components/Pagination/Pagination";
import {
  getTransactionHistoryMiddleware,
  getUserInfoMiddleware,
} from "../middleware";
import TableTransactionHistory from "../components/TableTransactionHistory";
import TableWallet from "../components/TableWallet";

const Wallets = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const {
    _getUserInfoMiddleware,
    GetUserInfo,
    _getTransactionHistoryMiddleware,
    TransactionHistory,
  } = props;
  const [searching, setSearching] = useState("");
  const [id, setId] = useState("");
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);
  const [posts1, setPosts1] = useState([]);
  const [pageNumber1, setPageNumber1] = useState(1);
  const [noOfRows1, setnoOfRows1] = useState(10);
  ///////////----------Pagination--------------//////////////
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
  ///////////----------Pagination1--------------//////////////

  let postNumber1 = 10;
  let paginatedPosts1, total_pages1;
  if (noOfRows1 != "") {
    postNumber1 = noOfRows1;
  }

  const start1 = pageNumber1 * postNumber1 - postNumber1;
  const end1 = start1 + postNumber1;

  if (posts1) {
    paginatedPosts1 = posts1;
    // paginatedPosts1 = posts1?.slice(start1, end1);
    total_pages1 = Math.ceil(posts1.length / postNumber1);
  }

  ///////////----------Functions--------------//////////////

  const onSuccess = () => {};
  const onFailure = () => {};

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
  const onChangeNoOfRows1 = (val) => {
    setnoOfRows1(parseInt(val));
    setPageNumber1(1);
  };

  const handlePrev1 = () => {
    if (pageNumber1 === 1) return;
    setPageNumber1(pageNumber1 - 1);
  };

  const handleNext1 = () => {
    if (pageNumber1) {
      setPageNumber1(pageNumber1 + 1);
    }
  };

  const handleSearch = () => {
    _getUserInfoMiddleware(
      searching,
      noOfRows,
      pageNumber,
      onSuccess,
      onFailure
    );
  };
  const onSuccessTransaction = () => {};
  const onFailureTransaction = () => {};

  const handleGetData = (id) => {
    _getTransactionHistoryMiddleware(
      id,
      pageNumber1,
      noOfRows1,
      onSuccessTransaction,
      onFailureTransaction
    );
  };
  //////////-------useEffects--------//////////////

  useEffect(() => {
    _getUserInfoMiddleware(
      searching,
      noOfRows,
      pageNumber,
      onSuccess,
      onFailure
    );
  }, [noOfRows, pageNumber]);

  useEffect(() => {
    if (id !== "") {
      _getTransactionHistoryMiddleware(
        id,
        pageNumber1,
        noOfRows1,
        onSuccessTransaction,
        onFailureTransaction
      );
    }
  }, [pageNumber1, noOfRows1, id]);

  useEffect(() => {
    setPosts(GetUserInfo);
  }, [GetUserInfo]);
  // console.log("GET USER INFOR", GetUserInfo);
  useEffect(() => {
    setPosts1(TransactionHistory);
  }, [TransactionHistory]);

  return (
    <div>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h1 className="mb-0"> Wallet </h1>
              </CardHeader>
              <CardBody>
                <form>
                  <div className="pl-lg-4">
                    <Row className="mb-3">
                      <Col lg="3" md="6" sm="6">
                        <Label
                          className="form-control-label"
                          for="input-username"
                        >
                          CNIC
                        </Label>
                        <Input
                          id="exampleFormControlSelect1"
                          type="text"
                          name="cnic"
                          onChange={(e) =>
                            setSearching({
                              cnic: e.target.value,
                            })
                          }
                          value={searching?.cnic ? searching?.cnic : ""}
                        ></Input>
                      </Col>
                      <Col lg="3" md="6" sm="6">
                        <Label className="form-control-label" for="reporting">
                          Amount
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=""
                          name="amount"
                          onChange={(e) =>
                            setSearching({
                              amount: e.target.value,
                            })
                          }
                          value={searching?.amount ? searching?.amount : ""}
                        ></Input>
                      </Col>
                      <Col lg="3" md="6" sm="6">
                        <Label className="form-control-label" for="reporting">
                          Date
                        </Label>
                        <Input
                          type="date"
                          className="form-control"
                          placeholder=""
                          name="date"
                          onChange={(e) =>
                            setSearching({
                              date: e.target.value,
                            })
                          }
                          value={searching?.date ? searching?.date : ""}
                        ></Input>
                      </Col>
                      <Col lg="3" md="6" sm="6">
                        <Button
                          style={{
                            backgroundColor: "#2DCE89",
                            color: "white",
                            marginTop: "30px",
                          }}
                          onClick={handleSearch}
                        >
                          <i color="white" class="fas fa-search"></i>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </form>
              </CardBody>
              <CardBody>
                <TableWallet
                  paginatedPosts={paginatedPosts}
                  onChangeNoOfRows={onChangeNoOfRows}
                  _getTransactionHistoryMiddleware={
                    _getTransactionHistoryMiddleware
                  }
                  setId={setId}
                />
                <Pagination
                  pageNumber={pageNumber}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  totalPages={total_pages}
                />
                {/* {paginatedPosts.length > 0 ? (
                  <Pagination
                    pageNumber={pageNumber}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    totalPages={total_pages}
                  />
                ) : (
                  ""
                )} */}
              </CardBody>
            </Card>
            {paginatedPosts1.length > 0 ? (
              <Card>
                <CardHeader className="border-0">
                  <h1 className="mb--5"> Transaction History </h1>
                </CardHeader>
                <CardBody>
                  <TableTransactionHistory
                    paginatedPosts={paginatedPosts1}
                    onChangeNoOfRows={onChangeNoOfRows1}
                    noOfRows1={noOfRows1}
                  />
                  <Pagination
                    pageNumber={pageNumber1}
                    handlePrev={handlePrev1}
                    handleNext={handleNext1}
                    totalPages={total_pages1}
                  />
                </CardBody>
              </Card>
            ) : (
              <Card>
                <CardHeader className="border-0">
                  <h1 className="mb--5"> Transaction History </h1>
                </CardHeader>
                <CardBody>
                  <TableTransactionHistory
                    paginatedPosts={paginatedPosts1}
                    onChangeNoOfRows={onChangeNoOfRows1}
                    noOfRows1={noOfRows1}
                  />
                  <Pagination
                    pageNumber={pageNumber1}
                    handlePrev={handlePrev1}
                    handleNext={handleNext1}
                    totalPages={total_pages1}
                  />
                </CardBody>
              </Card>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  GetUserInfo: state.wallet?.GetUserInfo,
  TransactionHistory: state.wallet?.TransactionHistory,
});

const mapDispatchToProps = (dispatch) => ({
  _getUserInfoMiddleware: (body, noOfRows, pageNumber, onSuccess, onFailure) =>
    dispatch(
      getUserInfoMiddleware(body, noOfRows, pageNumber, onSuccess, onFailure)
    ),
  _getTransactionHistoryMiddleware: (
    id,
    pageNumber1,
    noOfRows1,
    onSuccess,
    onFailure
  ) =>
    dispatch(
      getTransactionHistoryMiddleware(
        id,
        pageNumber1,
        noOfRows1,
        onSuccess,
        onFailure
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallets);
