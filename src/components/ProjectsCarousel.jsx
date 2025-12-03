import { useState } from "react";
import HydraImg from "../assets/HydraLandingPage.jpeg";
import AdviceGenerator from "../assets/AdviceGenerator.jpeg";
import ProductLWC from "../assets/ProductListWithCart.jpeg";
import tmdbplus from "../assets/tmdbplus1.png";

export default function ProjectsCarousel() {
	const [current, setCurrent] = useState(0);

	const projects = [
		{
			id: "1",
			name: "TMDb+",
			image: tmdbplus,
			number: "01",
			description:
				"Catálogo de filmes e séries desenvolvido em React...",
		},
		{
			id: "2",
			name: "Hydra Landing Page",
			image: HydraImg,
			number: "02",
			description: "Projeto desenvolvido em React com Vite...",
		},
		{
			id: "3",
			name: "Product List With Cart",
			image: ProductLWC,
			number: "03",
			description:
				"Um projeto criado a partir de um desafio do Frontend Mentor...",
		},
		{
			id: "4",
			name: "Advice Generator App",
			image: AdviceGenerator,
			number: "04",
			description:
				"Projeto desenvolvido para reforçar meu conhecimento...",
		},
	];

	return (
		<div className="w-full">
			<h1 className="text-xl mb-4">My Projects</h1>
			<div className="flex items-center gap-2 mb-4">
				<span className="text-lg font-bold text-gray-500">
					{projects[current].number}
				</span>
				<h2 className="text-xl font-semibold">{projects[current].name}</h2>
			</div>

			<div className="flex flex-col items-center">
				<div className="w-[50%] overflow-hidden flex justify-center items-center">
					<div
						className="flex gap-6 transition-transform duration-700"
						style={{ transform: `translateX(-${current * 86}%)` }}
					>
						{projects.map((slide, index) => {
							const isActive = index === current;

							return (
								<div
									key={slide.id}
									className={`w-[86%] shrink-0 overflow-hidden transition-all duration-700 ${
										isActive ? "opacity-100" : "opacity-40"
									}`}
								>
									<img
										src={slide.image}
										alt={slide.name}
										className="w-160 h-full object-fill"
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-4 gap-2">
				{projects.map((_, i) => (
					<button
						key={i}
						onClick={() => setCurrent(i)}
						className={`h-1 w-9 rounded-lg cursor-pointer ${
							i === current ? "bg-orange-500 scale-110" : "bg-amber-900"
						}`}
					></button>
				))}
			</div>
		</div>
	);
}
