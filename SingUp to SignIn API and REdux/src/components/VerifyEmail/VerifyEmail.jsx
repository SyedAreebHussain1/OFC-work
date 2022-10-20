import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fpcodeverifyAction } from "../../store/action/index";
import { useState, useEffect } from "react";

const Verify = (props) => {
  console.log("fpcode=> props", props.fpcode);
  const [verifyCode, setVerifyCode] = useState(null);
  // console.log(verifyCode)
  const navigate = useNavigate();

  const verifying = () => {
    if (verifying) {
      props.fpcodeverifyAction({
        code: verifyCode,
      });
    }
  };
  useEffect(() => {
    // console.log(props.fpcode?.data.token);
    if (props.fpcode?.statusCode == 201) {
      alert(props.fpcode?.message);
      navigate("/resetpassword", { state: { token: props.fpcode.data.token } });
    } else if (props.fpcode?.statusCode == 404) {
      alert(props.fpcode?.message);
    }
  }, [props.fpcode]);
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "50%",
        height: "100%",
        marginTop: "100px",
        marginLeft: "250px",
      }}
    >
      <h2>Enter Verification Code</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter code</Form.Label>
          <Form.Control
            type="text"
            name="code"
            onChange={(text) => setVerifyCode(text.target.value)}
            placeholder="Enter verification code"
          />
          <Form.Text className="text-muted">
            Our verification team vets all requests thoroughly and bases their
            review on a number of inputs to determine whether an account is
            eligible to be verified.{" "}
          </Form.Text>
        </Form.Group>
        <Button variant="outline-success" onClick={verifying}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fpcode: state.fpcode,
});
const mapDispatchToProps = (dispatch) => ({
  fpcodeverifyAction: (data) => dispatch(fpcodeverifyAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Verify);
