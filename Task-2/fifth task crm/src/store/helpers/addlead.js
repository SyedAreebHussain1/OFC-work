import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import axios from "axios";

export const AddNew = ({ modal, toggle }) => {
  const usersave = (user_id) => {
    axios({
      method: "put",
      url: "http://192.168.18.121:8001/CallRecordingAPI/Updateuser",
      data: Body,
    }).then((res) => {
      if (res.data.status === true) {
        setBodyAPI(res.data.response);
      } else {
      }
    });
  };

  const [BodyState, setBodyState] = useState({
    agentid: null,
    sourceid: null,
    Datetime: null,
    orderstatus: null,
    // user_name : null
  });
  // useEffect(() => {

  // })

  // useEffect(() => {
  //

  // },[true]);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://192.168.18.121:8001/CallRecordingAPI/showallleadsV2",
      data: BodyState,
    }).then((res) => {
      if (res.data.status === true) {
        setBodyState(res.data.response);
      } else {
      }
    });
  }, [true]);

  // state of text boxes
  const [Body, setBodyAPI] = useState({
    user_name: null, //done
    user_email: null, //done
    user_phone: null, //done
    user_id: null,
    Father: null, //done
    cnic: null, //done
    PassportNo: null, //done
    Dateofbirth: null,
    Profession: null, //done
    Organization: null, //done
    Addressoffice: null, //done
    AddressResidence: null, //done
    Teloffice: null, //done
    TelResidence: null, //done
    Nationality: null,
  });

  const OnChangeData = (value, name) => {
    setBodyAPI({ ...Body, [name]: value });
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Leads</ModalHeader>
      <ModalBody>
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Name"
            type="text"
            value={Body.user_name}
            onChange={(e) => OnChangeData(e.target.value, "user_name")}
          >
            {/* <option>
                    {BodyState !== null && BodyState !== undefined &&
                              BodyState.map((leaduser) => {
                                return (
                                  <option
                                    key={leaduser.user_id}
                                    value={leaduser.user_id}
                                    // value={`${project.Project_name}+${project.Project_id}`}
                                  >
                                    {leaduser.user_name}
                                  </option>
                                );
                              })}

                    </option> */}
          </Input>
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Father Name/ Husband Name"
            type="text"
            value={Body.Father}
            onChange={(e) => OnChangeData(e.target.value, "Father")}
          />
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="42000-xxxx-xxx-x"
            type="number"
            value={Body.cnic}
            onChange={(e) => OnChangeData(e.target.value, "cnic")}
          />
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Passport No"
            type="number"
            value={Body.PassportNo}
            onChange={(e) => OnChangeData(e.target.value, "PassportNo")}
          />
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Address"
            type="text"
            value={Body.AddressResidence}
            onChange={(e) => OnChangeData(e.target.value, "AddressResidence")}
          />
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Profession"
            type="text"
            value={Body.Profession}
            onChange={(e) => OnChangeData(e.target.value, "Profession")}
          />
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Organization"
            type="text"
            value={Body.Organization}
            onChange={(e) => OnChangeData(e.target.value, "Organization")}
          />
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Address Office"
            type="text"
            value={Body.Addressoffice}
            onChange={(e) => OnChangeData(e.target.value, "Addressoffice")}
          />
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Tel. (Office)"
            type="number"
            value={Body.Teloffice}
            onChange={(e) => OnChangeData(e.target.value, "Teloffice")}
          />
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Tel. (Residence)"
            type="number"
            value={Body.TelResidence}
            onChange={(e) => OnChangeData(e.target.value, "TelResidence")}
          />
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Mobile"
            type="number"
            value={Body.user_phone}
            onChange={(e) => OnChangeData(e.target.value, "user_phone")}
          />
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Email"
            type="text"
            value={Body.user_email}
            onChange={(e) => OnChangeData(e.target.value, "user_email")}
          >
            {/* <option>
                    {Body !== null && Body !== undefined &&
                              Body.map((opt) => {
                                return (
                                  <option
                                    key={opt.user_id}
                                    value={opt.user_id}
                                  >
                                    {opt.user_email}
                                  </option>
                                );
                              })}
                    </option> */}
          </Input>
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="User id"
            type="text"
            // value={Body.user_id}
            // onChange={(e) => OnChangeData(e.target.value, "user_id")}
            disabled={true}
          >
            {/* <option value={null}>Select Plot No</option>
                            {data !== null &&
                              data !== undefined &&
                              data.map((Uid) => {
                                return (
                                  <option 
                                    key={Uid.user_id}
                                    value={`${Uid.Plot_no}+${Uid.user_id}`}
                                  >
                                    {Uid.user_id}
                                  </option>
                                );
                              })} */}
          </Input>
        </InputGroup>
        <br />
      </ModalBody>
      <ModalFooter>
        <Button color="danger" type="button" onClick={usersave}>
          <i className="far fa-save"></i>
        </Button>

        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
