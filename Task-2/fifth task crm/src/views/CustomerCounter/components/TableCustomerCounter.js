import React from "react";
import Loader from "react-loader-spinner";
import { Badge, Button, Col, Input, Row, Table, Label } from "reactstrap";

const TableCustomerCounter = (props) => {
  const { onChangeNoOfRows, paginatedPosts } = props;

  return (
    <>
      <Row className="mt-5">
        <Col xl="2" lg="4" md="4" sm="6" xs="6">
          <Label className="form-control-label"> Rows Per Pages </Label>
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
            <th scope="col">Name</th>
            <th scope="col">Form No.</th>
            <th scope="col">CNIC</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone No.</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts !== null && paginatedPosts !== undefined ? (
            paginatedPosts.map((customer, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{customer.CustomerName}</td>
                  <td>{customer.FromId}</td>
                  <td>{customer.CustomerCNIC}</td>
                  <td>{customer.CustomerEmail}</td>
                  <td>{customer.CustomerPhone}</td>
                </tr>
              );
            })
          ) : (
            <tr>
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

export default TableCustomerCounter;
