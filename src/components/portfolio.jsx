import React from "react";

function Realisation(props) {
    return (
        <div className="col-md-6 col-lg-4 mb-5">
            <div className="realisation">
                <img src={props.img} alt="" className="img-fluid" />
                <h3>{props.titre}</h3>
                <p>{props.resumer}</p>
                <button className="btn btn-outline-primary">
                    Voir
                </button>
                <p>Site réalisé avec {props.langue}</p>
            </div>
        </div>
    );
}


export default function realisations() {
    return (

        <>
        <picture className="banner">
                <source media="(min-width: 990px)" srcSet="/img/banner.jpg" />
                <source media="(min-width: 702px)" srcSet="/img/banner-tablette.jpg" />
                <source media="(max-width: 701px)" srcSet="/img/banner-mobile.jpg" />
                <img src="/img/banner.jpg" className="banner" />
            </picture>
            <div className="container text-center portfoliotitre">
                
                    <h2>PORTFOLIO</h2>
                    <p>Voici quelques-unes de mes réalisations.</p>
                    <div className="line"></div>
                
                <div className="row justify-content-center">
                    <Realisation img="/img/portfolio/fresh-food.jpg" titre="Fresh food" resumer="Réalisation d'un site avec commande en ligne." langue="PHP et MySQL" />
                    <Realisation img="/img/portfolio/restaurant-japonais.jpg" titre="Restaurant Akira" resumer="Réalisation d'un site vitrine." langue="WordPress" />
                    <Realisation img="/img/portfolio/espace-bien-etre.jpg" titre="Espace bien-être" resumer="Réalisation d'un site vitrine pour un praticien de bien-être." langue="HTML/CSS" />
                </div>
            </div>
        </>
    );
}