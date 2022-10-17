import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from "react-redux";
import { forgetPassAction } from '../../store/action'
import { Link, useNavigate } from 'react-router-dom'


const ForgetPassword = (props) => {
    console.log('forgetpass=>', props)
    console.log('forgetpass=>', props.forgetpass)
    const [email, setEmail] = useState(null)

    const navigate = useNavigate()
    const verifyEmail = () => {
        if (email) {
            props.forgetPassAction({
                email: email
            })
        }
    }
    useEffect(() => {
        console.log(props.forgetpass?.statusCode);
        if (props.forgetpass?.statusCode == 201) {
            alert(props.forgetpass.message)
            navigate("/verifyemail");
        } else if (props.forgetpass?.statusCode == 400) {
            alert(props.forgetpass?.message)
        }
    }, [props.forgetpass])
    return (
        <div>
            <div style={{
                border: "1px solid gray",
                padding: '20px',
                width: "50%",
                height: "100%",
                marginTop: "100px",
                marginLeft: "250px",
            }}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' onChange={(text) => setEmail(text.target.value)} placeholder="Enter Email" />
                        <Form.Text className="text-muted">Our verification team vets all requests thoroughly and bases their review on a number of inputs to determine whether an account is eligible to be verified.                    </Form.Text>
                    </Form.Group>
                    <Button variant="outline-success" onClick={verifyEmail}>
                        Verify
                    </Button>
                </Form>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    forgetpass: state.forgetpass,
});
const mapDispatchToProps = (dispatch) => ({
    forgetPassAction: (data) => dispatch(forgetPassAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword)