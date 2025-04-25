import { useCallback, useEffect } from 'react'
import { Arrows } from '../const/const'
import { setEnteredValue } from '../store/slices'
import { useAppDispatch } from '../../../app/hooks'
import { useKeyPressedElement } from './hooks'
import styles from './keypressed.module.css'

export interface IKeyPressed {
	isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressed> = ({ isTimerActive }) => {
	const keyPressedElement = useKeyPressedElement()
	const dispatch = useAppDispatch()

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (Arrows.hasOwnProperty(e.key) && isTimerActive) {
				console.log(e.key)
				dispatch(setEnteredValue(e.key))
			}
		},
		[dispatch, isTimerActive]
	)

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [handleKeyDown])

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>KeyPressed</h3>
			<span className={styles.keyDisplay}>{keyPressedElement}</span>
		</div>
	)
}

export default KeyPressed
