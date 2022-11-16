import React, { useEffect } from "react";
import Recording from "../helpers/Recording/container";
import Loader from "react-loader-spinner";
import { useState } from "react";
import { Button, Table } from "reactstrap";
import { Tooltip } from "reactstrap";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";
import { ProjectFileDetail } from "store/helpers/GetProjectFile/action";
import { useHistory } from "react-router";
import RequestModal from "../helpers/RequestModal";
import ChangeInPlot from "../ChangeInPlot";
import ChangePlot from "../helpers/ChangePlot";

const TableOfViewCustomer = (props) => {
  let roleId = localStorage.getItem("roleid");
  let sNo = 1;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReturn, setIsOpenReturn] = useState(false);

  const [ClientDetail, setClientDetail] = useState({});
  const toggler = (detail) => {
    setClientDetail(detail);
    setIsOpen(!isOpen);
  };

  const [isOpenChangePlot, setisOpenChangePlot] = useState(false);
  const [stateDetail, setstateDetail] = useState({});
  const onChangeInPlot = (val) => {
    setstateDetail(val);

    setisOpenChangePlot(!isOpenChangePlot);
  };

  const [stateForRequestModal, setstateRequestModal] = useState({
    Taskid: "",
    plotNo: "",
  });
  const onReturnPlot = (detail) => {
    setstateRequestModal({
      ...stateForRequestModal,
      Taskid: detail?.Taskid,
      plotNo: detail?.Plot_no,
      SaleOrderId: detail?.SaleOrderId,
    });

    setIsOpenReturn(!isOpenReturn);
  };
  const dateFunction = (date) => {
    const nDate = new Date(date).toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
    });
    return nDate;
  };
  const toggle = (name) => {
    if (name == "search") {
      setTooltipOpen({ ...tooltipOpen, search: !tooltipOpen.search });
    } else if (name == "info") {
      setTooltipOpen({ ...tooltipOpen, info: !tooltipOpen.info });
    } else if (name == "reset") {
      setTooltipOpen({ ...tooltipOpen, reset: !tooltipOpen.reset });
    }
  };
  const [tooltipOpen, setTooltipOpen] = useState({
    reset: false,
    info: false,
    search: false,
  });
  useEffect(() => {
    if (props.GetUserJWTLogin === false) {
      localStorage.removeItem("auth");
      window.location.href = "/auth/login";
    } else {
      if (props.paginatedPosts !== null && props.paginatedPosts !== undefined) {
        let str = toString(props.paginatedPosts.Datetime);
        // str = str.split("T");
        for (let i = 0; i < props.paginatedPosts.length; i++) {
          if (
            props.paginatedPosts.Agentname == props.state.agentName &&
            props.state.date === ""
          ) {
          } else if (
            str[0] == props.state.date &&
            props.state.agentName === ""
          ) {
          } else if (
            str[0] == props.state.date &&
            props.paginatedPosts.Agentname == props.state.agentName
          ) {
          } else if (
            props.state.agentName === "" &&
            props.state.date === "" &&
            (props.paginatedPosts.teamid == props.teamId ||
              props.teamId == null)
          ) {
          }
        }
      }
    }
  }, [props.paginatedPosts]);

  const OnSuccessJwt = () => {};
  const OnFailureJwt = () => {};

  useEffect(() => {
    props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  });

  let history = useHistory();
  const onPlotSelection = (val) => {
    history.push({
      pathname: "/admin/plotselection",
      state: val,
    });
  };

  const onClickProceed = (val) => {
    history.push({
      pathname: "/admin/fileInfo",
      state: val,
    });
  };
  const Transfer = (val) => {
    history.push({
      pathname: "/admin/Transfer",
      state: val,
    });
  };

  const [isOpenChangeModal, setIsOpenChangeModal] = useState(false);
  const [ClientDetailModal, setClientDetailModal] = useState({});
  const Modaldata = (posts) => {
    setClientDetailModal(posts);
    setIsOpenChangeModal(!isOpenChangeModal);
  };

  return (
    <>
      {/* <ChangeInPlot modal={isOpenChangeModal} toggle={Modaldata} detail={ClientDetailModal} state={props.state} ></ChangeInPlot> */}
      <Recording modal={isOpen} toggle={toggler} client={ClientDetail} />
      {isOpenReturn && (
        <RequestModal
          modal={isOpenReturn}
          toggle={onReturnPlot}
          showReturnPlot={props.showReturnPlot}
          PlotReturn={props.PlotReturn}
          stateForRequestModal={stateForRequestModal}
          InsertReturnPlot={props.InsertReturnPlot}
          ReturnRequest={props.ReturnRequest}
        />
      )}
      <ChangePlot
        modal={isOpenChangePlot}
        toggle={onChangeInPlot}
        detail={stateDetail}
        showPlotSector={props.showPlotSector}
        Sector={props.Sector}
        showPlotNo={props.showPlotNo}
        PlotNo={props.PlotNo}
        ShowPlotInformation={props.ShowPlotInformation}
        PlotPositionsValues={props.PlotPositionsValues}
        newPlotMiddleware={props.newPlotMiddleware}
        NewPosition={props.NewPosition}
        ChangePlotMiddleware={props.ChangePlotMiddleware}
        ChangePlotStatus={props.ChangePlotStatus}
      />
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No</th>
            {/* <th scope="col">Agent Name</th>
                        <th scope="col">Note</th> */}
            <th scope="col">Taskid</th>
            {/* <th scope="col">Date</th> */}
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.paginatedPosts !== null &&
          props.paginatedPosts !== undefined ? (
            props.paginatedPosts.map((posts, index) => {
              return (
                <tr>
                  <td>{sNo++}</td>
                  {/* <td>{posts.Agentname}</td>
                                <td>{posts.Note}</td> */}
                  <td>{posts.Taskid}</td>
                  {/* <td>{dateFunction(posts.Datetime).toLocaleString('en-US', {timeZone: 'Asia/Karachi'})}</td> */}
                  <td>
                    <Button
                      color="success"
                      size="sm"
                      onClick={(e) => toggler(posts)}
                      id="info"
                    >
                      <span className="btn-inner--icon">
                        <i class="fas fa-info-circle"></i>
                      </span>
                    </Button>
                    {/* <Tooltip placement="bottom"isOpen={tooltipOpen.info}autohide={false}target="info"toggle={() => toggle("info")}>Detail</Tooltip> */}

                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => onClickProceed(posts)}
                      disabled={
                        roleId == 3 ||
                        (posts.assigned_by == null && posts.handled_by == null)
                          ? true
                          : false
                      }
                      // disabled={roleId!==3 ?false:()true}
                    >
                      <span className="btn-inner--icon">
                        {/* <i class="fas fa-info-circle"></i> */}
                        <i class="fas fa-arrow-right"></i>
                      </span>
                    </Button>
                    <Button
                      color="danger"
                      size="sm"
                      // disabled={posts.Plotid !== null}
                      disabled={
                        (posts.assigned_by == null &&
                          posts.handled_by == null) ||
                        posts.Plotid !== null
                          ? true
                          : false
                      }
                      onClick={() => onPlotSelection(posts)}
                    >
                      <span className="btn-inner--icon">
                        Plot Selection
                        {/* <i class="fas fa-arrow-right"></i> */}
                      </span>
                    </Button>
                    <Button
                      color="info"
                      size="sm"
                      // posts.assigned_by == null && posts.handled_by==null ||posts.RequestStatusId!==null ||||  posts.Plotid == null
                      disabled={
                        posts?.SaleOrderId === null ||
                        posts?.SaleOrderId === "" ||
                        posts?.SaleOrderNo === null ||
                        posts?.SaleOrderNo === "" ||
                        posts?.NetAmount === null ||
                        posts?.NetAmount === "" ||
                        posts?.SoldAmount === null ||
                        posts?.SoldAmount === ""

                        // posts.SaleOrderNo == null ||
                        // posts.RequestStatusId == 62 ||
                        // posts.RequestStatusId == 63
                        //   ? true
                        //   : false
                      }
                      onClick={() => onReturnPlot(posts)}
                    >
                      <span className="btn-inner--icon">
                        Return Plot
                        {/* <i class="fas fa-arrow-right"></i> */}
                      </span>
                    </Button>
                    <Button
                      color="info"
                      size="sm"
                      disabled={
                        (posts.assigned_by == null &&
                          posts.handled_by == null) ||
                        posts.Plotid == null
                          ? true
                          : false
                      }
                      onClick={() => onChangeInPlot(posts)}
                    >
                      <span className="btn-inner--icon">
                        Change Plot
                        {/* <i class="fas fa-arrow-right"></i> */}
                      </span>
                    </Button>
                    <Button
                      color="danger"
                      size="sm"
                      // disabled={posts.assigned_by == null && posts.handled_by==null || posts.Plotid == null ? true:false}
                      onClick={() => Transfer(posts)}
                    >
                      <span className="btn-inner--icon">
                        Transfer
                        {/* <i class="fas fa-arrow-right"></i> */}
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

// export default TableOfViewCustomer

const mapStateToProps = (state) => ({
  isLoading: state.viewCustomerDetail.isLoading,
  isError: state.viewCustomerDetail.isError,
  Error: state.viewCustomerDetail.error,
  GetUserJWTLogin: state.viewCustomerDetail.GetUserJWTLogin,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    JwtDashboard: (body, OnSuccess, OnFailure) =>
      dispatch(JwtDashboard(body, OnSuccess, OnFailure)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToPrpos
)(TableOfViewCustomer);
