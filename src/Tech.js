import React from 'react'
import SectionHeader from './SectionHeader'
import './styles/Tech.css'



function Tech( {techs}) {


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
