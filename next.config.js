/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	rewrites: async () => [
		{
			source: '/:path*',
			destination: '/',
		},
	],
};

module.exports = nextConfig;
