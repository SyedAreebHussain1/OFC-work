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
  plotCancleReqApproval,
} from "../middleware";
import TableCancelPlotRec from "../components/TableCancelPlotRec";

const ViewCancelRecords = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const {
    _plotCancelReqMiddleware,
    data,
    _plotCancelReqByIdMiddleware,
    _plotCancleReqApproval,
    approval_res,
  } = props;
  const [searching, setSearching] = useState({
    user_name: "",
    CNIC: "",
    SaleOrderNo: "",
  });
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);
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
    if (data?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };
  const handleSearch = (data) => {
    setSearching(data);
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
  }, [pageNumber, noOfRows, searching, approval_res]);

  useEffect(() => {
    setPosts(data.response);
  }, [data.response]);
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
                  _plotCancleReqApproval={_plotCancleReqApproval}
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
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.PlotCancelListManager?.data,
  approval_res: state.PlotCancelListManager?.approval_res,
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
  _plotCancelReqByIdMiddleware: (id, onSuccess, onFailure) =>
    dispatch(plotCancelReqByIdMiddleware(id, onSuccess, onFailure)),
  _plotCancleReqApproval: (id, body, onSuccess, onFailure) =>
    dispatch(plotCancleReqApproval(id, body, onSuccess, onFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewCancelRecords);
