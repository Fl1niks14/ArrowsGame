import { Button } from '@mui/material'
import { useAppDispatch } from '../../../app/hooks'
import { setResetStore } from '../store/slices'
import ResultMessage from './ResultMessage/ResultMessage'
import style from './Modal.module.css' // Імпортуємо стилі

export interface IModal {
	setisModal: React.Dispatch<React.SetStateAction<boolean>>
	isSaccessgame: boolean
}

const Modal: React.FC<IModal> = ({ setisModal, isSaccessgame }) => {
	const dispatch = useAppDispatch()
	const handleClose = () => {
		setisModal(false)
		dispatch(setResetStore())
	}

	return (
		<div className={style.modalOverlay}>
			<div className={style.modalContent}>
				<ResultMessage isSaccessgame={isSaccessgame} />
				<h3>{isSaccessgame ? 'Congratulations!' : 'Game Over'}</h3>
				<Button onClick={handleClose} className={style.button}>
					Start new game
				</Button>
			</div>
		</div>
	)
}

export default Modal
