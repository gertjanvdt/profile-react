import React from 'react'
import './styles/SectionHeader.css';

function SectionHeader( {header, subheader}) {
    return (
        <div className="header_section_container">
            <div class="section_header">
                <h2 id={header}>{header}</h2>
                <p>{subheader}</p>
                <hr />
            </div>
        </div>
    )
}

export default SectionHeader
