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
					<LandingPage clickFunc={handleClick}/>
				</div>
			)}
		</div>
	);
}

export default App;
