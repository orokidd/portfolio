import { Link } from "react-router-dom";
import styles from '../styles/Projects.module.css'

export default function AllProjectsButton() {
	return (
		<div className={styles.allProjectsLinkContainer}>
			<Link to="/projects" style={{ color: "white" }} className={styles.allProjectsLink}>
				All Projects
			</Link>
		</div>
	);
}
