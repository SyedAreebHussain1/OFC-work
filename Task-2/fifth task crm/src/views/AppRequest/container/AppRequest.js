import React from "react";
import Headers from "components/Headers/Header1";
import Personal from "./Personal";
import '../../../assets/css/style.css';
import {Container,Row} from "reactstrap";
let count = 0;
const AppRequest = (props) => {
  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <div>
            </div>
            <Personal />
          </div>
        </Row>
      </Container>
      <Container>
      </Container>
    </>
  );
};
export default AppRequest;