/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: false
  },
  images: {
    remotePatterns: [
      {
        //protocol: "https",
        // hostname: "consultwar.renian.foundation",
        //port: "",
        //pathname: "/public/**", worldanireg/image/upload/v1678899125

        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/worldanireg/image/upload/v1/images/image/**",
      },
    ],
    domains: [
      "renian.foundation",
      "ipfs.io",
      "renian.pe",
      "consultwar.renian.foundation",
      "firulaixcoin.finance",
      "consultwar.renian.foundation",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
