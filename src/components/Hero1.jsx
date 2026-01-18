import { m } from "framer-motion";
import { useLanguage } from "../assets/context/LanguageContext";
import myImage from "../assets/profile/myimg.jpeg";
import { motion } from "framer-motion";

export default function Hero1() {
	const { t } = useLanguage();

	const container = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.4,
			},
		},
	};
	const item = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<section id="home1" className="scroll-mt-30">
			<motion.div
				className=" h-[90vh] px-4 pb-4 pt-12 rounded-4xl"
				variants={container}
				initial="hidden"
				animate="visible"
			>
				<div className=" flex flex-col justify-start gap-12 h-full overflow-hidden">
					<div className="flex flex-col gap-4 ">
						<motion.div className="flex items-center gap-2" variants={item}>
							<div className="h-px w-4 bg-amber-50"></div>
							<p className="text-amber-50 text-xl">{t.hero1.p1}</p>
						</motion.div>
						<div className="text-amber-50 pl-6 flex flex-col gap-2 ">
							<motion.p className="text-2xl " variants={item}>
								{t.hero1.p2} <strong>Blucio Castro</strong>
							</motion.p>
							<motion.p variants={item}>{t.hero1.pMessage}</motion.p>
						</div>
						<div className="pl-5 mt-4">
							<motion.button
								variants={item}
								className="px-3 py-2 bg-orange-600 rounded-sm font-medium text-amber-50 cursor-pointer"
								onClick={() => {
									document
										.getElementById("projects")
										?.scrollIntoView({ behavior: "smooth" });
								}}
							>
								{t.hero1.btn}
							</motion.button>
						</div>
					</div>
					<div className="flex items-start justify-center ">
						<motion.img
							src={myImage}
							alt="selfimage"
							className="h-[70vw] w-screen object-cover rounded-bl-[4rem] rounded-br-4xl rounded-tr-[4rem] rounded-tl-3xl"
							variants={item}
						/>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
