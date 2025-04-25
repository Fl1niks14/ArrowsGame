import style from './ResultMessage.module.css'

export interface IResultMessage {
	isSaccessgame: boolean
}

const ResultMessage: React.FC<IResultMessage> = ({ isSaccessgame }) => {
	return (
		<div
			className={`${style.message} ${isSaccessgame ? style.win : style.lose}`}
		>
			{isSaccessgame ? <span>You Win!</span> : <span>You Lose!</span>}
		</div>
	)
}

export default ResultMessage
