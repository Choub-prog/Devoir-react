import React from 'react';
import Identify from '../global/Identify';
import PersonalInfo from '../global/PersonalInfo';
import { contactData } from '../global/contactData';
import IframeComponent from './IframeComponent';

const InfoContact = () => {
  return (
    <div>
      <h2 className="py-2 mb-5 border-bottom border-4 border-primary">Mes coordonnées</h2>
      <Identify name="John Doe" className="h4" />
      <PersonalInfo withIcons {...contactData} />
      <IframeComponent />
    </div>
  );
};

export default InfoContact;
