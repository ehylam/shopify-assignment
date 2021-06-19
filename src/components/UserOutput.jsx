import React from 'react';

const UserOutput = props => {
	return (
		<div className="user_output">
			<code>
				{props.output}
			</code>
		</div>
	 );
}

export default UserOutput;