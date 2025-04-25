import React from 'react';
import './services.css';

const CardService = () => {
  const cardInfo = [
    {
      icon: 'bi-brush',
      title: 'UX Design',
      text: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc...) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
    },
    {
      icon: 'bi-code-slash',
      title: 'Développement web',
      text: 'Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)',
    },
    {
      icon: 'bi-search',
      title: 'Référencement',
      text: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.)l'objectif est d'attirer un maximun de visiteurs qualifiés sur le site.",
    },
  ];

  return (
    <div className="text-center container py-4">
      <div className="row justify-content-center g-4">
        {cardInfo.map((card, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div className="card h-100 pt-5">
              <i
                className={`bi ${card.icon}`}
                style={{ fontSize: '2rem', color: '#0d6efd' }}
              ></i>
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
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
