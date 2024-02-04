/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.coingecko.com',
                port: '3000',
                pathname: ''
                
            },
        ]
    }
};

export default nextConfig;
