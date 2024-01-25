"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				type: "tween",
				duration: 0.2,
			}}
			className="h-auto w-full bg-secondary text-secondary-foreground rounded-3xl border border-secondary p-4 flex flex-col items-start justify-evenly gap-4"
		>
			<div className="flex flex-row items-center w-full">
				<div className="relative">
					<Image
						src="/moi.png"
						alt="Aurélien Albe"
						width={800}
						height={800}
						priority={true}
						className="rounded-full w-28 h-28 object-cover border border-secondary-foreground shadow-lg"
					/>
					<motion.span
						className="absolute bottom-0 right-0 text-3xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						👋
					</motion.span>
				</div>
				<p className="text-8xl mx-auto">Hi!</p>
			</div>
			<div className="text-left w-full">
				<h1 className="text-4xl mb-4 leading-tight">
					I{"'"}m Aurélien Albe.
				</h1>
				<p className="text-xl">
					I{"'"}m a{" "}
					<span className="underline">Full-Stack Developer</span>,
					passionate about <span className="underline">Web3</span>{" "}
					technologies, and specialized in{" "}
					<span className="underline">Data Engineering</span>.
				</p>
			</div>
		</motion.div>
	);
};

export default Hero;
