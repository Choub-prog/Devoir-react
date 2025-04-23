import React from 'react';
import Button from '../global/Button';

const ContentCard = [
  {
    img: { src: 'public/assets/images/portfolio/fresh-food.jpg', alt: 'fresh-food' },
    title: 'Fresh Food',
    text: 'Site de vente de produits frai en ligne',
    footer: 'Site réalisé avec PHP et MySQL',
  },
  {
    img: {
      src: 'public/assets/images/portfolio/restaurant-japonais.jpg',
      alt: 'restaurant-japonais',
    },
    title: 'Restaurant Akira',
    text: 'Site de vente de produits frais en ligne',
    footer: 'Site réalisé avec WordPress',
  },
  {
    img: {
      src: 'public/assets/images/portfolio/espace-bien-etre.jpg',
      alt: 'espace bien-être',
    },
    title: 'Espace bien-être',
    text: 'Site de vente de produits frais en ligne',
    footer: 'Site réalisé avec LARAVEL',
  },
  {
    img: { src: 'public/assets/images/portfolio/seo.jpg', alt: 'SEO' },
    title: 'SEO',
    text: "Amélioration du référencement d'un site e-commerce",
    footer: 'Utilisation des outils SEO',
  },
  {
    img: { src: 'public/assets/images/portfolio/coder.jpg', alt: 'code' },
    title: "Création d'une API",
    text: "Création d'une API RESTFULL publique",
    footer: 'PHP - SYMFONY',
  },
  {
    img: { src: 'public/assets/images/portfolio/screens.jpg', alt: 'screen' },
    title: "Maquette d'un site web",
    text: "Création du prototype d'un site",
    footer: 'Réalisé avec FIGMA',
  },
];

const Card = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card text-center mb-3">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
              <Button color="primary">Voir le Site</Button>
              <div className="card-footer">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
