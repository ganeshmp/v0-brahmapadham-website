/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This basePath should match your GitHub repository name if not deploying to a custom domain
  // e.g., if your repo is "username/brahmapadham-website", use "/brahmapadham-website"
  // Remove or set to '' if deploying to a custom domain
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
