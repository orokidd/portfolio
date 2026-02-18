import styles from "../styles/About.module.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

export default function About() {
	const paragraphRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
        // Split the paragraph into an array of DOM
		const split = SplitText.create(paragraphRef.current, {
			type: "words",
			wordsClass: "word++",
		});

        // Select every 2 words
        const selectedWords = [];
        for (let i = 0; i < split.words.length; i += 2) {
            selectedWords.push(split.words[i]);
        }

		gsap.from(selectedWords, {
            scrollTrigger: {
                trigger: paragraphRef.current,
                start: 'top 80%',
                end: 'center 40%',
                scrub: 1,
            },
			y: 100, // animate from 100px below
			autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
			stagger: 0.05, // 0.05 seconds between each
		});

        return () => split.revert();
	}, []);

	return (
		<div className={styles.container}>
			<h1 className={styles.aboutHeader}>MYSELF</h1>
			<p className={styles.paragraph} ref={paragraphRef}>
				Self-taught full-stack developer with proficiency in JavaScript, TypeScript, React, Node, Express, and relational databases such as PostgreSQL and MySQL. Able to build a fully responsive
				and user intuitive full-stack web applications.
			</p>
		</div>
	);
}
