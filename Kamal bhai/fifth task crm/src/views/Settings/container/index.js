import React, { useEffect, useState } from "react";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Col,
  Input,
  Label,
} from "reactstrap";
import { connect } from "react-redux";
import Headers from "components/Headers/Header1";
import PaymentScheduleSettings from "./Payments";
import Projects from "./Projects";
import Sectors from "./Sectors";
import Streets from "./Streets";
import AddRoleSetting from "./addRoleSetting";
const Settings = () => {
  return (
    <div>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h1 className="mb-0">Settings</h1>
              </CardHeader>
              <CardBody style={{ backgroundColor: "white" }}>
                <AddRoleSetting/>
                <PaymentScheduleSettings />
                <Projects />
                <Sectors />
                <Streets />
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
