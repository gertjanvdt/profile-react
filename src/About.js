import React from 'react'
import './styles/About.css';
import Button from './Button'
import SectionHeader from './SectionHeader'
import full_pic from './img/gvandertoorn.jpg'
import download from './img/download-black.svg'

function About() {
    return (
            <div className="about_container">
            
            < SectionHeader 
                header={"About Me"}
                subheader={"Find out more about me"}
            />

            <div className="about_grid_container">

                <img className="about_img" src={full_pic} alt="image" />

                <div className="about_text">
                    <p class="about-description">
                    In the past 10 years during my online e-commerce, tourism career
                    I have always been interested in the front end technology and
                    software development. While working in various positions I have 
                    been working closely with developers in different
                    diciplines and had a few (front end) developers in my social
                    circle. <br />
                    <br />
                    My goal is always to keep improving myself, learn new
                    technologies and develop new skills. That is why I made the
                    decision early in 2020 to start my road to become a front end
                    developer. My focus is now to specialise myself in HTML, CSS,
                    JavaScript and React. Also I have started helping a few
                    start-ups with their Shopify site and develop custom changes for
                    them. In the end my goal is to grow towards full stack
                    development. <br />

                    <br />
                    Although writing actual code and developing my own solutions is
                    new to me, I have been solving logical and technical problems
                    all throughout my career. I have a lot of experience testing,
                    analysing and translating results into solutions with a
                    methodical approach. <br />

                    <br />Download my CV here to see more of my past experience and
                    education.
                    </p>
                </div>

                <Button 
                    img={download}
                    text={"Download my CV"}
                    className="cv_download"
                />
            </div>


            
        </div>
    )
}

export default About
