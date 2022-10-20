import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { verification } from "../../store/action/index"
import { useState, useEffect } from 'react';


const Verify = (props) => {
    console.log('Verify props', props)
    console.log('Verify props', props.verify)
    const [verifyCode, setVerifyCode] = useState(null)
    // console.log(verifyCode)
    const navigate = useNavigate()

    const verifying = () => {
        if (verifying) {
            props.verification({
                code: verifyCode
            })
        } else if (props.verify == null) {
            alert('Bad Request')
            setVerifyCode('')
        }
    }
    useEffect(() => {
        // console.log(props.verify?.statusCode);
        if (props.verify?.statusCode == 201) {
            alert(props.verify.message)
            navigate("/login");
        } else if (props.verify?.statusCode == 400) {
            alert(props.verify?.message)
        }
    }, [props.verify])
    return (
        <div style={{
            border: "1px solid gray",
            padding: '20px',
            width: "50%",
            height: "100%",
            marginTop: "100px",
            marginLeft: "250px",
        }}>
            <h2>Verification</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Enter verification code</Form.Label>
                    <Form.Control type="text" name='code' onChange={(text) => setVerifyCode(text.target.value)} placeholder="Enter verification code" />
                    <Form.Text className="text-muted">
                        Our verification team vets all requests thoroughly and bases their review on a number of inputs to determine whether an account is eligible to be verified.                    </Form.Text>
                </Form.Group>
                <Button variant="outline-success" onClick={verifying}>
                    Verify
                </Button>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    verify: state.verify,
});
const mapDispatchToProps = (dispatch) => ({
    verification: (data) => dispatch(verification(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Verify)