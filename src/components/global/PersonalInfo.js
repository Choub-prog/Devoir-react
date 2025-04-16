import React from 'react';

const PersonalInfo = ({ street, city, phone, email }) => {
  return (
    <div>
      <p className="mb-0">{street}</p>
      <p className="mb-0">{city}</p>
      <p className="mb-0">{phone}</p>
      <p className="mb-0">{email}</p>
    </div>
  );
};

export default PersonalInfo;
