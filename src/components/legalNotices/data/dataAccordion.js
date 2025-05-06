import { contactData } from '../../global/data/contactData';
import PersonalInfo from '../../global/PersonalInfo';
import Identify from '../../global/Identify';

export const dataAccordion = [
  {
    id: 'One',
    header: 'Editeur du site',
    content: (
      <article>
        <Identify name="John Doe" className="h4" />
        <PersonalInfo withIcons {...contactData} />
      </article>
    ),
  },
  {
    id: 'Two',
    header: 'Hébergeur',
    content: (
      <article>
        <h4>alwaysdata</h4>
        <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
        <i className="bi bi-globe"> </i>
        <a href="https://www.alwaysdata.com" target="blank">
          www.alwaysdata.com
        </a>
      </article>
    ),
  },
  {
    id: 'Three',
    header: 'Crédits',
    content: (
      <article>
        <h4>Crédits</h4>
        <p>
          Ce site a été réalisé par John Doe, étudiant au{' '}
          <a href="https://www.centre-europeen-formation.fr" target="blank">
            Centre Européen de formation
          </a>
        </p>
        <p>
          <em>
            Les images utilisées sur ce site sont libres de droits et ont été obtenues sur
            le site{' '}
            <a href="https://pixabay.com/fr" target="blank">
              Pixabay
            </a>
          </em>
        </p>
        <p>
          <em>
            La favicon de ce site a été fournie par{' '}
            <a
              href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
              target="blank"
            >
              John doe Icons erstellt von Freepik - Flaticon
            </a>
          </em>
        </p>
      </article>
    ),
  },
];
