import Identify from '../components/Identify';
import { NavLink } from 'react-router-dom';
//data for footer column

export const footerSections = [
  {
    title: <Identify name="John Doe" />,
    items: [
      '40 rue Laure Diebold',
      '69009 Lyon, France',
      '10 20 30 40 50',
      'john.doe@gmail.com',
      {
        type: 'icons',
        icons: [
          {
            src: '/assets/icones/github.svg',
            alt: 'GitHub',
            href: 'https://github.com/github-john-doe',
          },
          {
            src: '/assets/icones/twitter.svg',
            alt: 'Twitter',
            href: 'https://x.com/?lang=fr',
          },
          {
            src: '/assets/icones/linkedin.svg',
            alt: 'Linkedin',
            href: 'https://www.linkedin.com/?trk=people-guest_nav-header-logo',
          },
        ],
      },
    ],
  },
  {
    title: 'Liens utiles',
    items: [
      <NavLink to="/">Accueil</NavLink>,
      <NavLink to="/services">Services</NavLink>,
      <NavLink to="/portfolio">Portfolio</NavLink>,
      <NavLink to="/contact">Contact</NavLink>,
      <NavLink to="/legal-notices">Mentions légales</NavLink>,
    ],
  },
  {
    title: 'Mes dernières réalisations',
    items: [
      <NavLink to="/">Fresh Food</NavLink>,
      <NavLink to="/">Restaurant Akira</NavLink>,
      <NavLink to="/">Espace bien-être</NavLink>,
      <NavLink to="/">SEO</NavLink>,
      <NavLink to="/">Création d'une API</NavLink>,
      <NavLink to="/">Maquette d'un site</NavLink>,
    ],
  },
];
