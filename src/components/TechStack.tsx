import styles from "../styles/Tech.module.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { JavaScript, TypeScript, Node, React, Next, Express, Postgre, Prisma, Tailwind, Jest, Git, Supabase } from "./Icons";
import MobileTechStack from "./TechStackMobile";

const topGridIcons = [
	{ id: "js", svg: JavaScript, size: 60 },
	{ id: "ts", svg: TypeScript, size: 60 },
	{ id: "node", svg: Node, size: 60 },
	{ id: "react", svg: React, size: 60 },
	{ id: "express", svg: Express, size: 60 },
];

const bottomGridIcons = [
	{ id: "next", svg: Next, size: 40 },
	{ id: "postgre", svg: Postgre, size: 40 },
	{ id: "prisma", svg: Prisma, size: 40 },
	{ id: "tailwind", svg: Tailwind, size: 40 },
	{ id: "supabase", svg: Supabase, size: 40 },
	{ id: "jest", svg: Jest, size: 40 },
	{ id: "git", svg: Git, size: 40 },
];

export default function TechStack() {
	const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

	const gridRef = useRef<HTMLDivElement | null>(null);
	const bgRef = useRef<HTMLDivElement | null>(null);

	function mouseEnter(e: React.MouseEvent<HTMLDivElement>, iconId: string) {
		setHoveredIcon(iconId);

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

	return (
		<>
			<div className={styles.tech}>
				<div className={styles.hoverBg} ref={bgRef}></div>

				<div ref={gridRef}>
					<div className={styles.topGrid}>
						{topGridIcons.map((icon) => (
							<div key={icon.id} className={`${styles.icon} ${hoveredIcon === icon.id ? styles.hovered : ""}`} onMouseEnter={(e) => mouseEnter(e, icon.id)}>
								<icon.svg size={icon.size} />
							</div>
						))}
					</div>

					<div className={styles.bottomGrid}>
						{bottomGridIcons.map((icon) => (
							<div key={icon.id} className={`${styles.icon} ${hoveredIcon === icon.id ? styles.hovered : ""}`} onMouseEnter={(e) => mouseEnter(e, icon.id)}>
								<icon.svg size={icon.size} />
							</div>
						))}
					</div>
				</div>
			</div>

			<MobileTechStack />
		</>
	);
}
