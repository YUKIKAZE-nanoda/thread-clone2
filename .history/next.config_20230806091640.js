/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                host: 'res.cloudinary.com',
            }
        ]
    },
}

module.exports = nextConfig

