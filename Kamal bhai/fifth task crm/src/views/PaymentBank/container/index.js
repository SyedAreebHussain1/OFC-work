import React, { useEffect, useState } from "react";
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
import { connect } from "react-redux";
import Headers from "components/Headers/Header1";
import Pagination from "components/Pagination/Pagination";
import {
  getPaymentBankMiddleware,
  ApproveBank_Middleware,
} from "../middleware";
import swal from "sweetalert";
import TableWallet from "../components/TableWallet";

const Paymentbanks = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const { _getPaymentBankMiddleware, getPaymentBank, _approveBank_Middleware } =
    props;
  const [searching, setSearching] = useState("");
  const [walletId, setWalletId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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
    paginatedPosts = posts?.data;
    total_pages = Math.ceil(posts?.data?.length / postNumber);
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
    // if (posts.metaData?.totalpages === pageNumber) {
    //   return;
    // } else {
    //   setPageNumber(pageNumber + 1);
    // }
    if (pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };

  const ToggleViewTransactionHistory = (id) => {
    setWalletId(id);
    setIsOpen(!isOpen);
  };
  const handleSearch = () => {
    _getPaymentBankMiddleware(
      searching,
      noOfRows,
      pageNumber,
      onSuccess,
      onFailure
    );
  };

  //////////-------useEffects--------//////////////

  useEffect(() => {
    _getPaymentBankMiddleware(
      searching,
      noOfRows,
      pageNumber,
      onSuccess,
      onFailure
    );
  }, [noOfRows, pageNumber]);

  useEffect(() => {
    setPosts(getPaymentBank);
  }, [getPaymentBank]);

  return (
    <div>
      <Headers />
      <Container className="mt--7" fluid>
        {/* <ViewTransactionHistory
          modal={isOpen}
          toggle={ToggleViewTransactionHistory}
          _getTransactionHistoryMiddleware={_getTransactionHistoryMiddleware}
          id={walletId}
        /> */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h1 className="mb-0"> Payment Bank </h1>
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
                          Name
                        </Label>
                        <Input
                          id="exampleFormControlSelect1"
                          type="text"
                          name="userName"
                          onChange={(e) =>
                            setSearching({
                              user_name: e.target.value,
                            })
                          }
                          value={
                            searching?.user_name ? searching?.user_name : ""
                          }
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
                  _approveBank_Middleware={_approveBank_Middleware}
                />
                <Pagination
                  pageNumber={pageNumber}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  totalPages={total_pages}
                />
                {/* {paginatedPosts?.length > 0 ? (
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
  getPaymentBank: state.paymentBank?.getPaymentBank,
  getMsg: state.paymentBank?.apprveMsg,
});

const mapDispatchToProps = (dispatch) => ({
  _getPaymentBankMiddleware: (body, onSuccess, onFailure) =>
    dispatch(getPaymentBankMiddleware(body, onSuccess, onFailure)),
  _approveBank_Middleware: (body, onSuccess, onFailure) =>
    dispatch(ApproveBank_Middleware(body, onSuccess, onFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paymentbanks);
