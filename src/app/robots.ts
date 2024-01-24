import { AppURL } from '@/lib/Config'
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/assets/',
    },
    sitemap: `${AppURL}/sitemap.xml`,
  }
}