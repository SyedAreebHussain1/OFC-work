import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  CardBody,
  Card,
  Table,
  CardHeader,
  Col,
  Row,
} from "reactstrap";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import Loader from "react-loader-spinner";
import { RECORDING_BASE_URL } from "../../config/api/URL";
import { CallRecording } from "./middleware";
import { connect } from "react-redux";

const Recording = (props) => {
  var number = props.number;

  // const [body, setBody] = useState({
  //   Agentid: null,
  //   Calldatetime: null,
  //   Clientphoneno: body1,
  //   Calltype: null,
  // });

  const [body1, setbody1] = useState({
    Agentid: null,
    Calldatetime: null,
    Clientphoneno: null,
    Calltype: null,
  });

  useEffect(() => {
    setbody1({ ...body1, Clientphoneno: props.number });
  }, [props.number]);

  const OnSuccess = () => {};
  const OnFailure = () => {};

  return (
    <Modal
      size="md"
      isOpen={props.modal}
      toggle={props.toggle}
      Data={props.Data}
    >
      <ModalHeader toggle={props.toggle}>
        <h3>Details</h3>
      </ModalHeader>
      <ModalBody>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Recording</th>
            </tr>
          </thead>
          <tbody>
            {props.Call_Records !== null && props.Call_Records !== undefined
              ? props.Call_Records.map((call) => {
                  return (
                    <tr>
                      <td>{call.UserName}</td>
                      <td>
                        <AudioPlayer
                          autoPlayAfterSrcChange={false}
                          autoPlay={false}
                          src={`${RECORDING_BASE_URL}${call.VoiceLink}`}
                          onPlay={(e) => console.log("onPlay")}
                          layout="stacked-reverse"
                        />
                      </td>
                    </tr>
                  );
                })
              : "loading........."}
          </tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button size="sm" color="info" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// export default Recording;

const mapStateToProps = (state) => ({
  Call_Records: state.viewCustomerDetail.Call_Records,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    CallRecording: (body, OnSuccess, OnFailure) =>
      dispatch(CallRecording(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Recording);
