import styles from './welcome.module.css'

export interface IWelcomeText {
	isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeText> = ({ isTimerActive }) => {
	return (
		<span
			className={`${styles.text} ${
				isTimerActive ? styles.loading : styles.play
			}`}
		>
			{isTimerActive ? 'Loading...' : 'Play'}
		</span>
	)
}

export default WelcomeText
