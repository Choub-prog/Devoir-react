import React from 'react';
import Nav from '../components/nav/Nav';
import LegalNMain from '../components/legalNotices/LegalNMain';
import Footer from '../components/footer/Footer';
import { Helmet } from 'react-helmet-async';

const LegalNotices = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Nav />
      <LegalNMain />
      <Footer />
    </>
  );
};
export default LegalNotices;
