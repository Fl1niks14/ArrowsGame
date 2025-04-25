import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import playgroundreducer from '../components/Playground/store/slices'
export const store = configureStore({
	reducer: {
		playground: playgroundreducer
	}
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
