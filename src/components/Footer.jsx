import { useLanguage } from "../assets/context/LanguageContext";
import flag from "../assets/flags/brasil.png";
import LogoLinkedin from "../assets/icons/linkedin.svg?react";
import LogoGithub from "../assets/icons/github.svg?react";
import InstagramIcon  from "../assets/icons/instagram-svgrepo-com.svg?react";

export default function Footer() {
	const { t } = useLanguage();
	return (
		<div className="text-center pl-6 pb-4 md:grid md:grid-cols-2 md:grid-rows-2 md:px-20 lg:pt-8">
			<div className="text-start cols-1">
				<p className="text-white text-xl font-bold lg:text-3xl">
					{t.footer.name}{" "}
				</p>
				<p className="flex gap-2 items-center text-[#9CA3AF] text-xl">
					<img src={flag} alt="brazilFlag" className="h-8 w-8" />
					{t.footer.based}
				</p>
			</div>
			<div className="text-start pt-8  md:pt-0 ">
				<p className="text-[#9CA3AF] text-xl lg:text-end">{t.footer.aboutPortfolio}</p>
			</div>
			<div className="grid grid-cols-2 mt-4 row-2 col-span-2">
				<div className="text-start  col-1">
					<p className="text-white text-md">{t.footer.copyright}</p>
				</div>
				<div className="col-2 flex items-center justify-center gap-3 lg:gap-6 lg:justify-end lg:items-start">
					<a
						href="https://www.linkedin.com/in/blucio-castro-0b7a91198/"
						target="_blank"
					>
						<LogoLinkedin className="w-6 h-6 text-[#9CA3AF] hover:text-white" />
					</a>
					<a href="https://github.com/BlucioCastro" target="_blank">
						
						<LogoGithub className="w-6 h-6 text-[#9CA3AF] hover:text-white" />
					</a>
					
					<a href="https://www.instagram.com/bluciocastro/" target="_blank">
						<InstagramIcon className="w-6 h-6 text-[#9CA3AF] hover:text-white"/>
					</a>
				</div>
			</div>
		</div>
	);
}
