import myImage from "../assets/myimg.jpeg";
import Button from "./Button";

export default function Home() {
	return (
		<div className=" h-[96vh] md:h-[92vh] p-2 bg-linear-to-br from-orange-500 to-[#2a1a15] md:p-3  m-4 md:m-8 rounded-4xl">
			<div className="bg-[#1F1B1A] flex flex-col justify-center gap-12 h-full rounded-[30px] p-8 md:grid md:grid-cols-2">
				<div className="flex flex-col md:justify-center  gap-4 md:pl-12">
					<div className="flex items-center gap-2">
						<div className="h-px w-4 bg-amber-50"></div>
						<p className="text-amber-50 md:text-2xl">Hello</p>
					</div>
					<div className="text-amber-50 pl-6 flex flex-col gap-2 md:gap-4">
						<p className="text-2xl md:text-[3rem]">
							I'm <strong>Blucio Castro</strong>
						</p>
						<p className="md:text-2xl">
							A web developer at the beginnig of their career.
						</p>
					</div>
					<div className="pl-5 mt-4">
						<Button to="#projects">Projects</Button>
					</div>
				</div>
				<div className="flex items-center justify-center ">
					<img
						src={myImage}
						alt="selfimage"
						className="h-48 w-[20rem] md:h-120 md:w-120 object-cover rounded-bl-[4rem] md:rounded-bl-[10rem] rounded-br-4xl md:rounded-br-[4rem] rounded-tr-[4rem] md:rounded-tr-[10rem] rounded-tl-3xl md:rounded-tl-[3rem]"
					/>
				</div>
			</div>
		</div>
	);
}
