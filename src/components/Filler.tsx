import React from "react";
import Image from "next/image";

const Filler = () => {
	return (
		<div className="bg-background text-foreground h-auto rounded-3xl p-4 border flex flex-col items-start justify-evenly gap-8">
			<Image
				src="/developer.png"
				alt="Aurélien Albe"
				width={1024}
				height={1024}
				priority={true}
				className="object-cover min-h-[347px]"
			/>
		</div>
	);
};

export default Filler;
