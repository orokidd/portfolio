import styles from '../styles/Tech.module.css'
import { JavaScript, TypeScript, Node, React, Next, Express, Postgre, Prisma, Tailwind, Jest, Git } from './Icons';

export default function TechStack() {
	return (
        <>
        <h2 className={styles.heading}>TECHNOLOGIES</h2>

        <div className={styles.tech}>
            <div className={styles.topGrid}>
                <div className={styles.icon}>
                    <JavaScript size={60}/>
                </div>

                <div className={styles.icon}>
                    <TypeScript size={60}/>
                </div>

                <div className={styles.icon}>
                    <Node size={60}/>
                </div>

                <div className={styles.icon}>
                    <React size={60}/>
                </div>

                <div className={styles.icon}>
                    <Express size={60}/>
                </div>
            </div>

            <div className={styles.bottomGrid}>
                <div className={styles.icon}>
                    <Next size={40}/>
                </div>

                <div className={styles.icon}>
                    <Postgre size={40}/>
                </div>

                <div className={styles.icon}>
                    <Prisma size={40}/>
                </div>

                <div className={styles.icon}>
                    <Tailwind size={40}/>
                </div>

                <div className={styles.icon}>
                    <Jest size={40}/>
                </div>
                
                <div className={styles.icon}>
                    <Git size={40}/>
                </div>
            </div>
		</div>
        </>
	);
}
