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
import swal from "sweetalert";

const ApproveFormModal = (props) => {
  const { toggle, modal, post, upgradeFormStatus } = props;
  let date = post.Datetime?.split("T")[0];
  const upgradeStatus = (barcodeArray) => {
    let body = {
      FormStatus: 71,
      remarks: "ok",
      Statusarr: barcodeArray,
    };
    upgradeFormStatus(body, onSuccess, onFailure);
  };
  const reject = (barcodeArray) => {
    let body = {
      FormStatus: 75,
      remarks: "ok",
      Statusarr: barcodeArray,
    };
    upgradeFormStatus(body, onRejectSuccess, onRejectFailure);
  };
  const onSuccess = () => {
    // setBarcode("xxxxxxxx");
    swal("Congratulations!", "Approved successfully", "success");
  };
  const onFailure = () => {};
  const onRejectSuccess = () => {
    // setBarcode("xxxxxxxx");
    swal("Congratulations!", "Rejected successfully", "success");
  };
  const onRejectFailure = () => {};
  return (
    <Modal
      size="lg"
      style={{ maxWidth: "1250px", width: "100%" }}
      isOpen={modal}
      toggle={toggle}
    >
      <ModalHeader toggle={toggle}>
        <h3>Details</h3>
      </ModalHeader>
      <Divider />
      <ModalBody>
        {/* <Row className="mb-3">
          <Col lg="12" md="12" sm="12">
            <h4 className="d-inline">Comment:&nbsp;&nbsp;</h4>
            <p className="d-inline">{comment ? comment : "No Comment"}</p>
          </Col>
        </Row> */}
        <Row>
          <Col lg="12" md="12" sm="12">
            <Table striped>
              <thead className="thead-light">
                <tr>
                  <th scope="col">From Id</th>
                  <th scope="col">CNIC</th>
                  <th scope="col">Receiving No.</th>
                  <th scope="col">Date</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Email</th>
                  <th scope="col">10Rs</th>
                  <th scope="col">50Rs</th>
                  <th scope="col">100Rs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{post.FromId}</td>
                  <td>{post.CNIC}</td>
                  <td>{post.receipt_no}</td>
                  <td>{date}</td>
                  <td>{post.phoneNo}</td>
                  <td>{post.email}</td>
                  <td>{post["10Rs"]}</td>
                  <td>{post["50Rs"]}</td>
                  <td>{post["100Rs"]}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color="info"
          onClick={() => upgradeStatus([post.FromId])}
          disabled={post.FormStatus !== 70}
        >
          Approve
        </Button>
        <Button
          color="danger"
          onClick={() => reject([post.FromId])}
          disabled={post.FormStatus !== 70}
        >
          Reject
        </Button>
        {/* <Button color="danger" onClick={toggle}>
          Close
        </Button> */}
      </ModalFooter>
    </Modal>
  );
};

export default ApproveFormModal;
