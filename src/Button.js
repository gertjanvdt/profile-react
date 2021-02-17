import React from 'react'
import './styles/Button.css';

function Button( {href, img, text}) {
    return (
        <div className="button_container">
            <a  href={href}
                className="button"
                target="_blank"
            >
                <img className="button_img" src={img} alt="image"/>
                <p>{text}</p>
            </a>
        </div>
    )
}

export default Button
