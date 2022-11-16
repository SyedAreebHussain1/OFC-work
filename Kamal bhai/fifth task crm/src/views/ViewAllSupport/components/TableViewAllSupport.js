import React from "react";
import Loader from "react-loader-spinner";
import { Badge, Button, Col, Input, Row, Table, Label } from "reactstrap";
import moment from "moment";
const TableViewAllSupport = (props) => {
  const SplitDateTime = (date) => {
    var date = date.split("T");
    // return d[0];

    const d = new Date(date[0]);

    return moment(d).format("DD-MM-YYYY");
  };
  const {
    onChangeNoOfRows,
    paginatedPosts,
    ToggleViewAllSupportModal,
    ToggleUpdateStatusModal,
    isLoading,
  } = props;
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
            <th scope="col">Support Type</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">View</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts !== null && paginatedPosts !== undefined ? (
            paginatedPosts.map((viewSupport, index) => {
              {
                /* let date = viewSupport.created_date?.split("T")[0]; */
              }
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{viewSupport.support_type_name}</td>
                  <td>{viewSupport.title}</td>
                  <td>{viewSupport.description}</td>
                  <td> {SplitDateTime(viewSupport.created_date)} </td>
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
                        ToggleViewAllSupportModal(
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
                  <td>
                    <Button
                      color="info"
                      size="sm"
                      onClick={() => ToggleUpdateStatusModal(viewSupport)}
                      disabled={
                        viewSupport.supportStatus === "Request Reject" ||
                        viewSupport.supportStatus === "Request Done"
                          ? true
                          : false
                      }
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i className="fas fa-sync-alt ml-1 mb-1"></i>
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

export default TableViewAllSupport;
