import React, { useState } from 'react'
import '../styles/components/UserInput.css'

// TODO - Add SASS

const UserInput = props => {

	return (
		<div className="user_input">
			<textarea name="userinput" id="input" cols="30" rows="10" onChange={(e) => props.userInput(e.target.value)}>
			</textarea>
		</div>
	 );
}

export default UserInput;