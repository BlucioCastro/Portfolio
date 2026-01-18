import { useLanguage } from "../assets/context/LanguageContext";

export default function Menu({ isOpen, onNavigate }) {
	const {lang, setLang} = useLanguage()

	return (
		<div
			className={`
				absolute right-0 top-full
				w-[99%] 
				bg-[#1f1b1ae8] 
        py-6
				flex flex-col items-center gap-4
				transition-all duration-300
        border-b border-orange-500
        rounded-b-2xl
				${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
			`}
		>
			<button onClick={() => onNavigate("home1")}>Home</button>
			<button onClick={() => onNavigate("about")}>About</button>
			<button onClick={() => onNavigate("projects")}>Projects</button>
			<button onClick={() => onNavigate("contact")}>Contact</button>
			<button
							onClick={() => setLang(lang === "en" ? "pt" : "en")}
							className="text-sm  px-3 py-1 cursor-pointer"
						>
							{lang === "en" ? "PT" : "EN"}
						</button>
		</div>
	);
}
