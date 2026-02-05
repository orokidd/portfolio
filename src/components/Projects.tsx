import styles from "../styles/Projects.module.css";
import { DemoIcon, GithubIcon } from "./Icons";
import type { Projects } from "../assets/projects";

type ProjectsProps = {
	projects: Projects[];
};

export default function Projects({ projects }: ProjectsProps) {
	return (
		<>
			<h2 className={styles.projectHeading}>PROJECTS</h2>
			<div className={styles.projects}>
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
