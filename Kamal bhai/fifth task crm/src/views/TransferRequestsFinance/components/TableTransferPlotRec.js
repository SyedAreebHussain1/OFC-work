import React, { useState } from "react";
import { Button, Col, Input, Row, Table, Label } from "reactstrap";
import InfoModal from "./InfoModal";
import PlotInfo from "./PlotInfo";

const TableTransferPlotRec = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPlot, setIsOpenPlot] = useState(true);
  const [Detail, setDetail] = useState({});
  const [DetailPlot, setPlotDetail] = useState({});
  const [searching, setSearching] = useState("");
  const toggler = (opt) => {
    setIsOpen(!isOpen);
    setDetail(opt);
  };
  const togglerPlot = (opt) => {
    setIsOpenPlot(!isOpenPlot);
    setPlotDetail(opt);
  };
  const { paginatedPosts, onChangeNoOfRows } = props;
  const handleSearch = () => {
    console.log("SEARCH");
  };
  return (
    <>
      <InfoModal modal={isOpen} toggle={toggler} detail={Detail} />
      <PlotInfo modal={isOpenPlot} toggle={togglerPlot} detail={DetailPlot} />
      <Row className="mt-0">
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
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
      <h4 className="mt-3">Search transfer records:</h4>
      <Row>
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <Label className="form-control-label" for="input-username">
            Transfer from
          </Label>
          <Input
            id="exampleFormControlSelect1"
            type="text"
            name="cnic"
            onChange={(e) =>
              setSearching({
                transfer_from: e.target.value,
              })
            }
            value={searching?.transfer_from ? searching?.transfer_from : ""}
          ></Input>
        </Col>
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <Label className="form-control-label" for="input-username">
            Transfer to
          </Label>
          <Input
            id="exampleFormControlSelect1"
            type="text"
            name="cnic"
            onChange={(e) =>
              setSearching({
                transfer_to: e.target.value,
              })
            }
            value={searching?.transfer_to ? searching?.transfer_to : ""}
          ></Input>
        </Col>
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <Label className="form-control-label" for="input-username">
            Status
          </Label>
          <Input
            id="exampleFormControlSelect1"
            type="text"
            name="cnic"
            onChange={(e) =>
              setSearching({
                status: e.target.value,
              })
            }
            value={searching?.status ? searching?.status : ""}
          ></Input>
        </Col>
        <Col lg="3" md="6" sm="6">
          <Button
            style={{
              backgroundColor: "#2DCE89",
              color: "white",
              marginTop: "30px",
            }}
            onClick={handleSearch}
          >
            <i color="white" class="fas fa-search"></i>
          </Button>
        </Col>
      </Row>
      <br />
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Transfer From</th>
            <th scope="col">Transfer To</th>
            <th scope="col">Transfer Fee</th>
            <th scope="col">Task Id</th>
            <th scope="col">Status</th>
            <th scope="col">Agent Id</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts?.length > 0 ? (
            paginatedPosts.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data?.transferFrom}</td>
                  <td>{data?.transferTo}</td>
                  <td>{data?.transferFee}</td>
                  <td>{data?.taskId}</td>
                  <td>{data?.status}</td>
                  <td>{data?.agentId}</td>
                  <td>
                    <Button
                      color="success"
                      size="sm"
                      onClick={(e) => togglerPlot(data)}
                      id="info"
                    >
                      <span className="btn-inner--icon">
                        <i class="fas fa-info-circle"></i>
                      </span>
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="success"
                      size="sm"
                      onClick={(e) => toggler(data)}
                      id="info"
                    >
                      <span className="btn-inner--icon">
                        <i class="fas fa-info-circle"></i>
                      </span>
                    </Button>
                  </td>
                  {/* <td>{data?.Datetime?.split("T")[0]}</td> */}
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

export default TableTransferPlotRec;
