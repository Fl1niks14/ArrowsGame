import { createSlice } from '@reduxjs/toolkit'
import { IPlaygroundState } from './types'
import { ArrowsArr } from '../const/const'
export const initialState: IPlaygroundState = {
	currentStep: 0,
	steps: [],
	totalSuccessfal: 0,
	totalUnSuccessfal: 0
}

export const PlaygroundSlices = createSlice({
	name: 'playground',
	initialState,
	reducers: {
		setCurrentStep: state => {
			state.currentStep += 1
		},
		setSteps: state => {
			const randomKey = Math.floor(Math.random() * ArrowsArr.length)
			state.steps.push({
				success: null,
				step: state.currentStep,
				currentValue: ArrowsArr[randomKey],
				enteredValue: null
			})
		},
		setEnteredValue: (state, action) => {
			if (state.steps.length) {
				const step = state.steps[state.currentStep - 1]
				const isSuccess = step.currentValue === action.payload

				if (step.enteredValue === null) {
					state.steps[state.currentStep - 1] = {
						...step,
						enteredValue: action.payload,
						success: isSuccess
					}
				}
				if (isSuccess) {
					state.totalSuccessfal += 1
				} else {
					state.totalUnSuccessfal += 1
					state.totalSuccessfal = 0
				}
			}
		},
		setUnSuccess: state => {
			if (state.steps.length) {
				const step = state.steps[state.currentStep - 1]
				if (step.enteredValue == null) {
					state.totalUnSuccessfal += 1
					state.steps[state.currentStep - 1] = {
						...step,
						success: false
					}
				}
			}
		},
		setResetStore: () => initialState
	}
})

export const {
	setCurrentStep,
	setSteps,
	setEnteredValue,
	setUnSuccess,
	setResetStore
} = PlaygroundSlices.actions
export default PlaygroundSlices.reducer
