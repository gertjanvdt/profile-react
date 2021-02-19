import React from 'react'
import Slider from "react-slick";

// Import images
import lieke from './img/lieke.jpeg'
import kate from './img/kate.jpeg'
import harumi from './img/harumi.jpeg'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/ReferenceCarousel.css'
import { LinkedCamera } from '@material-ui/icons';

export default function SimpleSlider() {
    const slides = [
        {
            img: lieke, 
            title: "Lieke Fransen (Global Air Director, manager):",
            text: "He is a quick learner and dedicated to deliver good work in time, alone or with colleagues. He is an expert in the online travel business though capable to translate his experience and knowledge in other businesses. Gertjan is a great manager and trainer and creates a good atmosphere amongst the team members. "
        },
        {
            img: kate,
            title: "Kate Jaffar (Air Team Specialist, direct report):",
            text: "A motivational and inspiring leader! A manager who is also a mentor,coach and a great sounding board. Great Analytical thinking skills and always gives constructive feedback! Anyone is lucky to have Gertjan as a team member or manager!"
        },
        {
            img: harumi,
            title: "Harumi Kitano (Pricing Analyst, co-worker):",
            text: "Gertjan is dependable, efficient, and enjoyable to work with. He approaches problems with a logical and analytical perspective, and will get to the bottom of any issue effectively. His can-do attitude makes him very approachable and I know that I can rely on him for any assistance."
        }

    ]


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (        
    <div className="slider_container">
        <div className="slider_layer">
            <Slider {...settings} className="slider">
                {slides.map(slide => (
                    <div>
                        <div className="slide">
                            <img src={slide.img} alt=""/>
                            <p>{slide.title}</p>
                            <q>{slide.text}</q>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>

    );
  }