import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CardBody, Container, CardHeader, Card, Row } from "reactstrap";

import Headers from "components/Headers/Header1";
import Pagination from "components/Pagination/Pagination";
import {
  plotTransReqApproval,
  plotTransReqFinanceMiddleware,
  _plotTransReqPlotInfoByIdMiddleware,
} from "../middleware";
import TableTransferPlotRec from "../components/TableTransferPlotRec";

const TransferReqFinance = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const {
    _plotTransReqFinanceMiddleware,
    data,
    _plotTransReqApproval,
    approval_res,
    _plotTransReqPlotInfoByIdMiddleware,
  } = props;
  const [searching, setSearching] = useState({
    Transferfrom: "",
    Transferto: "",
    Request: "",
  });
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);
  ///////////----------Pagination--------------//////////////
  let postNumber = 10;
  let paginatedPosts, total_pages;

  if (noOfRows != "") {
    postNumber = noOfRows;
  }

  const start = pageNumber * postNumber - postNumber;
  const end = start + postNumber;

  if (posts) {
    paginatedPosts = posts;
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
    if (data?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };
  const handleSearch = (data) => {
    setSearching(data);
  };
  //////////-------useEffects--------//////////////

  useEffect(() => {
    _plotTransReqFinanceMiddleware(
      pageNumber,
      noOfRows,
      searching,
      onSuccess,
      onFailure
    );
  }, [pageNumber, noOfRows, searching, approval_res]);

  useEffect(() => {
    setPosts(data.response);
  }, [data.response]);
  return (
    <div>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h1 className="mb-0"> Plot Transfer Records </h1>
              </CardHeader>
              <CardBody>
                <TableTransferPlotRec
                  paginatedPosts={paginatedPosts}
                  onChangeNoOfRows={onChangeNoOfRows}
                  handleSearch={handleSearch}
                  _plotTransReqApproval={_plotTransReqApproval}
                  _plotTransReqPlotInfoByIdMiddleware={
                    _plotTransReqPlotInfoByIdMiddleware
                  }
                />
                {paginatedPosts?.length > 0 ? (
                  <Pagination
                    pageNumber={pageNumber}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    totalPages={data?.metaData?.totalPages}
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
  data: state.TransferReqFinance?.data,
  approval_res: state.TransferReqFinance?.approval_res,
});

const mapDispatchToProps = (dispatch) => ({
  _plotTransReqFinanceMiddleware: (
    pageNumber,
    noOfRows,
    searching,
    onSuccess,
    onFailure
  ) =>
    dispatch(
      plotTransReqFinanceMiddleware(
        pageNumber,
        noOfRows,
        searching,
        onSuccess,
        onFailure
      )
    ),
  _plotTransReqApproval: (id, request, remarks, onSuccess, onFailure) =>
    dispatch(plotTransReqApproval(id, request, remarks, onSuccess, onFailure)),
  _plotTransReqPlotInfoByIdMiddleware: (id, onSuccess, onFailure) =>
    dispatch(_plotTransReqPlotInfoByIdMiddleware(id, onSuccess, onFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferReqFinance);
