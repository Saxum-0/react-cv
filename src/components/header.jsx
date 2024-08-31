import React from "react";
import { useState } from "react";



function Header () {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <div className="bg-dark sticky-top">
            <nav className={`navbar ${showLinks ? "shownav" : "hide-nav" } `}>
            
                <a href='/' className="navbar-brand text-light">
                    JOHN DOE
                </a>
            
                <ul className="navbar__links">
                <li><a href="/" className="text-light text-decoration-none navbar__link">
                ACCUEIL
                </a></li>
                <li><a href="/services" className="text-light text-decoration-none navbar__link">
                SERVICES
                </a></li>
                <li><a href="/portfolio" className="text-light text-decoration-none navbar__link">
                REALISATIONS
                </a></li>
                <li><a href="/blog" className="text-light text-decoration-none navbar__link">
                BLOG
                </a></li>
                <li><a href="/contact" className="text-light text-decoration-none navbar__link">
                ME CONTACTER
                </a></li>
                </ul>
                <button className="navbar-burger btn btn-link" onClick={handleShowLinks}>
                    <span className="burger_bar"></span>
                </button>

                
            </nav>
            
            </div>
    );
}
export default Header;