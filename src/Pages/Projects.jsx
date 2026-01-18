import { useParams } from "react-router-dom";
import projects from "../data/projects";
import {
	ArrowLeftCircleIcon,
	ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import { useLanguage } from "../assets/context/LanguageContext";
import { useState } from "react";
import GlobeIcon from "../assets/icons/globeIcon.svg?react";

export default function Project() {
	const { id } = useParams();
	const { t } = useLanguage();
	const [current, setCurrent] = useState(0);

	const nextSlide = () => {
		setCurrent((prev) => {
			if (prev < projectData.imageList.length - 1) {
				return prev + 1;
			}
			return prev;
		});
	};

	const prevSlide = () => {
		setCurrent((prev) => {
			if (prev > 0) {
				return prev - 1;
			}
			return prev;
		});
	};
	const projectData = projects.find((p) => p.id === id);
	const projectText = t.projects?.[id];

	if (!projectData) return <h1>Projeto não encontrado</h1>;
	return (
		<div className="xl:grid md:px-15 xl:grid-cols-[2fr_1fr] ">
			<div className=" m-2 p-2 col-1 bg-linear-to-r from-[#0b0b0bf6] via-[#1d1d1d] to-[#0b0b0b] border border-[#2a2a2a] rounded-lg">
				<div className="overflow-hidden w-full ">
					<div
						className="flex lg:h-[70vh] xl:h-[76vh] w-full transition-transform duration-700"
						style={{
							transform: `translateX(-${current * 100}%)`,
						}}
					>
						{projectData.imageList.map((i) => (
							<div
								key={i}
								className="w-full flex justify-center md:px-10 xl:pt-5 xl:px-15 shrink-0 "
							>
								<img
									src={i}
									alt=""
									className="w-full object-fill  rounded-lg border-2 border-[#2a2a2a]"
								/>
							</div>
						))}
					</div>
					<div className="flex justify-between gap-2 py-8 px-2 md:px-10 xl:px-15 items-center w-full">
						<button
							onClick={prevSlide}
							className={` cursor-pointer ${
								current === 0 ? "text-orange-900" : "text-orange-500"
							}`}
						>
							<ArrowLeftCircleIcon className="w-8 h-8 " />
						</button>
						<div className="flex gap-2">
							{projectData.imageList.map((_, i) => (
								<button
									key={i}
									onClick={() => setCurrent(i)}
									className={`w-3 h-1 md:w-5 rounded-full bg-orange-500 cursor-pointer
								${current === i ? "bg-orange-500 scale-110" : "bg-orange-900"}
								`}
								></button>
							))}
						</div>
						<button
							onClick={nextSlide}
							className={`cursor-pointer ${
								current === projectData.imageList.length - 1
									? "text-orange-900 "
									: "text-orange-500 "
							}`}
						>
							<ArrowRightCircleIcon className="w-8 h-8 " />
						</button>
					</div>
				</div>
			</div>
			<div className="col-2 px-4 mt-10">
				<div>
					<h1 className="font-bold text-3xl 3xl:text-4xl">{projectData.name}</h1>
					<p className="text-[#7e838d] text-lg 2xl:pt-4 3xl:text-xl 3xl:py-4">{projectText.subtitle}</p>
					<div className="h-px w-full bg-[#56565c] mt-4"></div>
				</div>
				<div className="lg:mt-8 xl:mt-4">
					<h2 className="font-bold text-2xl pb-4 pt-8 lg:pt-0 3xl:text-3xl">
						{t.projectTxt.about}
					</h2>

					<p className="text-lg text-justify 3xl:text-xl 3xl:pb-4">{projectText.description}</p>
				</div>
				<div className="h-px w-full bg-[#56565c] my-4"></div>
				<div>
					<h2 className="font-bold text-2xl 3xl:text-3xl 3xl:pb-4">{t.projectTxt.tools}</h2>
					<div className="flex gap-4 flex-wrap pt-4 3xl:py-4">
						{projectText.tools.map((tool) => (
							<div key={tool} className="">
								<p className="bg-white text-black text-[.8rem] font-medium px-2 py-sm rounded-xl hover:bg-[#ffffffa2]">
									{tool}
								</p>
							</div>
						))}
					</div>
					<div className="h-px w-full bg-[#56565c] mt-4"></div>
				</div>
				<div className="py-8">
					<a
						href={projectData.link}
						target="_blank"
						className="border px-4 py-2 rounded-sm border-[#56565c] hover:bg-[#56565c] w-37 flex gap-2 items-center justify-center text-sm"
					>
						<GlobeIcon className="w-4 h-4" /> {t.projectTxt.btnVisit}
					</a>
				</div>
			</div>
		</div>
	);
}
