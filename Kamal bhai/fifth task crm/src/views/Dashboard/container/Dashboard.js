import Header from "components/Headers/Header1";
import React, { useEffect, useState } from "react";
import AllGraph from "./AllGraph";
import { Container } from "reactstrap";

export const Dashboard = (props) => {
  useEffect(() => {
    props.showAgent(OnSuccessAgent, OnFailureAgent);
  }, [true]);
  const OnSuccessAgent = () => {};
  const OnFailureAgent = () => {};

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <AllGraph Response={props.Response} />
      </Container>
    </>
  );
};
export default Dashboard;
