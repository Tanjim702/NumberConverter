import React from 'react'
import NavigationItems from '../Navigation Items/NavigationItems'
import classes from './sideDrawe.module.css'
function SideDrawer(props) {
    return (
        <div className={classes.SideDrawer}>
            <NavigationItems/>
        </div>
    )
}

export default SideDrawer
