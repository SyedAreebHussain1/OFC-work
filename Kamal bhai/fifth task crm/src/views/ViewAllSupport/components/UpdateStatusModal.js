import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Row,
  Input,
  CardBody,
  Card,
  Label,
} from "reactstrap";

import validate from "../../../components/Utilities Component/ValidationWrapper";

const UpdateStatusModal = (props) => {
  const { modal, toggle, status, complainId, updateSupportStatus } = props;

  const [updateStatus, setUpdateStatus] = useState({
    supportStatusId: "",
    LastSupportStatusCommment: "",
    support_id: 0,
  });
  const [error, setError] = useState({
    supportStatusIdError: "",
    descriptionError: "",
  });

  const onSuccess = () => {
    swal("Congratulations!", "Updated successfully", "success");
  };

  const onFailure = () => {
    swal(
      "Sorry!",
      "Something Went Wrong Please Try Again Later or Contact Admin",
      "error"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      updateStatus.supportStatusId !== "" &&
      updateStatus.LastSupportStatusCommment !== ""
    ) {
      updateSupportStatus(updateStatus, onSuccess, onFailure);
      close();
    } else {
      alert("Please fill all fields");
    }
  };

  const close = () => {
    toggle(false);
    reset();
  };

  const reset = () => {
    setUpdateStatus({
      supportStatusId: "",
      LastSupportStatusCommment: "",
      support_id: 0,
    });
  };

  const CheckFields = (name) => {
    if (name === "required") {
      setError({
        ...error,
        supportStatusIdError: validate(
          "required",
          updateStatus.supportStatusId
        ),
      });
    } else if (name === "description") {
      setError({
        ...error,
        descriptionError: validate(
          "description",
          updateStatus.LastSupportStatusCommment
        ),
      });
    }
  };

  useEffect(() => {
    setUpdateStatus({ ...updateStatus, support_id: complainId });
  }, [complainId]);

  return (
    <Modal size="md" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h3>Update Status</h3>
      </ModalHeader>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardBody>
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <div>
                    <Row className="mb-3">
                      <Col lg="12" md="12" sm="12">
                        <Label
                          className="form-control-label"
                          for="input-username"
                        >
                          Status *
                        </Label>
                        <Input
                          id="exampleFormControlSelect1"
                          type="select"
                          onBlur={() => CheckFields("required")}
                          onChange={(e) =>
                            setUpdateStatus({
                              ...updateStatus,
                              supportStatusId: e.target.value,
                            })
                          }
                          required
                        >
                          <option>Select Status</option>
                          {status?.map((val, index) => {
                            return (
                              <option key={index} value={val.status_id}>
                                {val.status_name}
                              </option>
                            );
                          })}
                        </Input>
                        {error.supportStatusIdError !== "" &&
                          error.supportStatusIdError !== null && (
                            <small>
                              <div style={{ color: "red" }}>
                                {error.supportStatusIdError}
                              </div>
                            </small>
                          )}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12" md="12" sm="12">
                        <Label
                          className="form-control-label"
                          for="input-username"
                        >
                          Comment *
                        </Label>
                        <textarea
                          onBlur={() => CheckFields("description")}
                          onChange={(e) =>
                            setUpdateStatus({
                              ...updateStatus,
                              LastSupportStatusCommment: e.target.value,
                            })
                          }
                          value={updateStatus.LastSupportStatusCommment}
                          name="description"
                          className="form-control"
                          rows="4"
                          cols="50"
                          // name="LastSupportStatusCommment"
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
                </ModalBody>
                <ModalFooter>
                  <Button type="submit" color="default">
                    Update
                  </Button>
                  <Button color="danger" onClick={close}>
                    Close
                  </Button>
                </ModalFooter>
              </form>
            </CardBody>
          </Card>
        </div>
      </Row>
    </Modal>
  );
};

export default UpdateStatusModal;
