import React from 'react';
import './Home.css';

const FisrtSectionHome = () => {
  return (
    <section className=" backgroundImage position-relative text-white d-flex flex-column vh-100 justify-content-center align-items-center">
      <div className="position-relative text-center">
        <h1 className="display-2 fw-semibold">Bonjour, je suis John Doe</h1>
        <h2 className="display-3 fw-semibold">Développeur web full stack</h2>
        <button className="mt-3 px-4 py-2">En savoir plus</button>
      </div>
    </section>
  );
};

export default FisrtSectionHome;
