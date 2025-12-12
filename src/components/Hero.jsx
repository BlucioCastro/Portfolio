import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
} from "@heroicons/react/16/solid";
import image from "../assets/blucioimg2edited.png";

export default function Hero() {
	return (
		<div className="h-[96vh] md:h-[80vh] lg:h-[92vh] xl:h-[93vh] p-2 bg-linear-to-br from-orange-500 to-[#2a1a15] md:p-3  m-4 md:m-8 rounded-4xl">
			<div className="bg-[#1F1B1A] grid grid-cols-3 w-full h-full rounded-[30px]  relative">
				<div className="z-1 absolute flex  w-full flex-col items-center text-center leading-none md:top-[6%] lg:top-[5%] xl:top-[3%] 2xl:top-[4%]">
					<p className="w-full md:text-[15vw] lg:text-[15vw] xl:text-[16vw] 2xl:text-[16vw] font-hero ">
						BLUCIO CASTRO
					</p>
					<p className="w-full md:text-[14.3vw] lg:text-[14.3vw]  xl:text-[15vw] 2xl:text-[15vw] font-hero ">
						WEB DEVELOPER
					</p>
				</div>

				<div className="col-1 flex flex-col justify-end  px-8 gap-8 h-full w-full pb-10 lg:pl-15 xl:pl-15 xl:pb-5 ">
					<div className="flex flex-col gap-5 xl:gap-5 justify-start">
						<p className="uppercase font-barlow text-[1.2rem] text-justify lg:text-2xl ">
							A web developer at the beginnig of their career.
						</p>
						<div className="flex justify-start w-full">
							<a
								href="#projects"
								target="_self"
								className="border-r-2 border-b-2 py-2 px-4 flex items-center gap-2 bg-[#1c1716]"
							>
								See Projects <ArrowLongRightIcon className="w-8 h-6" />
							</a>
						</div>
					</div>
				</div>

				<div className="flex h-full w-full col-2 xl:w-full bg-[#784c3d] justify-center items-end relative">
					<img
						src={image}
						alt=""
						className="md:h-[80%] xl:h-[80%] w-full absolute z-10 md:object-cover"
					/>
				</div>
				<div className="col-3 flex flex-col justify-end  px-8 2xl:px-18 gap-8 h-full w-full pb-10 lg:pr-15 xl:pr-30 xl:pb-5">
					<div className=" flex flex-col md:gap-13 lg:gap-[8vh] xl:gap-13 justify-start items-end ">
						<p className="uppercase font-barlow text-justify text-[1.2rem] lg:text-2xl ">
							Open to new opportunities
						</p>
						<div className="flex justify-end w-full">
							<a
								href="#contact"
								target="_self"
								className="border-l-2 border-b-2 w-44 py-2 px-6 flex items-center gap-2 bg-[#1c1716]"
							>
								<ArrowLongLeftIcon className="w-8 h-6" /> Let's Talk
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
