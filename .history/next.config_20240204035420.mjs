/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:"https://assets.coingecko.com/coins/images"
            }
        ]
    }
};

export default nextConfig;
