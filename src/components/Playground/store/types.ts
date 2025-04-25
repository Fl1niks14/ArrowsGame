export interface IPlaygroundSteps {
	currentValue: string | null
	enteredValue: string | null
	step: number
	success: boolean | null
}

export interface IPlaygroundState {
	currentStep: number
	steps: IPlaygroundSteps[]
	totalSuccessfal: number
	totalUnSuccessfal: number
}
