import { contactData } from '../global/contactData';
import PersonalInfo from '../global/PersonalInfo';

export const accordion = [
  {
    title: 'Editeur du site',
    content: <PersonalInfo {...contactData} />,
  },
  { title: 'Hébergeur', content: '' },
];
