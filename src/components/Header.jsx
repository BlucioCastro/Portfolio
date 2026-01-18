import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../assets/context/LanguageContext";



export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const {lang, setLang} = useLanguage();
	const { t } = useLanguage()

	const NavigationManager = (where) => {
		setIsOpen(false);
		if (location.pathname === "/") {
			navigate(`#${where}`);
		} else {
			navigate(`/#${where}`);
		}
	};

	useEffect(() => {
		if (location.hash) {
			const el = document.querySelector(location.hash);
			if (el) {
				el.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [location]);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 0);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className="sticky top-[-.5px] z-50 relative border-b-2
						border-[#4f4f55]">
			<div
				className={`flex justify-between items-center px-5 py-4 h-14 transition-all duration-200 rounded-t-[20px] ${
					scrolled ? "bg-[#1F1B1A]" : ""
				}`}
			>
				<button onClick={() => NavigationManager("home")} className="text-[1.1rem] lg:text-lg font-bold font-logo xl:text-2xl cursor-pointer"> <span className="text-orange-500">&lt;blucio/&gt;</span> dev</button>
		
				{/* <h1 className="text-[1.1rem] lg:text-lg font-bold font-logo xl:text-2xl"> &lt;blucio/&gt; dev</h1> */}

				<div className="hidden  [&>button]:pl-4 [&>button]:cursor-pointer font-medium md:flex md:gap-2">
					<button onClick={() => NavigationManager("home")}>{t.header.btnHome}</button>
					<button onClick={() => NavigationManager("about")}>{t.header.btnAbout}</button>
					<button onClick={() => NavigationManager("projects")}>
						{t.header.btnProjects}
					</button>
					<button onClick={() => NavigationManager("contact")}>{t.header.btnContact}</button>
					<div>
						<button
							onClick={() => setLang(lang === "en" ? "pt" : "en")}
							className="text-sm  px-3 py-1 cursor-pointer"
						>
							{lang === "en" ? "PT" : "EN"}
						</button>
					</div>
				</div>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className="relative md:hidden w-8 h-8"
				>
					<Bars3Icon
						className={`
							absolute inset-0 m-auto
							w-8 h-6 text-amber-50
							transition-all duration-300
							${isOpen ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"}
						`}
					/>

					<XMarkIcon
						className={`
							absolute inset-0 m-auto
							w-7 h-7 text-amber-50
							transition-all duration-300
							${isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"}
						`}
					/>
				</button>
			</div>

			<Menu isOpen={isOpen} onNavigate={NavigationManager} />
		</header>
	);
}
