import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Col, Input, Row, Table, Label, Badge } from "reactstrap";
import TransferRequest from "views/HtmlReciept/TransferRequest/TransferRequest";
import InfoModal from "./InfoModal";

const TableCancelPlotRec = (props) => {
  const {
    paginatedPosts,
    onChangeNoOfRows,
    handleSearch,
    _plotCancelReqByIdMiddleware,
    getRefundStage,
  } = props;
  const componentRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [plotCancelPrintData, setplotCancelPrintData] = useState(null);
  const [Detail, setDetail] = useState({});
  const [searching, setSearching] = useState({
    user_name: "",
    CNIC: "",
    SaleOrderNo: "",
  });

  const toggler = (opt) => {
    setIsOpen(!isOpen);
    setDetail(opt);
  };

  const onSuccess = (res) => {
    setplotCancelPrintData(res);
  };
  const onFailure = () => {};
  const handleGetReq = (id) => {
    _plotCancelReqByIdMiddleware(id, onSuccess, onFailure);
  };

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: `Transfer Receipt ${plotCancelPrintData?.users[0]?.saleorder?.SaleOrderNo}`,
  //   copyStyles: true,
  // });
  // useEffect(() => {
  //   if (plotCancelPrintData) {
  //     handlePrint();
  //   }
  // }, [plotCancelPrintData]);
  return (
    <>
      {/* <TransferRequest
        ref={componentRef}
        PlotCancelPrintData={plotCancelPrintData}
      /> */}
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
      <h4 className="mt-3">Search cancel records:</h4>
      <Row>
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <Label className="form-control-label" for="input-username">
            CNIC
          </Label>
          <Input
            autoComplete="off"
            id="exampleFormControlSelect1"
            type="text"
            onChange={(e) =>
              setSearching({
                ...searching,
                CNIC: e.target.value,
              })
            }
            maxLength={13}
            value={searching.CNIC}
            onKeyPress={(event) => {
              if (!/[0-9-+]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          ></Input>
        </Col>
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <Label className="form-control-label" for="input-username">
            User name
          </Label>
          <Input
            id="exampleFormControlSelect1"
            type="text"
            maxLength={13}
            onChange={(e) =>
              setSearching({
                ...searching,
                user_name: e.target.value,
              })
            }
            value={searching.user_name}
            // onKeyPress={(event) => {
            //   if (!/[0-9-+]/.test(event.key)) {
            //     event.preventDefault();
            //   }
            // }}
          ></Input>
        </Col>
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <Label className="form-control-label" for="input-username">
            Sale Order
          </Label>
          <Input
            id="exampleFormControlSelect1"
            type="text"
            maxLength={13}
            onChange={(e) =>
              setSearching({
                ...searching,
                SaleOrderNo: e.target.value,
              })
            }
            value={searching.SaleOrderNo}
            // onKeyPress={(event) => {
            //   if (!/[0-9-+]/.test(event.key)) {
            //     event.preventDefault();
            //   }
            // }}
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
        <Col lg="3" md="6" sm="3">
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
            <th scope="col">Sale Order ID</th>
            <th scope="col">Sale Order Amount</th>
            <th scope="col">Refund Amount</th>
            <th scope="col">Initiated Date</th>

            <th scope="col">Request Status</th>
            <th scope="col">Status</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts?.length > 0 ? (
            paginatedPosts.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data?.SaleOrderId}</td>
                  <td>{data?.NetAmountOnSaleOrder}</td>
                  <td>{data?.amountToRefund}</td>
                  <td>{data?.createdAt?.split("T")[0]}</td>

                  <td>
                    <Badge
                      color={
                        data?.requestStatus === "Rejected"
                          ? "danger"
                          : data?.requestStatus === "Approved"
                          ? "success"
                          : "primary"
                      }
                    >
                      {data?.requestStatus}
                    </Badge>
                  </td>
                  <td>
                    <Badge
                      color={
                        data?.requestStage === "Completed"
                          ? "success"
                          : "primary"
                      }
                    >
                      {data?.requestStage}
                    </Badge>
                  </td>

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
                      color="info"
                      id="search"
                      size="sm"
                      onClick={() => getRefundStage(data?.id)}
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i class="fas fa-history"></i>
                      </span>
                    </Button>
                    {/* <Button
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
                    </Button> */}
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

export default TableCancelPlotRec;
