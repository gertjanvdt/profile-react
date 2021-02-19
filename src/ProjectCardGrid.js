import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './styles/ProjectCard.css'

function ProjectCard({background, skills, code, link}) {
    return (
        <div className="card_container">
            <img src={background} alt="background_img"/>
            <div className="card_overlay_container">
                <div className="card_skills">
                    <ul>
                        {skills.map(item => {
                            <li>
                                <img class="tech" src={item} alt="skill_img" />
                            </li>
                        })}

                    </ul>
                </div>
                <div className="card_buttons">
                    <Button variant="contained" color="white" href={code}>View Code</Button>
                    <Button variant="contained" color="white" href={link}>View Live</Button>
                </div>


            </div>

        </div>
    )
}

export default ProjectCard
