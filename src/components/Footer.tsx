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
					<p className={styles.work}>Work</p>
					<p className={styles.lab}>Lab</p>
                    <p className={styles.email}>Email</p>
					<p className={styles.github}>Github</p>
					<p className={styles.insta}>Instagram</p>
                    <p className={styles.linkedIn}>LinkedIn</p>
			</div>
		</div>
	);
}
