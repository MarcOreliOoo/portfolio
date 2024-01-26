"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

const CTA = () => {
	return (
		<motion.div
			initial={{ opacity: 0.5, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				type: "keyframes",
				duration: 0.4,
				delay: 0.1,
			}}
			className="h-auto w-full bg-primary text-primary-foreground rounded-3xl border border-primary p-4 flex flex-col items-start justify-evenly gap-8"
		>
			<Target className="w-28 h-28" />
			<div className="text-left w-full">
				<h1 className="text-3xl leading-8 font-semibold">
					Have a project in mind?
				</h1>
				<p className="text-lg text-secondary mb-8">
					Let{"'"}s talk about it!
				</p>
				<button className="bg-accent text-accent-foreground border border-accent-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary-foreground rounded-3xl p-4 text-xl font-medium">
					albeaurelien@gmail.com
				</button>
			</div>
		</motion.div>
	);
};

export default CTA;
