import React from "react";
import { Divider } from "@material-ui/core";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Row,
  Table,
} from "reactstrap";

const ViewAllSupportModal = (props) => {
  const { toggle, modal, supportImages, comment } = props;

  return (
    <Modal size="md" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h3>Reports</h3>
      </ModalHeader>
      <Divider />
      <ModalBody>
        <Row className="mb-3">
          <Col lg="12" md="12" sm="12">
            <h4 className="d-inline">Comment:&nbsp;&nbsp;</h4>
            <p className="d-inline">{comment ? comment : "No Comment"}</p>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12">
            <Table striped>
              <tbody>
                {supportImages?.length > 0 ? (
                  supportImages.map((filePath, index) => {
                    let split = filePath.docs.split(/[/|\\]/);
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{split[split.length - 1]}</td>
                        <td>
                          <a
                            href={filePath.docs}
                            className="fas fa-cloud-download-alt"
                            target="_blank"
                          ></a>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div>No Files</div>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ViewAllSupportModal;
