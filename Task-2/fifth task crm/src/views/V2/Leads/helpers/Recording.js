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
import { BASEURL, RECORDING_BASE_URL } from "config/api/URL";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const Recording = ({ modal, toggle, clientPhoneNo }) => {
  const [showResponseData, setResponseData] = useState(null);

  useEffect(() => {
    if (modal === true) {
      FetchData();
    }
  }, [modal]);

  // "03162840248"
  const FetchData = async () => {
    let body = {
      Agentid: null,
      Calldatetime: null,
      Clientphoneno: clientPhoneNo,
      Calltype: null,
    };
    const response = await axios.post(
      "http://squarepro.net/CallRecordingAPI/GetcallrecordsData",
      body
    );
    if (response.data.status === true) {
      setResponseData(response.data.response);
    }
  };

  return (
    <Modal size="lg" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}></ModalHeader>
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
              {showResponseData !== null &&
                showResponseData.map((dataOption, index) => {
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
        <Button color="info" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Recording;
