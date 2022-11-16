import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Row,
} from "reactstrap";

const InfoModal = (props) => {
  return (
    <Modal size="lg" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Plot cancel details</h3>
      </ModalHeader>
      <ModalBody>
        <Row style={{ marginTop: "-15px" }}>
          <Col lg="6" md="6" sm="6">
            <h2>User details</h2>
            <Row>
              <Col lg="4" md="4" sm="6">
                <label style={{ fontSize: "12px", color: "red" }}>Name:</label>
              </Col>
              <Col lg="6" md="6" sm="6">
                {" "}
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.saleorder?.tbl_lead?.tbl_user?.user_name}
                </label>{" "}
              </Col>
            </Row>
            <Row>
              <Col lg="4" md="4" sm="6">
                <label style={{ fontSize: "12px", color: "red" }}>Email:</label>
              </Col>
              <Col lg="6" md="6" sm="6">
                {" "}
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.saleorder?.tbl_lead?.tbl_user?.user_email}
                </label>{" "}
              </Col>
            </Row>
            <Row>
              <Col lg="4" md="4" sm="6">
                <label style={{ fontSize: "12px", color: "red" }}>Phone:</label>
              </Col>
              <Col lg="6" md="6" sm="6">
                {" "}
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.saleorder?.tbl_lead?.tbl_user?.user_phone}
                </label>{" "}
              </Col>
            </Row>
            <Row>
              <Col lg="4" md="4" sm="6">
                <label style={{ fontSize: "12px", color: "red" }}>CNIC:</label>
              </Col>
              <Col lg="6" md="6" sm="6">
                {" "}
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.saleorder?.tbl_lead?.tbl_user?.CNIC}
                </label>{" "}
              </Col>
            </Row>
          </Col>
          <Col lg="6" md="6" sm="6">
            <h2
              style={
                {
                  // alignSelf: "center",
                  // textAlign: "center",
                  // marginTop: "-10%",
                }
              }
            >
              Plot details
            </h2>
            <Row>
              <Col lg="4" md="4" sm="6">
                <label style={{ fontSize: "12px", color: "red" }}>
                  Plot No:
                </label>
              </Col>
              <Col lg="6" md="6" sm="6">
                {" "}
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.saleorder?.tbl_lead?.plotinfo?.Plot_no}
                </label>{" "}
              </Col>
            </Row>
            <Row>
              <Col lg="4" md="4" sm="6">
                {" "}
                <label style={{ fontSize: "12px", color: "red" }}>
                  Description:
                </label>
              </Col>
              <Col lg="6" md="6" sm="6">
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.saleorder?.tbl_lead?.plotinfo?.Description}
                </label>{" "}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col lg="6" md="6" sm="6">
            <h2
              style={{
                // alignSelf: "center", textAlign: "center",
                marginTop: "2%",
              }}
            >
              Updated from
            </h2>
            <Row>
              <Col lg="4" md="4" sm="6">
                <label style={{ fontSize: "12px", color: "red" }}>Name:</label>
              </Col>
              <Col lg="6" md="6" sm="6">
                {" "}
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.updatedByUser?.name}
                </label>{" "}
              </Col>
            </Row>
            <Row>
              <Col lg="4" md="4" sm="6">
                {" "}
                <label style={{ fontSize: "12px", color: "red" }}>Date:</label>
              </Col>
              <Col lg="6" md="6" sm="6">
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.updatedByUser?.Datetime.split("T")[0]}
                </label>{" "}
              </Col>
            </Row>
          </Col>
          <Col lg="6" md="6" sm="6">
            <h2
              style={
                {
                  // alignSelf: "center",
                  // textAlign: "center",
                  // marginTop: "-10%",
                }
              }
            >
              Initiated from
            </h2>
            <Row>
              <Col lg="4" md="4" sm="6">
                <label style={{ fontSize: "12px", color: "red" }}>Name:</label>
              </Col>
              <Col lg="6" md="6" sm="6">
                {" "}
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.createdByUser?.name}
                </label>{" "}
              </Col>
            </Row>
            <Row>
              <Col lg="4" md="4" sm="6">
                {" "}
                <label style={{ fontSize: "12px", color: "red" }}>Email:</label>
              </Col>
              <Col lg="6" md="6" sm="6">
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.createdByUser?.email}
                </label>{" "}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "3%" }}>
          <Col lg="6" md="6" sm="6">
            <h2
              style={
                {
                  // alignSelf: "center",
                  // textAlign: "center",
                  // marginTop: "-10%",
                }
              }
            >
              Initiated Remarks
            </h2>
            <Row>
              <Col lg="12" md="12" sm="12">
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.remarksByRequestInitiator}
                </label>{" "}
              </Col>
            </Row>
          </Col>
          <Col lg="6" md="6" sm="6">
            <h2
              style={
                {
                  // alignSelf: "center",
                  // textAlign: "center",
                  // marginTop: "-10%",
                }
              }
            >
              Updated Remarks
            </h2>
            <Row>
              <Col lg="10" md="10" sm="10">
                <label style={{ fontSize: "13px", color: "darkblue" }}>
                  {props.detail?.remarks}
                </label>{" "}
              </Col>
            </Row>
          </Col>
          {/* remarksByRequestInitiator */}
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button size="sm" color="danger" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default InfoModal;
