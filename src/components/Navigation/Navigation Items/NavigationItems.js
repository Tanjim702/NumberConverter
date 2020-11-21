import React from 'react'
import NavItem from './navItem'

function NavigationItems() {
    return (
        <ul>
            <NavItem link="/" active>Burger Builder</NavItem>
            <NavItem link="/">Checkout</NavItem>
        </ul>
    )
}

export default NavigationItems
