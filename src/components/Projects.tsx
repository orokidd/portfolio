import styles from "../styles/Projects.module.css";
import { DemoIcon, GithubIcon } from "./Icons";
import gsap from "gsap";
import type { Projects } from "../assets/projects";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type ProjectsProps = {
	projects: Projects[];
};

export default function Projects({ projects }: ProjectsProps) {
	const headingRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!headingRef.current || !projectsRef.current) return;

		const heading = headingRef.current;
		const paragraphs = headingRef.current.children;

		gsap.from(paragraphs, {
			y: 200,
			stagger: 0.2,
			ease: "power3.out",
			scrollTrigger: {
				trigger: heading,
				start: "top 85%",
				end: "top 15%",
				scrub: 1,
			},
		});

		const projects = projectsRef.current.children;

		gsap.fromTo(projects,
			{
				scale: 0,
				y: 200,
			},
			{
				scale: 1,
				y: 0,
				duration: 1,
				stagger: 0.1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: projectsRef.current,
					start: "top 85%",
				},
			},
		);
	}, []);

	return (
		<>
			<div className={styles.projectHeading} ref={headingRef}>
				<p>PROJECTS</p>
				<p>'25</p>
			</div>

			<div className={styles.projects} ref={projectsRef}>
				{projects.map((project) => (
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
							{project.tech.map((stack, index) => (
								<div className={styles.stackName} key={index}>
									{stack}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
