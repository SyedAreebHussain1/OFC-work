import React, { useState, useEffect } from "react";
import { Divider } from "@material-ui/core";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Row,
  Table,
} from "reactstrap";
import swal from "sweetalert";

const UpdateRightsModal = (props) => {
  const {
    toggle,
    modal,
    assignModules,
    Role_id,
    updateCreateAssignModulesMiddleware,
  } = props;
  
  const [posts, setPosts] = useState(null);

  const onChangeVal = (check, id, name) => {
    if (name == "assignModule") {
      let newArr = posts.map((item) => {
        if (item.id == id && check == true) {
          item.assignModule = {
            get: false,
            post: false,
            put: false,
            delete: false,
            roleId: Role_id,
            appModuleId: item.id,
          };
        } else if (item.id == id && check == false) {
          item.assignModule = null;
        }
        return item;
      });
      setPosts(newArr);
    } else {
      let newArr = posts.map((item) => {
        if (item.id == id) {
          item.assignModule[name] = check;
        }
        return item;
      });
      setPosts(newArr);
    }
  };

  const onSuccess = (res) => {
    swal("Success!", "Assign Module update succeccfully", "success");
    toggle();
  };
  const onFailure = () => {};

  const handleSave = () => {
    let tempArr = [];
    var BreakException = {};
    posts.forEach(function (item) {
      if (
        item.assignModule !== null &&
        item.assignModule.delete == false &&
        item.assignModule.get == false &&
        item.assignModule.post == false &&
        item.assignModule.put == false
      ) {
        tempArr = [];
        swal(
          "Warning",
          "Please Check one of above rights after Check the module. Thank You",
          "warning"
        );
        throw BreakException;
      } else if (
        item.assignModule !== null &&
        (item.assignModule.delete !== false ||
          item.assignModule.get !== false ||
          item.assignModule.post !== false ||
          item.assignModule.put !== false)
      ) {
        tempArr.push({
          get: item.assignModule.get,
          post: item.assignModule.post,
          put: item.assignModule.put,
          Delete: item.assignModule.delete,
          roleId: item.assignModule.roleId,
          appModuleId: item.assignModule.appModuleId,
        });
      }
    });
    if (tempArr.length > 0) {
      updateCreateAssignModulesMiddleware(
        { assignModules: tempArr },
        onSuccess,
        onFailure
      );
    }
  };

  useEffect(() => {
    if (assignModules) {
      setPosts(assignModules);
    }
  }, [assignModules]);
  return (
    <Modal size="lg" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h3>Assign Rights</h3>
      </ModalHeader>
      <Divider />
      <ModalBody style={{ overflowY: "scroll", height: "450px" }}>
        <Row>
          <Col lg="12" md="12" sm="12">
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Module Name</th>
                  <th scope="col">Module</th>
                  <th scope="col">Write</th>
                  <th scope="col">Read</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {posts !== null && posts !== undefined
                  ? posts?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.label}</td>
                          <td>
                            <input
                              type="checkbox"
                              onChange={(e) =>
                                onChangeVal(
                                  e.target.checked,
                                  item.id,
                                  "assignModule"
                                )
                              }
                              checked={item.assignModule !== null}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              onChange={
                                (e) =>
                                  onChangeVal(e.target.checked, item.id, "post")
                                // setPosts([
                                //   ...posts,
                                //   (item["assignModule"]["post"] =
                                //     e.target.checked),
                                // ])
                              }
                              checked={item?.assignModule?.post}
                              disabled={item.assignModule == null}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              onChange={(e) =>
                                onChangeVal(e.target.checked, item.id, "get")
                              }
                              checked={item?.assignModule?.get}
                              disabled={item.assignModule == null}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              onChange={(e) =>
                                onChangeVal(e.target.checked, item.id, "put")
                              }
                              checked={item?.assignModule?.put}
                              disabled={item.assignModule == null}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              onChange={(e) =>
                                onChangeVal(e.target.checked, item.id, "delete")
                              }
                              checked={item?.assignModule?.delete}
                              disabled={item.assignModule == null}
                            />
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </Table>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggle}>
          Close
        </Button>
        <Button color="danger" onClick={handleSave}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateRightsModal;
