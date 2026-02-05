import heroIcon from "../assets/site-icon.jpeg";
import styles from '../styles/Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<img src={heroIcon} alt="" className={styles.siteIcon} />
			<div className={styles.navigations}>
				<p>Resume</p>
				<p>Blog</p>
			</div>
		</header>
	);
}
