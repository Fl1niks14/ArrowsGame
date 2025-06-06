import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
// import { StyledEngineProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <StyledEngineProvider injectFirst> */}
			<App />
			{/* </StyledEngineProvider> */}
		</Provider>
	</React.StrictMode>
)
