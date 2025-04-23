import React from 'react';
import Banner from '../global/Banner';
import CardService from './CardService';
import SectionTitleP from '../global/SectionTitleP';

const MainService = () => {
  const titleService = 'Mon offre de services';
  const benefits = 'Voici les prestations sur lesquelles je peux intervenir';

  return (
    <main>
      <Banner />
      <SectionTitleP title={titleService} text={benefits} />
      <section>
        <CardService />
      </section>
    </main>
  );
};

export default MainService;
