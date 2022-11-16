import React, { useState } from "react";
import { Divider } from "@material-ui/core";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Row,
  Label,
  Input,
} from "reactstrap";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import swal from "sweetalert";

const AddNewRoleModal = (props) => {
  const { toggle, modal, addRoleMiddleware } = props;
  const [report, setReport] = useState({
    name: "",
    description: "",
  });

  const [error, setError] = useState({
    nameError: "",
    descriptionError: "",
  });
  const onSuccess = () => {
    swal("Congratulations!", "Role has been added successfully", "success");
    handleClose();
  };
  const onFailure = (msg) => {
    swal("Sorry!", msg, "error");
  };
  const handleClose = () => {
    toggle();
    setReport({
      name: "",
      description: "",
    });
    setError({
      nameError: "",
      descriptionError: "",
    });
  };
  const CheckFields = (name) => {
    if (name === "name") {
      setError({
        ...error,
        nameError: validate("required", report.name),
      });
    } else if (name === "description") {
      setError({
        ...error,
        descriptionError: validate("required", report.description),
      });
    }
  };
  const handleSendData = () => {
    if (report.name !== "" && report.description !== "") {
      addRoleMiddleware(
        {
          user_role_name:report.name,
          user_role_description:report.description,
        },
        onSuccess,
        onFailure
      );
    }
  };
  return (
    <Modal size="md" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h3>Add New Role</h3>
      </ModalHeader>
      <Divider />
      <ModalBody>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="pl-lg-4">
              <Row className="mb-3">
                <Col lg="12" md="12" sm="12">
                  <Label className="form-control-label" for="reporting">
                    Name *
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="name"
                    onBlur={() => CheckFields("name")}
                    onChange={(e) =>
                      setReport({ ...report, name: e.target.value })
                    }
                    value={report.name}
                    required
                  ></Input>
                  {error.nameError !== "" && error.nameError !== null && (
                    <small>
                      <span style={{ color: "red" }}>{error.nameError}</span>
                    </small>
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg="12" md="12" sm="12">
                  <Label className="form-control-label" for="input-username">
                    Description *
                  </Label>
                  <textarea
                    onBlur={() => CheckFields("description")}
                    onChange={(e) =>
                      setReport({
                        ...report,
                        description: e.target.value,
                      })
                    }
                    value={report.description}
                    className="form-control mb-3"
                    rows="4"
                    cols="50"
                    name="description"
                    form="usrform"
                    required
                  ></textarea>
                  {error.descriptionError !== "" &&
                    error.descriptionError !== null && (
                      <small>
                        <div style={{ color: "red" }}>
                          {error.descriptionError}
                        </div>
                      </small>
                    )}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleClose}>
          Close
        </Button>
        <Button color="success" onClick={handleSendData}>
          Add
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddNewRoleModal;
