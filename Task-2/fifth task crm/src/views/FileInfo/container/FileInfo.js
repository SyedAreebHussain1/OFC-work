import React from 'react'
import Headers from "components/Headers/Header1";

import FormOfFileInfo from "./FormOfFileInfo";

import {Container,Card,Row,} from "reactstrap";

const FileInfo = (props) => {
    return (
        <>
          <Headers />
      
          <Container className="mt--7" fluid>
            <Row>
              <div className="col">
                <Card className="shadow">
                <FormOfFileInfo Response={props.Response}  showAgent={props.showAgent} Detail={props.Detail} showDetailsOfClient={props.showDetailsOfClient}
                // showClientDetail={props.showClientDetail} call={props.Call_Records}
                ></FormOfFileInfo>
                 
                </Card>
              </div>
            </Row>
          </Container>
        </>
      );
    };

export default FileInfo
