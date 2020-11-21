import React from 'react'
import Aux from '../../hoc/Aux'
import Backdrop from './backdrop'
import classes from './UI.module.css'

function Modal(props) {
    return (
        <Aux>
            
            <Backdrop removeModal={props.removeModal} show={props.show} />
            <div style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}
                className={classes.Modal}>
                {props.children}
            </div>
        </Aux>

    )
}

export default Modal
