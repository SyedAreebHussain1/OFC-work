import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Col, Input, Row, Table, Label, Badge } from "reactstrap";
import TransferRequest from "views/HtmlReciept/TransferRequest/TransferRequest";
import InfoModal from "./InfoModal";

const TableTransferPlotRec = (props) => {
  const {
    paginatedPosts,
    onChangeNoOfRows,
    handleSearch,
    _plotTransReqByIdMiddleware,
  } = props;
  const componentRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [transferPrintData, setTransferPrintData] = useState(null);
  const [Detail, setDetail] = useState({});
  const [searching, setSearching] = useState({
    Transferfrom: "",
    Transferto: "",
  });

  const toggler = (opt) => {
    setIsOpen(!isOpen);
    setDetail(opt);
  };

  const onSuccess = (res) => {
    setTransferPrintData(res);
  };
  const onFailure = () => {};
  const handleGetReq = (id) => {
    _plotTransReqByIdMiddleware(id, onSuccess, onFailure);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Transfer Receipt ${transferPrintData?.users[0]?.saleorder?.SaleOrderNo}`,
    copyStyles: true,
  });
  useEffect(() => {
    if (transferPrintData) {
      handlePrint();
    }
  }, [transferPrintData]);
  return (
    <>
      <TransferRequest
        ref={componentRef}
        transferPrintData={transferPrintData}
      />
      <InfoModal modal={isOpen} toggle={toggler} detail={Detail} />
      <Row className="mt-0">
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <Label className="form-control-label">Rows Per Pages</Label>
          <Input
            autoComplete="off"
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
            CNIC Transfer From
          </Label>
          <Input
            autoComplete="off"
            id="exampleFormControlSelect1"
            type="text"
            onChange={(e) =>
              setSearching({
                ...searching,
                Transferfrom: e.target.value,
              })
            }
            maxLength={13}
            value={searching.Transferfrom}
            onKeyPress={(event) => {
              if (!/[0-9-+]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          ></Input>
        </Col>
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <Label className="form-control-label" for="input-username">
            CNIC Transfer To
          </Label>
          <Input
            id="exampleFormControlSelect1"
            type="text"
            maxLength={13}
            onChange={(e) =>
              setSearching({
                ...searching,
                Transferto: e.target.value,
              })
            }
            value={searching.Transferto}
            onKeyPress={(event) => {
              if (!/[0-9-+]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          ></Input>
        </Col>
        {/* <Col lg="3" md="3" sm="3" xs="3" xl="3">
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
        </Col> */}
        <Col lg="3" md="6" sm="6">
          <Button
            style={{
              backgroundColor: "#2DCE89",
              color: "white",
              marginTop: "30px",
            }}
            onClick={() => handleSearch(searching)}
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
            <th scope="col">Plot No</th>
            <th scope="col">Date</th>
            <th scope="col">Requset Status</th>
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
                  <td>{data?.Transferfrom?.user_name}</td>
                  <td>{data?.Transferto?.user_name}</td>
                  <td>
                    {data?.Transferfee?.toString().replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                  </td>
                  <td>{data?.plotinfo?.Plot_no}</td>
                  <td>{data?.createdAt?.split("T")[0]}</td>
                  <td>
                    <Badge
                      color={
                        data?.Request === "Rejected"
                          ? "danger"
                          : data?.Request === "Approved"
                          ? "success"
                          : "primary"
                      }
                    >
                      {data?.Request}
                    </Badge>
                  </td>
                  <td>
                    <Badge
                      color={
                        data?.Status === "Completed" ? "success" : "primary"
                      }
                    >
                      {data?.Status}
                    </Badge>
                  </td>
                  <td>{data?.Agentid}</td>
                  <td>
                    <Button
                      color="info"
                      size="sm"
                      onClick={() => toggler(data)}
                      id="info"
                    >
                      <span className="btn-inner--icon">
                        <i class="fas fa-info-circle"></i>
                      </span>
                    </Button>
                    <Button
                      color="success"
                      size="sm"
                      disabled={
                        data?.Status === "Completed" &&
                        data?.Request === "Approved"
                          ? false
                          : true
                      }
                      onClick={() => handleGetReq(data.id)}
                      id="info"
                    >
                      <span className="btn-inner--icon">
                        <i class="fas fa-print"></i>
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

export default TableTransferPlotRec;
