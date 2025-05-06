import React from 'react';

const IframeComponent = () => {
  return (
    <div className="ratio ratio-4x3 mt-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657541075!2d4.7964039766716615!3d45.77866571240145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1746022563716!5m2!1sfr!2sfr"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map - Adresse John Doe"
      />
    </div>
  );
};

export default IframeComponent;
