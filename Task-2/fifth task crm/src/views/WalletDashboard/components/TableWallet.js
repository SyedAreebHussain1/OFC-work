import React from "react";

import { Button, Col, Input, Row, Table, Label, Badge } from "reactstrap";

import { useEffect, useState } from "react";

import InfoModal from "./InfoModal";
import ActionModal from "./ActionModal";
import moment from "moment";
const TableWallet = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [walletData, setWalletData] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [data, setData] = useState("");
  const [isOpenAction, setIsOpenAction] = useState(false);
  const [stateData, SetStateData] = useState({});
  const {
    paginatedPosts,
    onChangeNoOfRows,
    _UpdateRequest_Middleware,
    getData,
    handleSearch,
    getAvailableCounts,
  } = props;
  const ToggleActionModal = (info) => {
    setIsOpenAction(!isOpenAction);
    SetStateData(info);
  };
  const onSuccess = () => {};

  const onFailure = () => {};

  const showChange = (data) => {
    setShowModal(!showModal);

    setData(data);

  };
  const performSearching = () => {
    handleSearch(startDate, endDate);
  };
  return (
    <>
      <InfoModal toggle={showChange} modal={showModal} data={data} />
      <ActionModal
        modal={isOpenAction}
        toggle={ToggleActionModal}
        stateData={stateData}
        Update={_UpdateRequest_Middleware}
        getData={getData}
        getAvailableCounts={getAvailableCounts}
      />
      <Row className="mt-0">
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <Label className="form-control-label">Rows Per Pages</Label>

          <Input
            id="exampleFormControlSelect1"
            type="select"
            onChange={(e) => onChangeNoOfRows(e.target.value)}
          >
            <option value="6">6</option>

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
            value={startDate}
            // max={dateState.CurrentDate}
            onChange={(e) => setStartDate(e.target.value)}
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
            value={endDate}
            // max={dateState.CurrentDate}
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
        </Col>
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          {/* <Button
            color="success"
            size="sm"
            style={{ marginTop: "35px" }}
            onClick={() => {
            }}
          >
            Generate Report &nbsp;
            <i class="fas fa-print"></i>
          </Button> */}
          <Button
            style={{
              backgroundColor: "#2DCE89",
              color: "white",
              marginTop: "30px",
            }}
            onClick={() => {
              performSearching();
            }}
          >
            <i color="white" class="fas fa-search"></i>
          </Button>
        </Col>
      </Row>

      <br />

      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Agent ID</th>
            <th scope="col">Wallet ID</th>
            <th scope="col">Amount</th>
            {/* <th scope="col">Hand in cash</th> */}
            <th scope="col">Request Date</th>
            <th scope="col">InstallmentNo</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {paginatedPosts?.length > 0 ? (
            paginatedPosts?.map((posts, index) => {
              return (
                <tr key={index}>
                  <td>{posts.AgentId}</td>
                  <td>{posts.CustomerWallet_Id}</td>
                  <td>{posts.Amount?.toLocaleString("en-US")}</td>
                  {/* <td>{posts.cash}</td> */}
                  <td>{moment(posts.Datetime).format("MMMM Do YYYY")}</td>
                  <td>{posts.InstallmentNo}</td>

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
                        <i class="fa fa-arrow-right"></i>
                      </span>
                    </Button>
                    <Button
                      color="info"
                      id="search"
                      size="sm"
                      onClick={() => showChange(posts)}
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
    </>
  );
};

export default TableWallet;
