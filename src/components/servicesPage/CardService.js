import React from 'react';
import './style/services.css';
import cardInfo from './data/cardInfo';

const CardService = () => {
  return (
    <div className="text-center container py-4">
      <div className="row justify-content-center g-4">
        {cardInfo.map((card, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div className="card h-100 pt-5">
              <i
                className={`bi ${card.icon}`}
                style={{ fontSize: '2rem', color: '#0d6efd' }}
              ></i>
              <div className="card-body">
                <h3 className="card-title">
                  <strong>{card.title}</strong>
                </h3>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardService;
