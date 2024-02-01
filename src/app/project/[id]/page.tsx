import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/Title";
import { projectType, projectsData } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";

import { Suspense } from "react";
import { list } from "@vercel/blob";

const VideoSkeleton = () => (
	<div className="w-full h-72 bg-secondary rounded-3xl bg-gradient-to-r from-secondary to-accent" />
);

const VideoComponent = async ({ fileName }: { fileName: string }) => {
	const { blobs } = await list({
		prefix: fileName,
	});

	const { url } = blobs[0];

	return (
		<video
			controls
			preload="auto"
			aria-label="Video player"
			muted
			autoPlay
			playsInline
			loop
		>
			<source src={url} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
};

const VideoPreview = ({ preview }: { preview: projectType["preview"] }) => {
	if (!preview) return null;
	return (
		<Suspense fallback={<VideoSkeleton />}>
			<VideoComponent fileName={preview} />
		</Suspense>
	);
};

const ImagesList = ({ images }: { images: projectType["images"] }) => {
	if (!images) return null;
	return (
		<>
			{images.map((image, index) => (
				<Image
					key={index}
					src={image}
					alt={image}
					width="500"
					height="500"
					priority={true}
				/>
			))}
		</>
	);
};

const ProjectPage = ({ params }: { params: { id: string } }) => {
	const project = projectsData.find(
		(project) => project.id === parseInt(params.id, 10)
	);

	// TODO: suspense
	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<main className="h-auto w-full grid grid-cols-1 gap-2">
			<div className="h-auto w-full bg-primary text-primary-foreground rounded-3xl border border-primary p-4 flex flex-col items-start justify-evenly gap-8 relative overflow-clip md:justify-start">
				<Title>{project.title}</Title>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
				</div>
			</div>
			<div className="flex items-center justify-center mx-auto rounded-3xl overflow-clip w-full h-full">
				<VideoPreview preview={project.preview} />
			</div>
			<div className="flex items-center justify-center mx-auto rounded-3xl overflow-clip w-full h-full">
				<ImagesList images={project.images} />
			</div>
			<div className="flex flex-wrap gap-8 w-full items-start justify-between sm:justify-evenly overflow-clip">
				{Object.entries(project.techs).map((category) => (
					<div
						key={category[0]}
						className={`flex flex-col items-center justify-start w-full sm:w-60 md:w-48 gap-2 rounded-3xl p-2`}
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
		</main>
	);
};

export default ProjectPage;
