import React from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import Link from "next/link";
import { UserCircle } from "lucide-react";

const About = () => {
	return (
		<div className="bg-background text-foreground h-auto w-full rounded-3xl p-4 border flex flex-col items-start justify-evenly gap-8 relative">
			<UserCircle className="w-28 h-28 absolute left-[0.65rem] top-3" />
			<div className="flex flex-row items-center justify-between w-full pt-32">
				<h1 className="text-3xl leading-8 font-semibold">About Me</h1>
				<Link href="/about">
					<ArrowLink variant="secondary" />
				</Link>
			</div>
			<p className="text-left text-lg text-secondary">
				As a Web3 full-stack developer with a data background, I focus
				on creating innovative solutions, merging if required all these
				skills. I believe in adaptability and continuous learning in the
				ever-evolving tech landscape, because staying ahead of
				technological advancements ensures the development of
				cutting-edge, relevant, and impactful solutions.
			</p>
		</div>
	);
};

export default About;
