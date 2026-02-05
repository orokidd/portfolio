import { projects } from "../assets/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsComponent from "../components/Projects";

export default function Projects() {
	const sortedProject = [...projects].reverse();

	return (
		<>
			<Header />
			<ProjectsComponent projects={sortedProject} />
			<Footer />
		</>
	);
}
