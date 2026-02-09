import { BrowserRouter, Routes, Route } from "react-router";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import Resume from "../pages/Resume";

export default function RouterProvider() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
				<Route path="resume" element={<Resume />} />
			</Routes>
		</BrowserRouter>
	);
}
