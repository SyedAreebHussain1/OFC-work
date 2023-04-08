import React, { useEffect, useState } from "react";
import {
  CardBody,
  Container,
  CardHeader,
  Card,
  Row,
  Col,
  Input,
  Label,
  Button,
} from "reactstrap";
import { connect } from "react-redux";

import Headers from "components/Headers/Header1";
import { Divider } from "@material-ui/core";
import TableCashierCounter from "../components/TableCashierCounter";
import jsPDF from "jspdf";
import PalmDreamLogo from "../images/palm_dreams_logo.png";
import { createBookingReceipt, getBookingReceipt } from "../middleware";
import Pagination from "components/Pagination/Pagination";
import swal from "sweetalert";

const CashierCounter = (props) => {
  const { createBookingReceipt, getBookingReceipt, BookingReceipts, Response } =
    props;
  const [formNo, setFormNo] = useState("");
  const [validateError, setValidateError] = useState("");
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState("");

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

  const onCreateSuccess = (res) => {
    if (res.response?.length > 0) {
      swal(
        "Congratulations!",
        "Receipt has been created successfully",
        "success"
      );
      printDocument(res.response[0]);
    } else if (res.httpstatus === 403) {
      swal("Sorry!", res.message, "error");
    }
  };
  const onCreateFailure = (message) => {
    swal("Sorry!", message, "error");
  };
  const onSuccess = () => {};
  const onFailure = () => {};

  const handleCreateReceipt = () => {
    let body = {
      FormId: formNo,
      PaymentModeId: 1,
      ChequeNo: null,
      ChequeDate: null,
      Amount: 5000,
    };
    createBookingReceipt(body, onCreateSuccess, onCreateFailure);
  };

  const printDocument = (user) => {
    let date = new Date().toISOString().split("T")[0];
    const doc = new jsPDF();
    doc.addImage(PalmDreamLogo, "png", 15, 0, 30, 30);
    doc.text("Booking Receipt", 88, 40);
    doc.setFontSize(10);
    doc.text("Date: " + date, 168, 18);
    doc.autoTable({
      theme: "grid",
      head: [["Details", ""]],
      body: [
        ["Form No.", user.FormNo],
        ["Name", user.CustomerName],
        ["CNIC No.", user.CustomerCNIC],
        ["E-mail", user.CustomerEmail],
        ["Phone No.", user.CustomerPhone],
        ["Amount", "5000/-"],
      ],
      margin: { top: 55 },
      styles: { lineColor: 10, cellWidth: 91 },
    });
    doc.setFontSize(10);
    doc.text("Singnature:________________", 145, 130);
    doc.save(`cashRecptNo.${user.FormNo}.pdf`);
  };

  useEffect(() => {
    let body = {
      FormId: null,
    };
    getBookingReceipt(body, onSuccess, onFailure);
  }, [Response]);

  useEffect(() => {
    let reverse = BookingReceipts?.reverse();
    setPosts(reverse);
  }, [BookingReceipts]);

  return (
    <div>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0"> Cashier Counter </h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xl="4" lg="4" md="4" sm="6">
                    <Label className="form-control-label" for="input-username">
                      Form No.
                    </Label>
                    <Input
                      id="exampleFormControlSelect1"
                      type="text"
                      value={formNo}
                      onChange={(e) => setFormNo(e.target.value)}
                    />
                    {validateError !== "" && (
                      <small>
                        <div style={{ color: "red" }}>{validateError}</div>
                      </small>
                    )}
                  </Col>
                  <Col xl="4" lg="4" md="4" sm="6">
                    <Label className="form-control-label" for="input-username">
                      Amount
                    </Label>
                    <Input
                      id="exampleFormControlSelect1"
                      type="text"
                      value={"5000"}
                      disabled
                    />
                  </Col>
                  <Col xl="4" lg="4" md="4" sm="6">
                    <Button
                      className="mt-4"
                      color="info"
                      onClick={handleCreateReceipt}
                      disabled={formNo !== "" ? false : true}
                    >
                      Save
                    </Button>
                  </Col>
                </Row>
                <br />
                <Divider />
                <br />
                <TableCashierCounter
                  onChangeNoOfRows={onChangeNoOfRows}
                  BookingReceipts={BookingReceipts}
                  paginatedPosts={paginatedPosts}
                />
                {posts?.length > 0 ? (
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
  isLoading: state.cashierCounter.isLoading,
  isError: state.cashierCounter.isError,
  Error: state.cashierCounter.error,
  Response: state.cashierCounter.Response,
  BookingReceipts: state.cashierCounter?.BookingReceipts,
});

const mapDispatchToProps = (dispatch) => ({
  createBookingReceipt: (body, onSuccess, onFailure) =>
    dispatch(createBookingReceipt(body, onSuccess, onFailure)),
  getBookingReceipt: (body, onSuccess, onFailure) =>
    dispatch(getBookingReceipt(body, onSuccess, onFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CashierCounter);
