import { Button } from 'react-bootstrap';
import useInput from '../../hooks/useInput';
import Modal from '../UI/Modal'

const Login = (props) => {

    //Email validity**************************************************

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        blurHandler: emailBlurHandler
    } = useInput(value => emailRegex.test(value))

    // Password Validity********************************************************

    const {
        value: enteredPassword,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        blurHandler: passwordBlurHandler
    } = useInput(value => value.length >= 10)

    //Setting up error class
    const emailClass = emailHasError ? "form-control mb-3 border-danger" : "form-control mb-3"
    const passwordClass = passwordHasError ? "form-control border-danger mb-3" : "form-control mb-3"

    return <Modal onClose={props.onClose}>
        <form className='mb-3 form-control'>

            {/* Email */}
            <label htmlFor="input-email" className="form-label">Email address</label>
            <input type="email" className={emailClass} id="input-email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />

            {/* Password */}
            <label htmlFor="input-password" className="form-label">Password</label>
            <input type="password" className={passwordClass} id="input-password" onChange={passwordChangeHandler} onBlur={passwordBlurHandler} value={enteredPassword} />

            {emailHasError && <p className="text-danger">Enter valid email</p>}
            {passwordHasError && <p className="text-danger">Enter valid Password</p>}
            <Button className='btn-dark mt-3 mb-3'>Login</Button>
            <h6>Don't have an account? Sign-up now</h6>

        </form>
    </Modal>
}

export default Login;