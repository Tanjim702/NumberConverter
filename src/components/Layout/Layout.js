import React from 'react'
import Aux from '../../hoc/Aux'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
function Layout(props) {
    return (
        <Aux>

     
                <Toolbar/>
                <SideDrawer/>
           
            <main style={{marginTop:'72px'}} className={classes.container}>
                    {props.children}
                </main>
        </Aux>

    )
}

export default Layout
