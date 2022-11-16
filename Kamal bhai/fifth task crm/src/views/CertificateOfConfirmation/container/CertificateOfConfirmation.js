import React from "react";
import Headers from "components/Headers/Header1";
import CertificateForm from "./CertificateForm";
import { Container, Card, Row } from "reactstrap";
import { useLocation } from "react-router";

const CertificateOfConfirmation = (props) => {
  let location = useLocation();
  return (
    <>
      <Headers />

      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CertificateForm
                state={location.state}
                cocFilePath={location.cocFilePath}
                InsertVerificationFile={props.InsertVerificationFile}
                Verification={props.Verification}
                InsertVerificationDetailMiddleware={
                  props.InsertVerificationDetailMiddleware
                }
                VerificationData={props.VerificationData}
              ></CertificateForm>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default CertificateOfConfirmation;
