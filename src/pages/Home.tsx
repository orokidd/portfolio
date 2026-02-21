import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStackHeading from "../components/TechStackHeading";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";
import AllProjectsButton from "../components/AllProjectsButton";
import About from "../components/About";
import { projects } from "../assets/projects";
import "../App.css";
import { useMediaQuery } from "react-responsive";

function Home() {
	const reversedProjects = [...projects].reverse();

	const isMedium = useMediaQuery({
		query: "(max-width: 1900px)",
	});
	const isSmall = useMediaQuery({
		query: "(max-width: 1280px)",
	});

	const limitedProjects = reversedProjects.slice(0, isSmall ? 2 : isMedium ? 4 : 6);

	return (
		<>
			<Header />
			<Hero />
			<About />
			<Projects projects={limitedProjects} />
			<AllProjectsButton />
			<TechStackHeading />
			<TechStack />
			<Footer />
		</>
	);
}

export default Home;
