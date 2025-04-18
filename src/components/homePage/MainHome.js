import React from 'react';
import './home.css';
import Presentation from './Presentation';

const MainHome = () => {
  return (
    <main>
      <section className=" backgroundImage position-relative text-white d-flex flex-column vh-100 justify-content-center align-items-center">
        <div className="position-relative text-center">
          <h1 className="display-2 fw-semibold px-5 mx-2">
            Bonjour, je suis John Doe
          </h1>
          <h2 className="display-3 fw-semibold px-5 mx-2">
            Développeur web full stack
          </h2>
          <button type="button" className=" btn btn-danger mt-3 px-4 py-2">
            En savoir plus
          </button>
        </div>
      </section>
      <Presentation />
    </main>
  );
};

export default MainHome;
