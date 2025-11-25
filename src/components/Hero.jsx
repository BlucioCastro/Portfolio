import myImage from "../assets/myimg.jpeg";

export default function Home() {
	return (
		<div className=" h-[92vh] p-[8px] bg-gradient-to-br from-orange-500 to-[#2a1a15] md:p-[12px]  m-4 md:m-8 rounded-4xl">
			<div className="bg-[#1F1B1A] flex flex-col justify-center gap-12 h-full rounded-[30px] p-8 md:grid md:grid-cols-2">
				<div className="flex flex-col md:justify-center gap-4 md:pl-12">
					<div className="flex items-center gap-2">
						<div className="h-[1px] w-4 bg-amber-50"></div>
						<p className="text-amber-50 md:text-2xl">Hello</p>
					</div>
					<div className="text-amber-50 pl-6 flex flex-col gap-4">
						<p className="text-2xl md:text-[3rem]">
							I'm <strong>Blucio Castro</strong>
						</p>
						<p className="md:text-2xl">
							A web developer at the beginnig of their career.
						</p>
					</div>
				</div>
				<div className="flex items-center justify-center ">
					<img
						src={myImage}
						alt="selfimage"
						className="h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] object-cover rounded-bl-[10rem] rounded-br-[4rem] rounded-tr-[10rem] rounded-tl-[3rem]"
					/>
				</div>
			</div>
		</div>
	);
}
