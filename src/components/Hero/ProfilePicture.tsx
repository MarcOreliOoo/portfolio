import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProfilePicture = () => {
	return (
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
				className="absolute bottom-0 right-0 text-3xl saturate-100 hue-rotate-[13deg]"
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
	);
};

export default ProfilePicture;
