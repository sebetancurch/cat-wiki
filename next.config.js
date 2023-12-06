/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn2.thecatapi.com'],
    },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
      }
}

module.exports = nextConfig
