import React, { useEffect, useRef, useState } from "react";
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
import { connect } from "react-redux";
import ViewSupportModal from "../components/ViewSupportModal";
import Headers from "components/Headers/Header1";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import TableViewSupport from "../components/TableViewSupport";
import Pagination from "components/Pagination/Pagination";
import {
  send_Support,
  getSupportType,
  getSupportByToken,
  getSupportImages,
} from "../middleware";
import swal from "sweetalert";

const Support = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const inputFileRef = useRef(null);
  const {
    supportType,
    send_Support,
    getSupportType,
    isLoading,
    getSupportByToken,
    supportByToken,
    Response,
    Error,
    getSupportImages,
    supportImages,
  } = props;

  const [report, setReport] = useState({
    title: "",
    docs: [],
    description: "",
    support_type: 1,
  });

  const [error, setError] = useState({
    titleError: "",
    descriptionError: "",
  });

  const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState("");

  ///////////----------Pagination--------------//////////////

  let postNumber = 10;
  let paginatedPosts, total_pages;

  if (noOfRows != "") {
    postNumber = noOfRows;
  }

  const start = pageNumber * postNumber - postNumber;
  const end = start + postNumber;

  if (posts) {
    paginatedPosts = posts?.slice(start, end);
    total_pages = Math.ceil(posts.length / postNumber);
  }

  ///////////----------Functions--------------//////////////

  const onSuccess = () => {};
  const onFailure = () => {}; 
  const onSuccessSendSupport = () => {
    swal("Congratulations!", "Submit Report successfully", "success");
  };
  const onFailureSendSupport = () => {};

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  const CheckFields = (name) => {
    if (name === "title") {
      setError({
        ...error,
        titleError: validate("title", report.title),
      });
    } else if (name === "description") {
      setError({
        ...error,
        descriptionError: validate("description", report.description),
      });
    }
  };

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (total_pages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  const ToggleViewSupportModal = (id, comment) => {
    getSupportImages({ support_id: id }, onSuccess, onFailure);
    setComment(comment);
    setIsOpen(!isOpen);
  };

  const handleSendData = () => {
    let formData = new FormData();
    let file = report.docs;
    file.forEach((file) => {
      formData.append("docs", file);
    });
    formData.append("title", report.title);
    formData.append("description", report.description);
    formData.append("support_type", report.support_type);
    send_Support(formData, onSuccessSendSupport, onFailureSendSupport);
  };

  const reset = () => {
    setReport({
      title: "",
      docs: [],
      description: "",
      supportType: 1,
    });
    if (inputFileRef.current?.value) {
      inputFileRef.current.value = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (report.title !== "" && report.description !== "") {
      handleSendData();
      reset();
    } else {
      alert("Please fill all fields");
    }
  };

  const handleDelete = (name) => {
    let filteredArray = report.docs?.filter((i) => i.name !== name);
    setReport({
      ...report,
      docs: filteredArray,
    });
  };

  //////////-------useEffects--------//////////////

  useEffect(() => {
    getSupportType(onSuccess, onFailure);
    getSupportByToken(onSuccess, onFailure);
  }, [Response]);

  useEffect(() => {
    let reverseArray = supportByToken?.reverse();
    setPosts(reverseArray);
  }, [supportByToken]);

  return (
    <div>
      <Headers />
      <Container className="mt--7" fluid>
        <ViewSupportModal
          modal={isOpen}
          toggle={ToggleViewSupportModal}
          supportImages={supportImages}
          comment={comment}
        />
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0"> Support </h3>
              </CardHeader>
              <CardBody>
                <form onSubmit={handleSubmit}>
                  <div className="pl-lg-4">
                    <Row className="mb-3">
                      <Col lg="6" md="6" sm="6">
                        <Label
                          className="form-control-label"
                          for="input-username"
                        >
                          Support Type *
                        </Label>
                        <Input
                          id="exampleFormControlSelect1"
                          type="select"
                          name="support_type"
                          // onChange={(e) =>
                          //   setReport({
                          //     ...report,
                          //     support_type: e.target.value,
                          //   })
                          // }
                          disabled
                        >
                          {supportType?.map((val, index) => {
                            return (
                              <option key={index} value={val.supportTypeId}>
                                {val.support_type_name}
                              </option>
                            );
                          })}
                        </Input>
                      </Col>
                      <Col lg="6" md="6" sm="6">
                        <Label className="form-control-label" for="reporting">
                          Title *
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=""
                          name="title"
                          onBlur={() => CheckFields("title")}
                          onChange={(e) =>
                            setReport({ ...report, title: e.target.value })
                          }
                          value={report.title}
                          required
                        ></Input>
                        {error.titleError !== "" && error.titleError !== null && (
                          <small>
                            <span style={{ color: "red" }}>
                              {error.titleError}
                            </span>
                          </small>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12" md="12" sm="12">
                        <Label
                          className="form-control-label"
                          for="input-username"
                        >
                          Description *
                        </Label>
                        <textarea
                          onBlur={() => CheckFields("description")}
                          onChange={(e) =>
                            setReport({
                              ...report,
                              description: e.target.value,
                            })
                          }
                          value={report.description}
                          className="form-control mb-3"
                          rows="4"
                          cols="50"
                          name="description"
                          form="usrform"
                          required
                        ></textarea>
                        {error.descriptionError !== "" &&
                          error.descriptionError !== null && (
                            <small>
                              <div style={{ color: "red" }}>
                                {error.descriptionError}
                              </div>
                            </small>
                          )}
                        <Label
                          className="form-control-label mr-2"
                          for="input-username"
                        >
                          Upload File
                        </Label>
                        <Input
                          type="file"
                          multiple={true}
                          name="docs"
                          style={{ color: "rgba(0, 0, 0, 0)" }}
                          onChange={
                            (e) => {
                              let arr = [];
                              Array.from(e.target.files).map((file) => {
                                arr.push(file);
                              });
                              setReport({
                                ...report,
                                docs: report.docs.concat(arr),
                              });
                            }
                            // setReport({
                            //   ...report,
                            //   docs: Array.from(e.target.files),
                            // })
                          }
                          ref={inputFileRef}
                          // accept=".png, .jpg, .jpeg"
                        />
                      </Col>
                    </Row>
                    {report.docs.length > 0
                      ? report.docs.map((file, index) => {
                          return (
                            <Row key={index}>
                              <Col
                                lg="4"
                                md="6"
                                sm="12"
                                className="d-flex justify-content-between"
                              >
                                <Label for="files" className=" mt-2">
                                  {file.name}
                                </Label>
                                <i
                                  className="fas fa-trash "
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handleDelete(file.name)}
                                ></i>
                              </Col>
                            </Row>
                          );
                        })
                      : ""}
                    <Button type="submit" className="mt-5" color="success">
                      Submit Report
                    </Button>
                    <Button className="mt-5" color="info" onClick={reset}>
                      Reset
                    </Button>
                  </div>
                </form>
              </CardBody>
              <CardBody>
                <TableViewSupport
                  paginatedPosts={paginatedPosts}
                  ToggleViewSupportModal={ToggleViewSupportModal}
                  isLoading={isLoading}
                  onChangeNoOfRows={onChangeNoOfRows}
                />
                <Pagination
                  pageNumber={pageNumber}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  totalPages={total_pages}
                />
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.support.isLoading,
  isError: state.support.isError,
  Error: state.support.error,
  supportType: state.support?.SupportType,
  supportByToken: state.support?.SupportByToken,
  Response: state.support.Response,
  supportImages: state.support?.SupportImages,
});

const mapDispatchToProps = (dispatch) => ({
  send_Support: (report, onSuccess, onFailure) =>
    dispatch(send_Support(report, onSuccess, onFailure)),
  getSupportType: (onSuccess, onFailure) =>
    dispatch(getSupportType(onSuccess, onFailure)),
  getSupportByToken: (onSuccess, onFailure) =>
    dispatch(getSupportByToken(onSuccess, onFailure)),
  getSupportImages: (body, onSuccess, onFailure) =>
    dispatch(getSupportImages(body, onSuccess, onFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Support);
