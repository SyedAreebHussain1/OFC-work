import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Col, Input, Row, Table, Label, Badge } from "reactstrap";
import TransferRequest from "views/HtmlReciept/TransferRequest/TransferRequest";
import InfoModal from "./InfoModal";
import RefundModal from "./refundModal";

const TableRefund = (props) => {
  const {
    paginatedPostsRefund,
    onChangeNoOfRowsRefund,
    handleSearchRefund,
    _updateRefundMiddleware,
    updateRefund,
  } = props;
  const componentRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [plotCancelPrintData, setplotCancelPrintData] = useState(null);
  const [Detail, setDetail] = useState({});
  const [Detail1, setDetail1] = useState({});
  const [searching, setSearching] = useState({
    user_name: "",
    CNIC: "",
    SaleOrderNo: "",
  });

  const toggler = (opt) => {
    setIsOpen(!isOpen);
    setDetail(opt);
  };
  const toggler1 = (opt) => {
    setIsOpen1(!isOpen1);
    setDetail1(opt);
  };
  return (
    <>
      <InfoModal modal={isOpen} toggle={toggler} detail={Detail} />
      {/* {Detail1 && (
        <RefundModal
          modal={isOpen1}
          toggle={toggler1}
          detail={Detail1}
          _updateRefundMiddleware={_updateRefundMiddleware}
          updateRefund={updateRefund}
        />
      )} */}
      <RefundModal
        modal={isOpen1}
        toggle={toggler1}
        detail={Detail1}
        _updateRefundMiddleware={_updateRefundMiddleware}
        updateRefund={updateRefund}
      />

      <Row className="mt-0">
        <Col lg="3" md="3" sm="3" xs="3" xl="3">
          <Label className="form-control-label">Rows Per Pages</Label>
          <Input
            autoComplete="off"
            id="exampleFormControlSelect1"
            type="select"
            onChange={(e) => onChangeNoOfRowsRefund(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Input>
        </Col>
      </Row>
      {/* <h4 className="mt-3">Search cancel records:</h4>
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
     
        <Col lg="3" md="6" sm="3">
          <Button
            style={{
              backgroundColor: "#2DCE89",
              color: "white",
              marginTop: "30px",
            }}
            onClick={() => handleSearchRefund(searching)}
          >
            <i color="white" class="fas fa-search"></i>
          </Button>
        </Col>
      </Row>
     */}
      <br />
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Refund ID</th>
            <th scope="col">Refund Amount</th>
            <th scope="col">Refund No</th>

            <th scope="col">Payment through</th>

            <th scope="col">Status</th>
            <th scope="col">Pay Date</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPostsRefund?.length > 0 ? (
            paginatedPostsRefund.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data?.returnReqId}</td>
                  <td>{data?.amount}</td>
                  <td>{data?.refundNo}</td>
                  <td>{data?.through}</td>
                  <td>
                    <Badge
                      color={
                        data?.refStatus === "Rejected"
                          ? "danger"
                          : data?.refStatus === "Paid"
                          ? "success"
                          : "primary"
                      }
                    >
                      {data?.refStatus}
                    </Badge>
                  </td>
                  <td>{data?.date}</td>

                  <td>
                    {/* <Button
                      color="info"
                      size="sm"
                      onClick={() => toggler(data)}
                      id="info"
                    >
                      <span className="btn-inner--icon">
                        <i class="fas fa-info-circle"></i>
                      </span>
                    </Button> */}
                    <Button
                      color="success"
                      size="sm"
                      onClick={() => toggler1(data)}
                      id="info"
                      disabled={data?.refStatus === "Paid"}
                    >
                      <span className="btn-inner--icon">
                        <i class="fas fa-arrow-right"></i>
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

export default TableRefund;
