import React from 'react';
import Button from '../global/Button';
import useFormContact from './utils/useFormContact';
import fields from './data/fields';

const FormContact = () => {
  const { formData, handleChange, handleSubmit } = useFormContact();

  return (
    <div>
      <h2 className="py-2 mb-5 border-bottom border-4 border-primary">
        Formulaire de contact
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div>
            {fields.map((field) =>
              field.isTextarea ? (
                <div className="ratio ratio-16x9" key={field.name}>
                  <textarea
                    className="form-control mb-3"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    aria-label={field.ariaLabel}
                    required
                  />
                </div>
              ) : (
                <input
                  key={field.name}
                  className="form-control mb-3"
                  type={field.type || 'text'}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  aria-label={field.ariaLabel}
                  required
                />
              )
            )}
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
