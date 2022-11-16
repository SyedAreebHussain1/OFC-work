import React from "react";
import Headers from "components/Headers/Headerlead";
import Recording from "views/Contacts/helpers/Recording";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Table,
} from "reactstrap";
import validate from "../../../components/Utilities Component/ValidationWrapper";
const Viewcustomer = (props) => {
  // useEffect(() => {
  //   props.LeadUserMiddleware(body, OnSuccess, onFailure);
  // }, [true]);
  //  const OnSuccess = () => {};
  //  const onFailure = () => {
  //    window.alert("Fail");
  //  };
  //  const [body, setBody] = useState({
  //   agentid:state.id,
  //   sourceid:null,
  //   Datetime:state.date,
  // });

  const [isOpen, setIsOpen] = useState(false);

  const [clientPhone, setClientPhone] = useState("");
  const toggler = (phone) => {
    setClientPhone(phone);
    setIsOpen(!isOpen);
  };

  const [showResponseData, setResponseData] = useState(null);

  const [data, setData] = useState(null);
  let dataInArray = [];
  useEffect(() => {
    axios({
      method: "get",
      url: "http://192.168.18.121:8001/CallRecordingAPI/ShowAllAgent",
    }).then((res) => {
      if (res.data.status === true) {
        setData(res.data.response);
        dataInArray.push(data);
      } else {
      }
    });
  }, [true]);

  const [state, setState] = useState({
    id: "",
    userName: "",
    phone: "",
    date: "",
  });
  const onChange = (name, val) => {
    setState({ ...state, [name]: val });
  };

  const [signal, setSignal] = useState(false);

  const findValueInArray = (val) => {
    {
      checkFields("required");
    }
    data.forEach((element) => {
      if (element.name == val) {
        setState({
          ...state,
          id: element.Dashboarduserid,
          phone: element.phoneNo,
        });
      }
      setSignal(!signal);
      {
        gridData();
      }
    });
  };
  const gridData = () => {
    let body = {
      agentid: state.id,
      sourceid: null,
      Datetime: state.date,
    };
    axios({
      method: "post",
      url: "http://192.168.18.121:8001/CallRecordingAPI/showallleadsV2",
      data: body,
    }).then((res) => {
      if (res.data.status == true) {
        setResponseData(res.data.response);
      } else {
      }
    });
  };
  const onDelete = (val) => {
    let body = {
      status_id: 15,
      user_id: val,
    };
    axios({
      method: "put",
      url: "http://192.168.18.121:8001/CallRecordingAPI/Updateuserstatus",
      data: body,
    }).then((res) => {
      if (res.data.status == true) {
        // setResponseData(res.data.response);

        {
          gridData();
        }
      } else {
      }
    });
  };
  const [counter, setCounter] = useState(0);

  const onCheckChange = (event) => {
    if (event.target.checked) {
      setCounter(counter + 1);
    } else {
      if (counter !== 0) {
        setCounter(counter - 1);
      }
    }
  };
  const [error, setError] = useState({
    dateError: "",
  });

  const checkFields = (val) => {
    if (val === "required") {
      setError({
        ...error,
        dateError: validate("required", state.date),
      });
    }
  };
  const onReset = () => {
    setState({
      id: "",
      userName: "",
      phone: "",
      date: "",
    });
  };
  let sNo = 1;
  return (
    <>
      <Headers />
      <Recording modal={isOpen} toggle={toggler} clientPhoneNo={clientPhone} />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0"> View Customer Detail </h3>
                <CardBody>
                  <form>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <label
                            class="form-control-label"
                            for="input-username"
                          >
                            Name2
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            class="form-control"
                            placeholder="Name"
                            value={state.userName}
                            onChange={(e) =>
                              onChange("userName", e.target.value)
                            }
                            name="uName"
                          ></input>
                        </div>
                        <div className="col-lg-6">
                          <label
                            class="form-control-label"
                            for="input-username"
                          >
                            ID
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            class="form-control"
                            placeholder=""
                            value={state.id}
                            disabled
                          ></input>
                        </div>
                        <div className="col-lg-6">
                          <label
                            class="form-control-label"
                            for="input-username"
                          >
                            Phone
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            class="form-control"
                            placeholder="Phone"
                            value={state.phone}
                            disabled
                          ></input>
                        </div>
                        <div className="col-lg-6">
                          <label
                            class="form-control-label"
                            for="input-username"
                          >
                            Date
                          </label>
                          <input
                            type="date"
                            id="input-username"
                            class="form-control"
                            value={state.date}
                            onChange={(e) => onChange("date", e.target.value)}
                          ></input>
                          {error.dateError !== "" && error.dateError !== null && (
                            <small>
                              <span style={{ color: "red" }}>
                                {error.dateError}
                              </span>
                            </small>
                          )}
                        </div>
                        &nbsp;
                      </div>
                      <Button
                        color="info"
                        size="sm"
                        onClick={(e) => findValueInArray(state.userName)}
                      >
                        <span className="btn-inner--text"></span>
                        <span className="btn-inner--icon">
                          <i className="fas fa-search"></i>
                        </span>
                      </Button>
                      <Button
                        color="danger"
                        size="sm"
                        onClick={() => onReset()}
                      >
                        <span className="btn-inner--text"></span>
                        <span className="btn-inner--icon">
                          <i class="fas fa-redo-alt"></i>
                        </span>
                      </Button>
                    </div>
                  </form>
                  <div className="row align-items-center">
                    <div className="col-8"></div>
                    <div className="col-4 text-right">
                      <label class="form-control-label">
                        {counter > 0 ? counter : "N/A"} Contacts Selected
                      </label>
                    </div>
                  </div>
                </CardBody>
                <CardBody>
                  <Table className="align-items-center" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Select</th>
                        <th scope="col">S.No</th>
                        <th scope="col">Client ID</th>
                        <th scope="col">Client Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Assign by</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {showResponseData !== null &&
                        showResponseData.map((dataOption, index) => {
                          if (dataOption.Assignby !== "N/A") {
                            return (
                              <tr>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="check"
                                    onChange={(event) => onCheckChange(event)}
                                  />
                                </td>
                                <td>{sNo++}</td>
                                <td>{dataOption.user_id}</td>
                                <td>{dataOption.user_name}</td>
                                <td>{dataOption.user_email}</td>
                                <td>{dataOption.user_phone}</td>
                                <td>{dataOption.Assignby}</td>
                                <td>{dataOption.Datetime}</td>
                                <td>{dataOption.user_id}</td>
                                <td>{dataOption.status_name}</td>
                                <td>
                                  <Button
                                    color="danger"
                                    size="sm"
                                    onClick={(e) =>
                                      toggler(dataOption.user_phone)
                                    }
                                  >
                                    <span className="btn-inner--icon">
                                      <i className="ni ni-mobile-button"></i>
                                    </span>
                                  </Button>
                                  <Button color="secondary" size="sm">
                                    <span className="btn-inner--icon">
                                      <i className="fas fa-highlighter"></i>
                                    </span>
                                  </Button>
                                  <Button
                                    color="danger"
                                    size="sm"
                                    onClick={(e) =>
                                      onDelete(dataOption.user_id)
                                    }
                                  >
                                    <span className="btn-inner--icon">
                                      <i className="far fa-trash-alt"></i>
                                    </span>
                                  </Button>
                                  <Button color="info" size="sm">
                                    <span className="btn-inner--icon">
                                      <i className="ni ni-curved-next"></i>
                                    </span>
                                  </Button>
                                </td>
                              </tr>
                            );
                          }
                        })}
                    </tbody>
                  </Table>
                </CardBody>
              </CardHeader>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Viewcustomer;
