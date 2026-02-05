import { BrowserRouter, Routes, Route } from "react-router";
import Projects from "../pages/Projects";
import Home from "../pages/Home";

export default function RouterProvider() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
			</Routes>
		</BrowserRouter>
	);
}
