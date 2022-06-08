import { Button } from 'react-bootstrap';
import useHTTP from '../../hooks/useHTTP';
import useInput from '../../hooks/useInput';
import LoadingSpinner from '../UI/LoadingSpinner';
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

    // Logging the user***************************************************************

    let urlConfig = {
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBpSEq03ZQ1R0wVt6qjBvQ5r44vRRG2bac',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
        })
    }

    const { data, isLoading, error, request } = useHTTP(urlConfig);

    const submitFormHandler = (e) => {
        e.preventDefault();

        if (!emailIsValid || !passwordIsValid) {
            return
        }

        request();

    }

    //Setting up input error class**********************************************************
    const emailClass = emailHasError ? "form-control mb-3 border-danger" : "form-control mb-3"
    const passwordClass = passwordHasError ? "form-control border-danger mb-3" : "form-control mb-3"

    //setting button content*****************************************************************
    const btn = isLoading ? <LoadingSpinner /> : 'Log In'

    return <Modal onClose={props.onClose}>
        <form className='mb-3 form-control' onSubmit={submitFormHandler}>

            {/* Email */}
            <label htmlFor="input-email" className="form-label">Email address</label>
            <input type="email" className={emailClass} id="input-email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />

            {/* Password */}
            <label htmlFor="input-password" className="form-label">Password</label>
            <input type="password" className={passwordClass} id="input-password" onChange={passwordChangeHandler} onBlur={passwordBlurHandler} value={enteredPassword} />

            {emailHasError && <p className="text-danger">Enter valid email</p>}
            {passwordHasError && <p className="text-danger">Enter valid Password</p>}

            <Button className='btn-dark mt-3 mb-3'>{btn}</Button>
            <h6>Don't have an account? Sign-up now</h6>

        </form>
    </Modal>
}

export default Login;
