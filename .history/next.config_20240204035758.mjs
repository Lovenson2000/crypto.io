/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.coingecko.com',
                port: '3000',
                
            },
        ]
    }
};

export default nextConfig;
