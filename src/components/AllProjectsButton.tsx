import { Link } from "react-router-dom"
import { Info } from "./Icons"
import styles from "../styles/Projects.module.css"

export default function AllProjectsButton() {
	return (
		<div className={styles.allProjectsLinkContainer}>
			<div className={styles.warningContainer}>
				<div className={styles.infoLogoContainer}>
					<Info size="20" />
				</div>

				<div className={styles.infoText}>
					<p>Backend server may take a while to start.</p>
				</div>
			</div>

			<Link to="/projects" style={{ color: "white" }} className={styles.allProjectsLink}>
				All Projects
			</Link>
		</div>
	)
}
