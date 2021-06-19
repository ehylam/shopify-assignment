import React, { useState } from 'react'
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

const App = () => {
	const [userInput, setUserInput] = useState('');

	const handleInput = input => {
		// Process the JSON and then set state.
		setUserInput(input);
	}
	return (
		<div className="assignment">
			<UserInput userInput={handleInput}/>
			<UserOutput output={userInput}/>
		</div>
	)
}

export default App;