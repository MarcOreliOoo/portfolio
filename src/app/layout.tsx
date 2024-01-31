import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "@/providers/Providers";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Aurélien Albe",
	description:
		"Portfolio of Aurélien Albe, Web3 Full-Stack Developer and Data Engineer",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`${raleway.className} bg-background min-h-screen text-foreground max-w-screen-2xl flex flex-col items-center justify-start overflow-x-hidden mx-auto px-2 pt-2 pb-2 gap-y-2`}
			>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
