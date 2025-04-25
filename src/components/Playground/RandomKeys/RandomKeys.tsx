import { useAppSelector } from '../../../app/hooks'
import RandomArrows from './RandomArrows/RandomArrows'
import WelcomeText from './WelcomeText/WelcomeText'
import styles from './random.module.css' // Імпортуємо стилі

export interface IRandomKeys {
	isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeys> = ({ isTimerActive }) => {
	const state = useAppSelector(state => state.playground)

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>RandomKeys</h3>

			{state.steps.length === 0 ? (
				<WelcomeText isTimerActive={isTimerActive} />
			) : (
				<div className={styles.randomArrowsWrapper}>
					<RandomArrows />
				</div>
			)}
		</div>
	)
}

export default RandomKeys
