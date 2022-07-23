import useInput from "../../hooks/useInput";
import useAuthentication from "../../hooks/useAuth";
import LoadingSpinner from "../UI/LoadingSpinner";
import Modal from "../UI/Modal";
import { app } from "../../firebaseConfig";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignUp = (props) => {
  //   let auth = getAuth();

  //   const [error, setError]=useState(null)

  // E-mail validity*******************************************************

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailValueHandler,
    blurHandler: emailBlurHandler,
  } = useInput((value) => emailRegex.test(value));

  // Password validity****************************************************
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordValueHandler,
    blurHandler: passwordBlurHandler,
  } = useInput((value) => value.length >= 10);

  // let urlConfig = {
  //     url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBpSEq03ZQ1R0wVt6qjBvQ5r44vRRG2bac',
  //     method: 'POST',
  //     headers: {
  //         'content-type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //         email: enteredEmail,
  //         password: enteredPassword,
  //         returnSecureToken: true
  //     })
  // }

  // const { isLoading, data, error, request } = useHTTP();

  //custom hook useAuthentication*****************************
  const { isLoading, data, error, request } = useAuthentication(
    enteredEmail,
    enteredPassword
  );

  //Form Submit Handler******************************************
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!emailIsValid || !passwordIsValid) {
      console.log("error");
      return;
    }

    // creating user using custom hook ***********************
    request(enteredEmail, enteredPassword);

    console.log(error)
    console.log(data)

    // creating new user using firebase *********************************
    // createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch(setError);

    // request(urlConfig)

    //Signing up the user

    // fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBpSEq03ZQ1R0wVt6qjBvQ5r44vRRG2bac',
    //     {
    //         method: 'POST',
    //         //To convert into JSON format bc that is what the server requires.
    //         body: JSON.stringify({
    //             email: enteredEmail,
    //             password: enteredPassword,
    //             returnSecureToken: true
    //         }),
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    //     }).then(res => {

    //         //If response is okay, else we throw a error
    //         if (res.ok) {
    //             console.log(res.status, 'User signed in')
    //         } else {
    //             // response data returns promise
    //             return res.json(data => {
    //                 //show error modal
    //                 console.log(data)
    //             })
    //         }
    //     })
  };

  const emailClass = emailInputHasError
    ? "form-control border-danger"
    : "form-control";
  const passwordClass = passwordInputHasError
    ? "form-control border-danger"
    : "form-control";

  //button Loading state
  const btn = isLoading ? <LoadingSpinner /> : "Sign Up";

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={formSubmitHandler} className="row bg-white p-2 g-3">
        {/* Email */}
        <div className="col-7">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={emailClass}
            id="inputEmail"
            onChange={emailValueHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
        </div>

        {/* Password */}
        <div className="col-7">
          <label htmlFor="inputPassword" className="form-label">
            Set Password
          </label>
          <input
            type="password"
            className={passwordClass}
            id="inputPassword"
            onChange={passwordValueHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
        </div>

        <div className="col-12">
          {emailInputHasError && (
            <p className="text-danger">Please enter valid email</p>
          )}
          {passwordInputHasError && (
            <p className="text-danger">
              Password must be atleast 10 characters long
            </p>
          )}
          {error && (
            <p className="text-danger">
              Email already exists, log in to your account!
            </p>
          )}
          {data && (
            <p className="text-success">
              Account created! Log in to continue shopping
            </p>
          )}
          <button type="submit" className="btn btn-dark">
            {btn}
          </button>
        </div>
        <h6>Already have an account? Log in</h6>
      </form>
    </Modal>
  );
};

export default SignUp;
