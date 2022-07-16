import { Button } from "react-bootstrap";
import styles from './Header.module.css'
import SearchBar from "./SearchBar";
import { ReactComponent as CartIcon } from '../assets/cart.svg';

const Header = (props) => {


    return <div className={styles['header-container']}>
        <h1 className="justify-item-flex-start">GoKart</h1>

        <SearchBar />

        <div>
            {/* login button  */}
            <Button onClick={props.onShowLogInModal} className={`btn-dark mx-2 ${styles['btn-log-in']}`}>Log-In</Button>
            {/* signup button  */}
            <Button onClick={props.onShowSignUpModal} className={`btn-dark mx-2 ${styles['btn-sign-up']}`}>SignUp</Button>
            {/* cart button  */}
            <CartIcon className={styles['cart-icon']} />
        </div>
    </div>
};

export default Header;