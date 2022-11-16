import React from "react";
import Loader from "react-loader-spinner";
import { Badge, Button, Col, Input, Row, Table, Label } from "reactstrap";

const TableViewSupport = (props) => {
  const {
    paginatedPosts,
    ToggleViewSupportModal,
    isLoading,
    onChangeNoOfRows,
  } = props;
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
            <th scope="col">Support Type</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts !== null && paginatedPosts !== undefined ? (
            paginatedPosts.map((viewSupport, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{viewSupport.support_type_name}</td>
                  <td>{viewSupport.title}</td>
                  <td>{viewSupport.description}</td>
                  <td>
                    <Badge
                      color={
                        viewSupport.supportStatus === "Request Initiate"
                          ? "primary"
                          : viewSupport.supportStatus === "Request Reject"
                          ? "danger"
                          : "success"
                      }
                    >
                      {viewSupport.supportStatus}
                    </Badge>
                  </td>
                  <td>
                    <Button
                      color="success"
                      id="search"
                      size="sm"
                      onClick={() =>
                        ToggleViewSupportModal(
                          viewSupport.support_id,
                          viewSupport.LastSupportStatusCommment
                        )
                      }
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i class="fas fa-eye"></i>
                      </span>
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <Loader
              type="ThreeDots"
              color="#8dbc4c"
              height={80}
              width={80}
              visible={isLoading}
              secondaryColor="#4f9cb9"
            />
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableViewSupport;
