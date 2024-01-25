import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "@/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Aurélien Albe",
	description:
		"Portfolio of Aurélien Albe, full-stack web3 developer and data engineer",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} p-2 bg-background min-h-screen text-foreground`}
			>
				<Providers>
					<div className="mb-2 h-14">
						<Navbar />
					</div>
					{children}
				</Providers>
			</body>
		</html>
	);
}
