import localisation from '../../localisations';

const { translation: t } = localisation;

function FormatMessage(translationKey) {
  return t[translationKey] || '';
}

export default FormatMessage;
