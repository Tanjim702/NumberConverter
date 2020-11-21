import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigation Items/NavigationItems'
import classes from './Toolbar.module.css'
function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <nav><NavigationItems/></nav>
        </header>
    )
}

export default Toolbar
