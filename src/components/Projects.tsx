import styles from "../styles/Projects.module.css";
import { DemoIcon, GithubIcon } from "./Icons";
import gsap from "gsap";
import type { Projects } from "../assets/projects";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

type ProjectsProps = {
	projects: Projects[];
};

export default function Projects({ projects }: ProjectsProps) {
	const isMedium = useMediaQuery({
		query: "(max-width: 1900px)",
	});
	const isSmall = useMediaQuery({
		query: "(max-width: 1280px)",
	});

	const limitedProjects = projects.slice(0, isSmall ? 2 : isMedium ? 4 : projects.length);

	const headingRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!headingRef.current || !projectsRef.current) return;

		const heading = headingRef.current;
		const paragraphs = headingRef.current.children;

		gsap.from(paragraphs, {
			y: 200,
			stagger: 0.2,
			duration: 1,
			ease: "power3.out",
			scrollTrigger: {
				trigger: heading,
				start: "top 85%",
			},
		});

		const projects = projectsRef.current.children;

		gsap.from(projects, {
			scale: 0.1,
			duration: 1.4,
			stagger: 0.1,
			y: 400,
			ease: "power3.out",
			scrollTrigger: {
				trigger: projectsRef.current,
				start: "top 85%",
			},
		});
	}, []);

	return (
		<>
			<div className={styles.projectHeading} ref={headingRef}>
				<p>PROJECTS</p>
				<p>'25</p>
			</div>

			<div className={styles.projects} ref={projectsRef}>
				{limitedProjects.map((project) => (
					<div className={styles.project} key={project.id}>
						<img src={project.image} alt="" className={styles.projectImage} />

						<div className={styles.projectDetails}>
							<p className={styles.projectTitle}>{project.name}</p>

							<div className={styles.links}>
								<a href={project.links.github}>
									<GithubIcon />
								</a>
								<a href={project.links.demo}>
									<DemoIcon />
								</a>
							</div>
						</div>

						<div className={styles.techStack}>
							{project.tech.map((stack) => (
								<div className={styles.stackName}>{stack}</div>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
