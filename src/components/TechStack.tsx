import styles from "../styles/Tech.module.css";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { JavaScript, TypeScript, Node, React, Next, Express, Postgre, Prisma, Tailwind, Jest, Git, Supabase } from "./Icons";

export default function TechStack() {
	const modernText = useRef<HTMLHeadingElement>(null);
	const modernTextHidden = useRef<HTMLHeadingElement>(null);

	const techStackText = useRef<HTMLHeadingElement>(null);
	const techStackTextHidden = useRef<HTMLHeadingElement>(null);

	useGSAP(() => {
		const splitText = SplitText.create(modernText.current, {
			type: "chars",
			smartWrap: true,
		});

		const splitTextHidden = SplitText.create(modernTextHidden.current, {
			type: "chars",
			smartWrap: true,
		});

		const splitTechText = SplitText.create(techStackText.current, {
			type: "chars",
			smartWrap: true,
		});

		const splitTechTextHidden = SplitText.create(techStackTextHidden.current, {
			type: "chars",
			smartWrap: true,
		});

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: modernText.current,
				start: "top 70%",
				end: "top 25%",
				scrub: 1,
			},
		});

		const timelineBottom = gsap.timeline({
			scrollTrigger: {
				trigger: modernText.current,
				start: "top 70%",
				end: "bottom 15%",
				scrub: 1,
			},
		});

		timeline
			.to(
				splitText.chars,
				{
					yPercent: 100,
					stagger: {
						each: 0.1,
						from: 3,
					},
				},
				0,
			)
			.from(
				splitTextHidden.chars,
				{
					yPercent: -100,
					stagger: {
						each: 0.1,
						from: 3,
					},
				},
				0,
			);

		timelineBottom
			.to(
				splitTechText.chars,
				{
					yPercent: 100,
					stagger: {
						each: 0.1,
						from: 3,
					},
				},
				1,
			)
			.from(
				splitTechTextHidden.chars,
				{
					yPercent: -100,
					stagger: {
						each: 0.1,
						from: 3,
					},
				},
				1,
			);
	});

	return (
		<>
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

			<div className={styles.tech}>
				<div className={styles.topGrid}>
					<div className={styles.icon}>
						<JavaScript size={60} />
					</div>

					<div className={styles.icon}>
						<TypeScript size={60} />
					</div>

					<div className={styles.icon}>
						<Node size={60} />
					</div>

					<div className={styles.icon}>
						<React size={60} />
					</div>

					<div className={styles.icon}>
						<Express size={60} />
					</div>
				</div>

				<div className={styles.bottomGrid}>
					<div className={styles.icon}>
						<Next size={40} />
					</div>

					<div className={styles.icon}>
						<Postgre size={40} />
					</div>

					<div className={styles.icon}>
						<Prisma size={40} />
					</div>

					<div className={styles.icon}>
						<Tailwind size={40} />
					</div>

					<div className={styles.icon}>
						<Supabase size={40} />
					</div>

					<div className={styles.icon}>
						<Jest size={40} />
					</div>

					<div className={styles.icon}>
						<Git size={40} />
					</div>
				</div>
			</div>

			<div className={styles.mobileGrid}>
				<div className={`${styles.icon} ${styles.rightBorder}`}>
					<JavaScript size={40} />
				</div>

				<div className={`${styles.icon}`}>
					<TypeScript size={40} />
				</div>

				<div className={`${styles.icon} ${styles.rightBorder}`}>
					<Node size={40} />
				</div>

				<div className={`${styles.icon}`}>
					<React size={40} />
				</div>

				<div className={`${styles.icon} ${styles.rightBorder}`}>
					<Express size={40} />
				</div>

				<div className={`${styles.icon}`}>
					<Next size={40} />
				</div>

				<div className={`${styles.icon} ${styles.rightBorder}`}>
					<Postgre size={40} />
				</div>

				<div className={`${styles.icon}`}>
					<Prisma size={40} />
				</div>

				<div className={`${styles.icon} ${styles.rightBorder}`}>
					<Tailwind size={40} />
				</div>

				<div className={`${styles.icon}`}>
					<Supabase size={40} />
				</div>

				<div className={`${styles.icon} ${styles.rightBorder}`}>
					<Jest size={40} />
				</div>

				<div className={`${styles.icon}`}>
					<Git size={40} />
				</div>
			</div>
		</>
	);
}
