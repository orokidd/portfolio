import styles from "../styles/Resume.module.css";
import { resume } from "../assets/resume";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Resume() {
	const experience = resume.experience;
	const education = resume.education;
	const skills = resume.skills;

	const resumeRef = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		gsap.from(resumeRef.current, {
			opacity: 0,
			y: -60,
			duration: 1,
			delay: 0.2,
			ease: "power3.out"
		})
	})

	return (
		<div className={styles.resume} ref={resumeRef}>
			<main className={styles.mainResume}>
				<header className={styles.header}>
					<p className={styles.fullname}>MUHAMMAD HUDAA SABRIE</p>
					<div className={styles.personal}>
						<p>hudasabrie@gmail.com</p>
						<p>(+62) 895339741303</p>
					</div>
				</header>

				<div className={styles.section}>
					<div className={styles.sectionName}>Experience</div>

					<div className="details">
						{experience.map((work) => (
							<div className={styles.work}>
								<div className={styles.workPlace}>
									<div className={styles.position}>
										<p className={styles.companyName}>{work.company}</p>
										<p className={styles.companyPosition}>{work.position}</p>
									</div>

									<div className={styles.date}>
										<p>{work.startDate}</p>
										<p>-</p>
										<p>{work.endDate}</p>
									</div>
								</div>

								<div className={styles.responsibilities}>
									<ul>
										{work.responsibilities.map((resp) => (
											<li>{resp}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className={styles.section}>
					<div className={styles.sectionName}>Education</div>

					<div className="details">
						{education.map((edu) => (
							<div className={styles.education}>
								<div className="eduPlace">
									<p className={styles.schoolName}>{edu.school}</p>
									<p>{edu.description}</p>
								</div>

								<div className={styles.date}>
									<p>{edu.startDate}</p>
									<p>-</p>
									<p>{edu.endDate}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className={styles.section}>
					<div className={styles.sectionName}>Technical</div>

					<div className={styles.skills}>
						<div className="languages">
							<p className={styles.skillsHeader}>Languages</p>
							{skills.languages.map((lang) => (
								<p>{lang}</p>
							))}
						</div>

						<div className="framewroks">
							<p className={styles.skillsHeader}>Frameworks</p>
							{skills.frameworks.map((framework) => (
								<p>{framework}</p>
							))}
						</div>

						<div className="database">
							<p className={styles.skillsHeader}>Database</p>
							{skills.database.map((db) => (
								<p>{db}</p>
							))}
						</div>

						<div className="others">
							<p className={styles.skillsHeader}>Others</p>
							{skills.others.map((other) => (
								<p>{other}</p>
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
