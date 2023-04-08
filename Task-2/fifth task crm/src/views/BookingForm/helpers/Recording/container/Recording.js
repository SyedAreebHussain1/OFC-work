import axios from "axios";
import React from "react";
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
import { useState, useEffect } from "react";
// import { BASEURL, RECORDING_BASE_URL } from "config/api/URL";
// import { RECORDING_PATH } from "../constant";
import { RECORDING_BASE_URL } from "config/api/URL";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const Recording = (props) => {
  const [showResponseData, setResponseData] = useState(null);

  useEffect(() => {
    FetchData(props.clientPhoneNo);
  }, [props.modal]);
  // if (modal === true) {

  //   FetchData();
  // }
  // "03222559394"
  const FetchData = (val) => {
    let body = {
      Agentid: null,
      Calldatetime: null,
      Clientphoneno: val,
      Calltype: null,
    };

    if (val !== "") {
      // props.showRecording(body, OnSuccess, OnFailure);

      props.showRecording(body, OnSuccess, OnFailure);
    }
  };

  const [contact, setContact] = useState(null);
  const OnSuccess = () => {
    if (props.Users !== null) {
      setContact(props.Users);
    }
  };

  const OnFailure = () => {
    window.alert("fail");
  };

  return (
    <Modal size="lg" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}></ModalHeader>
      <ModalBody>
        <div className="col">
          <Table className="align-items-center" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Recording</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {props.Data !== null &&
                props.Data !== undefined &&
                props.Data.map((dataOption, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <AudioPlayer
                          autoPlayAfterSrcChange={false}
                          autoPlay={false}
                          src={`${RECORDING_BASE_URL}${dataOption.VoiceLink}`}
                          onPlay={(e) => console.log("onPlay")}
                          // other props here
                          layout="stacked-reverse"
                        />
                      </td>
                      <td>{dataOption.Status}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="info" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Recording;
