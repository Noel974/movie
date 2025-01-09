import React, { useState } from "react";

const Apropos = () => {
  // État pour suivre quelle section est ouverte
  const [activeIndex, setActiveIndex] = useState(null);

  // Fonction pour basculer l'état d'ouverture/fermeture d'une section
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="a-propos">
      <h1>À propos de Movie974</h1>
      <div className="accordion">
        {/* Section 1: À propos du site */}
        <div className="accordion-item">
          <button
            className="accordion-header"
            aria-expanded={activeIndex === 0}
            onClick={() => toggleAccordion(0)}
          >
            À propos du site
          </button>
          <div
            className={`accordion-content ${activeIndex === 0 ? "open" : ""}`}
          >
            <p>
              Movie974 est une plateforme dédiée à la découverte des films les
              plus populaires, les coups de cœur de notre équipe et bien plus
              encore. Notre objectif est de vous inspirer avec de nouvelles
              idées pour vos soirées cinéma.
            </p>
          </div>
        </div>

        {/* Section 2: Le rôle du site */}
        <div className="accordion-item">
          <button
            className="accordion-header"
            aria-expanded={activeIndex === 1}
            onClick={() => toggleAccordion(1)}
          >
            Le rôle du site
          </button>
          <div
            className={`accordion-content ${activeIndex === 1 ? "open" : ""}`}
          >
            <p>
              Le rôle principal de Movie974 est de fournir une expérience unique
              pour découvrir, explorer et partager des informations sur des
              films et séries. Nous voulons aider les cinéphiles à trouver leur
              prochain coup de cœur.
            </p>
          </div>
        </div>

        {/* Section 3: La fabrication du site */}
        <div className="accordion-item">
          <button
            className="accordion-header"
            aria-expanded={activeIndex === 2}
            onClick={() => toggleAccordion(2)}
          >
            La fabrication du site
          </button>
          <div
            className={`accordion-content ${activeIndex === 2 ? "open" : ""}`}
          >
            <p>
              Ce site a été conçu avec React pour une interface moderne et
              réactive. <br/>
              Nous avons utilisé React Router pour la navigation et
              une architecture basée sur des composants pour une gestion
              efficace et modulaire du code.
            </p>
          </div>
        </div>

        {/* Section 4: La fabrication du site */}
        <div className="accordion-item">
          <button
            className="accordion-header"
            aria-expanded={activeIndex === 3}
            onClick={() => toggleAccordion(3)}
          >
            A Propos de moi
          </button>
          <div
            className={`accordion-content ${activeIndex === 3 ? "open" : ""}`}
          >
            <p>
              Amajnoel, auto-entrepreneur et créateur du site MovieFil-974.<br/>
            Hébergé par Netlify, ce site a été conçu
              avec un soin méticuleux pour offrir aux utilisateurs une
              expérience fluide et enrichissante.<br/> 
              Nous utilisons la base de
              données de The Movie Database (TMDB) pour fournir des informations
              précises et à jour. Toutes les notes, noms, genres et synopsis de
              films sont directement extraits via l'API de TMDB, garantissant
              ainsi la fiabilité et la pertinence des données proposées. <br/>
              La création de MovieFil-974 a été un véritable travail de passion et
              de précision. <br/>
              En tant que concepteur, j'ai investi de nombreuses
              heures dans le développement et l'optimisation du site pour qu'il
              réponde aux attentes des cinéphiles les plus exigeants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
