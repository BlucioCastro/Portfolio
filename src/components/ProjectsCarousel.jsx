import { useState } from "react";
import HydraImg from "../assets/HydraLandingPage.jpeg";
import AdviceGenerator from "../assets/AdviceGenerator.jpeg";
import ProductLWC from "../assets/plwc2.jpeg";
import tmdbplus from "../assets/tmdbplus1.png";
import { Link } from "react-router-dom";

export default function ProjectsCarousel() {
	const [current, setCurrent] = useState(0);

	const projects = [
		{
			id: "1",
			name: "TMDb+",
			image: tmdbplus,
			number: "01",
			link: "/projects/tmdbplus",
		},
		{
			id: "2",
			name: "Hydra Landing Page",
			image: HydraImg,
			number: "02",
			link: "/projects/hydralandingpage",
		},
		{
			id: "3",
			name: "Product List With Cart",
			image: ProductLWC,
			number: "03",
			link: "/projects/productlistwithcart",
		},
		{
			id: "4",
			name: "Advice Generator App",
			image: AdviceGenerator,
			number: "04",
			link: "/projects/advicegeneratorapp",
		},
	];
	const invertido = [...projects].reverse();
	return (
		<div className="w-full relative" id="projects">
			<h1 className="text-xl mb-4">My Projects</h1>

			<div className="w-50 overflow-hidden absolute left-70 bottom-83">
				<div
					className="w-full flex transition-transform duration-800"
					style={{ transform: `translateX(-${current * 100}%)` }}
				>
					{projects.map((num, index) => {
						const isActive = num === current;
						return (
							<div key={num.id} className="w-full shrink-0 ">
								<span className={`text-9xl font-bold text-[#313237] ${isActive ? "scale-100" : "scale-70"}`}>
									{num.number}
								</span>
							</div>
						);
					})}
				</div>
			</div>
			<div className="overflow-hidden absolute md:top-40 md:left-55 md:z-10">
				<div
					className="h-30 flex flex-col justify-start  transition-transform  duration-700"
					style={{ transform: `translateY(-${current * 100}%)` }}
				>
					{projects.map((title) => (
						<div key={title.id} className="h-30 shrink-0 w-90">
							<span className="text-5xl font-bold flex-wrap font-sans drop-shadow-xl">
								{title.name}
							</span>
						</div>
					))}
				</div>
			</div>
			<div className="overflow-hidden absolute top-75 left-55">
				<div
					className="h-6 flex flex-col justify-end transition-transform duration-700"
					style={{
						transform: `translateY(${current * 100}%)`,
					}}
				>
					{invertido.map((i) => (
						<div key={i.id} className="h-6 shrink-0">
							<Link to={i.link} className="font-sans underline ">
								View Case
							</Link>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col items-center">
				<div className="w-[50%] overflow-hidden flex justify-start items-center">
					<div
						className="flex gap-6 transition-transform duration-700"
						style={{ transform: `translateX(-${current * 89}%)` }}
					>
						{projects.map((slide, index) => {
							const isActive = index === current;

							return (
								<div
									key={slide.id}
									className={`w-[86%] shrink-0 overflow-hidden ml-0 transition-all duration-700 ease-in-out ${
										isActive ? "opacity-100 scale-100" : "opacity-40 scale-85"
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
