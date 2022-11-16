import React, { useEffect, useRef, useState } from "react";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Col,
} from "reactstrap";
import { connect } from "react-redux";
import Headers from "components/Headers/Header1";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import Pagination from "components/Pagination/Pagination";
import {
  addRoleMiddleware,
  fetchAppModulesMiddleware,
  fetchAssignModulesMiddleware,
  fetchRolesMiddleware,
  updateCreateAssignModulesMiddleware,
} from "../middleware";
import swal from "sweetalert";
import AddNewRoleModal from "../components/AddNewRoleModal";
import TableViewRoles from "../components/TableViewRoles";

const AddRole = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const {
    addRoleMiddleware,
    fetchRolesMiddleware,
    addResponse,
    rolesFetched,
    // fetchAppModulesMiddleware,
    // appModules,
    fetchAssignModulesMiddleware,
    assignModules,
    updateCreateAssignModulesMiddleware
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  // const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);
  ///////////----------Pagination--------------//////////////

  // let postNumber = 10;
  // let paginatedPosts, total_pages;

  // if (noOfRows != "") {
  //   postNumber = noOfRows;
  // }

  // const start = pageNumber * postNumber - postNumber;
  // const end = start + postNumber;

  // if (posts) {
  //   paginatedPosts = posts?.slice(start, end);
  //   total_pages = Math.ceil(posts.length / postNumber);
  // }

  ///////////----------Functions--------------//////////////

  const onSuccess = () => {};
  const onFailure = () => {};

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (rolesFetched?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  const ToggleNewRoleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchRolesMiddleware(pageNumber, noOfRows, onSuccess, onFailure);
  }, [pageNumber, noOfRows, addResponse]);

  // useEffect(() => {
  //   fetchAppModulesMiddleware(onSuccess, onFailure);
  // }, []);

  return (
    <div>
      {/* <Headers /> */}
      {/* <Container className="mt--7" fluid> */}
        <AddNewRoleModal
          modal={isOpen}
          toggle={ToggleNewRoleModal}
          addRoleMiddleware={addRoleMiddleware}
        />

        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col xl="10" lg="9" md="8" sm="12" xs="12">
                    <h3 className="mb-0">Roles</h3>
                  </Col>

                  <Col xl="2" lg="3" md="4" sm="12" xs="12">
                    <Button color="success" onClick={ToggleNewRoleModal}>
                      Add New Role
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <TableViewRoles
                  paginatedPosts={rolesFetched?.response}
                  // appModules={appModules}
                  onChangeNoOfRows={onChangeNoOfRows}
                  fetchAssignModulesMiddleware={fetchAssignModulesMiddleware}
                  assignModules={assignModules}
                  updateCreateAssignModulesMiddleware={updateCreateAssignModulesMiddleware}
                />
                <Pagination
                  pageNumber={pageNumber}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  totalPages={rolesFetched?.metaData?.totalPages}
                />
              </CardBody>
            </Card>
          </div>
        </Row>
      {/* </Container> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isError: state.addRoles.isError,
  Error: state.addRoles.error,
  addResponse: state.addRoles.addResponse,
  rolesFetched: state.addRoles?.rolesFetched,
  // appModules: state.addRoles?.appModules,
  assignModules: state.addRoles?.assignModules,
});

const mapDispatchToProps = (dispatch) => ({
  addRoleMiddleware: (body, onSuccess, onFailure) =>
    dispatch(addRoleMiddleware(body, onSuccess, onFailure)),
  fetchRolesMiddleware: (pageNumber, noOfRows, onSuccess, onFailure) =>
    dispatch(fetchRolesMiddleware(pageNumber, noOfRows, onSuccess, onFailure)),
  // fetchAppModulesMiddleware: (onSuccess, onFailure) =>
  //   dispatch(fetchAppModulesMiddleware(onSuccess, onFailure)),
  fetchAssignModulesMiddleware: (roleId, onSuccess, onFailure) =>
    dispatch(fetchAssignModulesMiddleware(roleId, onSuccess, onFailure)),
  updateCreateAssignModulesMiddleware: (body, onSuccess, onFailure) =>
    dispatch(updateCreateAssignModulesMiddleware(body, onSuccess, onFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRole);
