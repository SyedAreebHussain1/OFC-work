import axios from "axios";
import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Row,
  CardBody,
  Table,
} from "reactstrap";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ShowPlotInformation } from "./middleware";
import Loader from "react-loader-spinner";

const PlotInformation = (props) => {
  const [bodydata, setbodydata] = useState({
    // Plotid : props.send_to_plot !== null && props.send_to_plot !== undefined ? ( props.send_to_plot.Plotid ) : props.send_to_plot.Plotid

    Plotid: props.send_to_plot,
  });

  useEffect(() => {
    props.ShowPlotInformation(bodydata, OnSuccess, OnFailure);
  }, [bodydata]);

  useEffect(() => {
    if (props.send_to_plot !== null) {
      setbodydata(props.send_to_plot);
    }
  }, [props.PlotPositionsValues, props.send_to_plot]);

  const OnSuccess = () => {};
  const OnFailure = () => {};

  return (
    <Modal size="md" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Plot Information</h3>
      </ModalHeader>
      {/* <ModalBody> */}

      <CardBody>
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Position</th>
              {/* <th scope="col" >
                      Category Name
                      </th> */}
              <th scope="col">Extra Charges</th>
            </tr>
          </thead>
          <tbody>
            {props.PlotPositionsValues !== null &&
            props.PlotPositionsValues !== undefined ? (
              props.PlotPositionsValues.map((plotposition, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{plotposition.PositionName}</td>
                    {/* <td>{plotposition.PlotType_Name}</td> */}
                    <td>{`${plotposition.ExtraCharges}%`}</td>
                  </tr>
                );
              })
            ) : (
              <Loader
                type="ThreeDots"
                color="#8dbc4c"
                height={80}
                width={80}
                visible={props.isLoading}
                secondaryColor="#4f9cb9"
              />
            )}
          </tbody>
        </Table>
      </CardBody>

      {/* </ModalBody> */}
      <ModalFooter>
        <Button color="danger" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// export default PlotInformation;

const mapStateToProps = (state) => ({
  // isLoading: state.fetchContacts.isLoading,
  // isError: state.fetchContacts.isError,
  // Users: state.fetchContacts.Users,
  // Error: state.fetchContacts.error,

  PlotPositionsValues: state.inventory.PlotPositionsValues,
  // AssignResponse: state.fetchContacts.error,
});

const mapDispatchToPrpos = (dispatch) => {
  return {
    //   AddNew: (body, OnSuccess, OnFailure) =>
    //     dispatch(NewUser(body, OnSuccess, OnFailure)),
    ShowPlotInformation: (body, OnSuccess, OnFailure) =>
      dispatch(ShowPlotInformation(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(PlotInformation);
