import fr from '../locales/fr.json';

type Translations = Record<string, typeof fr>;

const translations: Translations = {
  fr,
};

export const loadTranslations = (language: string) => {
  const languageCode = language.split('-')[0];
  return translations[languageCode] || translations['fr'];
};
