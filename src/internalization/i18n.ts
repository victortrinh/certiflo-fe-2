import detector from 'i18next-browser-languagedetector';
import en from './en.json';
import fr from './fr.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en,
  fr,
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
