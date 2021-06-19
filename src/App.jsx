import React, { useState } from 'react'

const App = () => {
	const [userInput, setUserInput] = useState({});
	const handleInput = input => {
		console.log(input);
	}
	return (
		<div className="assignment">
			<textarea name="input" cols="30" rows="10" className="assignment__input" onChange={(e) => handleInput(e.target.value)}>
			</textarea>


		</div>
	)
}

export default App;