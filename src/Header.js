import React from 'react'
import Nav from './Nav.js'
import HeaderBottom from './HeaderBottom.js'
import './styles/Header.css'

function Header() {
    return (
        <div className="header_container">
            <Nav/>
            <HeaderBottom />
        </div>
    )
}

export default Header
