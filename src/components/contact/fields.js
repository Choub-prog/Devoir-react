const fields = [
  { name: 'name', placeholder: 'Votre nom', ariaLabel: 'Nom' },
  {
    name: 'email',
    type: 'email',
    placeholder: 'votre adresse email',
    ariaLabel: 'Email',
  },
  {
    name: 'tel',
    type: 'tel',
    placeholder: 'Votre numéro de téléphone',
    ariaLabel: 'Tel',
  },
  { name: 'subject', placeholder: 'Sujet', ariaLabel: 'Sujet' },
  {
    name: 'message',
    isTextarea: true,
    placeholder: 'Votre message',
    ariaLabel: 'Message',
  },
];

export default fields;
