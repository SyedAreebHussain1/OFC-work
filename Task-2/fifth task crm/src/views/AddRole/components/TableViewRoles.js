import React from "react";
import { useState } from "react";
import Loader from "react-loader-spinner";
import { Badge, Button, Col, Input, Row, Table, Label } from "reactstrap";
import swal from "sweetalert";
import AssignedModulesTableModal from "./AssignedModulesTableModal";
import UpdateRightsModal from "./UpdateRightsModal";

const TableViewRoles = (props) => {
  const {
    paginatedPosts,
    onChangeNoOfRows,
    // appModules,
    fetchAssignModulesMiddleware,
    assignModules,
    updateCreateAssignModulesMiddleware
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [id, setId] = useState(null);
  const handleDelete = () => {
    swal({
      title: "Confirmation Delete",
      // text: "Employee Remove successfully",
      icon: "warning",
      type: "warning",
      buttons: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
      }
    });
  };
  const ToggleAssignedModal = (roleId) => {
    setIsOpen2(!isOpen2);
    fetchAssignModulesMiddleware(roleId);
  };
  const ToggleAssignedRightsModal = (roleId) => {
    setIsOpen(!isOpen);
    setId(roleId)
    fetchAssignModulesMiddleware(roleId);
  };
  return (
    <>
      <AssignedModulesTableModal modal={isOpen2} toggle={ToggleAssignedModal} assignModules={assignModules}/>
      <UpdateRightsModal
        modal={isOpen}
        toggle={ToggleAssignedRightsModal}
        assignModules={assignModules}
        Role_id={id}
        updateCreateAssignModulesMiddleware={updateCreateAssignModulesMiddleware}
      />
      <Row className="mt-5">
        <Col lg="6" md="6" sm="6" xs="6" xl="4">
          <Label className="form-control-label">Rows Per Pages</Label>
          <Input
            id="exampleFormControlSelect1"
            type="select"
            onChange={(e) => onChangeNoOfRows(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Input>
        </Col>
      </Row>
      <br />
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Role Name</th>
            <th scope="col">Status</th>
            <th scope="col">Role Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts !== null && paginatedPosts !== undefined
            ? paginatedPosts.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.user_role_name}</td>
                    <td>{item.status_id}</td>
                    <td>{item.user_role_description}</td>
                    <td>
                      <Button
                        color="info"
                        id="search"
                        size="sm"
                        onClick={() => ToggleAssignedModal(item.role_id)}
                      >
                        <span className="btn-inner--text"></span>
                        <span className="btn-inner--icon">
                          <i class="fas fa-eye"></i>
                        </span>
                      </Button>
                      <Button
                        color="success"
                        id="search"
                        size="sm"
                        onClick={() => ToggleAssignedRightsModal(item.role_id)}
                      >
                        <span className="btn-inner--text"></span>
                        <span className="btn-inner--icon">
                          <i class="fas fa-edit"></i>
                        </span>
                      </Button>
                      <Button
                        color="success"
                        id="search"
                        size="sm"
                        onClick={() => handleDelete()}
                      >
                        <span className="btn-inner--text"></span>
                        <span className="btn-inner--icon">
                          <i class="fas fa-trash"></i>
                        </span>
                      </Button>
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </Table>
    </>
  );
};

export default TableViewRoles;
