import React from "react";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

import Title from "@/components/ui/Title";

const Projects = () => {
	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 h-auto w-full overflow-clip">
			{projectsData.map((project) => (
				<li
					key={project.id}
					className="h-auto w-full bg-secondary text-secondary-foreground rounded-3xl border border-secondary p-4 flex flex-col flex-wrap items-start justify-evenly gap-8 md:justify-start"
				>
					<Link href={`/project/${project.id}`}>
						<Title>{project.title}</Title>
					</Link>
					<div className="flex flex-wrap gap-[0.1rem] overflow-clip items-start justify-center w-full">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="bg-secondary text-secondary-foreground rounded-3xl px-4 py-2 flex items-center justify-center flex-nowrap text-sm"
							>
								{tag}
							</span>
						))}
					</div>
					<div className="flex items-center justify-center mx-auto rounded-3xl overflow-clip">
						<Image
							src={"/developer.png"}
							alt={project.title}
							width="500"
							height="500"
							priority={true}
						/>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Projects;
