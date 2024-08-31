import React from "react";

function Form() {
    return (
        <div className="bg-img-contact">
            <div className="formulaire">
                <h2>ME CONTACTER</h2>
                <p>
                    Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
                </p>
                <div className="line"></div>
                <div className="container row justify-content-center">
                    <div className="col-md-6 contact-form">
                        <h3>Formulaire de Contact</h3>
                        <hr className="line"/>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nom">Votre nom :</label>
                                <input type="text" className="form-control" id="nom" name="nom" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Votre adresse email :</label>
                                <input type="email" className="form-control" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tel">Votre numéro de téléphone :</label>
                                <input type="tel" className="form-control" id="tel" name="tel" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sujet">Sujet :</label>
                                <input type="text" className="form-control" id="sujet" name="sujet" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txt">Votre Message :</label>
                                <textarea className="form-control" id="txt" name="txt" rows="4"></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">Envoyer</button>
                        </form>
                    </div>
                    <div className="col-md-6 contact-info">
                        <h3>Mes coordonnées</h3>
                        <hr className="line"/>
                        <address>
                            40 Rue Laure Diebold, 69009 Lyon, France <br />
                            06 20 30 40 50
                        </address>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621725!2d4.796403976291238!3d45.77866197108095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1719137327334!5m2!1sfr!2sfr"
                                height="300"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Form;