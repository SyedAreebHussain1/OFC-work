import React from "react";
import Headers from "components/Headers/Header1";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import readXlsxFile from "read-excel-file";
import Main from "./Main";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Table,
  Col,
  Input,
} from "reactstrap";
import { Tooltip } from "reactstrap";
import Filteration from "./Filteration";

import Select from "react-select";
import { post } from "jquery";

const Invent = (props) => {
  const input = document.getElementById("fileinput");

  return (
    <>
      <Headers />

      <Main />
    </>
  );
};
export default Invent;
