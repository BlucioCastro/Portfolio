import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

export default function RootLayout() {
	return (
		<>
			<div className="relative bg-linear-to-br from-orange-500 to-[#2a1a15] p-3 m-4 rounded-[30px] z-10">
				<div className="bg-[#1F1B1A] rounded-[20px] ">
					<ScrollToTop />
					<Header />
					<main>
						<Outlet />
					</main>
				</div>
			</div>
				
			<footer>
				<Footer/>
			</footer>
		</>
	);
}
