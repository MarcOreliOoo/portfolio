import Hero from "@/components/Hero/Hero";
import CTA from "@/components/CTA";
import About from "@/components/About";
import Categories from "@/components/Categories/Categories";
import Projects from "@/components/Projects/Projects";
import BasedIn from "@/components/BasedIn";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
	return (
		<main className="w-full h-full grid grid-cols-1 gap-2">
			<Hero />
			<CTA />
			<About />
			<Categories />
			<Projects />
			<BasedIn />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
}
