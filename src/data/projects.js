  import HydraImg from "../assets/HydraLandingPage.jpeg";
  import AdviceGenerator from "../assets/AdviceGenerator.jpeg";
  import ProductLWC from "../assets/plwc2.jpeg";
  import tmdbplus from "../assets/tmdbplus1.png";
  import bannerTMDB from "../assets/tmdbplus2.png"

  const projects = [
    {
      id: "tmdbplus",
      name: "TMDb+",
      image: tmdbplus,
      banner: bannerTMDB,
      number: "01",
      link: "/projects/tmdbplus",
    },
    {
      id: "hydralandingpage",
      name: "Hydra Landing Page",
      image: HydraImg,
      number: "02",
      link: "/projects/hydralandingpage",
    },
    {
      id: "productlistwithcart",
      name: "Product List With Cart",
      image: ProductLWC,
      number: "03",
      link: "/projects/productlistwithcart",
    },
    {
      id: "advicegeneratorapp",
      name: "Advice Generator App",
      image: AdviceGenerator,
      number: "04",
      link: "/projects/advicegeneratorapp",
    },
  ];

export default projects