import React from "react";
import Headers from "components/Headers/Header1";
import Filteration from "./Filteration";
import {Container,Card,Row,} from "reactstrap";


const ViewCustomerDetail = (props) => {
 

  return (
    <>
      <Headers />
  
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
            <Filteration Response={props.Response} Client={props.Client} showAgent={props.showAgent} showClientDetail={props.showClientDetail} call={props.Call_Records}
            File={props.File} showInsertNewFileDetail={props.showInsertNewFileDetail}
            showReturnPlot={props.showReturnPlot} PlotReturn={props.PlotReturn}
            InsertReturnPlot={props.InsertReturnPlot} ReturnRequest={props.ReturnRequest}
            showPlotSector={props.showPlotSector} Sector={props.Sector}
            showPlotNo={props.showPlotNo} PlotNo={props.PlotNo}
            ShowPlotInformation={props.ShowPlotInformation} PlotPositionsValues={props.PlotPositionsValues}
            newPlotMiddleware={props.newPlotMiddleware} NewPosition={props.NewPosition}
            ChangePlotMiddleware={props.ChangePlotMiddleware} ChangePlotStatus={props.ChangePlotStatus}
            ></Filteration>
             
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default ViewCustomerDetail;
