import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Row,
  Input,
} from "reactstrap";
import { useState, useEffect } from "react";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import swal from "sweetalert";
import axios from "axios";
const TransferModal = (props) => {
  const [remark, setRemarks] = useState("");
  const [instno, setInstno] = useState("");

  const getInstallment = () => {
    let token = localStorage.getItem("auth");
    let path = "GetApymentBankById";
    axios
      .get(
        `https://backendcrm.squarepro.net/CRM/${path}?Payment_BankId=${props.data?.Payment_BankId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setInstno(res.data?.message);

        // if (res.data.status === true) {
        //   setInstno(res.data?.message?.InstallmentNo);
        // }
      })
      .catch((error) => console.log(error));
  };
  const HandleSubmit = (status) => {
    let body = {
      Payment_BankId: props.data?.Payment_BankId,
      Amount: props.data?.Amount,
      Remarks: remark,

      InstallmentNo: instno?.InstallmentNo,
      Plot_No: instno?.Plot_No,
    };
    props._approveBank_Middleware(body, onSuccessApprove, onFailure);
  };

  const onSuccessApprove = (sucess) => {
    swal({
      title: "Successful",
      text: "successfully Approve",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle(false);
        setRemarks("");
      } else {
        props.toggle(false);
        setRemarks("");
      }
    });
  };

  const onFailure = () => {
    swal({
      title: "Something is wrong",
      text: "please contact to Admin",
      type: "success",
      icon: "warning",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle(false);
        setRemarks("");
      } else {
        props.toggle(false);
        setRemarks("");
      }
    });
  };

  useEffect(() => {
    getInstallment();
  }, []);
  return (
    <Modal
      size="lg"
      centered={true}
      isOpen={props.modal}
      toggle={props.toggle}

      // data={props.stateData}
      // Update={props.Update}
      // ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus}
      // ShowApprovalReceipt={props.ShowApprovalReceipt}
    >
      <ModalHeader
        style={{ backgroundColor: "#054D87", color: "white" }}
        toggle={props.toggle}
      >
        <h3 style={{ color: "white" }}>Transfer amount</h3>
      </ModalHeader>
      <ModalBody>
        <Row style={{ marginLeft: "0px", marginRight: "1%" }}>
          <label>Remarks:</label> <span style={{ color: "red" }}>*</span>
          <Input
            type="textArea"
            rows={8}
            style={{ resize: "none" }}
            placeholder="Enter your remarks"
            value={remark}
            // onBlur={(e) => CheckFields("Comment")}
            onChange={(e) => setRemarks(e.target.value)}
          ></Input>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          // disabled={props.stateData.Status == "Accepted"}
          // onClick={HandleSubmit(props.stateData.Status)}
          onClick={() => {
            if (remark?.trim().length > 0) {
              HandleSubmit();
            } else {
              swal("Sorry!", "Remarks are required.", "error");
            }
            // proceed();
          }}
        >
          Transfer To company wallet
        </Button>
        {/* <Button
          color="danger"
          // disabled={props.stateData.Status == "Pending"}
          // onClick={HandleSubmit(props.stateData.Status)}
          onClick={() => {
            if (remark?.trim().length > 0) {
              HandleSubmit(props.stateData.Status);
            } else {
              swal("Sorry!", "All * fields are required.", "error");
            }
            // proceed();
          }}
        >
          Reject
        </Button> */}
      </ModalFooter>
    </Modal>
  );
};
export default TransferModal;
