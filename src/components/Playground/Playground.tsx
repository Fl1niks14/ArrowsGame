import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setCurrentStep, setSteps, setUnSuccess } from './store/slices'
import Controls from './Controls/Controls'
import { Interval_time } from './const/const'
import RandomKeys from './RandomKeys/RandomKeys'
import KeyPressed from './KeyPressed/KeyPressed'
import Score from './Score/Score'
import Modal from './Modal/Modal'
import { EndGameConditions } from './const/const'
import style from './Playgraund.module.css'

const Playground: React.FC = () => {
	const state = useAppSelector(state => state.playground)
	const dispatch = useAppDispatch()
	const [isModal, setIsModal] = useState<boolean>(false)
	const [isSaccessGame, setIsSaccessGame] = useState<boolean>(false)
	const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
	const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

	useEffect(() => {
		if (isTimerActive) {
			refreshIntervalId.current = setInterval(() => {
				dispatch(setUnSuccess())
				dispatch(setCurrentStep())
				dispatch(setSteps())
			}, Interval_time)
		} else {
			clearInterval(refreshIntervalId.current as number)
		}

		return () => {
			clearInterval(refreshIntervalId.current as number)
		}
	}, [isTimerActive, dispatch])

	useEffect(() => {
		const isSuccess = state.totalSuccessfal === EndGameConditions.SaccessCaunt
		const isUnSuccess =
			state.totalUnSuccessfal === EndGameConditions.UnSaccessCaunt

		if (isSuccess) {
			setIsSaccessGame(true)
		}

		if (isUnSuccess) {
			setIsSaccessGame(false)
		}

		if (isSuccess || isUnSuccess) {
			setIsModal(true)
			setIsTimerActive(false)
		}
	}, [state.totalSuccessfal, state.totalUnSuccessfal])

	return (
		<div className={style.playground_container}>
			<RandomKeys isTimerActive={isTimerActive} />
			<div className={style.current_step}>{state.currentStep}</div>
			<Controls
				isTimerActive={isTimerActive}
				setisTimerActive={setIsTimerActive}
			/>
			<KeyPressed isTimerActive={isTimerActive} />
			<Score />
			{isModal && (
				<Modal setisModal={setIsModal} isSaccessgame={isSaccessGame} />
			)}
		</div>
	)
}

export default Playground
