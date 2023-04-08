import React from "react";

import { Button, Col, Input, Row, Table, Label } from "reactstrap";

import { useEffect, useState } from "react";

import InfoModal from "./InfoModal";

const TableWallet = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [walletData, setWalletData] = useState("");

  const [data, setData] = useState("");

  const { paginatedPosts, onChangeNoOfRows } = props;

  const onSuccess = () => {};

  const onFailure = () => {};

  const showChange = (data) => {
    setShowModal(!showModal);

    setData(data);

  };

  return (
    <>
      <InfoModal toggle={showChange} modal={showModal} data={data} />

      <Row className="mt-0">
        <Col lg="6" md="6" sm="6" xs="6" xl="4">
          <Label className="form-control-label">Rows Per Pages</Label>

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
      </Row>

      <br />

      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No</th>

            <th scope="col">Transaction ID</th>

            <th scope="col">Transaction No</th>

            <th scope="col">Transaction Type</th>

            <th scope="col">Agent ID</th>

            <th scope="col">Amount</th>

            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>{data?.TransactionId}</td>

                  <td>{data?.TransactionNo}</td>

                  <td>{data?.TransactionType}</td>

                  <td>{data?.AgentId}</td>

                  <td>{data?.Amount}</td>

                  <td>
                    <Button
                      color="success"
                      id="search"
                      size="sm"
                      onClick={() => showChange(data)}
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
            <tr

            //  onClick={() => showChange("data")}
            >
              No Record Found
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableWallet;
