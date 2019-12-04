const constants = {
  API_URL: process.env.REACT_APP_API_URL,
  API_TOKEN: process.env.REACT_APP_API_TOKEN,
  S3_LOGOS_BUCKET: process.env.REACT_APP_S3_LOGOS_BUCKET,
  S3_ASSETS_BUCKET: process.env.REACT_APP_S3_ASSETS_BUCKET,
  GOOGLE_MAPS_TOKEN: process.env.REACT_APP_GOOGLE_MAPS_TOKEN,
  FORM_CAMPOS: 'https://docs.google.com/forms/d/e/1FAIpQLSe0MQEQa2JNoKbYAxvI_u5uS8zpxcXbx_vCRt1NRcHk6G9Bcg/viewform',
  FIELD_TYPES: [
    'CQB Aberto',
    'CQB Coberto',
    'Mata fechada',
    'Misto',
    'Urbano',
    'CQB',
    'Campo aberto',
  ],
};

export default constants;
