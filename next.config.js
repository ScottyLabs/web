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

export default nextConfig