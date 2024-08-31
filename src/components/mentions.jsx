import React from "react";

function LegalMention() {
    return (
        <div className="mentionstitre container">
            <h2 className="mb-4">Mentions Légales</h2>
            <div className="line"></div>
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Éditeur du site
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3>John Doe</h3>
                            <address>
                                40 Rue Laure Diebold<br />
                                69009 Lyon, France<br />
                                Téléphone : 06 20 30 40 50<br />
                                Email : <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                            </address>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3>Always Data</h3>
                            <address>
                                91 rue du Faubourg Saint-Honoré<br />
                                75008 Paris<br />
                                Site : <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
                            </address>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3>Crédits</h3>
                            Site développé par John Doe, étudiant du CEF.<br />
                            Les images libres de droit sont issues du site Pixabay.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LegalMention;