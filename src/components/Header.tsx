import heroIcon from "../assets/site-icon.jpeg";
import styles from '../styles/Header.module.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "../context/navContext";

export default function Header() {
	const { activePage, setActivePage } = useContext(NavContext)
	const resumeActive = activePage === "resume" ? styles.active : null;
	const workActive = activePage === "work" ? styles.active : null;

	function changePage(e:React.MouseEvent) {
		setActivePage(e.currentTarget.id)
	}

	return (
		<header className={styles.header}>
			<Link to="/" id="home" onClick={changePage}>
				<img src={heroIcon} alt="" className={styles.siteIcon} />
			</Link>
			<div className={styles.navigations}>
				<Link to="/resume" id="resume" className={`${styles.navLink} ${resumeActive}`} onClick={changePage}>resume</Link>
				<Link to="/projects" id="work" className={`${styles.navLink} ${workActive}`} onClick={changePage}>work</Link>
				<a href="#" className={`${styles.navLink}`}>blog</a>
			</div>
		</header>
	);
}
