import { Button } from "react-bootstrap";
import styles from './Header.module.css'
import SearchBar from "./SearchBar";
import {ReactComponent as CartIcon} from '../../store/cart.svg'

const Header = () => {
    // "container-fluid d-flex flex-row justify-content-evenly align-items-center mt-3"
    return <div className={styles['header-container']}>
        <h1 className="justify-item-flex-start">GoKart</h1>

        <SearchBar />

        <div>
            <Button className={`btn-dark mx-2 ${styles['btn-log-in']}`}>Log-In</Button>
            <Button className={`btn-dark mx-2 ${styles['btn-sign-up']}`}>SignUp</Button>
            <CartIcon className={styles['cart-icon']} />
        </div>
    </div>

};

export default Header;