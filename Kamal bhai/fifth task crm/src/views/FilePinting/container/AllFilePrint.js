/* eslint-disable no-unused-vars */
import Headers from "components/Headers/Header1";
import React from "react";
import { Card, CardHeader, Container, CardBody, Row } from "reactstrap";
import TableFilePrint from "./TableFilePrint";
export const AllFilePrint = ({
  GetFileDownloadCustomers,
  fileCustomer,
  FileDocuments,
  fileDocuments,
}) => {
  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">File Printing</h3>
              </CardHeader>
              <CardBody>
                <TableFilePrint
                  fileCustomer={fileCustomer}
                  GetFileDownloadCustomers={GetFileDownloadCustomers}
                  FileDocuments={FileDocuments}
                  printUrl={fileDocuments}
                />
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
