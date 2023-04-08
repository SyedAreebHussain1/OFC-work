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
import { getCompanyTransationMiddleware } from "../middleware";
import TableWallet from "../components/TableWallet";
import axios from "axios";
const CompanyWallets = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const { _getCompanyTransationMiddleware, GetCompnayWallet } = props;

  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [totalamout, setTotalAmount] = useState("");

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

  const handleSearch = () => {
    _getCompanyTransationMiddleware(
      noOfRows,
      pageNumber,
      fromDate,
      toDate,
      onSuccess,
      onFailure
    );
  };

  //////////-------useEffects--------//////////////

  useEffect(() => {
    _getCompanyTransationMiddleware(
      noOfRows,
      pageNumber,
      fromDate,
      toDate,
      onSuccess,
      onFailure
    );
  }, [noOfRows, pageNumber]);

  useEffect(() => {
    setPosts(GetCompnayWallet);
  }, [GetCompnayWallet]);

  const getTotalAmount = () => {
    let token = localStorage.getItem("auth");
    let path = "GetComapnyWallet";
    axios
      .get(`https://backendcrm.squarepro.net/CRM/${path}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setTotalAmount(res.data?.response[0]);
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getTotalAmount();
  }, []);
  return (
    <div>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h1 className="mb-0">Company Wallet </h1>
              </CardHeader>
              <CardBody>
                <form>
                  <div className="pl-lg-4">
                    <Row className="mb-3">
                      <Col lg="2" md="2" sm="2">
                        <Label
                          className="form-control-label"
                          for="input-username"
                        >
                          Total Amount
                        </Label>
                        <Input
                          id="exampleFormControlSelect1"
                          type="text"
                          name="amount"
                          disabled={true}
                          value={totalamout?.Amount}
                        ></Input>
                      </Col>
                      <Col lg="4" md="4" sm="4">
                        <Label className="form-control-label" for="reporting">
                          From Date
                        </Label>
                        <Input
                          type="date"
                          className="form-control"
                          placeholder=""
                          name="date"
                          onChange={(e) => setFromDate(e.target.value)}
                          value={fromDate?.Amount}
                        ></Input>
                      </Col>
                      <Col lg="4" md="4" sm="4">
                        <Label className="form-control-label" for="reporting">
                          To Date
                        </Label>
                        <Input
                          type="date"
                          className="form-control"
                          placeholder=""
                          name="date"
                          onChange={(e) => setToDate(e.target.value)}
                          value={toDate}
                        ></Input>
                      </Col>
                      <Col lg="2" md="2" sm="2">
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
                  _getCompanyTransationMiddleware={
                    _getCompanyTransationMiddleware
                  }
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
          </div>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  GetCompnayWallet: state.compnaywallet?.GetCompnayWallet,
});

const mapDispatchToProps = (dispatch) => ({
  _getCompanyTransationMiddleware: (
    noOfRows,
    pageNumber,
    fromDate,
    toDate,
    onSuccess,
    onFailure
  ) =>
    dispatch(
      getCompanyTransationMiddleware(
        noOfRows,
        pageNumber,
        fromDate,
        toDate,
        onSuccess,
        onFailure
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyWallets);
