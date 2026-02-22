import styles from "../styles/Tech.module.css";
import { JavaScript, TypeScript, Node, React, Next, Express, Postgre, Prisma, Tailwind, Jest, Git, Supabase } from "./Icons";

const mobileIcons = [
	{ component: JavaScript, id: "js" },
	{ component: TypeScript, id: "ts" },
	{ component: Node, id: "node" },
	{ component: React, id: "react" },
	{ component: Express, id: "express" },
	{ component: Next, id: "next" },
	{ component: Postgre, id: "postgre" },
	{ component: Prisma, id: "prisma" },
	{ component: Tailwind, id: "tailwind" },
	{ component: Supabase, id: "supabase" },
	{ component: Jest, id: "jest" },
	{ component: Git, id: "git" },
];

export default function TechStack() {
	return (
		<div className={styles.mobileGrid}>
			{mobileIcons.map((icon, index) => (
				<div key={icon.id} className={`${styles.icon} ${index % 2 === 0 ? styles.rightBorder : ""}`}>
					<icon.component size={40} />
				</div>
			))}
		</div>
	);
}
