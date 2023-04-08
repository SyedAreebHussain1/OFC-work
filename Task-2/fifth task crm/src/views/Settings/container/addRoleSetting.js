import React, { useEffect, useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import AddRole from "views/AddRole/container";

const AddRoleSetting = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => {
    if (showAnswer == true) {
      setShowAnswer(false);
    } else {
      setShowAnswer(true);
    }
  };

  return (
    <>
      <div style={{ marginLeft: "-0%" }} className="containerques question">
        <div className="question-title">
          <h2>Add Role Setting</h2>
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
          {showAnswer && <AddRole />}
        </div>
      </div>
    </>
  );
};

export default AddRoleSetting;
