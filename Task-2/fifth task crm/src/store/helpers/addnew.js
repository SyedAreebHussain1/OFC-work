import React, { useState } from "react";
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
// import addNew from '../../views/Contacts/helpers/add_new';

const AddNew = ({ modal, toggle }) => {
  const AddNewManualLead = () => {};

  return (
    <Modal isOpenModal={modal} togglerModal={toggle}>
      <ModalHeader togglerModal={toggle}>Add User </ModalHeader>
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
            //autoComplete="new-email"
          />
        </InputGroup>
        <br />
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-email-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Email"
            type="email"
            //autoComplete="new-email"
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
            placeholder="Phone No"
            type="number"
            //autoComplete="new-email"
          />
        </InputGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="info" onClick={AddNewManualLead}>
          Add User
        </Button>
        <Button color="info">Reset</Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddNew;
