import { Button } from '../../Ui/index'
import style from './Controls.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

export interface IControlsProps {
	isTimerActive: boolean
	setisTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = ({
	isTimerActive,
	setisTimerActive
}) => {
	return (
		<div className={style.container}>
			<Button
				endIcon={<PlayArrowIcon />}
				onClick={() => setisTimerActive(true)}
				disabled={isTimerActive}
				className={style.button}
			>
				Play
			</Button>
			<Button
				endIcon={<PauseIcon />}
				onClick={() => setisTimerActive(false)}
				disabled={!isTimerActive}
				className={style.button}
			>
				Pause
			</Button>
		</div>
	)
}

export default Controls
