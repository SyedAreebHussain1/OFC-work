import React, { useState, useEffect } from "react";
import { Table, CardBody, Row, Col, Input, Button } from "reactstrap";
import swal from "sweetalert";
import { FILE_DOCUMENTS_SUCCESS } from "../constant";
import store from "../../../store";
// import { GetFileDocuments } from "../action";

const TableFilePrint = ({
  fileCustomer,
  GetFileDownloadCustomers,
  FileDocuments,
  printUrl,
}) => {
  const [posts, setPosts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);

  const onSuccess = () => {};
  const onFailure = () => {};
  const OnSuccessFile = () => {};
  const OnFailureFile = (e) => {
    swal({
      title: "Sorry",
      text: e,
      icon: "warning",
      //   type: "info",
      //   className: "customSwal",

      buttons: true,
      //   color: "#716add",
    });
  };

  useEffect(() => {
    setPosts(null);
    if (fileCustomer !== null && fileCustomer !== undefined) {
      setPosts(fileCustomer?.response);
      setMetaData(fileCustomer?.metaData);
    }
  }, [fileCustomer]);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };

  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };
  const handleGetPrint = (id) => {
    FileDocuments(id, OnSuccessFile, OnFailureFile);
  };

  useEffect(() => {
    if (printUrl && printUrl?.length > 0) {
      printUrl.map((item) => {
        if (item.FilePath) {
          window.open(item.FilePath, "_blank");
        }
      });
      // let i = 0;
      // while (i < printUrl?.length) {
      //   setTimeout(() => {
      //     if (printUrl[i].FilePath) {
      //       window.open(printUrl[i].FilePath, "_blank");
      //     }
      //     i++;
      //   }, 3000);
      // }
      // dispatch(GetFileDocuments.FetchSuccess(null));
      store.dispatch({ type: FILE_DOCUMENTS_SUCCESS, payload: null });
    }
  }, [printUrl]);
  useEffect(() => {
    GetFileDownloadCustomers(pageNumber, noOfRows, onSuccess, onFailure);
  }, [pageNumber, noOfRows]);
  return (
    <>
      <CardBody>
        <Row>
          <Col lg="2" md="2" sm="4" xs="4">
            <label className="form-control-label"> Rows Per Pages </label>
            <Input
              id="exampleFormControlSelect1"
              type="select"
              onChange={(e) => onChangeNoOfRows(e.target.value)}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Input>
            <br />
          </Col>
        </Row>
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Sale Order No</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">CNIC</th>
              <th scope="col">Sold Amount</th>
              <th scope="col">Percentage</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {posts !== null && posts !== undefined ? (
              posts.map((opt, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{opt.SaleOrderNo}</td>
                    <td>{opt.tbl_lead.tbl_user.user_name}</td>
                    <td>{opt.tbl_lead.tbl_user.user_phone}</td>
                    <td>{opt.tbl_lead.tbl_user.user_email}</td>
                    <td>{opt.tbl_lead.tbl_user.CNIC}</td>
                    {/* <td>{dateFunction(opt.Datetime)}</td> */}
                    <td>{opt.SoldAmounmt?.toLocaleString("en-US")}</td>
                    <td>{`${opt.Percentage.toFixed(2)}%`}</td>
                    <td>
                      <Button
                        color="info"
                        size="sm"
                        disabled={opt.Percentage.toFixed(2) < 20}
                        onClick={(e) => handleGetPrint(opt.SaleOrderId)}
                      >
                        <span className="btn-inner--text"></span>
                        <span className="btn-inner--icon">
                          <i class="fas fa-print"></i>
                        </span>
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>
                  <h3>No data found</h3>
                </th>
                <th></th>
              </tr>
            )}
          </tbody>
        </Table>
      </CardBody>
      {/* Pagination Code */}
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li className="page-item">
            Page {pageNumber} - {metaData?.totalPages}
          </li>
        </ul>
      </nav>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" onClick={handlePrev}>
              <i class="fa fa-angle-left"></i>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" onClick={handleNext}>
              <i class="fa fa-angle-right"></i>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TableFilePrint;
