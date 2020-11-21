import React from 'react'
import classes from './logo.module.css'
import burgerLogo from '../../assets/images/logo.png'
function Logo() {
    return (
        <div className={classes.Logo}>
          <img src={burgerLogo} alt="myBirger" />  
        </div>
    )
}

export default Logo
