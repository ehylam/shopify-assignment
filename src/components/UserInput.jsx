import React, { useState } from 'react'
import '../styles/components/UserInput.css'

// TODO - Add SASS

const UserInput = props => {

	return (
		<div className="user_input">
			<h2>Paste schema here (JSON only)</h2>
			<textarea name="userinput" id="input" onChange={(e) => props.userInput(e.target.value)}></textarea>
		</div>
	 );
}

export default UserInput;