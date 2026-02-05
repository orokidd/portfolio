import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";
import AllProjectsButton from "../components/AllProjectsButton";
import { projects } from "../assets/projects";
import "../App.css";

function Home() {
    const sortedProject = [...projects].reverse();
	const limitedProject = sortedProject.slice(0, 6);

    return (
        <>
            <Header />
            <Hero />
            <Projects projects={limitedProject} />
            <AllProjectsButton />
            <TechStack />
            <Footer />
        </>
    );
}

export default Home;
