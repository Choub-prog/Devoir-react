import React from 'react';

const PersonalInfo = ({ street, city, phone, email }) => {
  return (
    <div>
      <li>{street}</li>
      <li>{city}</li>
      <li>{phone}</li>
      <li>{email}</li>
    </div>
  );
};

export default PersonalInfo;
