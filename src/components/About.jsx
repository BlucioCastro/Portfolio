import { useState } from "react";
import { useLanguage } from "../assets/context/LanguageContext";

export default function About() {
	const { t } = useLanguage();
	const [expanded, setExpanded] = useState(false);
	return (
		<section
			className="w-full h-full md:grid md:grid-cols-2 p-4 md:pt-20 scroll-mt-[50px] md:scroll-mt-[-30px] lg:scroll-mt-[-30px]"
			id="about"
		>
			<div className="flex justify-center items-center  animate-autoshow">
				<p className="writing-vertical-rl text-center font-skills font-medium rotate-270 tracking-tighter py-20 text-[4rem]  inline-block leading-12 md:leading-24 md:text-[8rem] md:py-40 lg:text-[9rem] lg:py-48 lg:leading-32 ">
					{t.about.title1} <br /> {t.about.title2}
				</p>
			</div>
			<div className="flex flex-col justify-center lg:pr-8">
				<p className="pt-4 text-justify lg:text-lg">
					{t.about.txt1}
					<br />
					<br />
					{t.about.txt2}
				</p>

				<div
					className={`
						overflow-hidden
						transition-all duration-500 ease-in-out
						${expanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"}
						md:max-h-none md:opacity-100 md:mt-4
					`}
				>
					<p className="text-justify lg:text-lg">
						{t.about.txt3}
						<br />
						<br />
						{t.about.txt4}
					</p>
				</div>
				<button
					onClick={() => setExpanded(!expanded)}
					className="
						mt-4 w-fit
						text-sm underline
						transition-opacity hover:opacity-80
						md:hidden
						text-gray-200
					"
				>
					{expanded ? t.about.btnSeeLess : t.about.btnSeeMore}
				</button>

				<div className="pt-8 flex justify-center">
					<button
						className="px-3 py-2 lg:mt-8 bg-orange-600 rounded-sm font-medium text-amber-50 cursor-pointer w-20 "
						onClick={() => {
							document
								.getElementById("contact")
								?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						{t.about.btnAbout}
					</button>
				</div>
			</div>
		</section>
	);
}
