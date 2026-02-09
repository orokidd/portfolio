import heroIcon from "../assets/site-icon.jpeg";
import styles from '../styles/Header.module.css'
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className={styles.header}>
			<Link to="/">
				<img src={heroIcon} alt="" className={styles.siteIcon} />
			</Link>
			<div className={styles.navigations}>
				<Link to="/resume">resume</Link>
				<Link to="/projects">work</Link>
				<a href="#">blog</a>
			</div>
		</header>
	);
}
