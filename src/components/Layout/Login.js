import { Button } from 'react-bootstrap';
import Modal from '../UI/Modal'

const Login = (props) => {
    return <Modal onClose={props.onClose}>
        <form className='mb-3 form-control'>

            {/* Email */}
            <label htmlFor="input-email" className="form-label">Email address</label>
            <input type="email" className="form-control mb-3" id="input-email" />

            {/* Password */}
            <label htmlFor="input-password" className="form-label">Password</label>
            <input type="password" className="form-control" id="input-password" />

            <Button className='btn-dark mt-3 mb-3'>Login</Button>
            <h6>Don't have an account? Sign-up now</h6>
    
        </form>
    </Modal>
}

export default Login;