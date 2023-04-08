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

const ViewDetail = (props) => {
  return (
    //isOpen={modal} toggle={toggle}
    <Modal size="lg">
      {/* toggle={toggle} */}
      <ModalHeader></ModalHeader>
      <ModalBody>
        <div class="row">
          <div class="col-md-4">
            <button
              type="button"
              class="btn btn-block btn-primary mb-3"
              data-toggle="modal"
              data-target="#modal-default"
            >
              Default
            </button>
            <div
              class="modal fade"
              id="modal-default"
              tabindex="-1"
              role="dialog"
              aria-labelledby="modal-default"
              aria-hidden="true"
            >
              <div
                class="modal-dialog modal- modal-dialog-centered modal-"
                role="document"
              >
                <div class="modal-content">
                  <div class="modal-header">
                    <h6 class="modal-title" id="modal-title-default">
                      Type your modal title
                    </h6>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>

                  <div class="modal-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of sentences
                      fly into your mouth.
                    </p>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                    <button
                      type="button"
                      class="btn btn-link  ml-auto"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col">
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Recording</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody> */}
          {/* {props.Data !== null &&
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
                  })} */}
          {/* </tbody>
            </Table>
          </div> */}
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

export default ViewDetail;
