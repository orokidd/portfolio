import styles from "../styles/Resume.module.css";
import { resume } from "../assets/resume";

export default function Resume() {
	const experience = resume.experience;
	const education = resume.education;
	const skills = resume.skills;

	return (
		<div className={styles.resume}>
			<header className={styles.header}>
				<p className={styles.fullname}>MUHAMMAD HUDAA SABRIE</p>
				<div className={styles.personal}>
					<p>hudaasabrie.vercel.app</p>
					<p>hudasabrie@gmail.com</p>
					<p>0895-3397-41303</p>
				</div>
			</header>

			<main className={styles.mainResume}>
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
