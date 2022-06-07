import Modal from '../UI/Modal'

const SignUp = (props) => {
    return <Modal onClose={props.onClose}>
        <form className="row g-3">
            <div className="col-md-6">
                <label htmlFor="inputFirstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="inputFirstName" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputlastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="inputlastName" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" />
            </div>
            <div className="col-12">
                <label htmlFor="inputPassword" className="form-label">Set Password</label>
                <input type="password" className="form-control" id="inputPassword" />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" />
            </div>
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">City</label>
                <select id="inputState" className="form-select" defaultValue='Choose...'>
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

export default SignUp;