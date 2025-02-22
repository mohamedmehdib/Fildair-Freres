import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json'

const translations: { [key: string]: any } = {
  en,
  fr,
  es
};

export const loadTranslations = (language: string) => {
  const languageCode = language.split('-')[0];
  return translations[languageCode] || translations['fr'];
};