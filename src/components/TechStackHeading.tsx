import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import styles from "../styles/Tech.module.css";

function createSplitText(domElement: HTMLHeadingElement) {
	return SplitText.create(domElement, {
		type: "chars",
		smartWrap: true,
	});
}

const textOption = {
	visible: {
		yPercent: 100,
		stagger: {
			each: 0.1,
			from: 3,
		},
	},
	hidden: {
		yPercent: -100,
		stagger: {
			each: 0.1,
			from: 3,
		},
	},
};

export default function TechStackHeading() {
	const modernText = useRef<HTMLHeadingElement>(null);
	const modernTextHidden = useRef<HTMLHeadingElement>(null);

	const techStackText = useRef<HTMLHeadingElement>(null);
	const techStackTextHidden = useRef<HTMLHeadingElement>(null);

	useGSAP(() => {
		if (!modernText.current || !modernTextHidden.current || !techStackText.current || !techStackTextHidden.current) return;

		const splitText = createSplitText(modernText.current);
		const splitTextHidden = createSplitText(modernTextHidden.current);
		const splitTechText = createSplitText(techStackText.current);
		const splitTechTextHidden = createSplitText(techStackTextHidden.current);

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: modernText.current,
				start: "top 70%",
				end: "bottom 20%",
				scrub: 1,
			},
		});

		timeline
			.to(splitText.chars, textOption.visible, 0)
			.from(splitTextHidden.chars, textOption.hidden, 0)
			.to(splitTechText.chars, textOption.visible, 1)
			.from(splitTechTextHidden.chars, textOption.hidden, 1);
	});

	return (
		<div className={styles.heading}>
			<div className={styles.textModern}>
				<h2 className={styles.headingTextHidden} ref={modernTextHidden}>
					MODERN
				</h2>
				<h2 className={styles.headingText} ref={modernText}>
					MODERN
				</h2>
			</div>

			<div className={styles.textTechStack}>
				<h2 className={styles.headingTextHidden} ref={techStackTextHidden}>
					TECH STACK
				</h2>
				<h2 className={styles.headingText} ref={techStackText}>
					TECH STACK
				</h2>
			</div>
		</div>
	);
}
