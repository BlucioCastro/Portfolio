import { Outlet } from "react-router-dom";
import Pagination from "../components/Pagination";

export default function RootLayout() {
	return (
		<>
			<section className="relative">
				<Pagination />
			</section>
			<main>
				<Outlet />
			</main>
		</>
	);
}
