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
import { plotTransReqMiddleware } from "../middleware";
import TableTransferPlotRec from "../components/TableTransferPlotRec";

const ViewTransferRecords = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const { _plotTransReqMiddleware, data } = props;
  const [searching, setSearching] = useState("");
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
    paginatedPosts = posts?.slice(start, end);
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
    if (total_pages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  //////////-------useEffects--------//////////////

  useEffect(() => {
    _plotTransReqMiddleware(pageNumber, noOfRows, onSuccess, onFailure);
  }, []);

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
                <h1 className="mb-0"> Plot Transfer Records </h1>
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
                <TableTransferPlotRec
                  paginatedPosts={paginatedPosts}
                  onChangeNoOfRows={onChangeNoOfRows}
                />
                {paginatedPosts?.length > 0 ? (
                  <Pagination
                    pageNumber={pageNumber}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    totalPages={total_pages}
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
  data: state.plotTransferRequests?.data,
});

const mapDispatchToProps = (dispatch) => ({
  _plotTransReqMiddleware: (pageNumber, noOfRows, onSuccess, onFailure) =>
    dispatch(
      plotTransReqMiddleware(pageNumber, noOfRows, onSuccess, onFailure)
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewTransferRecords);
