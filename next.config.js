/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  exportPathMap: async function () {
    return {
      "de/result": { page: "/result" },
      "en/result": { page: "/result" },
    };
  },
};

module.exports = nextConfig;
