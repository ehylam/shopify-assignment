import React, { useState } from 'react';
import './styles/App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

const App = () => {
	const [userInput, setUserInput] = useState('');

	const handleInput = input => {
		// Process the JSON and then set state.
		setUserInput(input);
	}
	return (
		<div className="assignment">
			<h1>Very simple Shopify schema to liquid for multi-use module snippets</h1>
			<UserInput userInput={handleInput}/>
			<UserOutput output={userInput}/>
		</div>
	)
}

export default App;