import React from 'react';

//withIcons sert uniquement à afficher les icons si il est déclaré.

const PersonalInfo = ({
  street,
  city,
  phone,
  email,
  iconeStreet,
  iconeCity,
  iconePhone,
  iconeEmail,
  withIcons,
}) => {
  return (
    <div className="pt-1">
      <p className={`mb-0 ${withIcons ? iconeStreet : ' '}`}> {street}</p>
      <p className={`mb-0 ${withIcons ? iconeCity : ' '}`}> {city}</p>
      <p className={`mb-0 ${withIcons ? iconePhone : ' '}`}> {phone}</p>
      <p className={`mb-0 ${withIcons ? iconeEmail : ' '}`}> {email}</p>
    </div>
  );
};

export default PersonalInfo;
