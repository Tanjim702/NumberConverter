import React from 'react'
import classes from './Button.module.css'
function Button(props) {
    const classd = [classes.Button, classes[props.btnType]].join(' ')
    return (
        <button className={classd} onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default Button
