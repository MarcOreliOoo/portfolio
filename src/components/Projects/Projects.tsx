import React from "react";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

import Title from "@/components/ui/Title";
import { ArrowLink } from "@/components/ui/ArrowLink";

const Projects = () => {
	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 h-auto w-full overflow-clip">
			{projectsData.map((project) => (
				<li
					key={project.id}
					className={`h-auto w-full ${project.colors} rounded-3xl border border-secondary p-4 pt-6 flex flex-col flex-wrap items-start justify-between gap-8 `}
				>
					<Link
						href={`/project/${project.id}`}
						className="flex flex-row items-center justify-between w-full overflow-clip"
					>
						<Title>{project.title}</Title>
						<ArrowLink
							className={`flex-shrink-0 ${project.tagsColors} hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out`}
						/>
					</Link>
					<div className="flex flex-wrap gap-[0.1rem] overflow-clip items-start justify-center w-full">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className={`${project.tagsColors} rounded-3xl px-4 py-2 flex items-center justify-center flex-nowrap text-sm`}
							>
								{tag}
							</span>
						))}
					</div>
					<div className="flex items-center justify-center mx-auto rounded-3xl overflow-clip">
						<Image
							src={
								project.images && project.images[0]
									? "/" + project.images[0]
									: "/developer.png"
							}
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
