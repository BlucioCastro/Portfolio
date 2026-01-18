import HydraImg from "../assets/projects/HydraLandingPage.jpeg";
import AdviceGenerator from "../assets/projects/AdviceGenerator.jpeg";
import ProductLWC from "../assets/projects/plwc2.jpeg";
import tmdbplus from "../assets/projects/carouseltmdb.png";

const tmdbImages = Object.values(
  import.meta.glob("../assets/projects/tmdb*.png", { eager: true, as: "url" })
);

const hydraImages = Object.values(
	import.meta.glob("../assets/projects/hydra*.png", {eager: true, as: "url"})
)
const plwcImages = Object.values(
	import.meta.glob("../assets/projects/plwc*png", {eager: true, as: "url"})
)
const adviceAppImages = Object.values(
	import.meta.glob("../assets/projects/adviceapp*.png", {eager: true, as: "url"})
)

const projects = [
	{
		id: "tmdbplus",
		name: "TMDb+",
		image: tmdbplus,
		imageList: tmdbImages,
		number: "01",
		link: "https://tmdbplus.vercel.app/",
	},

	{
		id: "hydralandingpage",
		name: "Hydra Landing Page",
		imageList: hydraImages,
		image: HydraImg,
		number: "02",
		link: "https://bluciocastro.github.io/Hydra-Landing-Page/"
	},
	{
		id: "productlistwithcart",
		name: "Product List With Cart",
		imageList: plwcImages,
		image: ProductLWC,
		number: "03",
		link: "https://bluciocastro.github.io/ProductListWithCart/"
	},
	{
		id: "advicegeneratorapp",
		name: "Advice Generator App",
		imageList: adviceAppImages,
		image: AdviceGenerator,
		number: "04",
		link: "https://bluciocastro.github.io/AdviceGeneratorApp/"
	},
];

export default projects;
