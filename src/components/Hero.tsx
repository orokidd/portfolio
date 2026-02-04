import portraitImage from "../assets/portrait.jpg";
import styles from '../styles/Hero.module.css'

export default function Hero() {
	return (
		<div className={styles.hero}>
			<img src={portraitImage} alt="" className={styles.portraitImage} />
			<div className={styles.details}>
				<h1 className={styles.heading}>I'm Hudaa -- a full stack web developer.</h1>
				<p className={styles.paragraph}>
					I see myself as a creative that likes making things happen. I started as a visual designer making websites and handling creative direction for businesses and companies, but now I do a mix of
					everything from production to advising companies. I also make YouTube videos on tech, business and finance...
				</p>
			</div>
		</div>
	);
}
