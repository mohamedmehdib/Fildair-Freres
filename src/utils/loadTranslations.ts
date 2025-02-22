import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json';

// Define the correct shape based on your state
type Translations = {
  form: {
    heading: string;
    loading: string;
    sign_in_prompt: string;
    labels: {
      email: string;
      name: string;
      phone: string;
      address: string;
    };
    update_button: string;
    update_success: string;
  };
  // Add other sections if necessary
};

// Store translations
const translations: Record<string, Translations> = {
  en,
  fr,
  es,
};

// Function to load translations while ensuring the correct shape
export const loadTranslations = (language: string): Translations => {
  const languageCode = language.split('-')[0];
  return translations[languageCode] ?? translations['fr'];
};
