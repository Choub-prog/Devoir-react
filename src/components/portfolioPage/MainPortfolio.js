import React from 'react';
import Banner from '../global/data/Banner';
import SectionTitleP from '../global/SectionTitleP';
import Card from './Card';

const MainPortfolio = () => {
  return (
    <main>
      <Banner />
      <SectionTitleP title="Portfolio" text="Voici quelques-unes de mes réalisations." />
      <Card />
    </main>
  );
};

export default MainPortfolio;
