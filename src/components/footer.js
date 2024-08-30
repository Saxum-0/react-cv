import React from "react";
import { NavLink } from "react-router-dom";


  function Footer() {
    return (
        <div className="p">
            <div className="containeur">
                <div className="row justify-content-center footer1">
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h2>John Doe</h2>
                        <span>
                            40 Rue Laure Diebold <br />
                            69009 Lyon, France<br />
                            Téléphone : 06 20 30 40 50
                        </span>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h3>Liens utiles</h3>
                        <ul className="navbar--link">
        <NavLink exact to="/">
        <li className="navbar--link-item">Home</li>
        </NavLink>
        <NavLink exact to="/blog">
        <li className="navbar--link-item">Blog</li>
        </NavLink>
        <NavLink exact to="/services">
        <li className="navbar--link-item">Services</li>
        </NavLink>
        <NavLink exact to="/portfolio">
        <li className="navbar--link-item">Réalisations</li>
        </NavLink>
        <NavLink exact to="/contact">
        <li className="navbar--link-item">Contact</li>
        </NavLink>
        <NavLink exact to="/mentions">
        <li className="navbar--link-item">Mentions</li>
        </NavLink>
      </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h6>Mes dernières réalisations</h6>
                        <ul>
                            <li>Fresh food</li>
                            <li>Restaurant Akira</li>
                            <li>Espace bien-être</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h6>Mes derniers articles</h6>
                        <ul>
                            <li>Coder son site en HTML/CSS</li>
                            <li>Vendre ses produits sur le web</li>
                            <li>Se positionner sur Google</li>
                        </ul>
                    </div>
                </div>
                <div className="credits">
                    <p>Designed by John Doe</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;