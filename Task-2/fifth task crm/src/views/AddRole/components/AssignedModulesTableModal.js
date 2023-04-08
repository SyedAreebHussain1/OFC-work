import React from "react";
import { Divider } from "@material-ui/core";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const AssignedModulesTableModal = (props) => {
  const { modal, toggle, assignModules } = props;

  return (
    <Modal size="lg" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h3>Assigned Modules</h3>
      </ModalHeader>
      <Divider />
      <ModalBody style={{ overflowY: "scroll", height: "450px" }}>
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Module Name</th>
              <th scope="col">Write</th>
              <th scope="col">Read</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {assignModules !== null && assignModules !== undefined
              ? assignModules?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.label}</td>
                      <td>
                        {item.assignModule
                          ? item.assignModule.post == true
                            ? "True"
                            : "False"
                          : "-"}
                      </td>
                      <td>
                        {item.assignModule
                          ? item.assignModule.get == true
                            ? "True"
                            : "False"
                          : "-"}
                      </td>
                      <td>
                        {item.assignModule
                          ? item.assignModule.put == true
                            ? "True"
                            : "False"
                          : "-"}
                      </td>
                      <td>
                        {item.assignModule
                          ? item.assignModule.delete == true
                            ? "True"
                            : "False"
                          : "-"}
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AssignedModulesTableModal;
