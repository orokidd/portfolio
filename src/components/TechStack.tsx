import styles from "../styles/Tech.module.css";
import { useRef, useState } from "react";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { JavaScript, TypeScript, Node, React, Next, Express, Postgre, Prisma, Tailwind, Jest, Git, Supabase } from "./Icons";

export default function TechStack() {
	const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

	const gridRef = useRef<HTMLDivElement | null>(null);
	const bgRef = useRef<HTMLDivElement | null>(null);

	function mouseEnter(e: React.MouseEvent<HTMLDivElement>, iconId: string) {
		setHoveredIcon(iconId)

		const bg = bgRef.current;
		const container = gridRef.current;
		if (!bg || !container) return;

		const item = e.currentTarget;

		const itemBox = item.getBoundingClientRect();
		const containerBox = container.getBoundingClientRect();

		gsap.to(bg, {
			x: itemBox.left - containerBox.left,
			y: itemBox.top - containerBox.top,
			width: itemBox.width,
			height: itemBox.height,
			opacity: 1,
			duration: 0.4,
			ease: "power3.out",
		});
	}

	// function mouseLeave(e: React.MouseEvent<HTMLDivElement>) {
	// 	const bg = bgRef.current;
	// 	if (!bg) return;

	// 	// Optional: animate back to original position or hide
	// 	gsap.to(bg, {
	// 		opacity: 0,
	// 		duration: 0.6,
	// 		ease: "power2.out",
	// 	});
	// }

	return (
		<>
			<div className={styles.tech}>
				<div className={styles.hoverBg} ref={bgRef}></div>

				<div ref={gridRef}>
					<div className={styles.topGrid}>
						<div className={`${styles.icon} ${hoveredIcon === 'js' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "js")}>
							<JavaScript size={60} />
						</div>

						<div className={`${styles.icon} ${hoveredIcon === 'ts' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "ts")}>
							<TypeScript size={60} />
						</div>

						<div className={`${styles.icon} ${hoveredIcon === 'node' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "node")}>
							<Node size={60} />
						</div>

						<div className={`${styles.icon} ${hoveredIcon === 'react' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "react")}>
							<React size={60} />
						</div>

						<div className={`${styles.icon} ${hoveredIcon === 'express' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "express")}>
							<Express size={60} />
						</div>
					</div>

					<div className={styles.bottomGrid}>
						<div className={`${styles.icon} ${hoveredIcon === 'next' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "next")}>
							<Next size={40} />
						</div>

						<div className={`${styles.icon} ${hoveredIcon === 'postgre' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "postgre")}>
							<Postgre size={40} />
						</div>

						<div className={`${styles.icon} ${hoveredIcon === 'prisma' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "prisma")}>
							<Prisma size={40} />
						</div>

						<div className={`${styles.icon} ${hoveredIcon === 'tailwind' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "tailwind")}>
							<Tailwind size={40} />
						</div>

						<div className={`${styles.icon} ${hoveredIcon === 'supabase' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "supabase")}>
							<Supabase size={40} />
						</div>

						<div className={`${styles.icon} ${hoveredIcon === 'jest' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "jest")}>
							<Jest size={40} />
						</div>

						<div className={`${styles.icon} ${hoveredIcon === 'git' ? styles.hovered : ''}`} onMouseEnter={(e) => mouseEnter(e, "git")}>
							<Git size={40} />
						</div>
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
