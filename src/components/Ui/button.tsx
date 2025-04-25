import {
	Button as MaterialButton,
	ButtonProps as ButtonPropsMi
} from '@mui/material'
import stayle from './button.module.css'
import cn from 'classnames'

export interface IButton extends ButtonPropsMi {}

const Button: React.FC<IButton> = props => {
	const { children, className = '' } = props
	return (
		<MaterialButton
			variant='contained'
			size='small'
			{...props}
			className={cn(stayle.button, className)}
		>
			{children}
		</MaterialButton>
	)
}

export default Button
