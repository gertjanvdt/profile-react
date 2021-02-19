import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import './styles/Footer.css'
import home from './img/home-white.svg'

function Footer() {
    return (
        <div className="footer_container">
            <div>
                <p>100% coded and designed by Gertjan van der Toorn in 2020-2021</p>
            </div>

            <div>
                <IconButton href="#home"  style={ {backgroundColor: "white"} }>
                    <HomeIcon style={{ fill: 'white' }, {fontSize: 40 }}/>
                </IconButton>
            </div>
            
        </div>
    )
}

export default Footer
