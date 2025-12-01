import Button from "./Button";

export default function About() {
	return (
		<section className="w-full h-full md:grid md:grid-cols-2">
			<div className="flex justify-center items-center  animate-autoshow">
				<p className="writing-vertical-rl text-center font-skills font-medium rotate-270 tracking-tighter py-20 text-[4rem]  inline-block leading-12 md:leading-24 md:text-[8rem] md:py-40 lg:text-[9rem] lg:py-48 lg:leading-32 ">
					ABOUT <br /> ME
				</p>
			</div>
			<div className="flex flex-col justify-center">
				<p className="pt-4 text-justify">
					I am a Web Developer specializing in Frontend, responsible for
					creating and managing interfaces that drive the success of digital
					products. I invite you to check out some of my work in the Projects
					section.
					<br />
					<br />
					Curiosity and a constant desire to learn are what drive me. I enjoy
					exploring the unknown and I'm not afraid to face challenges, even when
					they involve something I don't yet master. I believe it is precisely
					in this process of trial, error, and evolution that I get closer to
					the person and professional I want to become.
					<br />
					<br />
					Proactivity, determination, and a desire to evolve are part of my
					essence. I am always looking for ways to grow, whether by acquiring
					new knowledge or facing situations that take me out of my comfort
					zone. For me, learning is a continuous journey—and that's exactly what
					makes technology so fascinating.
					<br />
					<br />I am open to opportunities where I can contribute, grow, and
					continue learning. If you have an opportunity that aligns with my
					skills and goals, I would be happy to discuss it.
				</p>
				<div className="pt-8 flex justify-center">
					<Button to="#contact">Contact </Button>
				</div>
			</div>
		</section>
	);
}
