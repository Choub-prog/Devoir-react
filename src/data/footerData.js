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
      <NavLink className="text-decoration-none text-white" to="/">
        Accueil
      </NavLink>,
      <NavLink className="text-decoration-none text-white" to="/services">
        Services
      </NavLink>,
      <NavLink className="text-decoration-none text-white" to="/portfolio">
        Portfolio
      </NavLink>,
      <NavLink className="text-decoration-none text-white" to="/contact">
        Contact
      </NavLink>,
      <NavLink className="text-decoration-none text-white" to="/legal-notices">
        Mentions légales
      </NavLink>,
    ],
  },
  {
    title: 'Mes dernières réalisations',
    items: [
      <NavLink className="text-decoration-none text-white" to="/">
        Fresh Food
      </NavLink>,
      <NavLink className="text-decoration-none text-white" to="/">
        Restaurant Akira
      </NavLink>,
      <NavLink className="text-decoration-none text-white" to="/">
        Espace bien-être
      </NavLink>,
      <NavLink className="text-decoration-none text-white" to="/">
        SEO
      </NavLink>,
      <NavLink className="text-decoration-none text-white" to="/">
        Création d'une API
      </NavLink>,
      <NavLink className="text-decoration-none text-white" to="/">
        Maquette d'un site
      </NavLink>,
    ],
  },
];
