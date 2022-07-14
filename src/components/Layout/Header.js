import { Button } from "react-bootstrap";
import styles from './Header.module.css'
import SearchBar from "./SearchBar";
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import { Route } from "react-router-dom";


const Header = (props) => {


    return <div className={styles['header-container']}>
        <h1 className="justify-item-flex-start">GoKart</h1>

        <SearchBar />

        <div>
            <Route path='login'>
                <Button onClick={props.onShowLogInModal} className={`btn-dark mx-2 ${styles['btn-log-in']}`}>Log-In</Button>
            </Route>
            <Route path='signup'>
                <Button onClick={props.onShowSignUpModal} className={`btn-dark mx-2 ${styles['btn-sign-up']}`}>SignUp</Button>
            </Route>
            <Route path='cart'>
                <CartIcon className={styles['cart-icon']} />
            </Route>
        </div>

    </div>

};

export default Header;