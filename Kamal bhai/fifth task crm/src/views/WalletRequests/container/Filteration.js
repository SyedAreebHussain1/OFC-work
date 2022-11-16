import React from "react";
import { useState, useEffect } from "react";
import { CardBody, Button, CardHeader, Row, Col, Input } from "reactstrap";
import Select from "react-select";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import { Tooltip } from "reactstrap";
//import TableOfPayments from './TableOfPayments';
import TableOfApprovalReceipt from "./TableOfApprovalReceipt";
const Filteration = (props) => {
  return (
    <TableOfApprovalReceipt
      ShowApprovalReceipt={props.ShowApprovalReceipt}
      Update={props.Update}
      ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus}
    ></TableOfApprovalReceipt>
  );
};

export default Filteration;
