import React from 'react';
import './services.css';

const CardService = () => {
  const cardInfo = [
    {
      icon: 'bi-brush',
      title: 'Ux Design',
      text: "l'Ux Design est une discipline qui consiste à concesoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc...) en plaant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluid et agréable possible.",
    },
    {
      icon: 'bi-code-slash',
      title: 'Développement web',
      text: 'Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)',
    },
    {
      icon: 'bi-search',
      title: 'Référencement',
      text: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.)L'bjectif est d'attirer un maximun de visiteurs qualifiés sur le site.",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {cardInfo.map((card, index) => (
          <div className="col-12 col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <i className={`bi ${card.icon}`}></i>
              <div className="card-body">
                <h4 className="card-title">{card.title}</h4>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardService;
