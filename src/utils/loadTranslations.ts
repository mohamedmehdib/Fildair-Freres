import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json'

const translations: { [key: string]: any } = {
  en,
  fr,
  es
};

export const loadTranslations = (language: string) => {
  const languageCode = language.split('-')[0]; // Extract the base language code (e.g., 'en' from 'en-US')
  return translations[languageCode] || translations['fr']; // Fallback to English if the language is not supported
};