import React from 'react'
import './styles/Nav.css'
import IconButton from '@material-ui/core/IconButton';
import profile_pic from './img/profile_pic.jpeg'
import GetAppIcon from '@material-ui/icons/GetApp';
import FolderIcon from '@material-ui/icons/Folder';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Avatar from '@material-ui/core/Avatar';


function Nav() {
    const navItems = [
        {
            href: "#Portfolio",
            img: <FolderIcon />,
            text: "Portfolio"
        },
        {
            href: "#About Me",
            img: <PersonIcon/>,
            text: "About Me"   
        },
        {
            href: "#Contact",
            img: <PhoneIphoneIcon />,
            text: "Contact"
        },
        {
            href: "#",
            img: <GetAppIcon /> ,
            text: "Portfolio"
        }
    ]

    return (
        <div className="nav_container">
            <div className="nav_container_profile">
                <Avatar src={profile_pic} />
                <p className="header_name">Gertjan van der Toorn</p>
            </div>
            <div className="nav_links_container">
                <ul>
                    {navItems.map(item => (
                        <li className="nav_links_item">
                            <IconButton href={item.href}>
                               {item.img}
                            </IconButton>
                        </li>
                    ))
                    }
                </ul>
            </div> 
        </div>
    )
}

export default Nav


