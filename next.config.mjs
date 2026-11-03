/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      { source: '/products', destination: '/work', permanent: false },
      { source: '/products/:id', destination: '/work', permanent: false },
      { source: '/solutions', destination: '/services', permanent: false },
      { source: '/services/custom-development', destination: '/services/custom-software', permanent: true },
      { source: '/services/enterprise', destination: '/services/erp', permanent: true },
      { source: '/services/custom-ai', destination: '/services/ai', permanent: true },
      { source: '/services/intelligent-automation', destination: '/services/automation', permanent: true },
      { source: '/services/consulting', destination: '/services', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dev.to',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'syncdaily.vectordynamic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.medium.com',
      },
    ],
  },
};

export default nextConfig;
