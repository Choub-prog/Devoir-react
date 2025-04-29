import React from 'react';
import SectionTitleP from '../global/SectionTitleP';
import FormContact from './FormContact';
import InfoContact from './InfoContact';

const HomeContact = () => {
  const TexteTitle =
    "Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.";

  return (
    <main>
      <SectionTitleP title="Contact" text={TexteTitle} isWide={true} />
      <div className="container">
        <div className="row col-lg-12">
          <FormContact />
          <InfoContact />
        </div>
      </div>
    </main>
  );
};

export default HomeContact;
