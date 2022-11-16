import React from "react";
import { connect } from "react-redux";
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
  Col,
  Row,
  Table,
} from "reactstrap";
const DeleteAgent = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Add Team </ModalHeader>
      <ModalBody></ModalBody>
    </Modal>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToPrpos = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToPrpos)(DeleteAgent);
