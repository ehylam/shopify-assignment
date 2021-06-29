import React, { useState } from 'react';
import '../styles/components/UserOutput.css';

const handleSettings = sections => {
	const resultArr = [];
	sections.forEach(( setting ) => {
		if(setting.type !== 'header' && setting.type !== 'paragraph') {
			const liquidVar = setting.id[0].toUpperCase() + setting.id.substring(1);
			// String format is hmm..
			const output = {id:`setting.${setting.id}`,settings:
`
{% if section.settings.${setting.id} == blank %}
	{% assign settings${liquidVar} = block.settings.${setting.id} %}
{% else %}
	{% assign settings${liquidVar} = section.settings.${setting.id} %}
{% endif %}
`}
			resultArr.push(output);
		}

	});
	return resultArr;
}

const UserOutput = props => {
	// const [hasError, sethasError] = useState(false);
	let schema = {};
	let schemaSections = [];
	let schemaBlocks = [];

	if(props.output) {
		try {
			// setHasError(false);
			schema = JSON.parse(props.output)[0];
			console.log(schema);

			// Sections
			if(schema.settings.length) {
				schemaSections = handleSettings(schema.settings);
				console.log(schemaSections);
			}

			if(schema.blocks.length) {
				// schemaBlocks = handleSettings(schema.blocks);
			}

		} catch (e) {
			return false;

		}

	}

	const sectionItems = schemaSections.map((section) => {
		return section.settings;
	});

	const sectionString = sectionItems.join('');


	return (
		<div className="user_output">
			<h2>Output (Liquid)</h2>
			{/* { hasError ? '<span>JSON error, please go to <a href="https://jsonformatter.curiousconcept.com/#"> to check your JSON format, it is still not working... uh oh..</span>' : ''} */}
			<textarea defaultValue={sectionString ? sectionString : ''}></textarea>
		</div>
	 );
}

export default UserOutput;

