"use client";
import React, { useState, useRef, useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import CTA from "@/components/CTA";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Projects from "@/components/Projects/Projects";
import BasedIn from "@/components/BasedIn/BasedIn";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer/Footer";
import Filler from "@/components/Filler";

export default function Home() {
	const [height, setHeight] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const currentRef = ref.current;
		const handleResize = () => {
			if (currentRef?.offsetHeight) setHeight(currentRef.offsetHeight);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<main className="w-full h-full grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div className="gap-2 w-full grid grid-cols-1 sm:grid-cols-2 sm:col-span-2 md:col-span-3 lg:col-span-3">
				<Hero />
				<CTA />
			</div>
			<div className="hidden lg:block lg:col-span-1">
				<Filler />
			</div>
			<div ref={ref} className="col-span-1 sm:col-span-2 md:col-span-3">
				<About />
			</div>
			<div className="hidden lg:block lg:col-span-1">
				<BasedIn height={height} />
			</div>
			<div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:col-span-2 md:col-span-3 lg:grid-cols-4 lg:col-span-4">
				<Categories />
			</div>

			<div className="block lg:hidden">
				<BasedIn />
			</div>

			<div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
				<Projects />
			</div>

			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
}
