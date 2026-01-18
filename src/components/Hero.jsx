import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
} from "@heroicons/react/16/solid";
import image from "../assets/profile/blucioimg2edited.png";
import { useLanguage } from "../assets/context/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
	const { t } = useLanguage();
	return (
		<section id="home" className="scroll-mt-30 ">
			<div className="h-[93vh] md:h-[81vh] lg:h-[82vh] xl:h-[82vh] 2xl:h-[82vh] scroll-mt-20">
				<div className="bg-[#1F1B1A] grid grid-cols-3 grid-rows-3 w-full h-full relative overflow-hidden">
					<div className="z-1 absolute flex  w-full flex-col items-center text-center leading-none xl:leading-45 2xl:leading-53 3xl:pt-8 3xl:flex 3xl:gap-10 md:top-[10%] lg:top-[5%] xl:top-[1%] 2xl:top-[2%] 3xl:top-[2%]">
						<motion.p
							animate={{
								x: [-500, 0],
								transition: { ease: "easeInOut", duration: 0.5 },
								
							}}
							className="w-full col-span-3 md:text-[15vw] lg:text-[15vw] xl:text-[14vw] 2xl:text-[15vw] font-hero"
						>
							BLUCIO CASTRO
						</motion.p>
						<motion.p
							className="w-full md:text-[14.3vw] lg:text-[14.3vw]  xl:text-[13.2vw] 2xl:text-[14vw] font-hero "
							animate={{
								x: [500, 0],
								transition: { ease: "easeInOut", duration: 0.5 },
							}}
						>
							WEB DEVELOPER
						</motion.p>
					</div>
					<div className="col-1 row-3 flex flex-col justify-center  px-8 gap-8 h-full w-full pb-10 lg:pl-15 xl:pl-22 xl:pb-0 ">
						<div className="flex flex-col gap-5 xl:gap-5 justify-start">
							<p className="uppercase font-barlow text-[1.2rem] xl:h-[40%] text-justify lg:text-2xl ">
								{t.hero.pLeft}
							</p>
							<div className="flex justify-start w-full">
								<button
									className="border-r-2 border-b-2 py-2 px-4 flex items-center cursor-pointer gap-2 bg-[#1c1716]"
									onClick={() => {
										document
											.getElementById("projects")
											?.scrollIntoView({ behavior: "smooth" });
									}}
								>
									{t.hero.btnLeft} <ArrowLongRightIcon className="w-8 h-6" />
								</button>
							</div>
						</div>
					</div>
					<div className="flex h-full w-full col-2 row-span-3 xl:w-full bg-[#784c3d] justify-center items-end relative">
						<img
							src={image}
							alt=""
							className="md:h-[80%] xl:h-[80%] w-full absolute z-10 md:object-cover"
						/>
					</div>
					<div className="col-3 row-3 flex flex-col justify-center px-8 gap-8 h-full w-full pb-10 lg:pr-15 xl:pr-30 2xl:pr-25 xl:pb-6">
						<div className=" flex flex-col md:gap-13 lg:gap-[8vh] xl:gap-5 justify-start items-end ">
							<p className="uppercase font-barlow text-justify text-[1.2rem] lg:text-2xl  ">
								{t.hero.pRight}
							</p>
							<div className="flex justify-end w-full">
								<button
									className="border-l-2 border-b-2 w-44 py-2 px-6 flex items-center cursor-pointer gap-2 bg-[#1c1716]"
									onClick={() => {
										document
											.getElementById("contact")
											?.scrollIntoView({ behavior: "smooth" });
									}}
								>
									<ArrowLongLeftIcon className="w-8 h-6" /> {t.hero.btnRight}
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-evenly bg-[#a0979049] md:p-2 md:[&>p]:font-bold md:[&>p]:text-2xl xl:[&>p]:text-2xl xl:p-2">
					<p>Design</p>
					<p>✦</p>
					<p>Code</p>
					<p>✦</p>
					<p>Motion</p>
					<p>✦</p>
					<p>Interaction</p>
				</div>
			</div>
		</section>
	);
}
