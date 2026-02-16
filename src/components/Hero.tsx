import portraitImage from "../assets/portrait.jpg";
import styles from "../styles/Hero.module.css";
import { useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
	const imageRef = useRef<HTMLImageElement>(null);
	const heroRef = useRef<HTMLDivElement>(null)
	
	function moveImage(e: React.MouseEvent<HTMLDivElement>) {
		if (!imageRef.current || !heroRef.current) return;

		const imgRect = imageRef.current.getBoundingClientRect();
  		const heroRect = heroRef.current.getBoundingClientRect();

  		const x = getPosition(e.clientX, imgRect.width, heroRect.width);
		
		gsap.to(imageRef.current, {
			x: x,
			duration: 0.4,
			ease: "power1.out",
		});
	}

	function getPosition(cursorPosition: number, imgWidth: number, heroWidth: number) {
		const max = heroWidth - imgWidth;

		if (cursorPosition > max) {
			return max
		}

		if (cursorPosition < 0) {
    		return 0;
  		}
		
		return cursorPosition
	}

	return (
		<div className={styles.hero} onMouseMove={moveImage}>
			<img src={portraitImage} alt="" className={styles.portraitImage} ref={imageRef} />
			<div className={styles.details} ref={heroRef}>
				<div className={styles.smallHero}>
					<p>A</p>
					<p>FULL</p>
					<p>STACK</p>
				</div>
				<div className={styles.bigHero}>
					<h1>WEB</h1>
					<h1>DEVELOPER</h1>
				</div>
			</div>
		</div>
	);
}
