/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  localePath: path.resolve("./public/locales"),
};

module.exports = nextConfig;
