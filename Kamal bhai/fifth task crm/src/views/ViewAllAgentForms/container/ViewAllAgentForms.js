import React, { useState } from "react";
import Headers from "components/Headers/Header1";
import Filteration from "./Filteration";
import { Container, Card, Row } from "reactstrap";
import ApproveFormModal from "./ApproveFormModal";

const ViewAllAgentForms = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [post, setPost] = useState(false);
  // const ToggleApproveFormModal = (post) => {
  //   setPost(post);
  //   // getSupportFiles({ support_id: id }, onSuccess, onFailure);
  //   // setComment(comment);
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      {/* <ApproveFormModal
        modal={isOpen}
        toggle={ToggleApproveFormModal}
        post={post}
        // supportImages={supportFiles || []}
        // comment={comment}
      /> */}
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <Filteration
                GetRealStateAgent={props.GetRealStateAgent}
                AgentDetail={props.AgentDetail}
                Status={props.Status}
                ShowBookingStatusFormStatus={props.ShowBookingStatusFormStatus}
                upgradeFormStatus={props.upgradeFormStatus}
                Response={props.Response}
                uploadCurrrencyNotes={props.uploadCurrrencyNotes}
                // ToggleApproveFormModal={ToggleApproveFormModal}
              ></Filteration>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ViewAllAgentForms;
