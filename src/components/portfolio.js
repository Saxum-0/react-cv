import React from "react";

function Realisation(props) {
    return (
        <div className="col-md-6 col-lg-4 mb-5">
            <div className="blocB">
                <img src={props.img} alt="" className="img-fluid" />
                <h3>{props.titre}</h3>
                <p>{props.resumer}</p>
                <button>
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
            <picture>
                <source media="(min-width: 1024px)" srcSet="src\assets\img\banner.jpg" />
                <source media="(min-width: 768px)" srcSet="src\assets\img\banner-tablette.jpg" />
                <source media="(max-width: 767px)" srcSet="src\assets\img\banner-mobile.jpg" />
                <img src="src\assets\img\banner.jpg" className="img-banner" />
            </picture>
            <div className="container">
                <div>
                    <h2>PORTFOLIO</h2>
                    <p>Voici quelques-unes de mes réalisations.</p>
                    <hr />
                </div>
                <div className="row justify-content-center">
                    <Realisation img="src\assets\img\portfolio\fresh-food.jpg" titre="Fresh food" resumer="Réalisation d'un site avec commande en ligne." langue="PHP et MySQL" />
                    <Realisation img="src\assets\img\portfolio\restaurant-japonais.jpg" titre="Restaurant Akira" resumer="Réalisation d'un site vitrine." langue="WordPress" />
                    <Realisation img="src\assets\img\portfolio\espace-bien-etre.jpg" titre="Espace bien-être" resumer="Réalisation d'un site vitrine pour un praticien de bien-être." langue="HTML/CSS" />
                </div>
            </div>
        </>
    );
}