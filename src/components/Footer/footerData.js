import Identify from '../Identify';
import { NavLink } from 'react-router-dom';
import { contactData } from '../global/contactData';
import PersonalInfo from '../global/PersonalInfo';
//data for footer column

export const footerSections = [
  {
    title: <Identify name="John Doe" />,
    items: [
      <PersonalInfo {...contactData} />,
      {
        type: 'icons',
        icons: [
          {
            class: 'bi bi-github custom-icon',
            title: 'GitHub',
            href: 'https://github.com/github-john-doe',
          },
          {
            class: 'bi bi-twitter custom-icon',
            title: 'Twitter',
            href: 'https://x.com/',
          },
          {
            class: 'bi bi-linkedin custom-icon',
            title: 'Linkedin',
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
