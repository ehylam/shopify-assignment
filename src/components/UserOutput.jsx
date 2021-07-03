// if(section.type !== 'header' && section.type !== 'paragraph') {
// 	const liquidVar = section.id[0].toUpperCase() + section.id.substring(1);
// 	// String format is hmm..
// 	const output = {id:`setting.${section.id}`,settings:
// `
// {% if section.settings.${section.id} == blank %}
// {% assign settings${liquidVar} = block.settings.${section.id} %}
// {% else %}
// {% assign settings${liquidVar} = section.settings.${section.id} %}
// {% endif %}
// `}
// sectionArr.push(output);
// }

import React, { useState } from 'react';
import '../styles/components/UserOutput.css';


const handleSettings = settings => {
	const sectionsArr = [];
	const blocksArr = [];
	// Sections

	settings.settings.forEach(( section ) => {

		if(section.type !== 'header' && section.type !== 'paragraph') {
				const liquidVar = section.id[0].toUpperCase() + section.id.substring(1);
				const output = {id:`setting.${section.id}`,settings:
`
{% if section.settings.${section.id} == blank %}
 {% assign settings${liquidVar} = block.settings.${section.id} %}
{% else %}
 {% assign settings${liquidVar} = section.settings.${section.id} %}
{% endif %}
`};

			sectionsArr.push(output);
		}


	});
	settings.blocks.forEach(( blockArr ) => {

		blockArr.settings.forEach((block) => {
			const liquidVar = block.id[0].toUpperCase() + block.id.substring(1);
	// 		// String format is hmm..
			const output = {id:`setting.${block.id}`,settings:
`
{% if block.settings.${block.id} == blank %}
 {% assign settings${liquidVar} = section.settings.${block.id} %}
{% else %}
 {% assign settings${liquidVar} = block.settings.${block.id} %}
{% endif %}
`}

			blocksArr.push(output);
		});

	})

	const settingsArr = sectionsArr.concat(blocksArr);
	return settingsArr;
}


const handleStringOutput = (settings) => {
	const settingsItems = settings.map((setting) => {
		// console.log(setting.settings);
		return setting.settings;
	});


	return settingsItems.join('');
}

const UserOutput = props => {
	const [hasError, setHasError] = useState(false);
	let schema = {};
	let schemaSettings;
	let schemaStrings;


	if(props.output) {
		try {


			schema = JSON.parse(props.output)[0];
			// Sections
			schemaSettings = handleSettings(schema);

			schemaStrings = handleStringOutput(schemaSettings);
		} catch (e) {
			return false;

		}

	}




	return (
		<div className="user_output">
			<h2>Output (Liquid)</h2>
			{/* { hasError ? '<span>JSON error, please go to <a href="https://jsonformatter.curiousconcept.com/#"> to check your JSON format, it is still not working... uh oh..</span>' : ''} */}
			<textarea defaultValue={schemaStrings ? schemaStrings : ''}></textarea>
		</div>
	 );
}

export default UserOutput;

