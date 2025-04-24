import React from 'react';
import Button from '../global/Button';
import { dataCards } from './dataCards';

const Card = () => {
  console.log(dataCards);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          {dataCards.map((cards, index) => (
            <div className="card text-center mb-3" key={index}>
              <img src={cards.img.src} className="card-img-top" alt={cards.img.alt} />
              <div className="card-body">
                <h5 className="card-title">{cards.title}</h5>
                <p className="card-text">{cards.text}</p>
                <Button color="primary">Voir le Site</Button>
                <div className="card-footer">
                  <p>{cards.footer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
