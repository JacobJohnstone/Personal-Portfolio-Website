import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/landingPage/landingPage';
import Home from './components/homePage/Home';

function App() {

	const [display, setDisplay] = useState(false);
	
	function handleClick () {
		setDisplay(true);
	}

	return (
		<div className="App">
			{display ? (
				<Home />
			) : (
				<LandingPage clickFunc={handleClick}/>
			)}
		</div>
	);
}

export default App;
