import { Link } from "react-router-dom";
import styles from '../styles/Projects.module.css'

export default function AllProjectsButton() {
	return (
		<div className={styles.showButton}>
			<Link to="/projects" style={{ color: "white" }}>
				All Projects
			</Link>
		</div>
	);
}
