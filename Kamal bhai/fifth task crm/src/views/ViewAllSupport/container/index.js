import React, { useEffect, useState } from "react";
import {
  CardBody,
  Container,
  CardHeader,
  Card,
  Row,
  Col,
  Input,
  Label,
} from "reactstrap";
import { connect } from "react-redux";
import moment from "moment";

import Headers from "components/Headers/Header1";
import ViewAllSupportModal from "../components/ViewAllSupportModal";
import UpdateStatusModal from "../components/UpdateStatusModal";
import Pagination from "components/Pagination/Pagination";
import TableViewAllSupport from "../components/TableViewAllSupport";
import {
  getAllSupport,
  getStatus,
  updateSupportStatus,
  getSupportFiles,
} from "../middleware";

const ViewAllSupport = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const {
    getAllSupport,
    AllSupports,
    isLoading,
    getStatus,
    Status,
    updateSupportStatus,
    Response,
    getSupportFiles,
    supportFiles,
  } = props;

  const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [complainId, setComplainId] = useState();
  const [noOfRows, setnoOfRows] = useState("");
  const [reverseArray, setReverseArray] = useState([]);
  const [filteration, setFilteration] = useState({
    date: "",
    byStatus: "",
  });

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

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
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
  const ToggleViewAllSupportModal = (id, comment) => {
    getSupportFiles({ support_id: id }, onSuccess, onFailure);
    setComment(comment);
    setIsOpen(!isOpen);
  };

  const ToggleUpdateStatusModal = (val) => {
    setComplainId(val?.support_id);
    setIsUpdateModalOpen(!isUpdateModalOpen);
  };

  //////////-------useEffects--------//////////////
  
  useEffect(() => {
    let filter = reverseArray?.filter((i) => {
      let splitDate = i.created_date.split("T");
      let date = splitDate[0];
      if (filteration.byStatus !== "" && filteration.date === "") {
        return i.supportStatus === filteration.byStatus;
      } else if (filteration.date !== "" && filteration.byStatus === "") {
        return date === filteration.date;
      } else if (filteration.byStatus !== "" && filteration.date !== "") {
        return (
          i.supportStatus === filteration.byStatus && date === filteration.date
        );
      } else {
        return i
      }
    });
    setPosts(filter)
    // if (filteration.byStatus !== "" && filteration.date === "") {
    //   let byStatusArray = reverseArray?.filter(
    //     (i) => i.supportStatus === filteration.byStatus
    //   );
    //   setPosts(byStatusArray);
    // } else if (filteration.date !== "" && filteration.byStatus === "") {
    //   let byDateArray = reverseArray?.filter((i) => {
    //     let splitDate = i.created_date.split("T");
    //     let date = splitDate[0];
    //     return date === filteration.date;
    //   });
    //   setPosts(byDateArray);
    // } else if (filteration.byStatus !== "" && filteration.date !== "") {
    //   let filteredArray = reverseArray?.filter((i) => {
    //     let splitDate = i.created_date.split("T");
    //     let date = splitDate[0];
    //     return (
    //       i.supportStatus === filteration.byStatus && date === filteration.date
    //     );
    //   });
    //   setPosts(filteredArray);
    // } else {
    //   setPosts(reverseArray);
    // }
  }, [reverseArray, filteration]);
  useEffect(() => {
    setReverseArray(AllSupports); //now data comes reverse from backend so i removed reverse method from front-end on only this api
  }, [AllSupports]);

  useEffect(() => {
    getAllSupport(onSuccess, onFailure);
    getStatus(onSuccess, onFailure);
  }, [Response]);

  return (
    <div>
      <Headers />
      <Container className="mt--7" fluid>
        <ViewAllSupportModal
          modal={isOpen}
          toggle={ToggleViewAllSupportModal}
          supportImages={supportFiles || []}
          comment={comment}
        />
        <UpdateStatusModal
          modal={isUpdateModalOpen}
          toggle={ToggleUpdateStatusModal}
          status={Status || []}
          complainId={complainId}
          updateSupportStatus={updateSupportStatus}
        />
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0"> View All Support </h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="4" md="4" sm="6">
                    <Label className="form-control-label" for="input-username">
                      Status
                    </Label>
                    <Input
                      id="exampleFormControlSelect1"
                      type="select"
                      onChange={(e) =>
                        setFilteration({
                          ...filteration,
                          byStatus: e.target.value,
                        })
                      }
                      value={filteration.byStatus}
                    >
                      <option value="">Select Status</option>
                      {Status?.map((val, index) => {
                        return (
                          <option key={index} value={val.status_name}>
                            {val.status_name}
                          </option>
                        );
                      })}
                    </Input>
                  </Col>
                  <Col lg="4" md="4" sm="6" xs="12">
                    <Label className="form-control-label"> Date :</Label>
                    <Input
                      type="date"
                      id="input-username"
                      className="form-control"
                      onChange={(e) =>
                        setFilteration({
                          ...filteration,
                          date: e.target.value,
                        })
                      }
                      max={moment().format("YYYY-MM-DD")}
                    ></Input>
                  </Col>
                </Row>
              
                <TableViewAllSupport
                  onChangeNoOfRows={onChangeNoOfRows}
                  paginatedPosts={paginatedPosts}
                  ToggleViewAllSupportModal={ToggleViewAllSupportModal}
                  ToggleUpdateStatusModal={ToggleUpdateStatusModal}
                  isLoading={isLoading}
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
  isLoading: state.viewAllSupport.isLoading,
  isError: state.viewAllSupport.isError,
  Error: state.viewAllSupport.error,
  AllSupports: state.viewAllSupport?.AllSupports,
  Status: state.viewAllSupport?.Status,
  Response: state.viewAllSupport.Response,
  supportFiles: state.viewAllSupport?.SupportFiles,
});

const mapDispatchToProps = (dispatch) => ({
  getAllSupport: (onSuccess, onFailure) =>
    dispatch(getAllSupport(onSuccess, onFailure)),
  getStatus: (onSuccess, onFailure) =>
    dispatch(getStatus(onSuccess, onFailure)),
  updateSupportStatus: (body, onSuccess, onFailure) =>
    dispatch(updateSupportStatus(body, onSuccess, onFailure)),
  getSupportFiles: (body, onSuccess, onFailure) =>
    dispatch(getSupportFiles(body, onSuccess, onFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllSupport);
