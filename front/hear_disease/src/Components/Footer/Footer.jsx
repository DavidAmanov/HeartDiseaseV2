import React from "react";
import './Footer.css'

const Footer = () => {
    return(<footer>
        <div className="footer__container">
            <div className="left">
                <span>Author David Amanov</span>
                <span>DavidAmanovIs@gmail.com</span>
                <span>https://github.com/DavidAmanov</span>
            </div>
            <span className="right">Design Sasha Gurvich</span>
            <span className="center">© 2024 David Amanov. All rights reserved</span>
        </div>
    </footer>)
}

export default Footer