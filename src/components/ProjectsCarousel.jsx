import { useState } from "react";
import HydraImg from "../assets/HydraLandingPage.jpeg";
import AdviceGenerator from "../assets/AdviceGenerator.jpeg";
import ProductLWC from "../assets/ProductListWithCart.jpeg";
import tmdbplus from "../assets/tmdbplus1.png";

export default function ProjectsCarousel() {
	const [current, setCurrent] = useState(0);

	const projects = [
		{
			id: "1",
			name: "TMDb+",
			image: tmdbplus,
			description:
				"Catálogo de filmes e séries desenvolvido em React, consumindo a API da TMDB. Inclui carrosséis dinâmicos, busca, páginas de detalhes e sistema de favoritos com persistência via LocalStorage.",
		},
		{
			id: "2",
			name: "Hydra Landing Page",
			image: HydraImg,
			description:
				"Projeto desenvolvido em React com Vite, baseado em um design encontrado no Figma. Todo o código e implementação foram feitos por mim, seguindo o layout criado pelo designer UI.",
		},
		{
			id: "3",
			name: "Product List With Cart",
			image: ProductLWC,
			description:
				"Um projeto criado a partir de um desafio do Frontend Mentor para desenvolver e consolidar meus conhecimentos adquiridos.",
		},
		{
			id: "4",
			name: "Advice Generator App",
			image: AdviceGenerator,
			description:
				"Projeto desenvolvido para reforçar meus conhecimentos em consumo de APIs e criação de interfaces dinâmicas, utilizando como base um desafio proposto pelo Frontend Mentor.",
		},
	];

	return (
		<div className="w-full">
      <h1 className="text-center text-xl mb-4">My Projects</h1>

      <div className="w-full overflow-hidden flex justify-center">
        <div
          className="flex gap-6 transition-transform duration-700"
          style={{ transform: `translateX(-${current * 86}%)` }}
        >
          {projects.map((slide) => (
            <div
              key={slide.id}
              className="w-[86%] shrink-0 rounded-xl overflow-hidden"
            >
              <img
                src={slide.image}
                alt={slide.name}
                className="w-full h-full object-cover rounded-xl"
              />
              <p className="text-center mt-2">{slide.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-4 gap-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full
              ${i === current ? "bg-amber-400 scale-110" : "bg-amber-700/40"}
            `}
          />
        ))}
      </div>
    </div>
	);
}
