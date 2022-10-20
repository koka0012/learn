import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "pt-BR",
  debug: true,
  interpolation: { escapeValue: false },
});

i18n.addResourceBundle(
  "pt-BR",
  "common",
  require("../../translations/pt-BR/common.json"),
  true
);

i18n.addResourceBundle(
  "pt-BR",
  "screen",
  require("../../translations/pt-BR/screen.json"),
  true
);

export default i18n;
