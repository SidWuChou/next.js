import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  productionBrowserSourceMaps: true,
  experimental: {
    cachedNavigations: true,
  },
}

export default nextConfig
