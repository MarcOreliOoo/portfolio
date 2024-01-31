import React from "react";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
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
					<Image
						src={project.preview ?? "#"}
						alt={project.title}
						width="100"
					/>
					<p>{project.shortDesc}</p>
					<div className="flex flex-wrap gap-[0.1rem] overflow-clip">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="bg-primary text-primary-foreground rounded-3xl px-4 py-2 flex items-center justify-center flex-nowrap"
							>
								{tag}
							</span>
						))}
					</div>
					<div className="flex flex-wrap gap-[0.1rem] overflow-clip">
						{Object.entries(project.techs).map((category) => (
							<div key={category[0]}>
								<h1>{category[0]}</h1>
								{category[1].map((tech) => (
									<span
										key={tech}
										className="bg-primary text-primary-foreground rounded-3xl px-4 py-2 flex items-center justify-center flex-nowrap"
									>
										{tech}
									</span>
								))}
							</div>
						))}
					</div>
					{project.links && (
						<div className="flex gap-4">
							<Link
								href={project.links.github ?? "#"}
								className="bg-primary text-primary-foreground rounded-full px-4 py-2"
							>
								<Github>{project.links.github}</Github>
							</Link>
							<Link
								href={project.links.website ?? "#"}
								className="bg-primary text-primary-foreground rounded-full px-4 py-2"
							>
								<ExternalLink>
									{project.links.website}
								</ExternalLink>
							</Link>
						</div>
					)}
				</li>
			))}
		</ul>
	);
};

export default Projects;
