import React from 'react';
import { NavLink } from 'react-router-dom';
import Identify from './Identify';
import { type } from '@testing-library/user-event/dist/type';

const Footer = () => {
  const footerSections = [
    {
      title: { Identify },
      items: [
        '40 rue Laure Diebold',
        '69009 Lyon, France',
        '10 20 30 40 50',
        'john.doe@gmail.com',
        {
          type: 'icons',
          icons: [
            { src: 'public/assets/icones/github.svg', alt: 'GitHub' },
            { src: 'public/assets/icones/twitter.svg', alt: 'Twitter' },
            { src: 'public/assets/icones/linkedin.svg', alt: 'Linkedin' },
          ],
        },
      ],
    },
    {
      title: 'Liens utiles',
      items: [
        'Accueil',
        'Services',
        'Portfolio',
        'Me contacter',
        'Mentions légales',
      ],
    },
    {
      title: 'Mes dernières réalisations',
      items: [
        'Fresh Food',
        'Restaurant Akira',
        'Espace bien-être',
        'SEO',
        "Création d'une API",
        "Maquette d'un site",
      ],
    },
  ];
  return (
    <div>
      <h3></h3>
    </div>
  );
};

export default Footer;
