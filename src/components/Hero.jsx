import image from "../assets/blucioimg2edited.png";

export default function Hero() {
	return (
		<div className="h-[96vh] md:h-[92vh] p-2 bg-linear-to-br from-orange-500 to-[#2a1a15] md:p-3  m-4 md:m-8 rounded-4xl">
			<div className="bg-[#1F1B1A] flex justify-center w-full h-full rounded-[30px] px-8 relative">
        <div className="z-8 absolute text-center top-[50%] xl:top-[10%]">
          <p className="w-full text-5xl xl:text-[14rem] xl:h-58 font-hero " >BLUCIO CASTRO</p>
          <p className="w-full text-5xl xl:text-[13rem] font-hero ">WEB DEVELOPER</p>
        </div>
        <div>
          
        </div>
				<div className="flex h-full w-[80%] xl:w-[50%] bg-[#784c3d] justify-center items-end relative">
					<img src={image} alt="" className="h-[50%] xl:h-[80%] w-full absolute z-10" />
				</div>
			</div>
		</div>
	);
}
