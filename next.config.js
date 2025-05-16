/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Disable image optimization if necessary
    loader: 'default', // Default loader
    path: './', // Use relative paths for images
  },
  output: 'export', // Generate a static site (required for GitHub Pages)
  basePath: '/beppho', // Add the base path for GitHub Pages
  assetPrefix: '/beppho/', // Ensure assets are correctly linked with base path
};

export default nextConfig;