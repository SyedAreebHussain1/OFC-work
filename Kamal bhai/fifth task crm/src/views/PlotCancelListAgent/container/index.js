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
  plotCancelReqMiddleware,
  plotCancelReqByIdMiddleware,
  getRefundMiddleware,
  updateRefundMiddleware,
} from "../middleware";
import TableCancelPlotRec from "../components/TableCancelPlotRec";
import TableRefund from "../components/TableRefund";

const ViewCancelRecords = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const {
    _plotCancelReqMiddleware,
    data,
    _plotCancelReqByIdMiddleware,
    _getRefundMiddleware,
    refundData,
    _updateRefundMiddleware,
    updateRefund,
  } = props;
  const [searching, setSearching] = useState({
    user_name: "",
    CNIC: "",
    SaleOrderNo: "",
  });
  const [searchingrefund, setSearchingRefund] = useState({
    user_name: "",
    CNIC: "",
    SaleOrderNo: "",
  });
  const [posts, setPosts] = useState([]);
  const [postsRefund, setPostsRefund] = useState([]);
  // const [refundStage, setRefundStages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [plotCancelId, setPlotCancelId] = useState("");
  const [pageNumberRefund, setpageNumberRefund] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);
  const [noOfRowsRefund, setnoOfRowsRefund] = useState(10);
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
    total_pages = Math.ceil(posts.length / postNumber);
  }

  // PAGIANTION OF REFUND
  let postNumberRefund = 10;
  let paginatedPostsRefund, total_pagesRefund;

  if (noOfRows != "") {
    postNumber = noOfRows;
  }

  const startRefund = pageNumberRefund * postNumberRefund - postNumberRefund;
  const endRefund = startRefund + postNumberRefund;

  if (postsRefund) {
    paginatedPostsRefund = postsRefund;
    total_pagesRefund = Math.ceil(postsRefund.length / postNumberRefund);
  }

  ///////////----------Functions--------------//////////////

  const onSuccess = () => {};
  const onFailure = () => {};

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };
  const onChangeNoOfRowsRefund = (val) => {
    setnoOfRowsRefund(parseInt(val));
    setpageNumberRefund(1);
  };

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (data?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };
  const handleSearch = (data) => {
    setSearching(data);
  };
  const handlePrevRefund = () => {
    if (pageNumberRefund === 1) return;
    setpageNumberRefund(pageNumberRefund - 1);
  };

  const handleNextRefund = () => {
    if (refundData?.metaData?.totalPagesRefund > pageNumberRefund) {
      setpageNumberRefund(pageNumberRefund + 1);
    }
  };
  const handleSearchRefund = (data) => {
    setSearchingRefund(data);
  };
  //////////-------useEffects--------//////////////

  useEffect(() => {
    _plotCancelReqMiddleware(
      pageNumber,
      noOfRows,
      searching,
      onSuccess,
      onFailure
    );
  }, [pageNumber, noOfRows, searching]);
  useEffect(() => {
    if (plotCancelId !== "") {
      _getRefundMiddleware(
        plotCancelId,
        pageNumberRefund,
        noOfRowsRefund,
        searchingrefund,
        onSuccess,
        onFailure
      );
    }
  }, [plotCancelId, pageNumberRefund, noOfRowsRefund, searchingrefund]);

  useEffect(() => {
    setPosts(data.response);
  }, [data.response]);
  useEffect(() => {
    setPostsRefund(refundData?.response);
  }, [refundData?.response, updateRefund]);
  const getRefundStage = (id) => {
    setPlotCancelId(id);
  };
  return (
    <div>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h1 className="mb-0"> Plot Cancel Records</h1>
              </CardHeader>
              {/* <CardBody>
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
                        // onClick={handleSearch}
                        >
                          <i color="white" class="fas fa-search"></i>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </form>
              </CardBody> */}
              <CardBody>
                <TableCancelPlotRec
                  paginatedPosts={paginatedPosts}
                  onChangeNoOfRows={onChangeNoOfRows}
                  handleSearch={handleSearch}
                  _plotCancelReqByIdMiddleware={_plotCancelReqByIdMiddleware}
                  getRefundStage={getRefundStage}
                />
                {paginatedPosts?.length > 0 ? (
                  <Pagination
                    pageNumber={pageNumber}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    totalPages={data?.metaData?.totalPages}
                  />
                ) : (
                  ""
                )}
              </CardBody>
              {refundData?.response?.length > 0 ? (
                <>
                  <CardBody>
                    <CardHeader className="border-0">
                      <h1
                        style={{
                          textAlign: "center",
                          marginTop: "-30px",
                        }}
                      >
                        {" "}
                        Refund Stages{" "}
                      </h1>
                    </CardHeader>

                    <TableRefund
                      paginatedPostsRefund={paginatedPostsRefund}
                      onChangeNoOfRowsRefund={onChangeNoOfRowsRefund}
                      handleSearchRefund={handleSearchRefund}
                      _updateRefundMiddleware={_updateRefundMiddleware}
                      updateRefund={updateRefund}
                    />
                    {paginatedPostsRefund?.length > 0 ? (
                      <Pagination
                        pageNumber={pageNumberRefund}
                        handlePrev={handlePrevRefund}
                        handleNext={handleNextRefund}
                        totalPages={refundData?.metaData?.totalPages}
                      />
                    ) : (
                      ""
                    )}
                  </CardBody>
                </>
              ) : (
                plotCancelId !== "" && (
                  <>
                    <h2 style={{ textAlign: "center" }}>
                      Refund Stage not found
                    </h2>
                  </>
                )
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.PlotCancelListAgent?.data,
  refundData: state.PlotCancelListAgent?.refundData,
  updateRefund: state.PlotCancelListAgent?.updateRefund,
});

const mapDispatchToProps = (dispatch) => ({
  _plotCancelReqMiddleware: (
    pageNumber,
    noOfRows,
    searching,
    onSuccess,
    onFailure
  ) =>
    dispatch(
      plotCancelReqMiddleware(
        pageNumber,
        noOfRows,
        searching,
        onSuccess,
        onFailure
      )
    ),
  _getRefundMiddleware: (
    id,
    pageNumber,
    noOfRows,
    searching,
    onSuccess,
    onFailure
  ) =>
    dispatch(
      getRefundMiddleware(
        id,
        pageNumber,
        noOfRows,
        searching,
        onSuccess,
        onFailure
      )
    ),
  _plotCancelReqByIdMiddleware: (id, onSuccess, onFailure) =>
    dispatch(plotCancelReqByIdMiddleware(id, onSuccess, onFailure)),
  _updateRefundMiddleware: (id, body, onSuccess, onFailure) =>
    dispatch(updateRefundMiddleware(id, body, onSuccess, onFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewCancelRecords);
