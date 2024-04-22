import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import { ShowMeanProvider } from './contexts/ShowMeanContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ShowMeanProvider>
			<App />
		</ShowMeanProvider>
	</React.StrictMode>
);
