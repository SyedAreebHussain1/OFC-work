import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { resetPassAction } from "../../store/action/index";

const ResetPassword = (props) => {
  console.log("resetpassword=>", props);
  console.log("resetpassword=>", props.resetpassword);
  const [resetPassword, setResetPassword] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.token);

  const resetpass = () => {
    if (resetPassword) {
      props.resetPassAction({
        password: resetPassword,
      },location.state.token);
    }
  };
  useEffect(() => {
    // console.log(props.resetpassword?.statusCode);
    if (props.resetpassword?.statusCode == 200) {
      alert(props.resetpassword?.message);
      navigate("/login");
    } else if (props.resetpassword?.statusCode == 401) {
      alert(props.resetpassword?.message);
    }
  }, [props.resetpassword]);
  return (
    <div>
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
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="Password"
              name="password"
              onChange={(text) => setResetPassword(text.target.value)}
              placeholder="Enter new passeord"
            />
            <Form.Text className="text-muted">
              Our verification team vets all requests thoroughly and bases their
              review on a number of inputs to determine whether an account is
              eligible to be verified.{" "}
            </Form.Text>
          </Form.Group>
          <Button variant="outline-success" onClick={resetpass}>
            Verify
          </Button>
        </Form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  resetpassword: state.resetpassword,
});
const mapDispatchToProps = (dispatch) => ({
  resetPassAction: (data,token) => dispatch(resetPassAction(data,token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
