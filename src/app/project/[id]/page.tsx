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
	return (
		<Suspense fallback={<VideoSkeleton />}>
			<VideoComponent fileName={preview!} />
		</Suspense>
	);
};

const ImagesList = ({ images }: { images: projectType["images"] }) => {
	if (!images || images.length == 0) return null;
	return (
		<div className="grid grid-flow-row sm:grid-flow-col gap-2">
			{images.map((image, index) => (
				<Image
					src={"/" + image}
					key={index}
					alt={`Image ${index}`}
					priority={index === 0} // Only the first image has priority if needed
					width={500} // Set a fixed width for all images
					height={500} // Set a fixed height for all images
					className="object-fill rounded-3xl w-full h-full"
				/>
			))}
		</div>
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
			<div
				className={`h-auto w-full ${project.colors} rounded-3xl border border-primary p-4 flex flex-col items-start justify-evenly gap-8 relative overflow-clip md:justify-start`}
			>
				<Title>{project.title}</Title>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
					<p>{project.shortDesc}</p>
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
				</div>
			</div>

			{project.preview && (
				<div className="flex items-center justify-center rounded-3xl overflow-clip w-full h-auto">
					<VideoPreview preview={project.preview} />
				</div>
			)}

			{project.images && (
				<div className="flex items-center justify-center rounded-3xl overflow-clip w-full h-auto">
					<ImagesList images={project.images} />
				</div>
			)}

			<div className="gap-2 w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 auto-cols-min overflow-hidden justify-items-stretch">
				{Object.entries(project.techs).map((category, index, array) => (
					<div
						key={category[0]}
						className={`flex flex-col items-center justify-start w-full gap-2 rounded-3xl p-2 ${
							array.length == 4
								? "sm:col-span-1 md:col-span-2 lg:col-span-1"
								: array.length == 3
								? `sm:col-span-2 ${
										index == 1 ? "sm:row-span-2" : ""
								  }`
								: array.length == 2
								? "sm:col-span-2"
								: ""
						} `}
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
									className="bg-secondary text-secondary-foreground rounded-3xl px-4 py-2 flex items-center justify-center flex-nowrap text-sm text-nowrap"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>

			<div className="flex flex-wrap gap-[0.1rem] overflow-clip border bg-primary text-secondary-foreground rounded-full w-full h-auto">
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
