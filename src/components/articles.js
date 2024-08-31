import React from "react";
import '../components/components.css'

function Article(props) {
    return (
        <div className="blog container col-md-6 col-lg-4 mb-5">
            <div className="row card">
                <img src={props.img} alt={props.titre} className="image-fluid mb-3" />
                <h3>{props.titre}</h3>
                <p>{props.resumer}</p>
                <button className="btn btn-primary">Lire la suite</button>
                <p className="text-muted mt-2">Publié le {props.txt}</p>
            </div>
        </div>
    );
}

export default function Articles() {
    return (
        <>
            <picture>
                <source media="(min-width: 1024px)" srcSet="/img/banner.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/banner-tablette.jpg" />
                <source media="(max-width: 767px)" srcSet="/img/banner-mobile.jpg" />
                <img src="../img/banner.jpg" className="img-banner" />
            </picture>
            <div className="container">
                <div className="text-center mb-5 blogtitre">
                    <h2>BLOG</h2>
                    <p>Retrouvez ici quelques articles sur le développement web.</p>
                    <div className="line"></div>
                </div>
                <div className="row justify-content-center">
                    <Article img='/img/blog/coder.jpg' titre="Coder son site en HTML/CSS"
                        resumer="Some quick example text to build on the card title and make up the bulk of the card's content."
                        txt="22 août 2022" />
                    <Article img="/img/blog/seo.jpg" titre="Vendre ses produits sur le web"
                        resumer="Some quick example text to build on the card title and make up the bulk of the card's content."
                        txt="20 août 2022" />
                    <Article img="/img/blog/google.jpg" titre="Se positionner sur Google"
                        resumer="Some quick example text to build on the card title and make up the bulk of the card's content."
                        txt="1 août 2022" />
                    <Article img="/img/blog/croissance.jpg" titre="Coder en responsive design"
                        resumer="Some quick example text to build on the card title and make up the bulk of the card's content."
                        txt="31 juillet 2022" />
                    <Article img="/img/blog/technos.png" titre="Techniques de référencement"
                        resumer="Some quick example text to build on the card title and make up the bulk of the card's content."
                        txt="12 juillet 2022" />
                    <Article img="/img/blog/coder.jpg" titre="Apprendre à coder"
                        resumer="Some quick example text to build on the card title and make up the bulk of the card's content."
                        txt="30 juillet 2022" />
                </div>
            </div>
        </>
    );
}