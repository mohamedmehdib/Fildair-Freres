import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json';

// Define a flexible Translations type
type Translations = {
  [key: string]: {
    [key: string]: string | { [key: string]: string | { [key: string]: string } };
  };
};

// Create the translations object with the correct type
const translations: Translations = {
  en,
  fr,
  es,
};

// Function to load translations based on the user's language
export const loadTranslations = (language: string) => {
  const languageCode = language.split('-')[0];
  return translations[languageCode] || translations['fr'];
};