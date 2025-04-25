import { IArrowArr, IEndGameConditions } from './types'

export const Interval_time: number = 2000
export const Arrows: IArrowArr = {
	ArrowUp: '👆',
	ArrowDown: '👇',
	ArrowLeft: '👈',
	ArrowRight: '👉'
}

export const ArrowsArr = Object.keys(Arrows)
export const EndGameConditions: IEndGameConditions = {
	SaccessCaunt: 3,
	UnSaccessCaunt: 3
}
