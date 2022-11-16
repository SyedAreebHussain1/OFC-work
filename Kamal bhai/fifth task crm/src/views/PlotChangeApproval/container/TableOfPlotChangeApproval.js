import React from "react";

import { useState, useEffect } from "react";
import { Button, Table } from "reactstrap";
import InfoModal from "../helpers/InfoModal";
import ActionModal from "../helpers/ActionModal";
// import UpdateModal from '../helpers/UpdateModal';
import { Badge } from "reactstrap";
import { CardBody, CardHeader, Row, Col, Input } from "reactstrap";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { ContactSupportOutlined } from "@material-ui/icons";
import Select from "react-select";
import Filteration from "views/PlotChangeApproval/container/Filteration";
import Print from "views/PlotChangeApproval/container/Print";

const TableOfPlotChangeApproval = (props) => {
  useEffect(() => {
    if (isOpenAction == false) {
      props.ShowAllChangeRequest(onSuccess, onFailure);
    }
  }, [isOpenAction]);
  const onSuccess = () => {};
  const onFailure = () => {};

  const ToggleActionModal = (info) => {
    setIsOpenAction(!isOpenAction);
    SetStateData(info);
  };
  const [isOpenAction, setIsOpenAction] = useState(false);
  const [stateData, SetStateData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const ToggleInfoModal = (info) => {
    setIsOpen(!isOpen);
    SetStateData(info);
  };
  return (
    <>
      <ActionModal
        modal={isOpenAction}
        toggle={ToggleActionModal}
        stateData={stateData}
        ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus}
        Update={props.Update}
        ShowApprovalReceipt={props.ShowApprovalReceipt}
      />
      <InfoModal
        modal={isOpen}
        toggle={ToggleInfoModal}
        stateData={stateData}
      />
      {/* 
       

        <UpdateModal
            modal={isOpenUpdate}
            toggle={ToggleUpdateModal}
            stateData={stateData}
            UpdatePayment={props.UpdatePayment} ShowUpdatePayment={props.ShowUpdatePayment}
        /> */}

      <br />
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Old Plot</th>
            <th scope="col">New Plot</th>
            <th scope="col">Status</th>

            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.paginatedPosts !== null &&
          props.paginatedPosts !== undefined ? (
            props.paginatedPosts.map((posts, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{posts.user_name}</td>
                  <td>{posts.user_email}</td>
                  <td>{posts.oldPlot}</td>
                  <td>{posts.newPlot}</td>
                  <td>{posts.status_name}</td>

                  <td>
                    <Print posts={posts} />

                    <Button
                      color="danger"
                      id="search"
                      size="sm"
                      onClick={(e) => ToggleActionModal(posts)}
                      disabled={posts.requestStatusId !== 58}
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i class="fas fa-tasks"></i>
                      </span>
                    </Button>
                    <Button
                      color="info"
                      id="search"
                      size="sm"
                      onClick={(e) => ToggleInfoModal(posts)}
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i class="fas fa-eye"></i>
                      </span>
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>
                <h3>No data found</h3>
              </th>
              <th></th>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableOfPlotChangeApproval;
