import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Col,
  Input,
  Label,
} from "reactstrap";

import Headers from "components/Headers/Header1";

import { uploadFileMiddleware } from "../middleware";
import UserInfoForm from "../components/userInfoForm";
import { useLocation, useHistory } from "react-router";
const ViewUserInformation = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const { data } = props;
  const history = useHistory();
  const location = useLocation();
  ///////////----------Functions--------------//////////////

  const onSuccess = () => {};
  const onFailure = () => {};

  //////////-------useEffects--------//////////////
  console.log("LOCATION TRANSFER FROM", location.TransferFrom);
  console.log("LOCATION TRANSFER TO", location.TransferTo);
  return (
    <div>
      <Headers />
      <div style={{ marginLeft: "1%", marginRight: "1%", marginTop: "-5%" }}>
        {location.TransferFrom &&
        location.TransferTo !== undefined &&
        location.TransferFrom &&
        location.TransferTo !== null ? (
          <UserInfoForm
            TransferFrom={location.TransferFrom}
            TransferTo={location.TransferTo}
            Response={location.Response}
            _uploadFileMiddleware={props._uploadFileMiddleware}
          />
        ) : (
          <h3 style={{ textAlign: "center" }}>User data not found</h3>
        )}
      </div>
    </div>
  );
};
// All position path = Position
// PLOTPOSITION_PATH = PlotPositions body{plot_id}

const mapStateToProps = (state) => ({
  data: state.TransferApplicationForm?.data,
});

const mapDispatchToProps = (dispatch) => ({
  _uploadFileMiddleware: (id, body, onSuccess, onFailure) =>
    dispatch(uploadFileMiddleware(id, body, onSuccess, onFailure)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewUserInformation);
