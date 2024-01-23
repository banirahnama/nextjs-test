/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dropbox.com'
      }
    ]
  }
};

module.exports = nextConfig;
