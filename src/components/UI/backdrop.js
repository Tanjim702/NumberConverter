import React from 'react'
import classes from './UI.module.css'
function Backdrop({show, removeModal}) {
    return (
        <div>
            {show? <div onClick={removeModal} className={classes.Backdrop}></div>:null}
        </div>
    )
}

export default Backdrop
