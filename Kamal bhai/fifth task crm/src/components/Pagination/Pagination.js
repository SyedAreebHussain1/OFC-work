import React from "react";

const Pagination = (props) => {
  const { pageNumber, handlePrev, handleNext, totalPages } = props;
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            Page {pageNumber}-{totalPages}
          </li>
        </ul>
      </nav>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" onClick={handlePrev}>
              <i className="fa fa-angle-left"></i>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={handleNext}>
              <i className="fa fa-angle-right"></i>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
