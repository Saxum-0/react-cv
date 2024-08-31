import React from "react";

function Service(props) {
    return (
        <div className="offre col-md-6 col-lg-4 mb-5">
            <div className="icone">
                <img src={props.img} alt="" className="img-fluid" />
                <h3>{props.titre}</h3>
                <p>{props.resumer}</p>
            </div>
        </div>
    );
}

export default function ServiceContain() {
    return (
        <>
            <picture>
                <source media="(min-width: 1024px)" srcSet="/img/banner.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/banner-tablette.jpg" />
                <source media="(max-width: 767px)" srcSet="/img/banner-mobile.jpg" />
                <img src="src/img/banner.jpg" className="img-banner" />
            </picture>
            <div className="container">
                <div className="servicetitre text-center mb-5">
                    <h2>MON OFFRE DE SERVICES</h2>
                    <p>Voici les prestations sur lesquelles je peux intervenir.</p>
                    <div className="line"></div>
                </div>
                <div className="row justify-content-center">
                    <Service
                        img="/img/logo/conception-ux.png"
                        titre="UX DESIGN"
                        resumer="L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute."
                    />
                    <Service
                        img="/img/logo/developpeur.png"
                        titre="DÉVELOPPEMENT WEB"
                        resumer="Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP."
                    />
                    <Service
                        img="/img/logo/seo.png"
                        titre="RÉFÉRENCEMENT"
                        resumer="Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre en œuvre des techniques pour améliorer sa position dans les résultats des moteurs de recherche."
                    />
                </div>
            </div>
        </>
    );
}