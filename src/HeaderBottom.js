import React from 'react'
import './styles/HeaderBottom.css'
import down_arrow from './img/down-arrow.svg'

function HeaderBottom() {
    return (
        <div className="header_bottom_container">
            <div class="header-bottom-container">
                <h3>Front End Developer</h3>
                <p>Driven to create great front end solutions</p>
                <a href="#portfolio" class="header_action_button">See my work</a>
            </div>
            <div class="header_down_arrow">
                <a href="#portfolio">
                <img src={down_arrow} alt="" />
                </a>
            </div>      
        </div>
    )
}

export default HeaderBottom
