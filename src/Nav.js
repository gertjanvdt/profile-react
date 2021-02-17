import React from 'react'
import './styles/Nav.css'

// Import images
import profile_pic from './img/profile_pic.jpeg'
import download from './img/download-white.svg'
import folder from './img/folder-white.svg'
import person from './img/person-white.svg'
import phone from './img/phone-white.svg'


function Nav() {
    const navItems = [
        {
            href: "#Portfolio",
            img: folder,
            text: "Portfolio"
        },
        {
            href: "#About Me",
            img: person,
            text: "About Me"   
        },
        {
            href: "#Contact",
            img: phone,
            text: "Contact"
        },
        {
            href: "#",
            img: download,
            text: "Portfolio"
        }
    ]

    return (
        <div className="nav_container">
            <div className="nav_container_profile">
                <img src={profile_pic} alt="user-img" className="small" />
                <p className="header_name">Gertjan van der Toorn</p>
            </div>
            <div className="nav_links_container">
                <ul>
                    {navItems.map(item => (
                        <li className="nav_links_item">
                            <a href={item.href}>
                                <img src={item.img} alt="nav_item" className="nav_icon"/>
                                <p>{item.text}</p>
                            </a>
                        </li>
                    ))
                    }
                </ul>
            </div> 
        </div>
    )
}

export default Nav


