import React from "react";
import { Button, Col, Input, Row, Table, Label } from "reactstrap";

const TableWallet = (props) => {
  const { paginatedPosts, setId, onChangeNoOfRows } = props;

  return (
    <>
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
            <th scope="col">CNIC</th>
            <th scope="col">Amount</th>
            <th scope="col">Wallet Id</th>
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
                  <td>{data?.CNIC}</td>
                  <td>{data?.Amount}</td>
                  <td>{data?.CustomerWallet_Id}</td>
                  <td>{data?.Datetime?.split("T")[0]}</td>
                  <td>
                    <Button
                      color="info"
                      id="search"
                      size="sm"
                      onClick={() => setId(data?.CustomerWallet_Id)}
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i class="fas fa-history"></i>
                      </span>
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>No Record Found</tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableWallet;
