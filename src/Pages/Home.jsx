import About from "../components/About";
import Hero from "../components/Hero";

export default function Home() {
	return (
		<>
			<section>
				<Hero />
			</section>
			<section className=" p-[8px] bg-gradient-to-br from-orange-500 to-[#2a1a15] md:p-[12px]  m-4 md:m-8 rounded-4xl">
				<div className="bg-[#1F1B1A] rounded-[30px] p-8">
					<About />
				</div>
			</section>
		</>
	);
}
