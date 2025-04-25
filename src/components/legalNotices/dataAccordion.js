import { contactData } from '../global/contactData';
import PersonalInfo from '../global/PersonalInfo';
import Identify from '../global/Identify';

export const dataAccordion = [
  {
    id: 'One',
    header: 'Editeur du site',
    content: (
      <>
        <Identify name="John Doe" className="h4" />
        <PersonalInfo {...contactData} />
      </>
    ),
  },
  {
    id: 'Two',
    header: 'Hébergeur',
    content: (
      <>
        <h4>alwaysdata</h4>
        <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
        <a href="www.alwaysdata.com">www.alwaysdata.com</a>'
      </>
    ),
  },
  {
    id: 'Three',
    header: 'Crédits',
    content: (
      <>
        <h4>Crédits</h4>
        <p>
          Ce site a été réalisé par John Doe, étudiant au{' '}
          <a href="https://www.centre-europeen-formation.fr">
            Centre Européen de formation
          </a>
        </p>
        <p>
          Les images utilisées sur ce site sont libres de droits et ont été obtenues sur
          le site <a href="https://pixabay.com/fr">Pixabay</a>
        </p>
        <p>
          La favicon de ce site a été fournie par{' '}
          <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">
            John doe Icons erstellt von Freepik - Flaticon
          </a>
        </p>
      </>
    ),
  },
];
