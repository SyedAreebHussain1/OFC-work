import jsPDF from "jspdf";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { CardBody, CardHeader, Card, Row, Col } from "reactstrap";

function Positioning(props) {
  const location = useLocation();

  // For CheckBoxs of Positioning
  const [box, setBox] = useState({
    box1: false,
    box2: false,
  });
  const [cat, setCat] = useState({
    cat1: false,
    cat2: false,
    cat3: false,
    cat4: false,
  });

  const [position, setPosition] = useState({
    corner: false,
    nexttocorner: false,
    normal: false,
    facing: false,
  });

  useEffect(() => {
    if (props.Position !== null && props.Position !== undefined) {
      for (let i = 0; i < props.Position; i++) {}
    }
  }, [props.Position]);

  useEffect(() => {
    if (location.state.PlotType_id === 2) {
      setBox({
        box1: true,
      });
    } else if (location.state.PlotType_id === 1) {
      setBox({
        box2: true,
      });
    }
  }, [location.state.PlotType_id]);

  useEffect(() => {
    if (location.state.Category_id === 2) {
      setCat({
        cat1: true,
      });
    } else if (location.state.Category_id === 1) {
      setCat({
        cat2: true,
      });
    } else if (location.state.Category_id === 3) {
      setCat({
        cat3: true,
      });
    } else if (location.state.Category_id === 4) {
      setCat({
        cat4: true,
      });
    }
  }, [location.state.Category_id]);

  useEffect(() => {
    if (location.state.Position_id === 1) {
      setPosition({
        corner: true,
      });
    } else if (location.state.Position_id === 2) {
      setPosition({
        nexttocorner: true,
      });
    } else if (location.state.Position_id === 3) {
      setPosition({
        normal: true,
      });
    } else if (location.state.Position_id === 4) {
      setPosition({
        facing: true,
      });
    }
  }, [location.state.Category_id]);

  useEffect(() => {
    props.ShowAllPositions(onSuccess, onFailure);
    let plot = {
      Plotid: props.Plotid,
    };
    props.ShowPlotPositions(plot, onSuccess, onFailure);
  }, [true]);

  const onSuccess = () => {};
  const onFailure = () => {};

  const [disabled, setDisabled] = useState(false);
  const [disabledd, setDisabledd] = useState(true);
  const [hide, setHide] = useState(false);

  return (
    <div>
      <Card style={{ margin: "10px" }} className="shadow">
        <CardHeader className="border-0">
          <h3 className="mb-0"> Positioning </h3>
          <CardBody>
            <form>
              <div className="pl-lg-4">
                <Row>
                  {props.AllPositions !== null &&
                  props.AllPositions !== undefined
                    ? props.AllPositions.map((posts, index) => {
                        return (
                          <Col lg="4" md="6" sm="6" xs="4">
                            <label
                              className="form-control-label"
                              for="input-username"
                            >
                              {posts.PositionName}
                            </label>

                            <input
                              disabled={!position.normal}
                              checked={props.Position?.some((i) => {
                                return i.pos_id === posts.pos_id;
                              })}
                              type="checkbox"
                              name="period"
                              // hidden={hide}
                              id="ck"
                              // onChange={handle}
                            />
                          </Col>
                        );
                      })
                    : ""}
                </Row>
              </div>
            </form>
          </CardBody>
        </CardHeader>
      </Card>
    </div>
  );
}

export default Positioning;
