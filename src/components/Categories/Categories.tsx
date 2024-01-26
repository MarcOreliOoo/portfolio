import React from "react";
import { Icon, IconProps } from "@/components/ui/Icon";

const themes: { key: string; icon: IconProps["name"]; desc: string }[] = [
	{
		key: "Blockchain Development & Smart Contract Testing",
		icon: "shield",
		desc: "Designing secure smart contracts and rigorous testing protocols for reliable blockchain applications.",
	},
	{
		key: "Front-End Development & UX Design",
		icon: "layout-dashboard",
		desc: "Crafting captivating user experiences with cutting-edge front-end technologies and best UX practices.",
	},
	{
		key: "Back-End API & Microservices Architecture",
		icon: "database",
		desc: "Developing scalable back-end systems with RESTful APIs and microservices for versatile web applications.",
	},
	{
		key: "Data Analytics, Visualization & Database Design",
		icon: "bar-chart-3",
		desc: "Leveraging data to drive decisions with advanced analytics, impactful visualizations, and strategic database design.",
	},
];

const Categories = () => {
	return (
		<>
			{themes.map((theme, index) => (
				<div
					key={index}
					className="h-auto w-full rounded-3xl p-4 border flex flex-col items-start justify-evenly gap-8 bg-accent text-accent-foreground "
				>
					<Icon name={theme.icon} className="w-28 h-28" />
					<h1 className="text-3xl leading-8 font-semibold">
						{theme.key}
					</h1>
					<p className="text-lg text-secondary">{theme.desc}</p>
				</div>
			))}
		</>
	);
};

export default Categories;
