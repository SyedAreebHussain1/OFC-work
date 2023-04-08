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
  getPaymentScheduleMiddleware,
  AddSchedule_Middleware,
  UpdateSchedule_Middleware,
} from "../middleware";
import swal from "sweetalert";
import TablePlans from "../components/PaymentSchedule/TablePlans";
import PaymentModal from "../components/PaymentSchedule/PaymentModal";
import { networkPoll } from "socket/Networkpolling";
import socketIOClient from "socket.io-client";

const PaymentScheduleSettings = (props) => {
  ///////////-----------States and Variables-------------////////////////
  const {
    _getPaymentScheduleMiddleware,
    getPaymentSchedules,
    _addSchedule_Middleware,
    _updateSchedule_Middleware,
  } = props;
  const [searching, setSearching] = useState("");
  const [walletId, setWalletId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);

  const SOCKET_URL = "https://backendcrm.squarepro.net";
  let socket = socketIOClient(`${SOCKET_URL}`, networkPoll);
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
    _getPaymentScheduleMiddleware(noOfRows, pageNumber, onSuccess, onFailure);
  };

  //////////-------useEffects--------//////////////

  useEffect(() => {
    _getPaymentScheduleMiddleware(noOfRows, pageNumber, onSuccess, onFailure);
  }, [noOfRows, pageNumber]);
  const getData = () => {
    _getPaymentScheduleMiddleware(noOfRows, pageNumber, onSuccess, onFailure);
  };
  useEffect(() => {
    setPosts(getPaymentSchedules);
  }, [getPaymentSchedules]);
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

  useEffect(() => {
    socket.on("new-plan", (data) => {
      if (pageNumber == 1) {
        let sockectData = [data];
        setPosts([...sockectData, ...posts]);
      }
    });
    return () => socket.off(`new-plan`);
  }, [posts, pageNumber]);
  return (
    <>
      <PaymentModal
        _addSchedule_Middleware={_addSchedule_Middleware}
        toggle={showChange}
        modal={showModal}
        getData={getData}
      />
      <div style={{ marginLeft: "-0%" }} className="containerques question">
        <div className="question-title">
          <h2>Payment schedule</h2>
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
              <TablePlans
                paginatedPosts={paginatedPosts}
                onChangeNoOfRows={onChangeNoOfRows}
                _updateSchedule_Middleware={_updateSchedule_Middleware}
                _addSchedule_Middleware={_addSchedule_Middleware}
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
  getPaymentSchedules: state.paymentSchedule?.getPaymentSchedules,
  getMsg: state.paymentSchedule?.apprveMsg,
});

const mapDispatchToProps = (dispatch) => ({
  _getPaymentScheduleMiddleware: (noOfRows, pageNumber, onSuccess, onFailure) =>
    dispatch(
      getPaymentScheduleMiddleware(noOfRows, pageNumber, onSuccess, onFailure)
    ),
  _addSchedule_Middleware: (body, onSuccess, onFailure) =>
    dispatch(AddSchedule_Middleware(body, onSuccess, onFailure)),
  _updateSchedule_Middleware: (body, onSuccess, onFailure) =>
    dispatch(UpdateSchedule_Middleware(body, onSuccess, onFailure)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentScheduleSettings);
