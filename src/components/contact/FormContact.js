import React, { useState } from 'react';
import Button from '../global/Button';

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2 className="py-2 mb-5 border-bottom border-4 border-primary">
        Formulaire de contact
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Votre nom"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Nom"
              required
            />
            <input
              className="form-control mb-3"
              type="email"
              placeholder="Votre adresse email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email"
              required
            />
            <input
              className="form-control mb-3"
              type="tel"
              placeholder="Votre numéro de téléphone"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              aria-label="Tel"
              required
            />
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Sujet"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              aria-label="Sujet"
              required
            />
            <textarea
              className="form-control"
              placeholder="Votre message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ height: '350px' }}
              aria-label="Message"
            ></textarea>
            <Button
              other="d-grid mx-auto"
              type="submit"
              color="primary"
              children="Envoyer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
