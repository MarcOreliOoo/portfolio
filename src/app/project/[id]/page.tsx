import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/Title";
import { projectsData } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";

const ProjectPage = ({ params }: { params: { id: string } }) => {
	const project = projectsData.find(
		(project) => project.id === parseInt(params.id, 10)
	);

	// TODO: suspense
	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<div className="h-auto w-full bg-primary text-primary-foreground rounded-3xl border border-primary p-4 flex flex-col items-start justify-evenly gap-8 relative overflow-clip md:justify-start">
			<Title>{project.title}</Title>
			<p>{project.shortDesc}</p>
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
			<div className="flex flex-wrap gap-8 w-full items-start justify-between sm:justify-evenly overflow-clip">
				{Object.entries(project.techs).map((category) => (
					<div
						key={category[0]}
						className="flex flex-col items-center justify-start w-full sm:w-60 md:w-48 gap-2"
					>
						<Title variant="small">
							{category[0]
								.charAt(0)
								.toUpperCase()
								.concat(category[0].slice(1))}
						</Title>
						<div className="flex flex-wrap gap-[0.1rem] w-full items-start justify-center">
							{category[1].map((tech) => (
								<span
									key={tech}
									className="bg-secondary text-secondary-foreground rounded-3xl px-4 py-2 flex items-center justify-center flex-nowrap text-sm"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-wrap gap-[0.1rem] overflow-clip">
				{project.links && (
					<div className="flex gap-2">
						<Link
							href={project.links.github ?? "#"}
							className="bg-background text-foreground rounded-full px-2 py-2 hover:bg-primary hover:text-primary-foreground"
						>
							<Github>{project.links.github}</Github>
						</Link>
						<Link
							href={project.links.website ?? "#"}
							className="bg-background text-foreground rounded-full px-2 py-2 hover:bg-primary hover:text-primary-foreground"
						>
							<ExternalLink>{project.links.website}</ExternalLink>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectPage;
