import React from 'react';
import CardService from './CardService';

const MainService = () => {
  const titleService = 'Mon offre de services';
  const benefits = 'Voici les prestations sur lesquelles je peux intervenir';

  return (
    <main>
      <img src="/assets/images/banner.jpg" alt="banner" className="img-fluid" />
      <section className="py-1 text-center container">
        <div className="row pt-5">
          <div className="col-lg-6 mx-auto">
            <h2 className="">{titleService}</h2>
            <p className="">{benefits}</p>
            <div className="custom-border mx-auto"></div>
          </div>
        </div>
      </section>
      <section>
        <CardService />
      </section>
    </main>
  );
};

export default MainService;
