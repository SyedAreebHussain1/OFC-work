import React, { useEffect, useState } from "react";
import { CardBody, Container, CardHeader, Card, Row } from "reactstrap";
import { connect } from "react-redux";

import Headers from "components/Headers/Header1";
import TableCustomerCounter from "../components/TableCustomerCounter";
import {
  getRealStateAgentDetails,
  upgradeCustomer,
  getAllVerifedCustomer,
} from "../middleware";
import FormCustomerCounter from "../components/FormCustomerCounter";
import Pagination from "components/Pagination/Pagination";


const CustomerCounter = (props) => {
  const {
    getRealStateAgentDetails,
    AgentDetails,
    upgradeCustomer,
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
    let body = {
      AgnetCnic: null,
      formno: null,
      FormStatus: 72,
    };
    getAllVerifedCustomer(body, onSuccess, onFailure);
  }, [Response]);

  useEffect(() => {
    if (verifiedCustomers?.length > 0) {
      let reverse = verifiedCustomers[0].Data?.reverse();
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
                <h3 className="mb-0"> Customer Counter </h3>
              </CardHeader>
              <CardBody>
                <FormCustomerCounter
                  getRealStateAgentDetails={getRealStateAgentDetails}
                  AgentDetails={AgentDetails}
                  upgradeCustomer={upgradeCustomer}
                />
                <TableCustomerCounter
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
  isLoading: state.customerCounter.isLoading,
  isError: state.customerCounter.isError,
  Error: state.customerCounter.error,
  Response: state.customerCounter.Response,
  AgentDetails: state.customerCounter?.AgentDetails,
  verifiedCustomers: state.customerCounter?.verifiedCustomers,
});

const mapDispatchToProps = (dispatch) => ({
  getRealStateAgentDetails: (body, onSuccess, onFailure) =>
    dispatch(getRealStateAgentDetails(body, onSuccess, onFailure)),
  getAllVerifedCustomer: (body, onSuccess, onFailure) =>
    dispatch(getAllVerifedCustomer(body, onSuccess, onFailure)),
  upgradeCustomer: (body, onSuccess, onFailure) =>
    dispatch(upgradeCustomer(body, onSuccess, onFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerCounter);
