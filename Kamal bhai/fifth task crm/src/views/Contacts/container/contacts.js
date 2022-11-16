import Headers from "../../../components/Headers/Header/container/Header";
import React from "react";
import {Container} from "reactstrap";
import Filteration from "./Filteration";
export const Campaign = (props) => {
  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <Filteration></Filteration>
      </Container>
    </>
  );
};
