/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.coingecko.com',
                port: '3000',
                pathname: '/coins/images/1/large/bitcoin.png?1696501400'  
            },
        ]
    }
}

export default nextConfig;
