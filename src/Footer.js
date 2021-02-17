import React from 'react'
import './styles/Footer.css'
import home from './img/home-white.svg'

function Footer() {
    return (
        <div className="footer_container">
            <div>
                <p>100% coded and designed by Gertjan van der Toorn in 2020-2021</p>
            </div>

            <div>
                <a href="#home">
                    <img src={home} alt="" className="home_link"/>
                </a>
            </div>
            
        </div>
    )
}

export default Footer
