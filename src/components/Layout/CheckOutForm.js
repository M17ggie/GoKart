import useInput from '../../hooks/useInput';
import Modal from '../UI/Modal'

//First Name**********************************************
const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler
} = useInput(value => value.trim() !== '')

//Last Name**************************************************
const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler
} = useInput(value => value.trim() !== '')

// E-mail*******************************************************

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailValueHandler,
    blurHandler: emailBlurHandler
} = useInput(value => emailRegex.test(value))

//Phone-number***************************************************
const {
    value: enteredNumber,
    isValid: numberIsValid,
    hasError: numberInputHasError,
    valueChangeHandler: numberValueHandler,
    blurHandler: numberBlurHandler
} = useInput(value => value.length === 10)

// Password****************************************************
const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordValueHandler,
    blurHandler: passwordBlurHandler
} = useInput(value => value.length > 10)

//Form Submit Handler******************************************
const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!emailIsValid || !passwordIsValid) {
        console.log('error')
        return
    }
    console.log(enteredEmail, enteredPassword)
}

const CheckOutForm = () => {

    return <Modal onClose={props.onClose}>
        <form onSubmit={formSubmitHandler} className="row bg-white p-2 g-3">

            {/* First Name */}
            <div className="col-md-6">
                <label htmlFor="inputFirstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="inputFirstName" value={enteredFirstName} onBlur={firstNameBlurHandler} onChange={firstNameChangeHandler} />
            </div>

            {/* Last Name */}
            <div className="col-md-6">
                <label htmlFor="inputlastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="inputlastName" onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={enteredLastName} />
            </div>

            {/* Email */}
            <div className="col-7">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" onChange={emailValueHandler} onBlur={emailBlurHandler} value={enteredEmail} />
            </div>

            {/* Phone number */}
            <div className="col-md-6">
                <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="inputPhoneNumber" onChange={numberValueHandler} onBlur={numberBlurHandler} value={enteredNumber} />
            </div>

            {/* Password */}
            <div className="col-7">
                <label htmlFor="inputPassword" className="form-label">Set Password</label>
                <input type="password" className="form-control" id="inputPassword" onChange={passwordValueHandler} onBlur={passwordBlurHandler} value={enteredPassword} />
            </div>

            {/* Address */}
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" />
            </div>
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">City</label>
                <select id="inputState" className="form-select" defaultValue='Select---'>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                    <option>Kolkata</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
                <button className="btn btn-dark">Sign in</button>
            </div>
            <h6>Already have an account? Log in</h6>
        </form>
    </Modal>
}

export default CheckOutForm