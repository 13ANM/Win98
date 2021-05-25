import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bluescreen from './components/Bluescreen';
import Desktop from './components/Desktop';
import { AppProvider } from './context/AppContext';
import Blackscreen from './components/Blackscreen';

function App() {
	return (
		<div className='app'>
			<AppProvider>
				<Router>
					<Switch>
						<Route path='/404'>
							<Bluescreen />
						</Route>
						<Route exact path='/'>
							<Desktop />
						</Route>
						<Route path='/off'>
							<Blackscreen />
						</Route>
					</Switch>
				</Router>
			</AppProvider>
		</div>
	);
}

export default App;
