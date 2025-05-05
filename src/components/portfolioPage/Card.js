import React from 'react';
import Button from '../global/Button';
import { dataCards } from './dataCards';
import { useNavigate } from 'react-router-dom';
import './buttonCard.css';

const Card = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        {dataCards.map((cards, index) => (
          <div className="col" key={index}>
            <div className="card col text-center mb-3 h-100">
              <img src={cards.img.src} className="card-img-top" alt={cards.img.alt} />
              <div className="card-body px-0 pb-0">
                <h2 className="card-title">{cards.title}</h2>
                <p className="card-text mb-0">{cards.text}</p>
                <Button color="primary mb-3 lighten-on-hover" onClick={redirect}>
                  Voir le Site
                </Button>
                <div className="card-footer py-3">
                  <p className="mb-0">{cards.footer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
