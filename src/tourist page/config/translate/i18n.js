import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnTranslate from '../translate/json/en.json'
import ArTranslate from '../translate/json/ar.json'
const resources = {
  ar: {
    translation:ArTranslate
  },
  en: {
    translation:EnTranslate
  }
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;