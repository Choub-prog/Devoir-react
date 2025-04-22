import React from 'react';
import CardService from './CardService';

const MainService = () => {
  const titleService = 'Mon offre de services';
  const benefits = 'Voici les prestations sur lesquelles je peux intervenir';

  return (
    <main>
      <section className="text-center">
        <h2>{titleService}</h2>
        <p className="border-bottom border-primary">{benefits}</p>
        <CardService />
      </section>
    </main>
  );
};

export default MainService;
