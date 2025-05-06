import React from 'react';
import SectionTitleP from '../global/SectionTitleP';
import LayoutSection from '../global/LayoutSection';
import FormContact from './FormContact';
import InfoContact from './InfoContact';
import '../contact/style/contact.css';

const HomeContact = () => {
  const TexteTitle =
    "Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.";

  return (
    <main>
      <SectionTitleP title="Contact" text={TexteTitle} isWide={true} />
      <LayoutSection childrenLeft={<FormContact />} childrenRight={<InfoContact />} />
    </main>
  );
};

export default HomeContact;
