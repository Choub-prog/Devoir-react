import React, { useState } from 'react';
import './home.css';
import Presentation from './Presentation';
import Button from '../global/Button';
import Modal from './Modal';

const MainHome = () => {
  const [isModalVisible, SetIsModalVisible] = useState(false);

  return (
    <main>
      <section className=" backgroundImage position-relative text-white d-flex flex-column vh-100 justify-content-center align-items-center">
        {isModalVisible && <Modal />}
        <div className="position-relative text-center">
          <h1 className="display-2 fw-semibold px-5 mx-2">
            Bonjour, je suis John Doe
          </h1>
          <h2 className="display-3 fw-semibold px-5 mx-2">
            Développeur web full stack
          </h2>
          <Button color="primary" onClick={() => SetIsModalVisible(true)}>
            En savoir plus
          </Button>
        </div>
      </section>
      <Presentation />
    </main>
  );
};

export default MainHome;
