import React, { useState } from 'react';

const handleSections = sections => {
	const resultArr = [];
	sections.forEach(( setting ) => {
		if(setting.type !== 'header' && setting.type !== 'paragraph') {
			const liquidVar = setting.id[0].toUpperCase() + setting.id.substring(1);
			const output = {id: `setting.${setting.id}` ,settings: `
				{% if section.settings.${setting.id} == blank %}
					{% assign settings${liquidVar} = block.settings.${setting.id} %}
				{% else %}
					{% assign settings${liquidVar} = section.settings.${setting.id} %}
			`}
			resultArr.push(output);
		}

	});
	return resultArr;
}

const handleBlocks = blocks => {

}

const UserOutput = props => {
	// const [settings, setSettings] = useState([]);
	let schema = {};
	let schemaSections = [];
	let schemaBlocks = [];

	if(props.output) {
		try {
			schema = JSON.parse(props.output)[0];
			console.log(schema);

			// Sections
			if(schema.settings.length) {
				schemaSections = handleSections(schema.settings);
				console.log(schemaSections);
			}

			if(schema.blocks.length) {
				schemaBlocks = handleBlocks(schema.blocks);
			}

		} catch (e) {
				return false;
		}

	}

	const sectionItems = schemaSections.map((section) => {
		return section.settings;
	});


	return (
		<div className="user_output">
			<pre id="highlighting" aria-hidden="true">
				<code>
					{sectionItems ? sectionItems : 'No Settings'}
				</code>
			</pre>
		</div>
	 );
}

export default UserOutput;