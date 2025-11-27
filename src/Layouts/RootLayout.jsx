import { Outlet } from "react-router-dom";
import Pagination from "../components/Pagination";

export default function RootLayout() {
	return (
		<>
			<Pagination />
			<main>
				<Outlet />
			</main>
		</>
	);
}
