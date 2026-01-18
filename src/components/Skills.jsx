import { useLanguage } from "../assets/context/LanguageContext";

export default function Skills() {
	const { t } = useLanguage()
	return (
		<div className="flex flex-col items-center px-4 py-12 md:pt-20 lg:py-18">
			<p className="skillStyle animate-autoshow pr-3 md:pr-12 text-center">{t.skills.my}</p>
			<p className="skillStyle animate-autoshow pl-12 md:pl-10">HTML</p>
			<p className="skillStyle animate-autoshow pr-10 md:pr-20">CSS</p>
			<p className="skillStyle animate-autoshow md:pl-10">TAILWINDCSS</p>
			<p className="skillStyle animate-autoshow pr-8">REACT</p>
			<p className="skillStyle animate-autoshow pr-4 md:pr-20">JAVASCRIPT</p>
			<p className="skillStyle animate-autoshow pl-10 md:pl-20">PYTHON</p>
			<p className="skillStyle animate-autoshow pr-4">GIT</p>
			<p className="skillStyle animate-autoshow pl-5 md:pr-30">GITHUB</p>
		</div>
	);
}
