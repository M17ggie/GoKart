import { Button } from "react-bootstrap";
import styles from './Header.module.css'
import SearchBar from "./SearchBar";
import { ReactComponent as CartIcon } from '../assets/cart.svg'
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Header = () => {

    const [showLogInForm, setShowLogInForm] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false)

    //To show log-in form
    const showLogInHandler = () => {
        setShowLogInForm(true)
    }

    //To show sign-up form
    const showSignUpHandler = () => {
        setShowSignUpForm(true)
    }

    return <div className={styles['header-container']}>
        <h1 className="justify-item-flex-start">GoKart</h1>

        <SearchBar />

        <div>
            <Button onClick={showLogInHandler} className={`btn-dark mx-2 ${styles['btn-log-in']}`}>Log-In</Button>
            <Button onClick={showSignUpHandler} className={`btn-dark mx-2 ${styles['btn-sign-up']}`}>SignUp</Button>
            <CartIcon className={styles['cart-icon']} />
        </div>

        {showLogInForm && <Login />}
        {showSignUpForm && <SignUp />}
    </div>

};

export default Header;