import { useAppSelector } from '../../../../app/hooks'
import { Arrows } from '../../const/const'
import { IArrowArr } from '../../const/types'
import { IPlaygroundSteps } from '../../store/types'
import stayles from '../RandomArrows/RandomKeys.module.css'

const RandomArrows: React.FC = () => {
	const state = useAppSelector(state => state.playground)

	const getStayleRandomKeys = (element: IPlaygroundSteps): string => {
		if (element.success === true) {
			return stayles.iconSuccess
		}
		if (element.success === false) {
			return stayles.iconUnSuccess
		}
		return stayles.icon
	}

	return (
		<div>
			{state.steps.map(element => (
				<span key={element.step} className={getStayleRandomKeys(element)}>
					{Arrows[element.currentValue as keyof IArrowArr]}
				</span>
			))}
		</div>
	)
}

export default RandomArrows
