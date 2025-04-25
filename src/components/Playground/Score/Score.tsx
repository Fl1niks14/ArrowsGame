import { useAppSelector } from '../../../app/hooks'
import styles from './score.module.css'

const Score: React.FC = () => {
	const state = useAppSelector(state => state.playground)

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>🏆 Score</h3>
			<p className={`${styles.scoreItem} ${styles.success}`}>
				✅ Success: <strong>{state.totalSuccessfal}</strong>
			</p>
			<p className={`${styles.scoreItem} ${styles.error}`}>
				❌ Errors: <strong>{state.totalUnSuccessfal}</strong>
			</p>
		</div>
	)
}

export default Score
