import React from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";

const Menu = () => {
	return (
		<div className="w-full flex items-center justify-center border border-primary rounded-3xl h-full p-[0.1rem]">
			<div className="w-full flex items-center justify-between border border-primary p-[0.1rem] rounded-3xl h-full">
				<button className="flex flex-row items-center justify-between w-full">
					<span className="flex items-center justify-center h-full px-2">
						Menu
					</span>
					<ArrowLink variant="secondary" />
				</button>
			</div>
		</div>
	);
};

export default Menu;
