import React from "react";
import Image from "next/image";

const Filler = () => {
	return (
		<div className="bg-background text-foreground h-auto rounded-3xl p-4 border flex flex-col items-center justify-center min-h-[361px]">
			<Image
				src="/developer.png"
				alt="Aurélien Albe"
				width={1024}
				height={1024}
				priority={true}
				className="object-cover"
			/>
		</div>
	);
};

export default Filler;
