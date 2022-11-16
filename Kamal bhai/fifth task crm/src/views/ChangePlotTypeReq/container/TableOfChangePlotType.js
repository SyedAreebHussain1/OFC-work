import React, { useEffect } from "react";

import Loader from "react-loader-spinner";
import { useState } from "react";
import { Button, Table } from "reactstrap";
import { Tooltip } from "reactstrap";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";

import { useHistory } from "react-router";
import InfoModal from "views/ChangePlotTypeReq/helpers/InfoModal";
import PlotDetailsModal from "../helpers/PlotDetailsModal";
import ApprovalModal from "views/ChangePlotTypeReq/helpers/ApprovalModal";
import RejectModal from "../helpers/RejectModal";

const TableOfChangePlotType = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPlotDetail, setIsOpenPlotDetail] = useState(false);
  const [isOpenApprove, setIsOpenApprove] = useState(false);
  const [isOpenReject, setIsOpenReject] = useState(false);
  const [stateData, SetStateData] = useState({});

  const ToggleInfoModal = (info) => {
    setIsOpen(!isOpen);
    SetStateData(info);
  };
  const TogglePlotInfoModal = (info) => {
    setIsOpenPlotDetail(!isOpenPlotDetail);
    SetStateData(info);
  };

  const ToggleApprovalModal = (info) => {
    setIsOpenApprove(!isOpenApprove);
    SetStateData(info);
  };

  const ToggleRejectModal = (info) => {
    setIsOpenReject(!isOpenReject);
    SetStateData(info);
  };

  return (
    <>
      <InfoModal
        modal={isOpen}
        toggle={ToggleInfoModal}
        stateData={stateData}
      />
      <PlotDetailsModal
        modal={isOpenPlotDetail}
        stateData={stateData}
        toggle={TogglePlotInfoModal}
        ShowPlotInfo={props.ShowPlotInfo}
        PlotInfo={props.PlotInfo}
      />
      <ApprovalModal
        modal={isOpenApprove}
        toggle={ToggleApprovalModal}
        stateData={stateData}
        UpdatePlotReturnStatus={props.UpdatePlotReturnStatus}
        UpdateStatus={props.UpdateStatus}
        //  ShowApprovalReceipt={props.ShowApprovalReceipt}
      />
      <RejectModal
        modal={isOpenReject}
        toggle={ToggleRejectModal}
        stateData={stateData}
        UpdatePlotReturnStatus={props.UpdatePlotReturnStatus}
        UpdateStatus={props.UpdateStatus}
      />

      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">SaleOrder No</th>
            <th scope="col">Plot No</th>
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
                  <td>{posts.user_phone}</td>
                  <td>{posts.SaleOrderNo}</td>
                  <td>{posts.Plot_no}</td>
                  <td>{posts.PlotReturnRequestStatusName}</td>

                  <td>
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
                    <Button
                      color="danger"
                      id="search"
                      size="sm"
                      onClick={(e) => TogglePlotInfoModal(posts)}
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i class="fas fa-list"></i>
                      </span>
                    </Button>
                    <Button
                      color="danger"
                      id="search"
                      size="sm"
                      onClick={(e) => ToggleApprovalModal(posts)}
                      disabled={posts.RequestStatusId !== 62}
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i class="far fa-check-circle"></i>
                      </span>
                    </Button>
                    <Button
                      color="danger"
                      id="search"
                      size="sm"
                      onClick={(e) => ToggleRejectModal(posts)}
                      disabled={posts.RequestStatusId !== 62}
                    >
                      <span className="btn-inner--text"></span>
                      <span className="btn-inner--icon">
                        <i class="fas fa-times"></i>
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

export default TableOfChangePlotType;
