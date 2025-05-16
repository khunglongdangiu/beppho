/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Disable optimization if needed
  },
  output: 'export', // Export static site (required for GitHub Pages)
  basePath: '/beppho', // Base path for routing (GitHub Pages requires this)
  assetPrefix: '/beppho/', // Ensure assets are correctly served from GitHub Pages subfolder
};

export default nextConfig;
