import React from 'react'
import './styles/Portfolio.css'
//import './styles/ProjectInfo.css'
import SectionHeader from './SectionHeader.js'
import ProjectInfo from './ProjectInfo.js'





function Portfolio({techs_black}) {
    return (
        <div className="portfolio_container">
            <SectionHeader 
                header={"Portfolio"}
                subheader={"Discover my best projects build so far"}
            />

            <ProjectInfo/>
            
        </div>
    )
}

export default Portfolio
