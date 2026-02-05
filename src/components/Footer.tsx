import styles from "../styles/Footer.module.css";

export default function Footer() {
	return (
		// <div className="contact">
		// 	{/* <h2>Contact</h2> */}
		// 	<div className={styles.links}>
		// 		<div className={styles.top}>
		// 			<p className={styles.work}>Work</p>
		// 			<p className={styles.lab}>Lab</p>
		// 		</div>
		// 		<div className={styles.bottom}>
        //             <div className={styles.emailGithub}>
        //                 <p>Email</p>
		// 			    <p>Github</p>
        //             </div>
		// 			<p className={styles.insta}>Insta</p>
        //             <p className={styles.linkedIn}>LinkedIn</p>
		// 		</div>
		// 	</div>
		// </div>
        <div className={styles.contact}>
            <p className={styles.orokidd}>orokidd</p>
			<div className={styles.links}>
					<a href="#" className={styles.work}>Work</a>
					<a href="#" className={styles.lab}>Lab</a>
                    <a href="#" className={styles.email}>Email</a>
					<a href="https://github.com/orokidd" className={styles.github} target="_blank">Github</a>
					<a href="https://www.instagram.com/hudaahuu/" className={styles.insta} target="_blank">Instagram</a>
                    <a href="#" className={styles.linkedIn}>LinkedIn</a>
			</div>
		</div>
	);
}
