import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hero1 from "../components/Hero1";
import ProjectsCarousel from "../components/ProjectsCarousel";
import Skills from "../components/Skills";

export default function Home() {
	return (
		<>
			<section>			
				<div className="hidden md:block">
					<Hero />
				</div>
				<div className="block md:hidden">
					<Hero1 />
				</div>
			</section>
			<section>
				<div>
					<About />
					<Skills />
					<ProjectsCarousel />
					<Contact />
				</div>
			</section>
		</>
	);
}
