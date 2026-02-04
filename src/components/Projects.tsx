import { projects } from "../assets/projects";
import styles from "../styles/Projects.module.css";
import { DemoIcon, GithubIcon } from "./Icons";
import { useState } from "react";

export default function Projects() {
	const [showAll, setShowAll] = useState<boolean>(false)
    const sortedProject = [...projects].reverse()
	const limitedProject = sortedProject.slice(0, 9)

	const showProject = showAll ? sortedProject : limitedProject

	return (
		<>
			<h2 className={styles.projectHeading}>PROJECTS</h2>
			<div className={styles.projects}>
				{showProject.map((project) => (
					<div className={styles.project}>
						<img src={project.image} alt="" className={styles.projectImage} />

						<div className={styles.projectDetails}>
							<p>{project.name}</p>

							<div className={styles.links}>
								<a href={project.links.github}>
                                    <GithubIcon />
                                </a>
								<a href={project.links.demo}>
                                    <DemoIcon />
                                </a>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="showAllButton">
				<button style={{color:"white"}} onClick={() => {setShowAll((prev:boolean) => !prev)}}>
					{showAll ? "Less" : "All Projects"}
				</button>
			</div>
		</>
	);
}
