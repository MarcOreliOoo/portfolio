import Link from "next/link";
import React from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";

const HomeLink = () => {
	return (
		<div className="border border-primary rounded-full p-[0.1rem] h-full sm:w-1/2 ">
			<div className="bg-primary text-primary-foreground rounded-3xl h-full">
				<Link
					href="/"
					className="flex flex-row items-center justify-between h-full"
				>
					<span className="flex flex-shrink-0 min-w-32 items-center justify-center h-full px-2">
						Home page
					</span>
					<div className="hidden sm:block p-[0.1rem]">
						<ArrowLink />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default HomeLink;
