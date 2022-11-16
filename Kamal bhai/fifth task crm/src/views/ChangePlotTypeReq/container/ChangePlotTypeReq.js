import React from "react";
import Headers from "components/Headers/Header1";
import Filteration from "./Filteration";
import {Container,Card,Row,} from "reactstrap";

const ChangePlotTypeReq = (props) => {
    return (
        <>
        <Headers />
    
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
              <Filteration ShowAllPlotReturn={props.ShowAllPlotReturn} PlotReturn={props.PlotReturn}
               ShowPlotInfo={props.ShowPlotInfo} PlotInfo={props.PlotInfo}
               UpdatePlotReturnStatus={props.UpdatePlotReturnStatus} UpdateStatus={props.UpdateStatus}
              ></Filteration>
               
              </Card>
            </div>
          </Row>
        </Container>
      </>
    )
}

export default ChangePlotTypeReq

