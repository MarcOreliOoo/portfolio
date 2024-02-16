import { withNextVideo } from "next-video/process";
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["lucide-react"],
};

export default withNextVideo(nextConfig);