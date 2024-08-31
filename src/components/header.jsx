import React from "react";
import { Link } from "react-router-dom";


function Header () {
    return (
        <div className="navbar navbar-expand-lg bg-dark sticky-top">
            <div className="container-fluid ms-4">
                <a href='/' className="navbar-brand text-light">
                    JOHN DOE
                </a>
            </div>
            <nav className="navbar--link navbar me-5 col-md-4">
                <Link to="/" className="text-light text-decoration-none">Accueil
                </Link>
                <Link to="/services" className="text-light text-decoration-none">Services</Link>
                <Link exact to="/portfolio" className="text-light text-decoration-none">
                Réalisations
                </Link>
                <Link exact to="/blog" className="text-light text-decoration-none">
                Blog
                </Link>
                <Link exact to="/contact" className="text-light text-decoration-none">
               contacter
                </Link>
            </nav>
        </div>
    );
}
export default Header;