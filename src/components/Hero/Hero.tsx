"use client";
import React from "react";

import { motion } from "framer-motion";
import ProfilePicture from "./ProfilePicture";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 1, y: 100 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={{
				type: "tween",
				duration: 0.2,
			}}
			className="h-auto w-full bg-secondary text-secondary-foreground rounded-3xl border border-secondary p-4 flex flex-col items-start justify-evenly gap-8 md:justify-start"
		>
			<div className="flex flex-row items-center w-full">
				<ProfilePicture />
				<p className="text-8xl mx-auto font-semibold text-accent">
					Hi!
				</p>
			</div>
			<div className="text-left w-full">
				<h1 className="text-3xl mb-8 font-semibold">
					I am
					<br />
					<span className="uppercase text-4xl text-primary">
						Aurélien Albe.
					</span>
				</h1>
				<p className="text-lg leading-5">
					I{"'"}m a{" "}
					<span className="underline">Full-Stack Developer</span>,
					passionate about <span className="underline">Web3</span>{" "}
					tech, and specialized in{" "}
					<span className="underline">Data Engineering</span>.
				</p>
			</div>
		</motion.div>
	);
};

export default Hero;
