import { useLanguage } from "../assets/context/LanguageContext";

export default function Contact() {
	const { t } = useLanguage();
	return (
		<section id="contact" className="pb-10 mt-20 px-2 md:px-8 scroll-mt-[90px]">
			<div
				className="relative overflow-hidden  lg:mt-20 border-2
					border-[#4f4f55] rounded-lg lg:min-h-[600px] bgImg
					lg:flex flex-col justify-center 
					"
			>
				<div className="lg:grid grid-cols-2 xl:grid-cols-[2fr_1fr] gap-2 relative  z-10 ">
					<div className="p-4 relative z-10 md:p-8 lg:col-1 lg:flex lg:flex-col lg:justify-center lg:text-start">
						<p className="text-3xl font-bold text-orange-500 opacity-100 md:text-center lg:text-start lg:text-4xl xl:text-5xl xl:pl-20">
							{t.contact.txt1}
						</p>
						<p className="text-3xl font-bold text-orange-500 opacity-100 md:text-center lg:text-start lg:text-4xl xl:text-5xl xl:pl-20">
							{t.contact.txt2}
						</p>
						<p className="text-white pt-2 md:text-center lg:text-start xl:text-xl xl:pl-20">{t.contact.txt3}</p>
					</div>

					<form
						action="https://formsubmit.co/bluciowsc@gmail.com"
						method="POST"
						className="flex flex-col justify-center gap-2 mx-2 mt-6 mb-10 p-3 col-2 md:mx-8 rounded-lg bg-[#1C1716] border-2
						border-[#4f4f55] lg:m-8 xl:mr-20"
					>
						<label htmlFor="name" className="font-semibold">
							{t.contact.labelName}
						</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder={t.contact.phName}
							required
							className="border rounded-sm border-[#4f4f55] pl-2 py-2 bg-[#141312b9]"
						/>
						<label htmlFor="email" className="font-semibold">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							required
							className="border rounded-sm border-[#4f4f55] pl-2 py-2 bg-[#141312b9]"
						/>
						<label htmlFor="message" className="font-semibold">
							{t.contact.labelMessage}
						</label>
						<textarea
							name="message"
							id="message"
							placeholder={t.contact.phMessage}
							rows={4}
							className="border rounded-sm border-[#4f4f55] pl-2 bg-[#141312b9]"
						></textarea>
						<div className=" flex justify-end pt-2">
							<button
								type="submit"
								className="px-3 py-1 lg:mt-8 bg-orange-600 rounded-sm font-medium text-amber-50 cursor-pointer w-18 "
							>
								{t.contact.btnSubmit}
							</button>
						</div>
					</form>
					<div className="col-1 row-1 px-8 lg:px-24 flex flex-col gap-10">
						{/* <div className="hidden md:block text-justify">
							<p className="lg:text-lg xl:text-xl">{t.contact.txt}</p>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
