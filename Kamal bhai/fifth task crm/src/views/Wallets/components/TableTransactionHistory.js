import React from "react";
import { Col, Input, Row, Table, Label } from "reactstrap";

const TableTransactionHistory = (props) => {
  const { paginatedPosts, onChangeNoOfRows, noOfRows1 } = props;
  return (
    <>
      <Row className="mt-5">
        <Col lg="6" md="6" sm="6" xs="6" xl="4">
          <Label className="form-control-label">Rows Per Pages</Label>
          <Input
            id="exampleFormControlSelect1"
            type="select"
            onChange={(e) => onChangeNoOfRows(e.target.value)}
            value={noOfRows1}
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
            <th scope="col">Transaction Type</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">ChequeNo</th>
            <th scope="col">Cheque Date</th>
            <th scope="col">Expiry Date</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts !== null && paginatedPosts !== undefined ? (
            paginatedPosts.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data?.TransactionType}</td>
                  <td>{data?.TransactionId}</td>
                  <td>{data?.ChequeNo}</td>
                  <td>{data?.ChequeDate}</td>
                  <td>{data?.ExpiryDate}</td>
                  <td>{data?.Amount}</td>
                </tr>
              );
            })
          ) : (
            <tr>No Reacord Found</tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableTransactionHistory;
