/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: ['src']
  },
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  output: 'export',
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;

