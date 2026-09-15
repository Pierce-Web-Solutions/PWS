/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.47"],
  images: {
    qualities: [75],
  },
};

export default nextConfig;
