import { projects } from "../assets/projects";
import styles from "../styles/Projects.module.css";
import { DemoIcon, GithubIcon } from "./Icons";

export default function Projects() {
    const sortProject = [...projects].reverse()

	return (
		<>
			<h2 className={styles.projectHeading}>PROJECTS</h2>
			<div className={styles.projects}>
				{sortProject.map((project) => (
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
		</>
	);
}
