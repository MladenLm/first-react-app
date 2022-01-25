import React from "react";
import myImage from "../img/me-img.jpg"
import mail from "../img/Button.png"
import ln from "../img/Button (1).png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={myImage} alt="Photo of me" className="nav--photo"/>
            <h1>Mladen Lamešević</h1>
            <h3>Frontend Developer</h3>
            <p>mladenlamesevic.com</p>
            <a className="nav--ln" href="https://www.linkedin.com/in/mladenlamesevic/"><img src={ln} /></a>
            <a className="nav--mail" href="mailto:mladenlamesevic@gmail.com"><img src={mail} /></a>
        </nav>
    );
}