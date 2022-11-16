import React from "react";
import Loader from "react-loader-spinner";
import { Badge, Button, Col, Input, Row, Table, Label } from "reactstrap";
import InfoModal from "./StreetInfo";
import { useEffect, useState } from "react";
import EditStreetModal from "./EditStreetModal";
import moment from "moment";
const StreetsTable = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const { paginatedPosts, _getTransactionHistoryMiddleware, onChangeNoOfRows } =
    props;
  // console.log("PAGINATED POSTS AT TABLE", paginatedPosts);
  const SplitDateTime = (date) => {
    var date = date.split("T");
    // return d[0];

    const d = new Date(date[0]);

    return moment(d).format("DD-MM-YYYY");
  };
  const onSuccess = () => {};
  const onFailure = () => {};
  const handleGetData = (id) => {
    _getTransactionHistoryMiddleware(id, onSuccess, onFailure);
  };
  const showChange = (data) => {
    setShowModal(!showModal);
    setData(data);
    // console.log("clicked");
  };
  const showChange1 = (data) => {
    setShowModal1(!showModal1);
    setData1(data);
    // console.log("clicked");
  };
  return (
    <>
      <InfoModal toggle={showChange} modal={showModal} data={data} />
      <EditStreetModal
        _updateStreet_Middleware={props._updateStreet_Middleware}
        toggle={showChange1}
        modal={showModal1}
        data={data1}
        getData={props.getData}
      />
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
            <th scope="col">Street ID</th>
            <th scope="col">Street Name</th>
            <th scope="col">Sector ID</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts?.length > 0 ? (
            paginatedPosts?.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data?.Street_id}</td>
                  <td>{data?.Streename}</td>
                  <td>{data?.Sector_id}</td>

                  <td>{SplitDateTime(data?.Datetime)}</td>
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
                    <Button
                      color="info"
                      id="search"
                      size="sm"
                      onClick={() => showChange1(data)}
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i class="ni ni-settings"></i>
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

export default StreetsTable;
