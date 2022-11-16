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
import validate from "../../../../components/Utilities Component/ValidationWrapper";

import { connect } from "react-redux";

import { NewUser } from "../middleware";

const AddNew = (props) => {
  const ResetBTN = () => {};
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
  });
  const [state, setState] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
  });
  const OnChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const CheckFields = (name) => {
    if (name === "fullName") {
      setError({
        ...error,
        nameError: validate("fullName", state.user_name),
      });
    } else if (name === "email") {
      setError({
        ...error,
        emailError: validate("email", state.user_email),
      });
    } else if (name === "phoneNumber") {
      setError({
        ...error,
        phoneError: validate("phoneNumber", state.user_phone),
      });
    }
  };
  const AddUser = () => {
    props.AddNew(state, onSuccess, OnFailure);
  };

  const onSuccess = () => {
    props.toggle();
  };
  const OnFailure = () => {};
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Add User </ModalHeader>
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
            value={state.user_name}
            onBlur={() => CheckFields("fullName")}
            onChange={(e) => OnChange(e.target.value, "user_name")}
          />
        </InputGroup>
        {error.nameError !== "" && error.nameError !== null && (
          <small>
            <span style={{ color: "red" }}>{error.nameError}</span>
          </small>
        )}

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
            value={state.user_email}
            onBlur={() => CheckFields("email")}
            onChange={(e) => OnChange(e.target.value, "user_email")}
          />
        </InputGroup>
        {error.emailError !== "" && error.emailError !== null && (
          <small>
            <span style={{ color: "red" }}>{error.emailError}</span>
          </small>
        )}

        <br />

        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fa fa-key" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Password"
            type="password"
            // value={state.user_phone}
            // onBlur={() => CheckFields("phoneNumber")}
            // onChange={(e) => OnChange(e.target.value, "user_phone")}
          />
        </InputGroup>
        {/* {error.phoneError !== "" && error.phoneError !== null && (
          <small>
            <span style={{ color: "red" }}>{error.phoneError}</span>
          </small>
        )} */}

        <br />

        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fa fa-phone" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Phone No"
            type="number"
            value={state.user_phone}
            onBlur={() => CheckFields("phoneNumber")}
            onChange={(e) => OnChange(e.target.value, "user_phone")}
          />
        </InputGroup>
        {error.phoneError !== "" && error.phoneError !== null && (
          <small>
            <span style={{ color: "red" }}>{error.phoneError}</span>
          </small>
        )}

        <br />

        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fa fa-info" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Description"
            type="text"
            // value={state.user_phone}
            // onBlur={() => CheckFields("phoneNumber")}
            // onChange={(e) => OnChange(e.target.value, "user_phone")}
          />
        </InputGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="info" onClick={AddUser}>
          <i className="ni ni-fat-add" /> &nbsp; Add User
        </Button>

        <Button color="info" onClick={ResetBTN}>
          Reset
        </Button>
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// export default AddNew

const mapStateToProps = (state) => ({
  isLoading: state.fetchContacts.isLoading,
  isError: state.fetchContacts.isError,
  Users: state.fetchContacts.Users,
  Error: state.fetchContacts.error,
  AssignResponse: state.fetchContacts.error,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    AddNew: (body, OnSuccess, OnFailure) =>
      dispatch(NewUser(body, OnSuccess, OnFailure)),
    //   GetAgent: (OnSuccess, OnFailure) =>
    //     dispatch(GetAgent(OnSuccess, OnFailure)),
    //   Assign: (assigner, handledby, leads, OnSuccess, OnFailure) =>
    //     dispatch(AssignLead(assigner, handledby, leads, OnSuccess, OnFailure)),
    //   GetSources: (OnSuccess, OnFailure) =>
    //     dispatch(GetSources(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(AddNew);
