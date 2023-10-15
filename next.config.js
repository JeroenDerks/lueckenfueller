/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  localePath: path.resolve("./public/locales"),
};

module.exports = nextConfig;
