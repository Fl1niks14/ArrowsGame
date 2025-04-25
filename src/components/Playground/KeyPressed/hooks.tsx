import { useAppSelector } from '../../../app/hooks'
import { Arrows } from '../const/const'
import { IArrowArr } from '../const/types'

export const useKeyPressedElement = (): string | undefined => {
	const state = useAppSelector(state => state.playground)
	if (state.steps.length) {
		const enteredValue = state.steps[state.currentStep - 1].enteredValue
		if (enteredValue) {
			return Arrows[enteredValue as keyof IArrowArr]
		}
		return '⏳'
	}
}
