import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationES from "./locales/es/translation.json";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translationES },
      en: { translation: translationEN },
      ru: { translation: translationRU },
    },
    lng: "es", // idioma por defecto
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
