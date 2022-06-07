import { Fragment } from 'react'
import styles from './Modal.module.css'
import  ReactDOM  from 'react-dom'

//The blackscreen behind the modal
const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
}

//The modal
const ModalOverlay = (props) => {
    return <div className={styles.card}>
        {props.children}
    </div>
}

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlay'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ ModalOverlay>, document.getElementById('overlay'))}
        </Fragment>
    )
}

export default Modal;