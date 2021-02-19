import React from 'react'
import './styles/References.css'
import SectionHeader from './SectionHeader.js'
import Slider from './ReferenceCarousel';

function References() {
    return (
        <div className="reference_container">
            <SectionHeader 
                header={"References"}
                subheader={"My most important references"}
            />
            <Slider />
        </div>
    )
}

export default References
