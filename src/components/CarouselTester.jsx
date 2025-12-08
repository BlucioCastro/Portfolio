import { useState } from "react";
import HydraImg from "../assets/HydraLandingPage.jpeg";
import AdviceGenerator from "../assets/AdviceGenerator.jpeg";
import ProductLWC from "../assets/plwc2.jpeg";
import tmdbplus from "../assets/tmdbplus1.png";
import { Link } from "react-router-dom";

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      id: "1",
      name: "TMDb+",
      image: tmdbplus,
      number: "01",
      link: "/projects/tmdbplus",
    },
    {
      id: "2",
      name: "Hydra Landing Page",
      image: HydraImg,
      number: "02",
      link: "/projects/hydralandingpage",
    },
    {
      id: "3",
      name: "Product List With Cart",
      image: ProductLWC,
      number: "03",
      link: "/projects/productlistwithcart",
    },
    {
      id: "4",
      name: "Advice Generator App",
      image: AdviceGenerator,
      number: "04",
      link: "/projects/advicegeneratorapp",
    },
  ];
  const invertido = [...projects].reverse();
  return (
    <div className="w-full lg:mt-20" id="projects">
      <div className="w-full pb-8 lg:pb-40 flex items-center gap-2 ltor">
        <div className="h-0.5 w-4 lg:w-10 bg-amber-50"></div>
        <h1 className=" lg:text-4xl font-sans font-bold">My Projects</h1>
      </div>

      <div className="relative">
        <div className="w-10 left-0 bottom-25  overflow-hidden absolute lg:w-50 lg:left-70 lg:bottom-83">
          <div
            className="w-40 lg:w-full flex transition-transform duration-700 "
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((num, i) => (
              <div key={i} className="w-40 lg:w-full shrink-0">
                <span
                  className={`text-4xl lg:text-9xl font-bold text-[#313237] ${
                    i === current ? "opacity-100" : "opacity-0"
                  } `}
                >
                  {num.number}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden absolute z-10 top-5 lg:top-40 lg:left-55 lg:z-10">
          <div
            className="h-15 lg:h-30  flex flex-col justify-start  transition-transform  duration-700"
            style={{ transform: `translateY(-${current * 100}%)` }}
          >
            {projects.map((title, i) => (
              <div key={title.id} className="h-15 w-30 lg:h-30 shrink-0 lg:w-90">
                <span className={` lg:text-5xl font-bold flex-wrap font-sans drop-shadow-xl ${i === current ? "opacity-100" : "opacity-0"}`}>
                  {title.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden z-10 absolute top-20 lg:top-75 lg:left-55">
          <div
            className="h-6 lg:h-10 flex flex-col justify-end transition-transform duration-700"
            style={{
              transform: `translateY(${current * 100}%)`,
            }}
          >
            {invertido.map((i) => (
              <div key={i.id} className="h-7 lg:h-10 shrink-0">
                <Link to={i.link} className={`font-sans ${current ===(projects.length -1 - invertido.indexOf(i))? "opacity-100" : "opacity-0"}`}>
                  View Case
                </Link>
                <div className={`bg-amber-50 h-0.5 lg:mt-2 w-full ${current ===(projects.length -1 - invertido.indexOf(i))? "opacity-100" : "opacity-0"}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[89%] lg:w-[50%] overflow-hidden flex  items-center">
            <div
              className="flex  lg:gap-5 transition-transform duration-700"
              style={{ transform: `translateX(-${current * 89}%)` }}
            >
              {projects.map((slide, index) => {
                const isActive = index === current;
                return (
                  <div
                    key={slide.id}
                    className={`w-[89%] shrink-0 overflow-hidden ml-0 transition-all duration-700 ease-in-out ${
                      isActive ? "opacity-100 scale-100" : "opacity-40 scale-85"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="lg:w-160 h-full object-fill"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 w-9 rounded-lg cursor-pointer ${
              i === current ? "bg-orange-500 scale-110" : "bg-amber-900"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import HydraImg from "../assets/HydraLandingPage.jpeg";
import AdviceGenerator from "../assets/AdviceGenerator.jpeg";
import ProductLWC from "../assets/plwc2.jpeg";
import tmdbplus from "../assets/tmdbplus1.png";
import { Link } from "react-router-dom";

export default function ProjectsCarousel() {
	const [current, setCurrent] = useState(0);

	const projects = [
		{
			id: "1",
			name: "TMDb+",
			image: tmdbplus,
			number: "01",
			link: "/projects/tmdbplus",
		},
		{
			id: "2",
			name: "Hydra Landing Page",
			image: HydraImg,
			number: "02",
			link: "/projects/hydralandingpage",
		},
		{
			id: "3",
			name: "Product List With Cart",
			image: ProductLWC,
			number: "03",
			link: "/projects/productlistwithcart",
		},
		{
			id: "4",
			name: "Advice Generator App",
			image: AdviceGenerator,
			number: "04",
			link: "/projects/advicegeneratorapp",
		},
	];
	const invertido = [...projects].reverse();
	return (
		<div className="w-full lg:mt-20" id="projects">
			
			<div className="w-40 h-60 relative flex">
				<span className="absolute ">{projects[current].number}</span>
				<span className="absolute top-[50%] left-[-20%]z-10">{projects[current].name}</span>
				<Link className="absolute top-[70%]">View Case</Link>
			</div>

			<div className="flex justify-center mt-4 gap-2">
				{projects.map((_, i) => (
					<button
						key={i}
						onClick={() => setCurrent(i)}
						className={`h-1 w-9 rounded-lg cursor-pointer ${
							i === current ? "bg-orange-500 scale-110" : "bg-amber-900"
						}`}
					></button>
				))}
			</div>
		</div>
	);
}
