/* eslint-disable no-unused-vars */
import Headers from "components/Headers/Header1";
import React, { useState, useEffect } from "react";
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  CardBody,
  Row,
} from "reactstrap";
import TableData from "./TableData";
export const AllSaleOrder = (props) => {
  // const [body, setbody] = useState({
  //   SaleOrderNo: null,
  // });

  // const [saleOrder, setSaleOrder] = useState(null);
  // useEffect(() => {
  //   if (props.GetSale !== null && props.GetSale !== undefined) {
  //     let reverseArray = props.GetSale?.reverse();
     
  //     setSaleOrder(reverseArray);
  //   }
  // }, [props.GetSale]);
  // useEffect(() => {
  //   props.GetAllSaleOrder(body, OnSuccess, OnFailure);
  // }, [true]);

  // const OnSuccess = () => {};
  // const OnFailure = () => {};
  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">All Sale Order</h3>
              </CardHeader>
              <CardBody>
                <TableData GetAllSaleOrder={props.GetAllSaleOrder} GetSale={props.GetSale}/>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
