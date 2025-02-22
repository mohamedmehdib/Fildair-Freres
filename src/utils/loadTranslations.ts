import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json';

// Define the Translations type
type Translations = {
  about: {
    about_us: string;
    heading: string;
    description: string;
    completed_projects: string;
    team_members: string;
    satisfied_clients: string;
  };
  // Add other sections as needed
};

// Create the translations object with the correct type
const translations: Record<string, Translations> = {
  en,
  fr,
  es,
};

// Function to load translations based on the user's language
export const loadTranslations = (language: string): Translations => {
  const languageCode = language.split('-')[0];
  return translations[languageCode] ?? translations['fr'];
};
