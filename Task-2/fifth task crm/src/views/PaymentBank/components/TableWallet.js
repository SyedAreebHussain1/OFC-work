import React from "react";
import Loader from "react-loader-spinner";
import { Badge, Button, Col, Input, Row, Table, Label } from "reactstrap";
import TransferModal from "./TrasnsferModal";
import { useEffect, useState } from "react";
const TableWallet = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState("");
  const { paginatedPosts, _getTransactionHistoryMiddleware, onChangeNoOfRows } =
    props;
  const onSuccess = () => {};
  const onFailure = () => {};
  const handleGetData = (id) => {
    _getTransactionHistoryMiddleware(id, onSuccess, onFailure);
  };
  const showChange = (data) => {
    setShowModal(!showModal);
    setData(data);
  };
  return (
    <>
      {showModal && (
        <TransferModal
          _approveBank_Middleware={props._approveBank_Middleware}
          toggle={showChange}
          modal={showModal}
          data={data}
        />
      )}
      <Row className="mt-5">
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
            <th scope="col">User Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Payment Bank Id</th>
            <th scope="col">Datetime</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts?.length > 0 ? (
            paginatedPosts?.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data?.user_name}</td>
                  <td>{data?.Amount?.toLocaleString("en-US")}</td>
                  <td>{data?.Payment_BankId}</td>
                  <td>{data?.Datetime?.split("T")[0]}</td>
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
