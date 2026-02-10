import portraitImage from "../assets/portrait.jpg";
import styles from '../styles/Hero.module.css'

export default function Hero() {
	return (
		<div className={styles.hero}>
			<img src={portraitImage} alt="" className={styles.portraitImage} />
			<div className={styles.details}>
				<h1 className={styles.heading}>I'm Hudaa -- a full stack web developer.</h1>
				<p className={styles.paragraph}>
					I am a self-taught full-stack developer with proficiency in JavaScript, TypeScript,
					React, Node.js, Express.js, and relational databases such as PostgreSQL and MySQL.
					With these technologies I am able to build a fully responsive and user intuitive full-stack web applications.
					I am eager to apply what I've learned in real-world projects and willing to learn more as i go.
				</p>
			</div>
		</div>
	);
}
