import * as React from "react";
import '../components/components.css'

const About = () => {
  const SkillBar = ({ language, purcent, color }) => (
    <div className="skill">
      <p>{language} {purcent}%</p>
      <div className="language">
        <div className="level" style={{ width: `${purcent}%`, backgroundColor: color }}></div>
      </div>
    </div>
  );

  return (
   <div className="conteneur">
    <div className="image col-md-12"> 
    <h1 className="text-light">Bonjour, Je suis John Doe</h1>
    <h2 className="text-light">Développeur web full stack</h2>
    <button className="btn btn-primary">En Savoir plus</button>
    </div>
      <div className="container">
        <div className="shadow row">
          <div className="col-md-5">
            <h2>A propos</h2>
            <hr style={{color:'blue', opacity:'100%',height:'30px'}}/>
            <p>
              Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation <strong>d'intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. <br />
              Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.<br />
              J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
            </p>
          </div>
            <div className="skills col-md-5">
              <img src="/img/john-doe-about.jpg" alt="Aboutpic"/>
              <h3>Mes compétences</h3>
              <ul className="skills-list">
                <li>
                  <SkillBar language="HTML" purcent={90} color="#e34f26" />
                </li>
                <li>
                  <SkillBar language="CSS" purcent={80} color="#61dafb" />
                </li>
                <li>
                  <SkillBar language="JavaScript" purcent={70} color="#f7df1e" />
                </li>
                <li>
                  <SkillBar language="PHP" purcent={60} color="#008000" />
                </li>
                <li>
                  <SkillBar language="React" purcent={50} color="#264de4" />
                </li>
              </ul>
    </div> 
    </div>
    </div>
    </div>
  );
};

export default About;