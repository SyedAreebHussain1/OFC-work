import jsPDF from "jspdf";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { CardBody, CardHeader, Card, Row, Col } from "reactstrap";

function Positioning(props) {
  const location = useLocation();
  // console.log("LOCATION AT POSITIONING COMPONENT", location.state);
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

                  {/* <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Standard
                          </label>



                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <input
                            disabled={!position.normal}
                            checked={position.normal}
                            type="checkbox"
                            name="period"

                            // hidden={hide}
                            id='ck'
                          // onChange={handle}

                          />
                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Special Location (at 10% Premium)
                          </label>



                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <input
                            disabled={true}
                            type="checkbox"
                            name="period"
                            defaultValue
                            // hidden={hide}
                            id='ck'
                          // onChange={handle}

                          />
                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Park/Green area facing at 10% Premium
                          </label>



                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <input

                            type="checkbox"
                            name="period"
                            disabled={!position.facing}
                            checked={position.facing}
                           
                            id='ck'
                          />
                        </Col>



                      </Row>
                      <br />
                      <Row>
                        <Col lg="2" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Boulevard Facing at 10% premium
                          </label>



                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <input
                            disabled={true}
                            type="checkbox"
                            name="period"
                            defaultValue
                            // hidden={hide}
                            id='ck'
                          // onChange={handle}

                          />
                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Corner at 10% premium
                          </label>



                        </Col>
                        <Col lg="1" md="6" sm="6">
                          <input

                            type="checkbox"
                            name="period"
                            disabled={!position.corner}
                            checked={position.corner}
                            id='ck'

                          />
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            &nbsp; &nbsp; 10%
                          </label>
                        </Col>
                        <Col lg="1" md="6" sm="6">
                          <input
                            disabled={true}
                            type="checkbox"
                            name="period"
                            defaultValue
                           
                            id='ck'
                         

                          />
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            &nbsp; &nbsp; 20%
                          </label>
                        </Col>
                        <Col lg="1" md="6" sm="6">
                          <input
                            disabled={true}
                            type="checkbox"
                            name="period"
                            defaultValue
                           
                            id='ck'
                         
                          />
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            &nbsp; &nbsp; 30%
                          </label>
                        </Col>
                        <Col lg="1" md="6" sm="6">
                          <input
                            disabled={true}

                            type="checkbox"
                            name="period"
                            defaultValue
                            id='ck'
                          />
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            &nbsp; &nbsp; 40%
                          </label>
                        </Col>

                      </Row>
                      <br />
                      <Row>
                        <Col lg="2" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            West Open
                          </label>



                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <input
                            disabled={true}

                            type="checkbox"
                            name="period"
                            defaultValue

                            id='ck'

                          />
                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Multiple Location Facing
                          </label>



                        </Col>
                        <Col lg="5" md="6" sm="6">

                          <input
                            type="text"
                            id="input-username"
                            className="form-control"
                            placeholder=""
                            disabled={true}
                          
                          ></input>
                        </Col>

                      </Row>

                      <br /><br />
                      <Row>
                        <Col lg="2" md="6" sm="6">
                          <label
                            style={{ fontWeight: 'bold' }}
                            className="form-control-label"
                            for="input-username"
                          >
                            Plot (Residential)
                          </label>



                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <input

                            type="checkbox"
                            name="period"
                            disabled={!box.box1}
                            checked={box.box1}

                          />
                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <label
                            style={{ fontWeight: 'bold' }}
                            className="form-control-label"
                            for="input-username"
                          >
                            Commercial Plot
                          </label>



                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <input

                            type="checkbox"
                            name="period"
                            disabled={!box.box2}
                            checked={box.box2}

                             id='ck'
                         

                          />
                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <label
                            style={{ fontWeight: 'bold' }}
                            className="form-control-label"
                            for="input-username"
                          >
                            Any other Category
                          </label>

                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <input
                            disabled={true}
                            type="checkbox"
                            name="period"
                            defaultValue
                            
                            id='ck'
                        
                          />
                        </Col>

                      </Row>
                      <br />
                      <br />
                      <Row>
                        <Col lg="2" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"

                          >
                            120 Sq. yards
                          </label>



                        </Col>
                        <Col lg="1" md="6" sm="6">
                          <input
                            disabled={!cat.cat2}
                            checked={cat.cat2}
                            type="checkbox"
                            name="period"
                            defaultValue
                           
                            id='ck'
                        

                          />
                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            240 Sq. yards
                          </label>

                        </Col>
                        <Col lg="1" md="6" sm="6">
                          <input
                            checked={cat.cat1}
                            disabled={!cat.cat1}
                            type="checkbox"
                            name="period"
                            defaultValue
                            id='ck'

                          />
                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            500 Sq. yards
                          </label>

                        </Col>
                        <Col lg="1" md="6" sm="6">
                          <input
                            checked={cat.cat3}
                            disabled={!cat.cat3}
                            type="checkbox"
                            name="period"
                            defaultValue
                            id='ck'
                          />
                        </Col>
                        <Col lg="2" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            1000 Sq. yards
                          </label>
                        </Col>

                        <Col lg="1" md="6" sm="6">
                          <input
                            checked={cat.cat4}
                            disabled={!cat.cat4}
                            type="checkbox"
                            name="period"
                            defaultValue
                          
                            id='ck'
                          /> */}
                  {/* </Col> */}
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
