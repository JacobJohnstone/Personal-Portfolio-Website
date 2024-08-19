import { useState } from 'react';
//import './App.css';
import LandingPage from './components/landingPage/landingPage';
import Home from './components/homePage/Home';

function App() {

	const [display, setDisplay] = useState(false);
	
	function handleClick () {
		setDisplay(true);
	}

	return (
		<div>
			{display ? (
				<div>
					<Home />
				</div>
			) : (
				<div className='h-screen flex items-center justify-center text-white bg-gray-800'>
					<div className="absolute bg-yellow-900 rounded-full w-screen h-screen blur-3xl bg-opacity-20"></div>
					<div className="absolute bg-yellow-700 rounded-full w-1/2 h-3/5 blur-3xl bg-opacity-30 z-20"></div>
					<LandingPage clickFunc={handleClick}/>
				</div>
			)}
		</div>
	);
}

export default App;
