import About from "../components/About";
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
			<section className=" p-2 bg-linear-to-br from-orange-500 to-[#2a1a15] md:p-3  m-4 md:m-8 rounded-4xl">
				<div className="bg-[#1F1B1A] rounded-[30px] p-4 lg:p-8">
					<About />
					<Skills />
					<ProjectsCarousel />
				</div>
			</section>
		</>
	);
}
