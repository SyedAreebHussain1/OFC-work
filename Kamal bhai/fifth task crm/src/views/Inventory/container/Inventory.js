import React from "react";
import Headers from "components/Headers/Header1";
import { Container } from "reactstrap";
import Filteration from "./Filteration";

const Inventory = (props) => {

  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <Filteration
          showProject={props.showProject}
          showPlotSector={props.showPlotSector}
          showPlotNo={props.showPlotNo}
          Project={props.Project}
          Sector={props.Sector}
          PlotNo={props.PlotNo}
          showPlotSize={props.showPlotSize}
          showPlotStatus={props.showPlotStatus}
          showPlotType={props.showPlotType}
          Size={props.Size}
          Status={props.Status}
          Type={props.Type}
        ></Filteration>
      </Container>
    </>
  );
};
export default Inventory;
