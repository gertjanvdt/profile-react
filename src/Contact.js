import React from 'react'
import './styles/Contact.css';
import SectionHeader from './SectionHeader'
import Button from './Button';
import email from "./img/email.svg"
import github from "./img/github-sign.svg"
import linkedin from "./img/linkedin.svg"
import facebook from "./img/facebook.svg" 


function Contact() {
    const contacts = [
        {
            href: "mailto:gertjanvdt@gmail.com.com",
            img: email,
            text: "Send me an email."
        },
        {
            href: "https://github.com/gertjanvdt",
            img: github,
            text: "View all my code."
        },
        {
            href: "https://www.linkedin.com/in/gvandertoorn/",
            img: linkedin,
            text: "Let's grow our network on LinkedIn."
        },
        {
            href: "https://www.facebook.com/gertjan83/",
            img: facebook,
            text: "If you'd like to be social."
        }
    
    ]

    return (
        <div className="contact_container">
            <SectionHeader 
                header={"Contact"}
                subheader={"Let's connect! There are many ways to get in touch with me:"}
            />
            <div className="contact_options">
                {contacts.map(item => (
                    <Button
                    href={item.href}
                    img={item.img}
                    text={item.text}
                    />

                ))}
            </div>
            
        </div>
    )
}

export default Contact
