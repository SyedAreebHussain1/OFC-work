import React, { useEffect, useState } from "react";
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
import Headers from "components/Headers/Header1";
import Pagination from "components/Pagination/Pagination";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillCaretUp,
  AiFillCaretDown,
  AiFillPlusCircle,
} from "react-icons/ai";
import {
  getStreets_Middleware,
  addStreet_Middleware,
  updateStreet_Middleware,
} from "../middleware";
import swal from "sweetalert";
import StreetModal from "../components/Streets/StreetModal";
import StreetsTable from "../components/Streets/StreetTable";

const Streets = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const {
    _getStreets_Middleware,
    getStreets,
    _addStreet_Middleware,
    _updateStreet_Middleware,
  } = props;
  const [searching, setSearching] = useState("");
  const [walletId, setWalletId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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
    // if (posts.metaData?.totalpages === pageNumber) {
    //   return;
    // } else {
    //   setPageNumber(pageNumber + 1);
    // }
    // console.log("CLICK NEXT SEE DATA", posts);
    if (pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };

  const ToggleViewTransactionHistory = (id) => {
    setWalletId(id);
    setIsOpen(!isOpen);
  };
  const handleSearch = () => {
    _getStreets_Middleware(noOfRows, pageNumber, onSuccess, onFailure);
  };

  //////////-------useEffects--------//////////////

  useEffect(() => {
    _getStreets_Middleware(noOfRows, pageNumber, onSuccess, onFailure);
  }, [noOfRows, pageNumber]);

  const getData = () => {
    _getStreets_Middleware(noOfRows, pageNumber, onSuccess, onFailure);
  };
  useEffect(() => {
    // console.log("DDDDDDDDDDDDDDDDDDDDD AT COMO", getPaymentBank.data);
    setPosts(getStreets);
  }, [getStreets]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    if (showAnswer == true) {
      setShowAnswer(false);
    } else {
      setShowAnswer(true);
    }
  };
  const showChange = (data) => {
    setShowModal(!showModal);

    // console.log("clicked");
  };
  // console.log("PAYMENT SCHEUDLES", getPaymentSchedules);
  return (
    <>
      <StreetModal
        _addStreet_Middleware={_addStreet_Middleware}
        toggle={showChange}
        modal={showModal}
        getData={getData}
      />
      <div style={{ marginLeft: "-0%" }} className="containerques question">
        <div className="question-title">
          <h2>Streets</h2>
          <button className="question-icons" onClick={handleClick}>
            {showAnswer ? (
              <AiFillCaretUp color="red" />
            ) : (
              <AiFillCaretDown color="#1f93ff" />
            )}
          </button>
        </div>
        <div
          style={{
            marginTop: "1%",
          }}
          className="question-answer"
        >
          {showAnswer && (
            <>
              <Row>
                <Col lg="10" md="10" sm="10" xs="10"></Col>
                <Col lg="2" md="2" sm="2" xs="2">
                  <Button
                    color="success"
                    style={{
                      color: "white",
                      justifyContent: "flex-end",
                    }}
                    onClick={() => showChange()}
                  >
                    <AiFillPlusCircle
                      size={25}
                      style={{ marginTop: -3 }}
                      color="white"
                    />{" "}
                    Add
                  </Button>
                </Col>
              </Row>
              <StreetsTable
                paginatedPosts={paginatedPosts}
                onChangeNoOfRows={onChangeNoOfRows}
                _updateStreet_Middleware={_updateStreet_Middleware}
                _addStreet_Middleware={_addStreet_Middleware}
                getData={getData}
              />
              <Pagination
                pageNumber={pageNumber}
                handlePrev={handlePrev}
                handleNext={handleNext}
                totalPages={total_pages}
              />
              {/* {paginatedPosts?.length > 0 ? (
                <Pagination
                  pageNumber={pageNumber}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  totalPages={total_pages}
                />
              ) : (
                ""
              )} */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  getStreets: state.paymentSchedule?.getStreets,
  getMsg: state.paymentSchedule?.apprveMsg,
});

const mapDispatchToProps = (dispatch) => ({
  _getStreets_Middleware: (noOfRows, pageNumber, onSuccess, onFailure) =>
    dispatch(getStreets_Middleware(noOfRows, pageNumber, onSuccess, onFailure)),
  _addStreet_Middleware: (body, onSuccess, onFailure) =>
    dispatch(addStreet_Middleware(body, onSuccess, onFailure)),
  _updateStreet_Middleware: (body, onSuccess, onFailure) =>
    dispatch(updateStreet_Middleware(body, onSuccess, onFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Streets);
