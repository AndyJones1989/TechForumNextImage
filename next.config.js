/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com',
            port: '',
            pathname: '/public/**',
          },
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            port: '',
            pathname: '/**',
          },
          
          {
            protocol: 'https',
            hostname: 'www.autocar.co.uk',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.dicklovett.co.uk',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'media.wired.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 's.abcnews.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'robbreport.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'cdni.autocarindia.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'topauto.co.za',
            port: '',
            pathname: '/**',
          }
        ],
      },
}

module.exports = nextConfig
