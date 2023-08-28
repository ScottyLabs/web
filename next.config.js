/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		images: {
			dangerouslyAllowSvg: true,
			allowFutureImage: true,
		},
	},
	rewrites: async () => [
		{
			source: '/:path*',
			destination: '/',
		},
	],
};

module.exports = nextConfig;
