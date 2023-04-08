import React, { useState, useEffect } from "react";
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
  Badge,
  Tooltip,
} from "reactstrap";

const Testinglead = (props) => {
  const [body, setbody] = useState({
    agentid: null,
    sourceid: null,
    Datetime: null,
    orderstatus: 8,
  });

  useEffect(() => {
    props.leadMiddleware(body, OnSuccess, OnFailure);
  }, [true]);

  const OnSuccess = () => {};
  const OnFailure = () => {};

  return (
    <CardBody>
      <Row>
        <Col lg="4" md="4" sm="6" xs="12">
          <Input type="text" placeholder="name"></Input>
        </Col>

        <Col lg="4" md="4" sm="6" xs="12">
          <Input type="text" placeholder="father name "></Input>
        </Col>
        <br />
      </Row>

      <CardBody>
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th> <th scope="col">Source Name</th>
              <th scope="col">Agent Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.LeadkaData !== null && props.LeadkaData !== undefined
              ? props.LeadkaData.map((opt, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{opt.user_name}</td>
                      <td>{opt.user_email}</td>
                      <td>{opt.user_phone}</td>
                      <td>
                        <Badge color="info" pill>
                          {opt.sourcename}
                        </Badge>
                      </td>
                      <td>
                        <Badge color="danger" pill>
                          {opt.Agent}
                        </Badge>
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </Table>
      </CardBody>
    </CardBody>
  );
};

export default Testinglead;
