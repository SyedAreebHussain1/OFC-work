import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Input,
  Row,
} from "reactstrap";
import swal from "sweetalert";
const RefundModal = (props) => {
  const [state, setState] = useState({
    through: "",
    description: "",
    cheque: null,
  });
  const changeHandler = (event) => {
    // const url = URL.createObjectURL(event.target.files[0]);
    setState({
      ...state,
      cheque: event.target.files[0],
    });
    // setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };
  const handleRefund = () => {
    let formData = new FormData();
    formData.append("through", state?.through);
    formData.append("description ", state?.description);
    if (state?.cheque !== null) {
      formData.append("cheque ", state?.cheque);
    }
    props._updateRefundMiddleware(
      props?.detail?.id,
      formData,
      onSuccess,
      onFailure
    );
  };
  const onFailure = () => {};
  const onSuccess = () => {
    swal({
      title: "Success!",
      text: "Refund sucess",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle();
        // clearState();
      } else {
        props.toggle();
        // clearState();
      }
    });
  };
  return (
    <Modal size="lg" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Refund Modal</h3>
      </ModalHeader>
      <ModalBody>
        <Row style={{ marginTop: "-15px" }}>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-username">
              Pay through
            </label>
            <Input
              id="Project_id"
              type="select"
              onChange={(e) => {
                if (e.target.value === "Cash") {
                  setState({
                    ...state,
                    through: e.target.value,
                    cheque: null,
                  });
                } else {
                  setState({
                    ...state,
                    through: e.target.value,
                  });
                }
              }}
            >
              <option value="">Select through</option>
              <option value="cheque">Cheque</option>
              <option value="Cash">Cash</option>
            </Input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-username">
              Description
            </label>
            <input
              value={state?.description}
              onChange={(e) =>
                setState({
                  ...state,
                  description: e.target.value,
                })
              }
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
        </Row>
        {state?.through === "cheque" && (
          <Row style={{ marginTop: "12px", marginLeft: "0%" }}>
            <label className="form-control-label" for="input-username">
              Cheque picture
            </label>
            <Input
              accept="image/*"
              style={{
                // fontSize: "10px",
                //   borderColor: "red",
                //   border: "solid",
                //   borderColor: "#D5D5D5",
                //   borderWidth: "2px",
                //   borderRadius: "5px",
                padding: "5px",
                //   maxWidth: "95%",
              }}
              type="file"
              id="formFile"
              onChange={changeHandler}
            />
          </Row>
        )}
        <Button
          disabled={
            state?.through === "" ||
            state?.description === "" ||
            (state?.through === "cheque" && state?.cheque === null)
              ? true
              : false
          }
          style={{
            backgroundColor: "#015652  ",
            color: "white",
            marginTop: "2%",
          }}
          onClick={() => {
            handleRefund();
          }}
        >
          Proceed
        </Button>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RefundModal;
