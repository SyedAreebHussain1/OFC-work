import React from "react";

import { Button, Col, Input, Row, Table, Label } from "reactstrap";

import { useEffect, useState } from "react";

// import InfoModal from "./InfoModal";
import InfoHistoryModal from "./InfoHistoryaModal";
import moment from "moment";
const HistoryTable = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [walletData, setWalletData] = useState("");

  const [data, setData] = useState("");

  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  const {
    paginatedPosts,
    onChangeNoOfRows,
    noOfRows1,
    getReportDatewise,
    setToDate,
    setFromDate,
    cninc,
    ture,
    PrintPdf,
  } = props;

  const onSuccess = () => {};

  const onFailure = () => {};

  const showChange = (data) => {
    setShowModal(!showModal);

    setData(data);

  };
  return (
    <>
      <InfoHistoryModal toggle={showChange} modal={showModal} data={data} />

      <Row className="mt-0">
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <Label className="form-control-label">Rows Per Pages</Label>

          <Input
            id="exampleFormControlSelect1"
            type="select"
            value={noOfRows1}
            onChange={(e) => onChangeNoOfRows(e.target.value)}
          >
            <option value="10">10</option>

            <option value="25">25</option>

            <option value="50">50</option>

            <option value="100">100</option>
          </Input>
        </Col>
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <label className="form-control-label" for="input-username">
            Start Date
          </label>
          <input
            type="date"
            id="input-username"
            className="form-control"
            placeholder="DD-MM-YYYY"
            // value={startDate}
            // max={dateState.CurrentDate}
            onChange={(e) => setToDate(e.target.value)}
          ></input>
        </Col>
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <label className="form-control-label" for="input-username">
            End Date
          </label>
          <input
            type="date"
            id="input-username"
            className="form-control"
            placeholder="DD-MM-YYYY"
            // value={endDate}
            // max={dateState.CurrentDate}
            onChange={(e) => setFromDate(e.target.value)}
          ></input>
        </Col>
        <Col style={{ marginTop: "-0px" }} lg="3" md="3" sm="3" xs="3" xl="3">
          <Button
            style={{
              backgroundColor: "#2DCE89",
              color: "white",
              marginTop: "30px",
            }}
            onClick={() => {
              getReportDatewise();
            }}
          >
            <i color="white" class="fas fa-search"></i>
          </Button>
          <Button
            style={{
              backgroundColor: "#054D87",
              color: "white",
              marginTop: "30px",
            }}
            onClick={() => {
              PrintPdf();
            }}
          >
            <i color="white" class="fas fa-print"></i>
          </Button>
        </Col>
      </Row>

      <br />
      {cninc?.trim().length === 13 &&
        ture === true &&
        paginatedPosts?.length > 0 && (
          <>
            <Row className="mt-0">
              <Col lg="12" md="12" sm="12" xs="12" xl="12">
                <label className="form-control-label" for="input-username">
                  Balance Information.
                </label>
                <Table
                  style={{
                    border: "1px solid lightgrey",
                    // marginLeft: "7%",
                    // marginRight: "7%",
                    width: "100%",
                    textAlign: "center",

                    // marginTop: "-5px",
                  }}
                  // className="align-items-center"
                  responsive
                  // striped
                  bordered
                  // size="sm"
                >
                  <thead
                    style={{
                      backgroundColor: "#054D87",

                      color: "white",

                      fontSize: "12px",
                    }}
                  >
                    <tr>
                      <th scope="col">User Name</th>

                      <th scope="col">User CNIC</th>

                      <th scope="col">Total Wallet balance</th>
                    </tr>
                  </thead>

                  <tbody style={{ fontSize: "12px" }}>
                    <tr>
                      <td>
                        {paginatedPosts[0]?.CustomerWallet?.tbl_user?.user_name}
                      </td>

                      <td>
                        {paginatedPosts[0]?.CustomerWallet?.tbl_user?.CNIC}
                      </td>

                      <td>{paginatedPosts[0]?.CustomerWallet?.Amount}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <br />
          </>
        )}
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Transaction Type</th>
            {/* <th scope="col">Transaction Id</th> */}
            {/* <th scope="col">ChequeNo</th> */}
            {/* <th scope="col">Cheque Date</th> */}
            <th scope="col">Expiry Date</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts !== null &&
          paginatedPosts !== undefined &&
          paginatedPosts?.length > 0 ? (
            paginatedPosts.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data?.TransactionType}</td>
                  {/* <td>{data?.TransactionId}</td> */}
                  {/* <td>{data?.ChequeNo}</td> */}
                  {/* <td>{data?.ChequeDate}</td> */}
                  <td>{data?.ExpiryDate}</td>
                  <td>{moment(data.Datetime).format("MMMM Do YYYY")}</td>
                  <td>{data?.Amount?.toLocaleString("en-US")}</td>
                  <td>
                    <Button
                      color="danger"
                      id="search"
                      size="sm"
                      onClick={(e) => showChange(data)}
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i class="fa fa-arrow-right"></i>
                      </span>
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>History not available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default HistoryTable;
