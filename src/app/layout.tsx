import type { Metadata } from "next";
import { Roboto, Poppins, Raleway, Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "@/providers/Providers";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});
const comfortaa = Comfortaa({ weight: ["300"], subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});
const raleway = Raleway({ subsets: ["latin"] });

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
				className={`${raleway.className} bg-background min-h-screen text-foreground max-w-screen-2xl flex flex-col items-center justify-start overflow-hidden mx-auto px-2 pt-2 gap-y-2`}
			>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
