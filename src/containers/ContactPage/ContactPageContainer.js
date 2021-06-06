import React from "react";
import './ContactPageContainer.css';
import instagram from '../../assets/images/instagram.png';
import email from '../../assets/images/gmail.png';


export default function ContactPageContainer() {
    return(
        <div className="contact-body">
            <h1 className="contact-title">Si querés contactarnos, usá alguno de los siguientes canales:</h1>
            <div className="d-flex flex-column justify-content-around align-items-center contact-icons">
                <a href="https://www.instagram.com/kusikuy.anisacate/?hl=es" target="_blank" rel='noreferrer' className="contact-links">
                    <img src={instagram} className="d-block w-25 h-25 mx-auto" alt="instagram"/>
                </a>
                <a href="mailto:email@example.com" className="contact-links">
                    <img src={email} className="d-block w-25 h-25 mx-auto" alt="email"/>
                </a>
            </div>
        </div>
    )
}