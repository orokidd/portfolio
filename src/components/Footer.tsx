import styles from "../styles/Footer.module.css";

export default function Footer() {
	return (
        <div className={styles.contact}>
			<p className={styles.orokidd}>orokidd</p>
			<div className={styles.links}>
					<a href="#" className={styles.work}>Work</a>
					<a href="#" className={styles.lab}>Lab</a>
                    <a href="#" className={styles.email}>Email</a>
					<a href="https://github.com/orokidd" className={styles.github} target="_blank">Github</a>
					<a href="https://www.instagram.com/hudaahuu/" className={styles.insta} target="_blank">Instagram</a>
                    <a href="#" className={styles.linkedIn}>LinkedIn</a>
			</div>
		</div>
	);
}
