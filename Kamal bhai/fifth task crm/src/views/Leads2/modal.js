import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Checklead } from "./middleware";

// reactstrap components
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Input,
  Col,
  Row,
} from "reactstrap";

const LeadModal = (props) => {
  const [body, setBody] = useState({
    agentid: null,
    sourceid: null,
    Datetime: null,
    orderstatus: null,
  });

  // const [bodyData, setbodyData] = useState({
  //     user_name: null,
  //     user_email: null
  // });

  const [Body, setupdate] = useState({
    user_name: null,
    user_email: null,
    user_phone: null,
    user_id: null,
    Father: null,
    cnic: null,
    PassportNo: null,
    Dateofbirth: "null",
    Profession: null,
    Organization: null,
    Addressoffice: null,
    AddressResidence: null,
    Teloffice: null,
    TelResidence: null,
    Nationality: null,
  });
  const OnChangeStatus = (name, val) => {
    setupdate({ ...Body, [name]: val });
  };

  //   update Put API work
  const UpdateUserInfo = () => {
    axios({
      method: "put",
      url: "http://192.168.18.121:8001/CallRecordingAPI/Updateuser",
      data: Body,
    }).then((res) => {
      if (res.data.status === true) {
        setupdate(res.data.response);
      } else {
      }
    });
  };
  useEffect(() => {
    if (props.send !== null && props.send !== undefined) {
      setupdate({
        ...Body,
        user_name: props.send.user_name,
        user_id: props.send.user_id,
        user_email: props.send.user_email,
        user_phone: props.send.user_phone,
        cnic: props.send.cnic,
        Father: props.send.Father,
        PassportNo: props.send.PassportNo,
        Profession: props.send.Profession,
        Organization: props.send.Organization,
        Addressoffice: props.send.Addressoffice,
        AddressResidence: props.send.AddressResidence,
        Teloffice: props.send.Teloffice,
        TelResidence: props.send.TelResidence,
      });
    }
  }, [props.send]);

  return (
    <>
      <Modal size="lg" toggle={props.toggle} isOpen={props.modal}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={props.toggle}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
          <Input
            style={{ width: "100px" }}
            id="exampleFormControlSelect1"
            type="number"
            value={Body.user_id}
            onChange={(e) => OnChangeStatus("user_id", e.target.value)}
            placeholder="id"
            disabled={true}
          >
            {
              <option
                value={
                  Body.user_id !== null && Body.user_id !== undefined
                    ? Body.user_id
                    : ""
                }
              >
                {Body.user_id}
              </option>
            }
          </Input>
          <br />
          <Row>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={Body.user_name} //for input value
                onChange={(e) => OnChangeStatus("user_name", e.target.value)}
                placeholder="Name"
                // disabled={false}
              >
                {
                  <option
                    value={
                      Body.user_name !== null && Body.user_name !== undefined
                        ? Body.user_name
                        : ""
                    }
                  >
                    {Body.user_name}
                  </option>
                }
              </Input>
            </Col>

            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={Body.Father}
                onChange={(e) => OnChangeStatus("Father", e.target.value)}
                placeholder="Father Name/ Husband Name"
              >
                {
                  <option
                    value={
                      Body.Father !== null && Body.Father !== undefined
                        ? Body.Father
                        : ""
                    }
                  >
                    {Body.Father}
                  </option>
                }
              </Input>
            </Col>

            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="number"
                value={Body.cnic}
                onChange={(e) => OnChangeStatus("cnic", e.target.value)}
                placeholder="CNIC"
              >
                {
                  <option
                    value={
                      Body.cnic !== null && Body.cnic !== undefined
                        ? Body.cnic
                        : ""
                    }
                  >
                    {Body.cnic}
                  </option>
                }
              </Input>
            </Col>
          </Row>
          <br />

          <Row>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="number"
                value={Body.PassportNo}
                onChange={(e) => OnChangeStatus("PassportNo", e.target.value)}
                placeholder="PassportNo"
              >
                {
                  <option
                    value={
                      Body.PassportNo !== null && Body.PassportNo !== undefined
                        ? Body.PassportNo
                        : ""
                    }
                  >
                    {Body.PassportNo}
                  </option>
                }
              </Input>
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={Body.Profession}
                onChange={(e) => OnChangeStatus("Profession", e.target.value)}
                placeholder="Profession"
              >
                {
                  <option
                    value={
                      Body.Profession !== null && Body.Profession !== undefined
                        ? Body.Profession
                        : ""
                    }
                  >
                    {Body.Profession}
                  </option>
                }
              </Input>
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={Body.Organization}
                onChange={(e) => OnChangeStatus("Organization", e.target.value)}
                placeholder="Organization"
              >
                {
                  <option
                    value={
                      Body.Organization !== null &&
                      Body.Organization !== undefined
                        ? Body.Organization
                        : ""
                    }
                  >
                    {Body.Organization}
                  </option>
                }
              </Input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={Body.Addressoffice}
                onChange={(e) =>
                  OnChangeStatus("Addressoffice", e.target.value)
                }
                placeholder="Addressoffice"
              >
                {
                  <option
                    value={
                      Body.Addressoffice !== null &&
                      Body.Addressoffice !== undefined
                        ? Body.Addressoffice
                        : ""
                    }
                  >
                    {Body.Addressoffice}
                  </option>
                }
              </Input>
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={Body.AddressResidence}
                onChange={(e) =>
                  OnChangeStatus("AddressResidence", e.target.value)
                }
                placeholder="AddressResidence"
              >
                {
                  <option
                    value={
                      Body.AddressResidence !== null &&
                      Body.AddressResidence !== undefined
                        ? Body.AddressResidence
                        : ""
                    }
                  >
                    {Body.AddressResidence}
                  </option>
                }
              </Input>
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="number"
                value={Body.Teloffice}
                onChange={(e) => OnChangeStatus("Teloffice", e.target.value)}
                placeholder="Teloffice"
              >
                {
                  <option
                    value={
                      Body.Teloffice !== null && Body.Teloffice !== undefined
                        ? Body.Teloffice
                        : ""
                    }
                  >
                    {Body.Teloffice}
                  </option>
                }
              </Input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="number"
                value={Body.TelResidence}
                onChange={(e) => OnChangeStatus("TelResidence", e.target.value)}
                placeholder="TelResidence"
              >
                {
                  <option
                    value={
                      Body.TelResidence !== null &&
                      Body.TelResidence !== undefined
                        ? Body.TelResidence
                        : ""
                    }
                  >
                    {Body.TelResidence}
                  </option>
                }
              </Input>
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={Body.user_email}
                onChange={(e) => OnChangeStatus("user_email", e.target.value)}
                placeholder="user_email"
                // disabled={true}
              >
                {
                  <option
                    value={
                      Body.user_email !== null && Body.user_email !== undefined
                        ? Body.user_email
                        : ""
                    }
                  >
                    {Body.user_email}
                  </option>
                }
              </Input>
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="number"
                value={Body.user_phone}
                onChange={(e) => OnChangeStatus("user_phone", e.target.value)}
                placeholder="Phone No"
              >
                {
                  <option
                    value={
                      Body.user_phone !== null && Body.user_phone !== undefined
                        ? Body.user_phone
                        : ""
                    }
                  >
                    {Body.user_phone}
                  </option>
                }
              </Input>
            </Col>
          </Row>

          <br />
          <Row>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                defaultValue={new Date("dd-mm-yyyy")}
                id="example-date-input"
                type="date"
                disabled={false}
                value={Body.Datetime}
                onChange={(e) => OnChangeStatus("Datetime", e.target.value)} // .substr(0,9)
              ></Input>
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="select"
                value={Body.Nationality}
                onChange={(e) => OnChangeStatus("Nationality", e.target.value)}
                placeholder="Nationality"
              >
                <option id="pak">Pakistani</option>
                <option id="inter">International</option>

                {
                  <option
                    value={
                      Body.Nationality !== null &&
                      Body.Nationality !== undefined
                        ? Body.Nationality
                        : ""
                    }
                  >
                    {Body.Nationality}
                  </option>
                }
              </Input>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" type="button" onClick={props.toggle}>
            {" "}
            Close{" "}
          </Button>
          <Button color="info" type="button" onClick={UpdateUserInfo}>
            {" "}
            Update{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.lead.isLoading,
  isError: state.lead.isError,
  Data: state.lead.Data,
  Error: state.lead.error,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    Checklead: (body, OnSuccess, OnFailure) =>
      dispatch(Checklead(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(LeadModal);
