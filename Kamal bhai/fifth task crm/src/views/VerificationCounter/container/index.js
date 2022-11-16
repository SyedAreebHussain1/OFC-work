import React, { useEffect, useState } from "react";
import { CardBody, Container, CardHeader, Card, Row } from "reactstrap";
import { connect } from "react-redux";

import Headers from "components/Headers/Header1";
import TableVerificationCounter from "../components/TableVerificationCounter";
import {
  getRealStateAgentDetails,
  verificationForm,
  getAllVerifedCustomer,
} from "../middleware";
import FormVerificationCounter from "../components/FormVerificationCounter";
import Pagination from "components/Pagination/Pagination";

const VerificationCounter = (props) => {
  const {
    getRealStateAgentDetails,
    AgentDetails,
    verificationForm,
    getAllVerifedCustomer,
    Response,
    verifiedCustomers,
  } = props;
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

  useEffect(() => {
    // let body = {
    //   AgnetCnic: null,
    //   formno: null,
    //   FormStatus: 72,
    // };
    getAllVerifedCustomer(onSuccess, onFailure);
  }, [Response]);

  useEffect(() => {
    if (
      verifiedCustomers?.length > 0 &&
      verifiedCustomers !== "Data Not Found"
    ) {
      let reverse = verifiedCustomers?.reverse();
      setPosts(reverse);
    }
  }, [verifiedCustomers]);
  return (
    <div>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0"> Verification Counter </h3>
              </CardHeader>
              <CardBody>
                <FormVerificationCounter
                  getRealStateAgentDetails={getRealStateAgentDetails}
                  AgentDetails={AgentDetails}
                  verificationForm={verificationForm}
                />
                <TableVerificationCounter
                  onChangeNoOfRows={onChangeNoOfRows}
                  paginatedPosts={paginatedPosts}
                />
                {posts?.length > 0 ? (
                  <Pagination
                    pageNumber={pageNumber}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    totalPages={total_pages}
                  />
                ) : (
                  ""
                )}
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.verificationCounter.isLoading,
  isError: state.verificationCounter.isError,
  Error: state.verificationCounter.error,
  Response: state.verificationCounter.Response,
  AgentDetails: state.verificationCounter?.AgentDetails,
  verifiedCustomers: state.verificationCounter?.verifiedCustomers,
});

const mapDispatchToProps = (dispatch) => ({
  getRealStateAgentDetails: (body, onSuccess, onFailure) =>
    dispatch(getRealStateAgentDetails(body, onSuccess, onFailure)),
  getAllVerifedCustomer: (onSuccess, onFailure) =>
    dispatch(getAllVerifedCustomer(onSuccess, onFailure)),
  verificationForm: (body, onSuccess, onFailure) =>
    dispatch(verificationForm(body, onSuccess, onFailure)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerificationCounter);
