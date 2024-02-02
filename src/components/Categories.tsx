import React from "react";
import { Icon, IconProps } from "@/components/ui/Icon";

const themes: {
	key: string;
	icon: IconProps["name"];
	desc: string;
	className: string;
}[] = [
	{
		key: "Blockchain Development & Smart Contract Testing",
		icon: "shield",
		desc: "Designing secure smart contracts and rigorous testing protocols for reliable blockchain applications.",
		className: "bg-accent text-accent-foreground border-accent-foreground",
	},
	{
		key: "Front-End Development & UX Design",
		icon: "layout-dashboard",
		desc: "Crafting captivating user experiences with cutting-edge front-end technologies and best UX practices.",
		className: "bg-primary text-primary-foreground border-primary",
	},
	{
		key: "Back-End API & Microservices Architecture",
		icon: "database",
		desc: "Developing scalable back-end systems with RESTful APIs and microservices for versatile web applications.",
		className: "bg-secondary text-secondary-foreground border-secondary",
	},
	{
		key: "Data Analytics, Visualization & Database Design",
		icon: "bar-chart-3",
		desc: "Leveraging data to drive decisions with advanced analytics, impactful visualizations, and strategic database design.",
		className: "border text-foreground",
	},
];

const Categories = () => {
	return (
		<>
			{themes.map((theme, index) => (
				<div
					key={index}
					className={`h-auto w-full rounded-3xl p-4 border flex flex-col items-start justify-between gap-8 relative md:justify-start lg:justify-between ${theme.className}`}
				>
					<Icon
						name={theme.icon}
						className="w-28 h-28 absolute left-[0.5rem] top-3"
					/>
					<h1 className="pt-32 text-3xl leading-8 font-semibold">
						{theme.key}
					</h1>
					<p className={`text-lg`}>{theme.desc}</p>
				</div>
			))}
		</>
	);
};

export default Categories;
