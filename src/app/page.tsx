import Hero from "@/components/Hero/Hero";
import CTA from "@/components/CTA";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Projects from "@/components/Projects/Projects";
import BasedIn from "@/components/BasedIn";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
	return (
		<main className="w-full h-full grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div className="gap-2 w-full grid grid-cols-1 sm:grid-cols-2 sm:col-span-2 md:col-span-3">
				<Hero />
				<CTA />
			</div>
			<div className="col-span-1 sm:col-span-2 md:col-span-3">
				<About />
			</div>
			{/* <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 md:col-span-2 md:grid-cols-1 lg:">
				<Categories />
			</div> */}
			<Projects />
			<BasedIn />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
}
