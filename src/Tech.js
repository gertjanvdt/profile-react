import React from 'react'
import SectionHeader from './SectionHeader'
import './styles/Tech.css'


// Images import
import html from './img/html-5-black.svg'
import css from "./img/css-3-black.svg"
import js from "./img/javascript-2-black.svg"
import reactlogo from "./img/react-2-black.svg"
import bootstrap from "./img/bootstrap-4-black.svg"
import api from "./img/api-black.svg"
import php from "./img/php-black.svg"
import sql from "./img/mysql-black.svg"
import docker from "./img/docker-black.svg"



function Tech() {
    const techs = [html, css, js, reactlogo, bootstrap, api, php, sql, docker ]


    return (
        <div className="tech_container">
            <SectionHeader 
                header={"Technologies"}
                subheader={"I have experience working with these technologies:"}
            />

            <div>
                <ul>
                {techs.map(item => (
                    <li><img src={item} alt="" className="tech_img"/> </li>
                ))}
                </ul>
            </div>
            
        </div>
    )
}

export default Tech
