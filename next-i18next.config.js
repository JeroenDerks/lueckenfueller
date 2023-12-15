const path = require("path");

/** @type import("next").I18NConfig */
const i18n = {
  defaultLocale: "de",
  locales: ["en", "de"],
  localeDetection: false, // disable automatic redirection on the user's preferred locale
};

/** @type import("next-i18next").UserConfig */
const next18nextConfig = {
  i18n,
  fallbackLng: "en",
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
};

module.exports = next18nextConfig;
